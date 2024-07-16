import { TFile, useNewDataModalStore } from "../../../../newDataModalStore";
import DateInput from "../components/DateInput/DateInput";
import InputLine from "../components/InputLine/InputLine";
import TextArea from "../../../../../../../../components/inputs/TextArea/TextArea";
import kutlay from "assets/kutlay.png";
const LetterHead = ({ handleInputChange, files, setFiles }: { handleInputChange: (e: any) => void; files: TFile; setFiles: (state: TFile) => void }) => {
  const { formData, setFormData } = useNewDataModalStore();

  const dateInput = (name: string) => <DateInput name={name} value={formData[name]} onChange={handleInputChange} />;
  const inputLine = (name: string, label: string, props?: { width?: number; style?: { [key: string]: any }; variant?: "free" | "border" | "dotted" }) => (
    <InputLine
      name={name}
      label={label}
      value={formData[name]}
      onChange={handleInputChange}
      width={props?.width || 100}
      style={props?.style}
      variant={props?.variant}
    />
  );
  const textArea = (name: string, height?: number) => <TextArea name={name} value={formData[name]} onChange={handleInputChange} height={height} />;
  return (
    <div style={{ position: "relative", height: "70vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <label>Tarih : </label>
          {dateInput("date")}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginRight: "4px" }}>Konu : </label> {inputLine("topic", "topic", { width: 100, variant: "dotted" })}
        </div>
        <div>{textArea("text-area", 250)}</div>
      </div>

      <div style={{ display: "flex", alignItems: "space-around", flexDirection: "column" }}>
        <div
          style={{
            width: "100px",
            height: "200px",
            position: "absolute",
            display: "flex",
            left: "-5%",
            bottom: "-4%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img style={{ height: "300px", marginLeft: "1.5rem" }} src={kutlay} alt="" />
        </div>
        <div style={{ display: "flex", width: "100%", justifyContent: "space-around", marginBottom: "10rem", fontSize: "12px" }}>
          <div style={{ height: "2rem" }}>
            Teslim Eden
            <br />
            {inputLine("teslimEden", "teslimEden")}
          </div>
          <div style={{ height: "2rem" }}>
            Teslim Alan
            <br />
            {inputLine("teslimAlan", "teslimEAlan")}
          </div>
        </div>
        <div style={{ width: "60%", fontSize: "10px", margin: "0 auto" }}>
          Adres : Prof Muammer Aksoy Sok. No Girne /KKTC Ofis Tel:0392-815 82 06 Fax:0392-815 44 03 Mobil Tel:0542-862 82 92 e-mail-kkutlay@hotmail.com
          web:-www.schindler.com
        </div>
      </div>
    </div>
  );
};
export default LetterHead;
