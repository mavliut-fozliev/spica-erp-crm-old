import Checkbox from "./Checkbox/Checkbox";
import DoubleCheckbox from "./DoubleCheckbox/DoubleCheckbox";
import InputLine from "./InputLine/InputLine";
import PhotoInput from "../general/PhotoInput/PhotoInput";
import Radio from "./Radio/Radio";
import styles from "./SafetyWalk.module.scss";
import Slider from "./Slider/Slider";
import logo from "assets/schindler-logo.png";
import Star from "./Star/Star";
import Square from "./Square/Square";
import TextRadio from "./TextRadio/TextRadio";
import { TFile, useNewDataModalStore } from "../../../newDataModalStore";
import FillBox from "./FillBox/FillBox";

export default function SafetyWalk({
  handleInputChange,
  files,
  setFiles,
}: {
  handleInputChange: (e: any) => void;
  files: TFile;
  setFiles: (state: TFile) => void;
}) {
  const { formData, setFormData } = useNewDataModalStore();

  const checkbox = (name: string, props?: { variant?: "smallRect" | "largeRect" | "smallCircle" | "largeCircle"; style?: { [key: string]: any } }) => (
    <Checkbox name={name} value={formData[name]} onChange={handleInputChange} variant={props?.variant} style={props?.style} />
  );

  const inputLine = (name: string, props?: { width?: number; variant?: "straight" | "doted" | "frame"; style?: { [key: string]: any } }) => (
    <InputLine name={name} value={formData[name]} onChange={handleInputChange} width={props?.width || 100} variant={props?.variant} style={props?.style} />
  );
  const doubleCheckbox = (name: string, props?: { variant?: "rect" | "textUp" | "noText" | "circle"; style?: { [key: string]: any } }) => (
    <DoubleCheckbox name={name} value={formData[name]} onChange={handleInputChange} variant={props?.variant} style={props?.style} />
  );
  const radio = (name: string, props?: { style?: { [key: string]: any } }) => (
    <Radio name={name} value={formData[name]} onChange={handleInputChange} style={props?.style} />
  );
  const slider = (name: string, props?: { style?: { [key: string]: any } }) => (
    <Slider name={name} value={formData[name]} onChange={handleInputChange} style={props?.style} />
  );

  // const photo = (name: string, props?: { style?: { [key: string]: any } }) => (
  //   <PhotoInput
  //     name={name}
  //     files={files ? files[name]?.content || [] : []}
  //     transferFiles={(name, selectedFiles) => {
  //       if (setFiles) {
  //         setFiles({
  //           ...files,
  //           [name]: { content: selectedFiles },
  //         });
  //       }
  //     }}
  //     fileUrlArray={formData[name]}
  //     fileExist={Boolean(
  //       (Array.isArray(formData[name]) ? formData[name] : [])?.reduce((acc: number, object: any) => {
  //         if (!object["deleted"]) {
  //           return acc + 1;
  //         }
  //         return acc;
  //       }, 0)
  //     )}
  //     deleteFile={() => {
  //       setFormData({
  //         ...formData,
  //         [name]: formData[name].map((object: any) => ({
  //           ...object,
  //           deleted: true,
  //         })),
  //       });
  //     }}
  //     style={props?.style}
  //   />
  // );
  const textRadio = (name: string, props?: { style?: { [key: string]: any } }) => (
    <TextRadio name={name} value={formData[name]} onChange={handleInputChange} style={props?.style} />
  );

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <div className={styles["header"]}>
            <div className={styles["title"]}>Safety Walk -</div>
            <div className={styles["subtitle"]}>Saha</div>
          </div>
          <div className={styles["title-text"]}>Çalışan Güvenliği Davranış Gözlemi (V.1.1-2015)</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Star />
            <div className={styles["date"]} style={{ marginLeft: "5px" }}>
              Tarih :
            </div>
            {inputLine("", { variant: "straight", width: 30, style: { marginLeft: "10px" } })}
            <div className={styles["slash"]}>/</div>
            {inputLine("", { variant: "straight", width: 30 })}
            <div className={styles["slash"]}>/</div>
            {inputLine("", { variant: "straight", width: 45 })}
          </div>
          <div style={{ display: "flex", marginLeft: "63px" }}>
            <div className={styles["date-text"]}>gün</div>
            <div className={styles["date-text"]} style={{ marginRight: "40px" }}>
              ay
            </div>
            <div className={styles["date-text"]}>yıl</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Star />
            <div className={styles["date-2"]} style={{ marginLeft: "5px" }}>
              Gözlemci Adı:
            </div>
            {inputLine("", { variant: "straight", width: 150, style: { marginLeft: "10px" } })}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Star />
            <div className={styles["date-3"]} style={{ marginLeft: "5px" }}>
              Çalışan Schindler Çalışanı mı?
            </div>
            {doubleCheckbox("", { variant: "rect", style: { marginTop: "10px" } })}
          </div>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <div className={styles["yapilan-is-text"]}>
              <Star />
              Yapılan İş:
            </div>
            <div style={{ marginLeft: "0px" }}>
              <img width={95} src={logo} />
            </div>
          </div>
          <div className={styles["ul-text"]}>
            <div style={{ display: "flex" }}>
              <ul className={styles["ul-text-2"]}>
                <div>
                  <li>Adı:</li>
                  {inputLine("", { variant: "straight", width: 150, style: { marginLeft: "30px", marginTop: "-22px" } })}
                </div>
                <div>
                  <li>Firma (Taşeron ise gerekli):</li>
                  {inputLine("", { variant: "straight", width: 20, style: { marginLeft: "160px", marginTop: "-22px" } })}
                </div>
                <div>
                  <li>Vardiya:</li>
                  {inputLine("", { variant: "straight", width: 130, style: { marginLeft: "50px", marginTop: "-22px" } })}
                </div>
                <li>Safety Walk:</li>
              </ul>
            </div>
          </div>
          <div className={styles["checkbox-text"]}>
            <div style={{ display: "flex", marginLeft: "60px", marginTop: "-120px" }}>
              {checkbox("")}
              <div className={styles["montaj-text"]}>
                <div>Yeni Montaj</div>
              </div>
            </div>
            <div style={{ display: "flex", marginLeft: "60px" }}>
              {checkbox("")}
              <div className={styles["servis-text"]}>
                <div>Servis / Bakım</div>
              </div>
            </div>
            <div style={{ display: "flex", marginLeft: "60px" }}>
              {checkbox("")}
              <div className={styles["tamirat-text"]}>
                <div>Tamirat</div>
              </div>
            </div>
            <div style={{ display: "flex", marginLeft: "60px" }}>
              {checkbox("")}
              <div className={styles["modernizasyon-text"]}>
                <div>Modernizasyon</div>
              </div>
            </div>
            <div style={{ display: "flex", marginLeft: "60px" }}>
              {checkbox("")}
              <div className={styles["servis-text"]}>
                <div>Fabrika</div>
              </div>
            </div>
            <div style={{ display: "flex", marginLeft: "60px" }}>
              {checkbox("")}
              <div className={styles["diğer-text"]}>
                <div>Diğer</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "25px", marginRight: "3px" }}>
              <Star />
            </div>
            <div className={styles["saha-adres"]} style={{ marginRight: "25px" }}>
              Saha Adı / Adresi:
            </div>
            {inputLine("", { variant: "straight", width: 130, style: { marginLeft: "-20px" } })}
          </div>
        </div>
      </div>
      <div className={styles["box"]}>
        <div>
          <div className={styles["box-text"]}>ÇALIŞAN ...</div>
        </div>
      </div>

      <div className={styles["geri-bildirim"]}>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <Star />
          <div className={styles["geri-bildirim-text"]}>Olumlu Geri Bildirim</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles["date-4"]} style={{ marginLeft: "20px", marginTop: "5px" }}>
          Olumlu geri bildirimde bulundunuz mu?
        </div>
        {doubleCheckbox("", { variant: "rect", style: { marginTop: "8px" } })}
      </div>
      <div className={styles["ul-text-3"]}>
        <div style={{ display: "flex" }}>
          <ul className={styles["ul-text-4"]}>
            <li>Düşme korunma uygulamaları tamamen doğru</li>
            <li>Kilitleme-Etiketleme/Enerji izolasyonu uygulandı ve doğrulandı</li>
            <li>Sertifikalı şöntler doğru kullanıldı</li>
            <li>Güvenli Kuyu Erişimi(Kabin Üstü-Kuyu Dibi) uygulandı</li>
            <li>Kaldırma-Bağlama ekipman prosesi uygulandı</li>
            <li>Gerekli tüm kişisel koruyucu ekipmanlar kullanıldı ve bunlar iyi durumdaydı</li>
            <li>Tüm el aletleri ve elektrikli el aletleri iyi durumdaydı</li>
            <li>Güvenli elle taşıma yöntemleri kullanıldı</li>
            <li>Çalışma alanı/tertip düzen güvenli ve iyi organize edilmişti</li>
            <li>Diğer</li>
            {inputLine("", { variant: "doted", width: 130, style: { marginLeft: "27px", marginTop: "-20px" } })}
          </ul>
        </div>
      </div>
      <div className={styles["checkbox-text"]}>
        <div style={{ display: "flex", marginLeft: "470px", marginTop: "-164px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["montaj-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "470px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["servis-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "470px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["tamirat-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "470px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["modernizasyon-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "470px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["servis-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "470px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["diğer-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "470px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["diğer-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "470px", marginBottom: "3px" }}>
          {checkbox("")}
          <div className={styles["diğer-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "470px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["diğer-text"]}></div>
        </div>
      </div>
      <div className={styles["düzeltici-bildirim"]}>
        <div style={{ display: "flex", marginTop: "25px" }}>
          <Star />
          <div className={styles["düzeltici-bildirim-text"]}>Düzeltici Geri Bildirim</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={styles["date-5"]} style={{ marginLeft: "20px", marginTop: "5px" }}>
          Olumlu geri bildirimde bulundunuz mu?
        </div>
        {doubleCheckbox("", { variant: "rect", style: { marginTop: "8px" } })}
      </div>
      <div className={styles["hareket-gozlem"]}>Güvenli Olmayan Hareket Gözlemlendi ve Tartışıldı</div>
      <div className={styles["ul-text-5"]}>
        <div style={{ display: "flex" }}>
          <ul className={styles["ul-text-6"]}>
            <li>Uygun prosedürü takip etmeksizin çalışma</li>
            <li>Baş, el koruma ve benzeri kişisel ekipmanların olmayışı veya düzgün kullanılmayışı(KKE)</li>
            <li>Güvensiz kuyu erişimi</li>
            <li>Düşme koruma kullanılmadı veya uygun değildi</li>
            <li>Metot veya kullanılan araçlar yönünden uygu olmayan Kaldırma-Bağlama</li>
            <li>Kilitleme ve Etiketleme (LOTO) prosedürü uygulama hatası</li>
            <li>Yetersiz-Hatalı şönt (jumper) veya hatalı şönt prosedürü kullanılması</li>
            <li>Güvensiz durumların raporlanmaması</li>
            <li>Güvenlik kurallarının atlanması veya güvenlik ekipmanlarının devreden çıkarılması</li>
            <li>Uygunsuz malzeme taşınması</li>
            <li>Arızalı kusurlu ekipman kullanımı</li>
          </ul>
        </div>
      </div>
      <div className={styles["checkbox-text-2"]}>
        <div style={{ display: "flex", marginLeft: "480px", marginTop: "-180px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text2"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text3"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text4"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text5"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text6"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text7"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "3px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text8"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text9"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text10"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text11"]}></div>
        </div>
      </div>
      <div className={styles["gözlemci-not"]}>Gözlemci için notlar</div>
      <div className={styles["number"]} style={{ display: "flex" }}>
        <div className={styles["number-1"]}>1.</div>
        <div className={styles["number-text"]}>
          Safety Walkın hedefi İş Güvenliği farkındalığını geliştirmektir/böylece davranışları değişir – BU BİR DENETİM DEĞİLDİR
        </div>
      </div>
      <div className={styles["number-2"]} style={{ display: "flex" }}>
        <div className={styles["number-3"]}>2.</div>
        <div className={styles["number-text-2"]}>
          Bir konuya evet vermeniz için o konu ile ilgili gereksinimlerin tam karşılanması gerekir biraz karşılıyorsa hayır verin.
        </div>
      </div>
      <div className={styles["number-4"]} style={{ display: "flex" }}>
        <div className={styles["number-5"]}>3.</div>
        <div className={styles["number-text-3"]}>Bitirdikten sonra SIS sistemine kayıt edin veya akıllı telefon uygulamasını kullanın.</div>
      </div>
      <div className={styles["related"]}>Related to F44 – Safety Behavior Performance</div>
      <div className={styles["safety"]}>Safety Walk Form 1.1</div>
      <div style={{ display: "flex", marginLeft: "450px", marginBottom: "5px" }}>
        {checkbox("", { variant: "largeRect", style: { marginLeft: "20px", width: "30", marginTop: "-78px" } })}
        <div>
          <div className={styles["sis-sistemi-text"]}>SIS sitemine kayıt edildi.</div>
        </div>
        <div>
          <div className={styles["imza"]} style={{ fontSize: "0.65rem", color: "red", marginLeft: "-100px", fontWeight: "500" }}>
            Çalışanın İmzası
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <div className={styles["header"]}>
          <div className={styles["title"]}>Safety Walk -</div>
          <div className={styles["subtitle"]}>Saha</div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={styles["title-text"]}>Çalışan Güvenliği Davranış Gözlemi (V.1.1-2015)</div>
        </div>
        <div style={{ marginLeft: "520px", marginTop: "-50px" }}>
          <img width={95} src={logo} />
        </div>
      </div>

      <div className={styles["hareket-gozlem"]}>Güvenli Olmayan Hareket Gözlemlendi ve Tartışıldı</div>
      <div className={styles["ul-text-5"]}>
        <div style={{ display: "flex" }}>
          <ul className={styles["ul-text-6"]}>
            <li>Uygun prosedürü takip etmeksizin çalışma</li>
            <li>Baş, el koruma ve benzeri kişisel ekipmanların olmayışı veya düzgün kullanılmayışı(KKE)</li>
            <li>Güvensiz kuyu erişimi</li>
            <li>Düşme koruma kullanılmadı veya uygun değildi</li>
            <li>Metot veya kullanılan araçlar yönünden uygu olmayan Kaldırma-Bağlama</li>
            <li>Kilitleme ve Etiketleme (LOTO) prosedürü uygulama hatası</li>
            <li>Yetersiz-Hatalı şönt (jumper) veya hatalı şönt prosedürü kullanılması</li>
            <li>Güvensiz durumların raporlanmaması</li>
            <li>Güvenlik kurallarının atlanması veya güvenlik ekipmanlarının devreden çıkarılması</li>
            <li>Uygunsuz malzeme taşınması</li>
            <li>Arızalı kusurlu ekipman kullanımı</li>
            <li>Diğer</li>
            {inputLine("", { variant: "doted", width: 400, style: { marginLeft: "27px", marginTop: "-20px" } })}
          </ul>
        </div>
      </div>
      <div className={styles["checkbox-text-2"]}>
        <div style={{ display: "flex", marginLeft: "480px", marginTop: "-195px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text2"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text3"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text4"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text5"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text6"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "4px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text7"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "3px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text8"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text9"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text10"]}></div>
        </div>
        <div style={{ display: "flex", marginLeft: "480px", marginBottom: "5px" }}>
          {checkbox("")}
          <div className={styles["checkbox-2-text11"]}></div>
        </div>
      </div>

      <div className={styles["risk-tehlike"]}>
        <div style={{ display: "flex", marginTop: "25px", marginLeft: "-20px" }}>
          <Star />
          <div className={styles["risk-tehlike-text"]} style={{ marginLeft: "7px" }}>
            Bütün riskler/tehlikeler teknisyen tarafından belirlendi
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "-20px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "5px", marginTop: "10px" }}>
            {checkbox("", { variant: "smallCircle" })}
            <p style={{ marginLeft: "8px", fontSize: "0.7rem" }}>Mühendis tüm risk/tehlikeleri tespit etmiş</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
            {checkbox("", { variant: "smallCircle" })}
            <p style={{ marginLeft: "8px", fontSize: "0.7rem" }}>Uygulanamaz/Risk yok</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
            {checkbox("", { variant: "smallCircle" })}
            <p style={{ marginLeft: "8px", fontSize: "0.7rem" }}>Mühendis Risk/Tehlikelerin sadece çok azını tespit etmiş</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
            {checkbox("", { variant: "smallCircle" })}
            <p style={{ marginLeft: "8px", fontSize: "0.7rem" }}>Mühendis Risk/Tehlikelerin hiçbirini tespit etmemiş</p>
          </div>
        </div>
        <div className={styles["teknisyen-raporlari"]}>
          <div className={styles["teknisyen-raporlari-title"]}>Teknisyen Raporladı</div>
          <div style={{ display: "flex", marginTop: "15px", marginLeft: "15px" }}>
            <Square />
            <div className={styles["teknisyen-raporlari-text"]} style={{ marginLeft: "5px" }}>
              Son 3 ayda yaşanan bir ramak kala
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "15px", marginLeft: "15px" }}>
            <Square />
            <div className={styles["teknisyen-raporlari-text-2"]} style={{ marginLeft: "5px" }}>
              Son 3 ayda yaşanan bir saha durdurma
            </div>
            <div style={{ display: "flex" }}>
              <div className={styles["checkbox4"]}>
                <p style={{ marginRight: "5px", marginLeft: "-5px", fontSize: "0.75rem", opacity: 0.6, marginTop: "-38px" }}>evet</p>
                {checkbox("")}
              </div>
              <div>
                <p style={{ marginTop: "-38px", fontSize: "0.75rem", opacity: 0.6, marginLeft: "0px" }}>hayır</p>
                {checkbox("")}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginLeft: "245px", marginTop: "-12px" }}>
            <div style={{ marginRight: "3px" }}>{checkbox("")}</div>
            <div>{checkbox("")}</div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginLeft: "-30px", marginRight: "8px" }}>
          <Star />
        </div>
        <div className={styles["saha-adres"]} style={{ fontWeight: "700" }}>
          Teknisyenin bilmediği Güvenlik Altın Kural Sayısı:
        </div>
        {inputLine("", { variant: "doted", width: 40, style: { marginLeft: "0", marginTop: "0px" } })}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginLeft: "-30px", marginRight: "8px" }}>
          <Star />
        </div>
        <div className={styles["saha-adres"]} style={{ fontWeight: "700" }}>
          Teknisyenin genel değerlendirmesi. Davranış
        </div>
      </div>
      <div>
        <div className={styles["container2"]}>
          <div className={styles["box2"]}>
            <div className={styles["checkbox2"]}>{checkbox("")}</div>
            <div style={{ display: "flex" }}>
              <div className={styles["number-line"]}>0</div>
              <div style={{ width: "110px" }}>
                <p className={styles["description"]}>(1) Yetersiz-Zayıf Tutum</p>
              </div>
            </div>
            {/* <div className={styles["checkmark"]} style={{ display: value === "0" || !value ? "initial" : "none" }}></div> */}
          </div>
          <div className={styles["box2"]}>
            <div className={styles["checkbox2"]}>{checkbox("")}</div>
            <div style={{ display: "flex" }}>
              <div className={styles["number-line"]}>1</div>
              <div style={{ width: "110px" }}>
                <p className={styles["description"]}>(2) Koçluk İhtiyacı</p>
              </div>
            </div>
            {/* <div className={styles["checkmark"]} style={{ display: value === "1" ? "initial" : "none" }}></div> */}
          </div>
          <div className={styles["box2"]}>
            <div className={styles["checkbox2"]}>{checkbox("")}</div>
            <div style={{ display: "flex" }}>
              <div className={styles["number-line"]}>2</div>
              <div style={{ width: "110px" }}>
                <p className={styles["description"]}>(3) Güvenli Davranma</p>
              </div>
            </div>
            {/* <div className={styles["checkmark"]} style={{ display: value === "2" ? "initial" : "none" }}></div> */}
          </div>
          <div className={styles["box2"]}>
            <div className={styles["checkbox2"]}>{checkbox("")}</div>
            <div style={{ display: "flex" }}>
              <div className={styles["number-line"]}>3</div>
              <div style={{ width: "110px" }}>
                <p className={styles["description"]}>(4) İlgili-Katılan</p>
              </div>
            </div>
            {/* <div className={styles["checkmark"]} style={{ display: value === "3" ? "initial" : "none" }}></div> */}
          </div>
          <div className={styles["box2"]}>
            <div className={styles["checkbox2"]}>{checkbox("")}</div>
            <div style={{ display: "flex" }}>
              <div className={styles["number-line"]}>4</div>
              <div style={{ width: "110px" }}>
                <p className={styles["description"]}>(5) Rol Model</p>
              </div>
            </div>
            {/* <div className={styles["checkmark"]} style={{ display: value === "4" ? "initial" : "none" }}></div> */}
          </div>
          <div className={styles["box-without-line"]}>
            <div className={styles["checkbox2"]}>{checkbox("")}</div>
            <div className={styles["number-line"]}>5</div>
            {/* <div className={styles["checkmark"]} style={{ display: value === "5" ? "initial" : "none" }}></div> */}
          </div>
        </div>
      </div>
      <div style={{ display: "block", alignItems: "center", marginTop: "50px" }}>
        <div className={styles["saha-adres"]} style={{ fontWeight: "700", fontSize: "0.65rem" }}>
          Gözlem ile ilgili açıklamalar ve yorumlar
        </div>
        {inputLine("", { variant: "doted", width: 600, style: { marginLeft: "0", marginTop: "0px" } })}
        {inputLine("", { variant: "doted", width: 600, style: { marginLeft: "0", marginTop: "0px" } })}
      </div>
      <div className={styles["sw-aksiyon"]}>
        <div style={{ display: "flex", marginTop: "25px" }}>
          <Star />
          <div className={styles["sw-aksiyon-text"]}>SW ile ilgili aksiyon(lar)</div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginTop: "20px" }}>
            <FillBox />
          </div>
          <div className={styles["baslik-text"]} style={{ marginLeft: "5px" }}>
            Aksiyon #1 Başlık :
          </div>
          {inputLine("", { variant: "frame", width: 250, style: { marginLeft: "0", marginTop: "10px" } })}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginTop: "20px" }}>
            <FillBox />
          </div>
          <div className={styles["baslik-text"]} style={{ marginLeft: "5px" }}>
            Başlangıç Tarihi
          </div>
          {inputLine("", { variant: "frame", width: 250, style: { marginLeft: "0", marginTop: "0px" } })}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginTop: "20px" }}>
            <FillBox />
          </div>
          <div className={styles["başlık-text"]} style={{ marginLeft: "5px" }}>
            Görevli Tanımlayın
          </div>
          {inputLine("", { variant: "frame", width: 250, style: { marginLeft: "0", marginTop: "0px" } })}
        </div>
      </div>
      <div style={{ display: "block", alignItems: "center" }}>
        <div style={{ marginLeft: "5px", marginTop: "50px", fontSize: "0.65rem", fontWeight: "900" }}>Yüksek risk durumu ile ilgili aksiyon</div>
        {doubleCheckbox("", { variant: "circle", style: { marginTop: "10px" } })}
      </div>
      <div style={{ display: "block", alignItems: "center", marginTop: "50px" }}>
        <div className={styles["saha-adres"]} style={{ fontWeight: "700", fontSize: "0.65rem" }}>
          Açıklama
        </div>
        {inputLine("", { variant: "doted", width: 600, style: { marginLeft: "0", marginTop: "0px" } })}
        {inputLine("", { variant: "doted", width: 600, style: { marginLeft: "0", marginTop: "0px" } })}
      </div>
      <div>
        <div className={styles["imza"]} style={{ fontSize: "0.65rem", color: "red", marginLeft: "500px", fontWeight: "500", marginTop: "30px" }}>
          Çalışanın İmzası
        </div>
      </div>
    </div>
  );
}
