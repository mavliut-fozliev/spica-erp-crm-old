import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GridColumnMenu, GridColumnMenuItemProps, GridColumnMenuProps } from "@mui/x-data-grid";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { usePageStore } from "../../../../../../../../../store/pageStore";
import { TlocalPages } from "../../../../../../../types";
import { useInstantStore } from "../../../../../../../../../store/instantStore";

function MoveButtons(props: GridColumnMenuItemProps) {
  const { moveRightHandler, moveLeftHandler, moveLefttValue, moveRightValue } = props;
  return (
    <>
      <MenuItem onClick={moveRightHandler}>
        <ListItemIcon>
          <ArrowForwardIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{moveRightValue}</ListItemText>
      </MenuItem>
      <MenuItem onClick={moveLeftHandler}>
        <ListItemIcon>
          <ArrowBackIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>{moveLefttValue}</ListItemText>
      </MenuItem>
    </>
  );
}

export default function CustomColumnMenu(props: GridColumnMenuProps, bucketId: string) {
  const pageStore = usePageStore();
  const instantStore = useInstantStore();

  const handleMove = (direction: "right" | "left", props: any) => {
    const fieldName = props.colDef.field;

    if (!localStorage.getItem("localPages")) {
      let localPages: TlocalPages = {};
      pageStore.config.Pages.forEach((page) => {
        localPages[page._id] = { field_features: page.field_features };
      });
      localStorage.setItem("localPages", JSON.stringify(localPages));
    }

    const localPages: TlocalPages = JSON.parse(localStorage.getItem("localPages") ?? "{}");
    const fieldFeatures = localPages[bucketId]?.field_features || [];

    const currentFieldFeature = fieldFeatures.find((f: any) => f.field_name === fieldName);

    const findNextField = (currentField: any) => {
      let nextField = fieldFeatures.find((f: any) => f.order === currentField.order + 1);

      while (nextField && (nextField.hide_from_table || nextField.hide)) {
        const order = nextField.order;
        nextField = fieldFeatures.find((f: any) => f.order === order + 1);
      }

      return nextField !== undefined ? nextField : undefined;
    };

    const findPreviousField = (currentField: any) => {
      let previousField = fieldFeatures.find((f: any) => f.order === currentField.order - 1);

      while (previousField && (previousField.hide_from_table || previousField.hide)) {
        const order = previousField.order;
        previousField = fieldFeatures.find((f: any) => f.order === order - 1);
      }

      return previousField !== undefined ? previousField : undefined;
    };

    if (currentFieldFeature) {
      const nextFieldFeature = findNextField(currentFieldFeature);
      const prevFieldFeature = findPreviousField(currentFieldFeature);

      let newFieldFeatures = fieldFeatures;

      if (direction === "right" && nextFieldFeature) {
        newFieldFeatures = fieldFeatures.map((f: any) =>
          f.field_name === currentFieldFeature.field_name
            ? { ...f, order: nextFieldFeature.order }
            : f.field_name === nextFieldFeature.field_name
            ? { ...f, order: currentFieldFeature.order }
            : f
        );
      } else if (direction === "left" && prevFieldFeature) {
        newFieldFeatures = fieldFeatures.map((f: any) =>
          f.field_name === currentFieldFeature.field_name
            ? { ...f, order: prevFieldFeature.order }
            : f.field_name === prevFieldFeature.field_name
            ? { ...f, order: currentFieldFeature.order }
            : f
        );
      }

      if (newFieldFeatures !== fieldFeatures) {
        let localPages: TlocalPages = JSON.parse(localStorage.getItem("localPages") ?? "{}");
        if (localPages[bucketId]) {
          localPages[bucketId] = {
            field_features: newFieldFeatures,
          };
        }

        localStorage.setItem("localPages", JSON.stringify(localPages));
        instantStore.setIsLoading(true);
        instantStore.setIsLoading(false);
      }
    }
  };

  return (
    <GridColumnMenu
      {...props}
      slots={{
        MoveButtons,
        columnMenuColumnsItem: null,
      }}
      slotProps={{
        MoveButtons: {
          displayOrder: 15,
          moveRightValue: "Kaydır - Sağa",
          moveLefttValue: "Kaydır - Sola",
          moveRightHandler: () => handleMove("right", props),
          moveLeftHandler: () => handleMove("left", props),
        },
      }}
    />
  );
}
