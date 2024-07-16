import React from "react";
import TextArea from "components/inputs/TextArea/TextArea";

export default function InputLine({
  name,
  value,
  onChange,
  style,
  disabled,
}: {
  name: string;
  value: string;
  onChange: (Event: any) => void;
  style?: { [key: string]: any };
  disabled?: boolean;
}) {
  return (
    <div style={style}>
      <TextArea name={name} value={value || ""} onChange={onChange} height={120} />
    </div>
  );
}
