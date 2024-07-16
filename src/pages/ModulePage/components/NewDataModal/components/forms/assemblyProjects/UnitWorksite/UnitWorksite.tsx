import { TFile, useNewDataModalStore } from "../../../../newDataModalStore";
import InputLine from "../components/InputLine/InputLine";
import schindler from "../../../../../../../../assets/schindler-logo.png";
import DateInput from "../components/DateInput/DateInput";
const UnitWorksite = ({ handleInputChange, files, setFiles }: { handleInputChange: (e: any) => void; files: TFile; setFiles: (state: TFile) => void }) => {
  const { formData, setFormData } = useNewDataModalStore();

  const inputLine = (name: string, props?: { width?: number; style?: { [key: string]: any }; variant?: "free" | "border" | "dotted" }) => (
    <InputLine name={name} value={formData[name]} onChange={handleInputChange} width={props?.width || 100} style={props?.style} variant={props?.variant} />
  );
  const dateInput = (name: string) => <DateInput name={name} value={formData[name]} onChange={handleInputChange} />;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
        <img src={schindler} alt="" style={{ width: "10%", height: "10%" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%", alignItems: "center", marginBottom: "1rem", flexDirection: "column" }}>
        <h5>ASANSÖR MALZEMESİ ŞANTİYE</h5>
        <h5>TESLİM TUTANAĞI</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>Firma: {inputLine("firm", { width: 100 })}</div>
        <div style={{ display: "flex", alignItems: "center" }}>Sorumlu: {inputLine("Sorumlu:", { style: { display: "flex", alignItems: "center" } })}</div>
        <div style={{ display: "flex", alignItems: "center" }}>Görevi: {inputLine("Gorevi:", { style: { display: "flex", alignItems: "center" } })}</div>
        <div style={{ display: "flex", alignItems: "center" }}>Proje Adı: {inputLine("Proje Adi:", { style: { display: "flex", alignItems: "center" } })}</div>
        <div style={{ display: "flex", alignItems: "center" }}>Bina Adı: {inputLine("Bina Adi:", { style: { display: "flex", alignItems: "center" } })}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          Proje Adresi: {inputLine("Proje Adresi:", { style: { display: "flex", alignItems: "center" } })}
        </div>
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          Teslim Edilen Malzeme:
          {inputLine("Teslim Edilen Malzeme:", {
            style: { display: "flex", alignItems: "center" },
          })}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          Asansör Tesisat No:
          {inputLine("Asansor Tesisat No:", { style: { display: "flex", alignItems: "center" } })}
        </div>
      </div>
      <div style={{ marginTop: "5rem", fontSize: "12px" }}>
        Yukarıda proje adı ve tesisat numaraları verilen asansörlerin {inputLine("", { style: { display: "inline-block", width: 50 } })} koliden oluşan
        malzemeleri <div style={{ display: "inline-block" }}>{dateInput("date")}</div> tarihinde 'packing list' ile birlikte şantiyeye eksiksiz ve hiçbir kolide
        hasar olmaksızın kontrol edilip sayılarak teslim edilmiştir.
      </div>
      <div style={{ marginTop: "4rem", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <div>Teslim Eden{inputLine("Teslim Eden", { style: { width: 100 } })}</div>
        <div>Teslim Alan{inputLine("Teslim Alan", { style: { width: 100 } })}</div>
      </div>
    </>
  );
};
export default UnitWorksite;
