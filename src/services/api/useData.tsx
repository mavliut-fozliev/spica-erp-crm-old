import React from "react";
import * as Bucket from "@spica-devkit/bucket";
import { TBucket, TDocument, obj } from "types/types";
import useErrorHandler from "./useErrorHandler";

function transformObject(
  obj: { [key: string]: any },
  type: "insert" | "patch" = "insert"
): {
  [key: string]: any;
} {
  function transformValue(value: any): any {
    if (Array.isArray(value)) {
      const transformedArray = value.map(transformValue);

      return transformedArray.filter((el: any) => el !== undefined && (typeof el !== "object" || Object.values(el).some((v: any) => v !== undefined)));
    } else if (typeof value === "object" && value !== null) {
      if (value._id) {
        return value._id;
      }

      const transformedObject = transformObject(value);

      return Object.values(transformedObject).some((v: any) => v !== undefined) ? transformedObject : undefined;
    } else if (value === "") {
      if (type === "patch") {
        return "";
      } else {
        return undefined;
      }
    } else if (typeof value === "number" && isNaN(value)) {
      if (type === "patch") {
        return 0;
      } else {
        return undefined;
      }
    } else {
      return value;
    }
  }

  const transformedObject: {
    [key: string]: any;
  } = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const transformedValue = transformValue(obj[key]);

      if (transformedValue !== undefined) {
        transformedObject[key] = transformedValue;
      }
    }
  }

  const { id: omitted, ...ommitedData } = transformedObject;
  return ommitedData;
}

export default function useData() {
  const withErrorHandler = useErrorHandler();

  const jwt = localStorage.getItem("token") || "";

  Bucket.initialize({
    identity: jwt,
    publicUrl: process.env.REACT_APP_API_URL,
  });

  const getBucket = async (bucketId: string): Promise<TBucket> => {
    //@ts-ignore
    return await Bucket.get(bucketId);
  };
  const getBucketAll = async (): Promise<TBucket[]> => {
    //@ts-ignore
    return await Bucket.getAll();
  };
  const insertBucket = async (bucket: TBucket) => {
    //@ts-ignore
    return await Bucket.insert(bucket);
  };

  const getBucketData = async (bucketId: string, dataId: string): Promise<TDocument> => {
    return await Bucket.data.get(bucketId, dataId, {
      queryParams: {
        relation: true,
      },
    });
  };

  const getBucketDataAll = async (bucketId: string, params?: { additionalQueryParams?: object; additionalFilter?: object }): Promise<TDocument[]> => {
    return await Bucket.data.getAll(bucketId, {
      queryParams: {
        relation: true,
        filter: params?.additionalFilter || {},
        // example: additionalFilter: { prop1: { $eq: value }, prop2: { $eq: value } }  ($and)
        ...params?.additionalQueryParams, // example: additionalQueryParams: {limit : 10}
      },
    });
  };

  const insertBucketData = async (bucketId: string, newData: obj): Promise<obj> => {
    const res: obj = await Bucket.data.insert(bucketId, transformObject(newData));
    console.log("insert complete: ", res);
    return res;
  };

  const patchBucketData = async (bucketId: string, dataId: string, newData: obj): Promise<obj> => {
    const res: obj = await Bucket.data.patch(bucketId, dataId, transformObject(newData, "patch"));
    console.log("update complete: ", res);
    return res;
  };

  const softDeleteBucketData = async (bucketId: string, dataId: string): Promise<obj> => {
    const res: obj = await Bucket.data.patch(bucketId, dataId, { status: "deleted" });
    console.log("soft delete complete: ", res);
    return res;
  };

  return {
    getBucket: withErrorHandler(getBucket),
    getBucketAll: withErrorHandler(getBucketAll),
    insertBucket: withErrorHandler(insertBucket),
    getBucketData: withErrorHandler(getBucketData),
    getBucketDataAll: withErrorHandler(getBucketDataAll),
    insertBucketData: withErrorHandler(insertBucketData),
    patchBucketData: withErrorHandler(patchBucketData),
    softDeleteBucketData: withErrorHandler(softDeleteBucketData),
  };
}
