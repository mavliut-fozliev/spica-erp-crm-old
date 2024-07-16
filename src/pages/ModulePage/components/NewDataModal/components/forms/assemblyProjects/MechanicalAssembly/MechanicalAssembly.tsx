import { TFile, useNewDataModalStore } from "../../../../newDataModalStore";
import mechanicImg from "../../../../../../../../assets/mekanik.png";
import InputLine from "../components/InputLine/InputLine";
import DateInput from "../components/DateInput/DateInput";
import { BsArrowRight } from "react-icons/bs";
import styles from "./MechanicalAssembly.module.scss";
const MechanicalAssembly = ({
  handleInputChange,
  files,
  setFiles,
}: {
  handleInputChange: (e: any) => void;
  files: TFile;
  setFiles: (state: TFile) => void;
}) => {
  const { formData, setFormData } = useNewDataModalStore();
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
  const dateInput = (name: string) => <DateInput name={name} value={formData[name]} onChange={handleInputChange} />;

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "10px" }}>
      <div style={{ marginLeft: "0rem" }}>
        <img src={mechanicImg} alt="" style={{ width: "100%" }} />
      </div>
      <div>
        <h3 style={{ background: "lightgray", marginLeft: "-5px" }}>ASANSÖR GEÇİCİ TESLİM TUTANAĞI</h3>
      </div>
      <div style={{ marginTop: "1rem", marginBottom: "1rem", marginLeft: "-5px", width: "100%", borderBottom: "1px solid lightgray" }}>KK-F-MD-04/1008</div>
      <div className="container">
        <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
          {/* first row */}
          <div className={styles["row-container"]}>
            <div className={styles["header"]} style={{ marginRight: "2rem" }}>
              Asansörün Tanımı
            </div>
            <div className={styles["info"]}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>SCHINDLER</div>
                <div> 3300</div>
                <div style={{ width: "50%" }}>{inputLine("kg", "kg")} </div>
                <div>kg</div>
                <span>(</span>
                <div style={{ display: "flex", width: "40%" }}>{inputLine("kisi", "kisi")}</div>
                <div>Kişi)</div>
                <div>{inputLine("durak", "durak")}</div>
                {/* <span>s </span> */}
                <span> Duraklı</span>
                <span>,1. </span>
                <span>Giriş-</span>
                <span>Yolcu </span>
              </div>
              <div style={{ display: "" }}>Asansörü</div>
            </div>
          </div>
          {/* first row end*/}
          {/* second row */}
          <div className={styles["row-container"]}>
            <div className={styles["header"]} style={{ marginRight: "2rem", height: "25%" }}>
              Sözleşme Sahibi Bilgisi
            </div>
            <div className={styles["info"]}>
              <div style={{ display: "flex", width: "70%", flexDirection: "column" }}>
                <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                  <span>İsim:</span> {inputLine("isim", "isim", { width: 100 })}
                </div>
                <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                  <span>Adres:</span> {inputLine("adres1", "adres1", { width: 100 })} <span style={{ marginLeft: "1rem" }}> /K.K.T.C</span>
                </div>
              </div>
            </div>
          </div>
          {/* second row end */}
          {/* third row */}
          <div className={styles["row-container"]}>
            <div className={styles["header"]} style={{ marginRight: "2rem", height: "25%", textAlign: "center" }}>
              Montaj Yapan
            </div>
            <div className={styles["info"]}>
              <div style={{ display: "flex", width: "100%" }}>İsim: K.KUTLAY MÜH. ve İNŞ. LTD.</div>
              <div style={{ display: "flex", width: "100%" }}>Adres: Tarık Zafer Tunaya Sok. No: 3 Girne/KKTC</div>
            </div>
          </div>
          {/* third row end */}
          {/* fourth row*/}
          <div className={styles["row-container"]}>
            <div className={styles["header"]} style={{ marginRight: "2rem", height: "25%", textAlign: "center" }}>
              Asansörün Kimliği
            </div>
            <div className={styles["info"]}>
              <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                <span>Asansör no:</span> {inputLine("asansör", "asansör", { width: 100 })}
              </div>
              <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                <span>Tesisatin yeri:</span> {inputLine("tesisat", "tesisat", { width: 100 })}
              </div>
              <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                <span>Adres:</span> {inputLine("adres", "adres", { width: 100 })} <span style={{ marginLeft: "1rem" }}> /K.K.T.C</span>
              </div>
            </div>
          </div>
          {/* fourth row end*/}
          {/* fifth row */}
          <div className={styles["row-container"]}>
            <div className={styles["header"]} style={{ marginRight: "2rem", height: "25%", textAlign: "left" }}>
              Yapılan İşin Kapsamı
            </div>
            <div className={styles["info"]}>
              Yukarıda tesisat numarası ve bulunduğu yerin adresi belirtilen asansörün mekanik montajı K.KUTLAY MÜHENDİSLİK LTD. tarafından tamamlanmıştır.
              Asansörle ilgili inşaat ve diğer işlerin tamamlanabilmesi için asansörün ve kat kapıları müşteriye tamamlanmış ve hasarsız şekide{" "}
              <div style={{ display: "inline-block" }}>{dateInput("date")}</div>
              tarihinde teslim edilmiştir. Asansörün tam olarak devreye alınabilmesi için binanın tüm inşaat, elektrik ve temizlik işlerinin tamamlanması
              gerekmektedir. Bu işlerin tamamlandığı bilgisinin verilmesinden sonra şirketin iş programına göre devreye alma işlemlerine başlanacaktır. İnşaat
              işlerinin tamamlanması esnasında aşağıdaki notlar kısmındaki noktalara dikkat edilmesi gerekir. Yapılacak işler ile ilgili K.KUTLAY MÜH.LTD. ile
              görüşülmelidir. Asansörler ile ilgili işlerde istenildiğinde en kısa sürede firmaya yardım edilecek ve bilgi verilecektir.
            </div>
          </div>
          {/* fifth row end */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles["header"]}>Notlar:</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginLeft: "1rem" }}>
              {/* f */}
              <div style={{ display: "flex" }}>
                <div className={styles["arrow"]}></div>
                <div>Zemin döşemeleri mevcut kapı eşiklerine göre yapılmalıdır. Zemin kaplamasına göre asansör eşiğinden başlanmasını tavsiye ederiz.</div>
              </div>
              {/* f */}
              {/* f */}
              <div style={{ display: "flex" }}>
                <div className={styles["arrow"]}></div>
                Asansör eşikleri doldurulurken kuyuya harç, su vb. malzemelerin gitmemesine dikkat edilmelidir. (Altında kapı mekanizması ve motoru vardır.)
              </div>
              {/* f */}
              {/* f */}
              <div style={{ display: "flex" }}>
                <div className={styles["arrow"]}></div>
                Kapı etrafının mermer yapılması esnasında kapılara ve eşiklere kesinlikle yapıştırıcı kimyasal gelmemelidir. Aksi takdirde çıkartması çok zordur
                leke ve çizik bırakır.
              </div>
              {/* f */}
              {/* f */}
              <div style={{ display: "flex" }}>
                <div className={styles["arrow"]}></div>
                Kapı kenarları kapatılırken boardex tutturmak için profil kaynaklanması gerekirse bu profil kesinlikle asansör aksamları üzerine kaynaklanamaz.
              </div>
              {/* f */}
              {/* f */}
              <div style={{ display: "flex" }}>
                <div className={styles["arrow"]}></div>
                Kuyu havalandırması panjuru mutlaka takılmalıdır aksi takdirde kabin üzerindeki elektronik kartlara su girip hasar verebilir.
              </div>
              {/* f */}
              {/* f */}
              <div style={{ display: "flex" }}>
                <div className={styles["arrow"]}></div>
                Son katın üzerinde kapatılması gereken bir yer varsa mutlaka kapatılmalı ve kapatma esnasında asansör üzerine herhangi bir madde veya sıvı
                düşürülmememlidir. Aksi takdirde kabin üzerindeki elektronik kartlara hasar verilebilir.
              </div>
              {/* f */}
              {/* f */}
              <div style={{ display: "flex" }}>
                <div className={styles["arrow"]}></div>
                Bina temizliği yapılırken kuyulara su veya sıvı gitmemelidir.
              </div>
              {/* f */}
            </div>
          </div>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-around", marginBottom: "3rem", fontSize: "12px" }}>
            <div style={{ height: "2rem" }}>
              <span style={{ marginLeft: "1.5rem" }}>Teslim Eden</span>
              <br />
              {inputLine("teslimEden", "teslimEden")}
            </div>
            <div style={{ height: "2rem" }}>
              <span style={{ marginLeft: "1.5rem" }}>Teslim Alan</span>
              <br />
              {inputLine("teslimAlan", "teslimEAlan")}
            </div>
          </div>
          <div style={{ marginBottom: "4px" }}>K.KUTLAY MÜH.ve İNŞ. LTD.</div>
          <div style={{ width: "60%", fontSize: "10px", margin: "0 auto" }}>
            Adres : Prof Muammer Aksoy Sok. No Girne /KKTC Ofis Tel:0392-815 82 06 Fax:0392-815 44 03 Mobil Tel:0542-862 82 92
            <div>
              e-mail
              <a href=""> kkutlay@hotmail.com</a>
            </div>
            <div>
              web
              <a href="www.schindler.com"> www.schindler.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MechanicalAssembly;
