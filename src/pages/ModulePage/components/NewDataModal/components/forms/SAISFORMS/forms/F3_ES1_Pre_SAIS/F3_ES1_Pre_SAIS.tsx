import { TFile, useNewDataModalStore } from "../../../../../newDataModalStore";
import Radio from "../../components/Radio/Radio";
import Checkbox from "../../components/Checkbox/Checkbox";
import InputLine from "../../components/InputLine/InputLine";
import { useModulePageStore } from "../../../../../../../modulePageStore";
import { IoTriangleOutline } from "react-icons/io5";
import ReactDOMServer from "react-dom/server";
import { ReactNode } from "react";
import SelectField from "../../../../../../../../../components/inputs/SelectField/SelectField";

const F3_ES1_Pre_SAIS = ({ handleInputChange, files, setFiles }: { handleInputChange: (e: any) => void; files: TFile; setFiles: (state: TFile) => void }) => {
  function iconToSvgString(iconComponent: any) {
    return ReactDOMServer.renderToString(iconComponent);
  }
  const triangleSvgString = iconToSvgString(<IoTriangleOutline />);
  const { formData, setFormData } = useNewDataModalStore();

  const inputLine = (name: string, label: string, props?: { width?: number; style?: { [key: string]: any } }) => (
    <InputLine name={name} label={label} value={formData[name]} onChange={handleInputChange} width={props?.width || 100} style={props?.style} />
  );

  const radio = (
    name: string,
    props?: { style?: { [key: string]: any }; height: number; variant?: "square" | "circle" | "horizontal"; inputArray: string[] | ReactNode[] }
  ) => (
    <Radio
      name={name}
      value={formData[name]}
      onChange={handleInputChange}
      style={props?.style}
      variant={props?.variant}
      inputArray={props?.inputArray || []}
      height={props?.height || 50}
    />
  );

  const checkbox = (name: string, props?: { variant?: "rect"; style?: { [key: string]: any } }) => (
    <Checkbox name={name} value={formData[name]} onChange={handleInputChange} variant={props?.variant} style={props?.style} />
  );

  const selectField = (name: string, label: string, items: { _id: string; name: string }[]) => (
    <SelectField name={name} label={label} items={items} onChange={handleInputChange} defaultItem={formData[name]} primary={"name"} />
  );

  return <div>{inputLine("name", "label")}</div>;
};
export default F3_ES1_Pre_SAIS;
