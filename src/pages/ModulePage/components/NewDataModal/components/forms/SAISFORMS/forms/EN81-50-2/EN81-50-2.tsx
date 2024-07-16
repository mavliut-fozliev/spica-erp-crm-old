import { TFile, useNewDataModalStore } from "../../../../../newDataModalStore";
import Radio from "../../components/Radio/Radio";
import Checkbox from "../../components/Checkbox/Checkbox";
import InputLine from "../../components/InputLine/InputLine";
import { useModulePageStore } from "../../../../../../../modulePageStore";
import { IoSquareOutline, IoTriangleOutline } from "react-icons/io5";
import ReactDOMServer from "react-dom/server";
import { ReactNode } from "react";
import SelectField from "../../../../../../../../../components/inputs/SelectField/SelectField";
import styles from "./EN81502.module.scss";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import DateInput from "../../components/DateInput/DateInput";

import eye from '../../assets/eye.png'
import warning from '../../assets/warning.png'
import stop from '../../assets/stop.png'
import şekil1 from '../../assets/şekil1.png'
import şekil2 from '../../assets/şekil2.png'
import şekil3 from '../../assets/şekil3.png'
import şekil4 from '../../assets/şekil4.png'
import şekil5 from '../../assets/şekil5.png'
import şekil6 from '../../assets/şekil6.png'
import şekil7 from '../../assets/şekil7.png'
import şekil8 from '../../assets/şekil8.png'
import şekil9 from '../../assets/şekil9.png'
import şekil10 from '../../assets/şekil10.png'
import şekil11 from '../../assets/şekil11.png'
import şekil12 from '../../assets/şekil12.png'
import şekil13 from '../../assets/şekil13.png'
import şekil14 from '../../assets/şekil14.png'
import şekil15 from '../../assets/şekil15.png'
import şekil16 from '../../assets/şekil16.png'
import şekil17 from '../../assets/şekil17.png'
import şekil18 from '../../assets/şekil18.png'
import şekil19 from '../../assets/şekil19.png'
import şekil20 from '../../assets/şekil20.png'
import şekil21 from '../../assets/şekil21.png'
import şekil22 from '../../assets/şekil22.png'
import şekil23 from '../../assets/şekil23.png'
import şekil24 from '../../assets/şekil24.png'
import şekil25 from '../../assets/şekil25.png'
import şekil26 from '../../assets/şekil26.png'
import şekil27 from '../../assets/şekil27.png'
import şekil28 from '../../assets/şekil28.png'
import şekil29 from '../../assets/şekil29.png'
import şekil30 from '../../assets/şekil30.png'
import şekil31 from '../../assets/şekil31.png'
import şekil32 from '../../assets/şekil32.png'
import şekil33 from '../../assets/şekil33.png'
import şekil34 from '../../assets/şekil34.png'
import şekil35 from '../../assets/şekil35.png'
import şekil36 from '../../assets/şekil36.png'
import şekil37 from '../../assets/şekil37.png'
import şekil38 from '../../assets/şekil38.png'
import şekil39 from '../../assets/şekil39.png'
import şekil40 from '../../assets/şekil40.png'
import şekil41 from '../../assets/şekil41.png'
import şekil42 from '../../assets/şekil42.png'
import şekil43 from '../../assets/şekil43.png'
import şekil44 from '../../assets/şekil44.png'
import şekil45 from '../../assets/şekil45.png'
import şekil46 from '../../assets/şekil46.png'
import şekil47 from '../../assets/şekil47.png'
import şekil48 from '../../assets/şekil48.png'
import şekil49 from '../../assets/şekil49.png'
import şekil50 from '../../assets/şekil50.png'
import şekil51 from '../../assets/şekil51.png'
import şekil52 from '../../assets/şekil52.png'
import şekil53 from '../../assets/şekil53.png'
import şekil54 from '../../assets/şekil54.png'
import şekil55 from '../../assets/şekil55.png'
import şekil56 from '../../assets/şekil56.png'
import şekil57 from '../../assets/şekil57.png'
import şekil58 from '../../assets/şekil58.png'
import şekil59 from '../../assets/şekil59.png'
import şekil60 from '../../assets/şekil60.png'
import şekil61 from '../../assets/şekil61.png'
import şekil62 from '../../assets/şekil62.png'
import şekil63 from '../../assets/şekil63.png'
import şekil64 from '../../assets/şekil64.png'
import şekil65 from '../../assets/şekil65.png'
import şekil66 from '../../assets/şekil66.png'
import şekil67 from '../../assets/şekil67.png'
import şekil68 from '../../assets/şekil68.png'
import şekil69 from '../../assets/şekil69.png'
import şekil70 from '../../assets/şekil70.png'
import şekil71 from '../../assets/şekil71.png'
import şekil72 from '../../assets/şekil72.png'
import şekil73 from '../../assets/şekil73.png'
import şekil74 from '../../assets/şekil74.png'
import şekil75 from '../../assets/şekil75.png'
import şekil76 from '../../assets/şekil76.png'
import şekil77 from '../../assets/şekil77.png'
import şekil78 from '../../assets/şekil78.png'
import şekil79 from '../../assets/şekil79.png'
import şekil80 from '../../assets/şekil80.png'
import şekil81 from '../../assets/şekil81.png'
import şekil82 from '../../assets/şekil82.png'
import şekil83 from '../../assets/şekil83.png'
import şekil84 from '../../assets/şekil84.png'
import şekil85 from '../../assets/şekil85.png'
import şekil86 from '../../assets/şekil86.png'
import tablo1 from '../../assets/tablo1.png'
import tablo2 from '../../assets/tablo2.png'
import tablo3 from '../../assets/tablo3.png'
import tablo4 from '../../assets/tablo4.png'
import tablo5 from '../../assets/tablo5.png'
import tablo6 from '../../assets/tablo6.png'
import tablo7 from '../../assets/tablo7.png'
import tablo8 from '../../assets/tablo8.png'
import tablo9 from '../../assets/tablo9.png'
import tablo10 from '../../assets/tablo10.png'
import tablo11 from '../../assets/tablo11.png'
import tablo12 from '../../assets/tablo12.png'
import tablo13 from '../../assets/tablo13.png'
import tablo14 from '../../assets/tablo14.png'
import tablo15 from '../../assets/tablo15.png'
import tablo16 from '../../assets/tablo16.png'
import tablo17 from '../../assets/tablo17.png'
import tablo18 from '../../assets/tablo18.png'
import tablo19 from '../../assets/tablo19.png'
import tablo20 from '../../assets/tablo20.png'
import tablo21 from '../../assets/tablo21.png'
import tablo22 from '../../assets/tablo22.png'
import tablo23 from '../../assets/tablo23.png'
import tablo24 from '../../assets/tablo24.png'
import tablo25 from '../../assets/tablo25.png'
import tablo26 from '../../assets/tablo26.png'
import tablo27 from '../../assets/tablo27.png'
import korkuluk1 from '../../assets/korkuluk1.png'
import korkuluk2 from '../../assets/korkuluk2.png'
import korkuluk3 from '../../assets/korkuluk3.png'
import asansor1 from '../../assets/asansor1.png'
import asansor2 from '../../assets/asansor2.png'
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.png'
import photo5 from '../../assets/photo5.png'
import ray1 from '../../assets/ray1.png'
import ray2 from '../../assets/ray2.png'
import ray3 from '../../assets/ray3.png'
import ray4 from '../../assets/ray4.png'
import ray5 from '../../assets/ray5.png'
import ray6 from '../../assets/ray6.png'
import ray7 from '../../assets/ray7.png'
import ray8 from '../../assets/ray8.png'


const EN81_50_2 = ({ handleInputChange, files, setFiles }: { handleInputChange: (e: any) => void; files: TFile; setFiles: (state: TFile) => void }) => {
  function iconToSvgString(iconComponent: any) {
    return ReactDOMServer.renderToString(iconComponent);
  }
  const triangleSvgString = iconToSvgString(<IoTriangleOutline />);
  const { formData, setFormData } = useNewDataModalStore();

  const inputLine = (name: string, label: string, props?: { width?: number; style?: { [key: string]: any }; variant?: "free" | "border", dontUseSymbol?:boolean }) => (
    <InputLine
      name={name}
      label={label}
      value={formData[name]}
      onChange={handleInputChange}
      width={props?.width || 100}
      style={props?.style}
      variant={props?.variant}
      dontUseSymbol={props?.dontUseSymbol}
    />
  );

  const dateInput = (name: string) => <DateInput name={name} value={formData[name]} onChange={handleInputChange} />;

  const radio = (
    name: string,
    props?: { height?: number; style?: { [key: string]: any }; variant?: "square" | "circle" | "horizontal" | "presais"; inputArray: string[] | ReactNode[] }
  ) => (
    <Radio
      name={name}
      height={props?.height || 100}
      value={formData[name]}
      onChange={handleInputChange}
      style={props?.style}
      variant={props?.variant}
      inputArray={props?.inputArray || []}
    />
  );

  const checkbox = (name: string, props?: { variant?: "rect"; style?: { [key: string]: any } }) => (
    <Checkbox name={name} value={formData[name]} onChange={handleInputChange} variant={props?.variant} style={props?.style} />
  );

  const selectField = (name: string, label: string, items: { _id: string; name: string }[]) => (
    <SelectField name={name} label={label} items={items} onChange={handleInputChange} defaultItem={formData[name]} primary={"name"} />
  );

  return (
    <div className={styles["container"]}>

<div>
        <h3 className={styles["title"]}>SAIS inceleme ayrıntıları</h3>
        <hr />
      </div>
      <div>{inputLine("tesisat_numarasi", "Tesisat numarası", {variant: "border" })}</div>
      <div>{inputLine("sais_incelemetekrari", "SAIS inceleme tekrarı ", {variant: "border"})}</div>
      <div>{inputLine("asansorü_monte_eden", "Asansörü monte eden (KG / temsilci / distribütör) ", {variant: "border"})}
        <h5 className={styles["subtitle"]}>Asansörü hizmete sokan şirket</h5>
      </div>
      <div>{inputLine("adres0", "Adres")}</div>
      <div>{inputLine("asansor_konumu", "Asansör konumu")}</div>
      <div>{inputLine("adres", "Adres")}</div>
      <div>{inputLine("sais_denetcisi_tekrar_denetleyen", "SAIS Denetçisi / Tekrar Denetleyen")}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
      </div>
      <div>{inputLine("supervizor", "Süpervizör")}</div>
      <div>{inputLine("sorumlumontor", "Sorumlu montör")}</div>
      <p className={styles["telif"]}>
        <span>Telif Hakkı © 2022 INVENTIO AG Tüm hakları saklıdır.</span>
        INVENTIO AG, Seestrasse 55, CH-6052 Hergiswil, bu el kitabındaki tüm telif haklarının ve diğer fikri mülkiyet haklarının sahibidir ve bunları saklı 
        tutar. INVENTIO AG izni olmadan herhangi bir şekilde veya herhangi bir yolla çoğaltma, çeviri, kopyalama veya veri işleme ünitelerinde saklama 
        ihlal kabul edilecek ve adli işlem yapılacaktır
      </p>

      <div>{inputLine("asansor_tahsisi", "Asansör tahsisi", {dontUseSymbol:true})}</div>
      <div>{inputLine("sais_denetci_yardimcisi", "SAIS Denetçi yardımcısı (onaylı kurum ise)", {dontUseSymbol:true})}
      </div>
      <div>{inputLine("montaj_sirketi", "Montaj şirketi (Schindler /müteahhit) ")}
        <h5 className={styles["subtitle"]}>Asansörün fiziksel montajını yapan şirket</h5>
      </div>
      <div>{inputLine("bolgesatisofisi", "Bölge / satış ofisi ")}</div>
      <div>{inputLine("musteriinsaatsirketi", "Müşteri / inşaat şirketi  ")}</div>
      <div>{inputLine("asansor_sistemi", "Asansör sistemi ", {dontUseSymbol:true} )}</div>
      <div>{inputLine("urun_hattı0", "Ürün hattı", {dontUseSymbol:true})}</div>
      <div>
        <h5>Asansör sistemi / ürün hattı</h5>
        <img src={eye}  className={styles["eye-image"]} />
        <div>{radio("urunhatti", { variant: "circle", inputArray: 
          ["ES1 Rel. 02",
           "ES5.0 Rel. 02",
           "ES5 Rel. 02",
           ] })}
        </div>
      </div>
      <div>{inputLine("bolge", "Bölge", {dontUseSymbol:true})}</div>
      <div className={styles["box"]}>
        <h5>Bölge</h5>
        <img src={eye}  className={styles["eye-image"]} />
        <div>{radio("state", { variant: "circle", inputArray: ["EU", "CN", "AP", "LA", "IN"] })}</div>
      </div>

      <div className={styles["box"]}>
        <h5>İlgili uluslararası standartlar</h5>
        <ol>
          <li className={styles["circle"]}> EN 81-20:2014 / EN 81-20:2020</li>
          <li className={styles["circle"]}> EN 81-21:2018</li>
          <li className={styles["circle"]}> EN 81-50:2014 / EN 81-50:2020</li>
        </ol>
      </div>

      <div>{inputLine("gecerli_en81_standartı", "Geçerli EN 81 standardı")}</div>

      <div className={styles["box"]}>
        <h5>Asansör şunlarla uyumlu:</h5>
        <div className={styles.checkbox}>
          {checkbox("rapport", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>EN 81-20:2014 / EN 81-20:2020 / EN 81-50:2014 / EN 81-50:2020</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport1", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>EN 81-21:2018</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport2", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>EU Tip İnceleme Sertifikası NL19-400-1002-004-92 (ES1 Rel. 02)</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport3", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>EU Tip İnceleme Sertifikası NL18-400-1002-004-78 (ES5.0/ES5 Rel. 02)</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport4", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>GB/T 7588.1-2020 / GB/T 7588.2-2020</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport4", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>TSG T7007-2022</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport4", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>Uluslararası kanunlar ve standartlardan yerel sapmalar</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport4", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>2014/33/EU No.'lu asansör direktifinde belirtildiği gibi yetkili makam tarafından (onaylı kurum vb.) ünite doğrulaması</span>
        </div>
    </div>

      <div>{inputLine("uluslararasi_kanunlar_ve_standartlardan_yerel_sapmalar", "Uluslararası kanunlar ve standartlardan yerel sapmalar")}
        <h5 className={styles.subtitle}>SAIS incelemesi için kullanılan yerel kanunlar ve standartların adını / yılını / versiyonunu kaydedin. Onaylı bir kurum tarafından onaylanmışsa, onay
        numarasını kaydedin.</h5>
      </div>

      <div>
          <h3 className={styles["title"]}>SAIS inceleme gereklilikleri</h3>
          <hr />
        </div>

      <div className={styles["box"]}>
        <h5>Sertifikasyon gereklilikleri</h5>
        <ol className={styles["ordered-list"]}>
          <li className={styles["arrow"]}>Bu sertifikasyona sahip olduğunuzdan emin olun:</li>
          <li>– EJ 49000050 içinde belirtilen SAIS Denetçisi veya SAIS Ana Eğitmeni.</li>
          <li className={styles["arrow"]}>Şunların içeriğini bildiğinize ve erişiminiz olduğuna emin olun:</li>
          <li>– ON 0–17025 Schindler kabul denetim standardı (SAIS).</li>
          <li>– EJ 49000052 Güvenli inceleme süreci.</li>
          <li>– K 40700046 Semboller ve işaretler</li>
        </ol>
      </div>

      <div className={styles["box"]}>
        <h5>SAIS inceleme için gerekli koşullar</h5>
        <ol className={styles["ordered-list"]}>
          <li className={styles["arrow"]}>Aşağıdakilerden emin olun:</li>
          <li>– SAIS incelemesini yaparken onaylı mühendislik uygulaması ve yasal gerekliliklere uyarsınız.</li>
          <li>– Tüm test cihazları onaylı kalite yönetimi ile uyumludur.</li>
          <li>-Asansör tamamen kurulu, ayarlanmış ve çalışma ve devir teslim için hazırdır.</li>
          <li>– Binayla ilgili tüm işler tamamlanmıştır ve binayla ilgili tüm bileşenler çalışma ve teslim için hazırlanmıştır.</li>
          <li>– K 40700046 Semboller ve işaretler</li>
          <li className={styles["arrow"]}>Çalışma yerinde tüm SAIS kontrollerini ve testlerini tamamlayın.</li>
          <li className={styles["arrow"]}>Test sonuçlarını sadece sertifikalı SAIS denetçisi kaydedebilir. Ofis personelinin test sonuçlarını kaydetmesine izin verilmez.</li>
        </ol>
      </div>

      <div className={styles["box"]}>
        <p>İnceleme aletleri</p>
        <p className={styles["circle"]}>SAIS incelemesi için kullanılan inceleme aletleri GFQE-GS, ARGE ve/veya yerel Schindler organizasyonu tarafından tanımlanır.</p>
        <p className={styles["circle"]}>Çoğu inceleme aleti için belirli tedarikçiler ve inceleme aleti tipleri önerilir. İnceleme aletleri Belirtilen standartlar ve/veya hassasiyet toleranslarını
        karşılıyorsa alternatif tedarikçiler veya inceleme aleti tipleri kullanılabilir.</p>
        <p className={styles["circle"]}>İnceleme aletlerinin bazıları ürün hattına özeldir. Bunların tanımlanmış Schindler dahili tedarikçisinden sipariş edilmesi gerekir.</p>
        <p className={styles["circle"]}>İnceleme aletlerini (örneğin elektriksel test kitlerini) düzenli olarak güncellemek ve kalibre etmekten KG sorumludur.</p>
      </div>

      <div className={styles["box"]}>
        <p>SAIS kontrolleri ve testlerini yapmak için her zaman harici ESE panelini kullanın.</p>
        <img src={warning} className={styles["eye-image"]} />
      </div>

      <div className={styles["box"]}>
        <p>ESE paneli</p>
        <p>Kimlik No. 59712096</p>
        <img src={şekil1} className={styles["w-200"]} />
      </div>

      <div className={styles["box"]}>
        <p>ESE paneli - Çin</p>
        <p>Kimlik No. 59712097 - Basitleştirilmiş Çince</p>
        <p>Kimlik No. 59712098 - Geleneksel Çince</p>
        <p>(görüntü mevcut değil)</p>
      </div>

      <div className={styles["box"]}>
        <p>SA GBP için reset fişi</p>
        <p>Kimlik No. 59712527</p>
        <img src={şekil2} className={styles["w-200"]} />
      </div>

      <div className={styles["box"]}>
        <p>CO SC 1 için kabul testi fişleri</p>
        <p>Kimlik No. 57816205</p>
        <p>Bu test fişleri şunları içerir:</p>
        <p className={styles["circle"]}>SCCAR.SISK</p>
        <p className={styles["circle"]}>SCCAR.ETSL (ürün hattı için gerekliyse)</p>
        <p className={styles["circle"]}>SCMAIN.KSS, SCMAIN.KSS1 (ürün hattı için gerekliyse)</p>
        <p>Test fişleri farklılık gösterebilir ve kontrol donanımı çözümüne bağlıdır.</p>
        <p className={styles["arrow"]}>Kullanılacak test fişlerinin güncel versiyonu için PNC'ye başvurun.</p>
        <img src={şekil3} className={styles["w-500"]} />
      </div>

      <div className={styles["box"]}>
        <p>CO SC 1 için kontrol fişleri - SA GPB 201 için arayüz</p>
        <p className={styles["circle"]}>Kimlik No. 57816401</p>
        <p className={styles["circle"]}>Kimlik No. 59712838</p>
        <p className={styles["circle"]}>Kimlik No. 57639029</p>
        <p>Yukarıdaki kontrol fişleri karşı ağırlık aşırı hız regülatörlü asansörler için kontrol panosu ile gönderilir.</p>
        <img src={şekil4} className={styles["w-400"]} />
      </div>

      <div className={styles["box"]}>
        <p>CO SC 1 için kontrol fişleri - SA WOL 35 için arayüz</p>
        <p className={styles["circle"]}>Kimlik No. 57816403</p>
        <p className={styles["circle"]}>Kimlik No. 59715133</p>
        <p className={styles["circle"]}>Kimlik No. 57643699</p>
        <p>Yukarıdaki kontrol fişleri karşı ağırlık aşırı hız regülatörlü asansörler için kontrol panosu ile gönderilir.</p>
        <img src={şekil5} className={styles["w-400"]} />
      </div>

      <div className={styles["box"]}>
        <p>CO SC 1 için bypass cihazı fişleri</p>
        <p>Kimlik No. 57815299</p>
        <p>Şu fişleri içerir:</p>
        <p className={styles["circle"]}>Normal</p>
        <p className={styles["circle"]}>Kabin</p>
        <p className={styles["circle"]}>Kilit</p>
        <p>Bypass cihazı fişleri kontrol ile gönderilir.</p>
        <img src={şekil6} className={styles["w-400"]} />
      </div>

      <div className={styles["box"]}>
        <p>Mıknatıslı halka su terazisi</p>
        <p>Kimlik No. 57860931</p>
        <img src={şekil7} className={styles["w-200"]} />
      </div>
      
      <div className={styles["box"]}>
          <p className={styles["circle"]}>Şunlara sahip asansörlerle kullanılmalıdır:</p>
          <p>– 4 STM'ler ve CA PK 44</p>
          <p>– 2/4 STM'ler ve CA PK 33</p>
          <p className={styles["circle"]}>Mıknatıslı halka su terazisi makara akslarından birine montelidir.</p>
          <p className={styles["circle"]}>SAIS inceleme tamamlandığında:</p>
          <p>– Ekipmanı asansörden çıkarın.</p>
          <p>– Ekipmanı tekrar kullanmak için saklayın.</p>
      </div>


      <div>
        <h3 className={styles["title"]}>SAIS doküman ayrıntıları</h3>
        <hr />
      </div>

      <div className={styles["box"]}>
        <p>J__46200207_02 ES1/ES5.0/ES5 Rel. 02 EN 81-20 / EN 81-50 - SAIS Denetçisinin kılavuzu</p>
        <p>Bu belge, piyasaya sürülmüş İngilizce master versiyonunun bir çevirisidir.</p>
        <p>KA No.: 600147 / KA Tarih: 15.10.2022</p>
        <p>Belge versiyonu: J/R_46200207_02</p>
        <p>Dil: TR</p>
      </div>

      <div className={styles["box"]}>
        <p>Sınıflandırma: 11010 / Merkez büro: GS0</p>
        <p>Çeviri Bürosu: GL0</p>
      </div>

      <div className={styles["box"]}>
        <p>Versiyon notları</p>
        <p>Versiyon 02: TSG T7007-2022 gereklilikleri eklendi, EN 81-70 / EN 81-77 Ekleri için SAIS kontrolleri entegre edildi, makine freni Mayr RSQ 250/300/500 eklendi, DR VAF 14 ve DR VAF 25 eklendi, DO NST-CN eklendi , SAIS kontrolleri 4.2.7.l (JHSG etiketi) ve 2.16.3 (makine alanı sıcaklığı) silindi, aşırı hız regülatör halatı tip Tianjin GOLDSUN eklendi, SAIS kontrolü 10.3.2 güncellendi (güvenlik devresinin ölçümü silindi)</p>
        <p>Versiyon 01: EN 81-20/50:2020 / EN 81-72:2020 / EN 81-73:2020 eklendi, DO WCM / DO NSM 440 eklendi, kabin paraşütü SA GED 10/20/30 / SA SGM 01 / SA G 01 için frenleme izi tabloları güncellendi</p>
        <p>Versiyon 00: Yeni belge</p>
      </div>

      <div className={styles["box"]}>
        <p className={styles["circle"]}>Bu belge:</p>
        <p>– Yeni bir asansörün SAIS incelemesi için gerekli kontroller ve testlerin nasıl yapılacağı konusunda talimat içerir.</p>
        <p>– Makine daireli ve dairesiz çekiş asansörleri için geçerlidir.</p>
        <p>– Sadece %100 standart asansör sistemi ES1 Rel. 02, ES5.0 Rel. 02 veya ES5 Rel. 02 ve yazılım versiyonu v11.xx.xx veya üstü olan SC 1 kontrolün kombinasyonunda geçerlidir. Belirtilen dışında yazılım versiyonları için testler farklılık gösterebilir.</p>
      
        <p className={styles["circle"]}>SAIS denetimi sırasında SAIS Denetçisinin Kılavuzu içinde tanımlanan uluslararası standartlarından yerel sapmalar dikkate alınmalıdır. Uluslararası standartlara göre daha katı yerel sapmalar veya ek standartlar geçerliyse bunlar dikkate alınmalıdır.</p>
        <p className={styles["circle"]}>Herhangi bir modifiye veya uyarlanmış asansör için SAIS belgesi J 46200093 Schindler genel çekiş EN 81-20 / EN 81-50 Denetçinin kılavuzu kullanılmalıdır.</p>
        <p className={styles["circle"]}>Geçici Güvenlik Cihazı - Versiyon 2 (TSD21 / HSK min) için, EC Tip İnceleme Sertifikası NL19-400-1002-004-92 veya NL 11-400-1002-004-54 uyarınca alternatif test prosedürleri uygulanır. Şu SAIS belgesine başvurun:</p>
        <p>– J 46200174 Ek: ES1 için TSD21 SAIS Denetçisinin kılavuzu.</p>
      </div>

      <div className={styles["box"]}>
        <p>Semboller ve tanımlar</p>
        <p className={styles["circle"]}>uid: Kontroller ve testler için özel tanımlama numarası</p>
        <p className={styles["circle"]}>N/A: Denetlenen asansör için uygulanabilir değildir</p>
        <p className={styles["circle"]}>Fixed: Bulgu mevcut SAIS incelemesi sırasında düzeltilmiştir. Son kontrol veya test neticesi pozitiftir.</p>
        <p className={styles["circle"]}>Evet: Kontrol veya testin sonucu pozitiftir.</p>
        <p className={styles["circle"]}><IoSquareOutline /> Hayır: Kontrol veya testin sonucu negatiftir. Potansiyel emniyet riski. Asansör halkın kullanımına sokulabilir. Tüm bulguları, kamu kullanımı için yayınlanmış / erişilebilir 3665 DoC (uyum beyanı) faaliyetinin onaylanmasından sonra en geç 4 hafta içinde düzeltme için açık madde listesine (OIL) kaydedin.</p>
        <p className={styles["circle"]}><IoTriangleOutline /> Hayır: Kontrol veya testin sonucu negatiftir. Acil emniyet riski. Asansör halkın kullanımına sokulmamalıdır. Düzeltme için tüm bulguları açık madde
        listesine (OIL) kaydedin.</p>
        <p className={styles["circle"]}>* (yıldız işareti): Zorunlu alan</p>
        <p className={styles["circle"]}>ARTI (+) işareti (sadece eSAIS için kullanılabilir): Belirli bir bulgunuz varsa bulguyu kaydedin. Bir metin yazın veya fotoğraf çekin. Kontrol veya test
        sonucu negatifse bulgu açık madde listesine (OIL) kaydedilir.</p>
        <p className={styles["circle"]}>Kırmızı STOP işareti: Kontrol veya testin kabul kriterleri karşılanmazsa SAIS incelemesini hemen durdurun.</p>
        <p className={styles["circle"]}>GÖSTER/GİZLE işareti (sadece eSAIS için): Bir seçenek seçerseniz sadece o seçenekle ilişkili SAIS kontrolleri ve testleri gösterilir. Seçilmeyen
        seçeneklerle ilişkili SAIS kontrolleri ve testleri gösterilmez. Herhangi bir seçenek seçmezseniz ilişkili bir SAIS kontrolü ve testi gösterilmez.</p>
        <p className={styles["circle"]}>OK ( <span className={styles["arrow"]}></span>) işareti: Görev, eylem adımı</p>
        <p className={styles["circle"]}>Bir seçenek seçmeniz gerekiyorsa farklı liste tipleri size seçenekleri gösterir.</p>
        <p className={styles["circle"]}>(sadece eSAIS için) Sadece bir seçenek seçilebilirse ama daha fazla seçenek yüklenmiş ve onaylanmışsa:</p>
        <p>– Bir seçenek seçin.</p>
        <p>– ARTI (+) işaretine dokunun ve kalan seçenekleri kaydedin.</p>
      </div>

      <div className={styles["box"]}>
        <p className={styles["circle"]}>SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız seçenekleri resimde gösterildiği gibi seçin.</p>
        <p>1 Sadece bir seçenek seçin (yuvarlak sembollü liste)</p>
        <p>2 Sadece bir seçenek seçin (sembolsüz liste)</p>
        <p>3 Bir veya daha fazla seçenek seçin (köşeli sembollü liste)</p>
        <p>Not: Liste tipi sadece tek seçenek seçilmesine izin veriyorsa ama daha fazla seçenek yüklenmiş ve onaylanmışsa listede tüm yüklenmiş ve onaylanmış seçenekleri seçin.</p>
        <img src={şekil8} className={styles["w-300"]} />
      </div>

      <div className={styles["box"]}>
        <p>Kanunlar ve standartlar</p>
        <p>Uluslararası kanunlar</p>
        <p className={styles["circle"]}>2006/42/EC Makina Direktifi</p>
        <p className={styles["circle"]}>2014/33/EU Asansör Direktifi</p>
        <p>Uluslararası standartlar</p>
        <p className={styles["circle"]}>ISO/TS 22559 Asansörler için güvenlik gereklilikleri- Kısım 1: Global temel güvenlik gereklilikleri</p>
        <p className={styles["circle"]}>EN 81-20:2014 Asansörlerin Yapılması ve Montajı için Emniyet Kuralları - Kişiler ve Yükler için Asansörler Kısım 20: Yolcu ve Yük Asansörleri</p>
        <p className={styles["circle"]}>EN 81-20:2020 Asansörlerin Yapılması ve Montajı için Emniyet Kuralları - Kişiler ve Yükler için Asansörler Kısım 20: Yolcu ve Yük-Yolcu Asansörleri</p>
        <p className={styles["circle"]}>EN 81-28:2018 Asansörlerin Yapılması ve Montajı için Emniyet Kuralları - Kısım 28: Yolcu ve/veya Yük Asansörleri için Uzaktan Alarm</p>
        <p className={styles["circle"]}>EN 81-50:2014 Asansörlerin Yapılması ve Montajı için Emniyet Kuralları - İncelemeler ve Testler Kısım 50: Asansör Bileşenlerinin Tasarım Kuralları, Hesaplamalar, İncelemeler ve Testleri</p>
        <p className={styles["circle"]}>EN 81-50:2050 Asansörlerin Yapılması ve Montajı için Emniyet Kuralları - İncelemeler ve Testler Kısım 50: Asansör Bileşenlerinin Tasarım Kuralları, Hesaplamalar, İncelemeler ve Testleri</p>
        <p className={styles["circle"]}>EN ISO 13857:2008 Makine Emniyeti -Tehlike Bölgelerine Üst ve Alt Uzuvların Erişmesini Önlemek için Emniyet Mesafeleri</p>
        <p className={styles["circle"]}>IEC 60204-1:2005+A1:2008 / EN 60204-1:2006+A1:2009 Makina Emniyeti – Makinaların Elektriksel Ekipmanı - Kısım 1: Genel Gereklilikler</p>
        <p className={styles["circle"]}>IEC 61009-1:2010 Ed. 3.0 / EN 61009-1:2010 Mesken ve Benzeri Kullanımlar için Dahili Aşırı Akım Korumalı ve Kaçak Akımla Çalışan Devre Kesiciler (RCBO'lar) - Kısım 1: Genel Kurallar</p>
        <p className={styles["circle"]}>IEC 60364-4-41:2006 / HD 60364-4-41:2007 Düşük Voltajlı Elektriksel Montajlar- Kısım 4-41: Emniyet için Koruma - Elektrik Çarpmasına Karşı Koruma</p>
        <p className={styles["circle"]}>IEC 60364-5-54:2011 / HD 60364-5-54:2007 Düşük Voltajlı Elektriksel Montajlar Kısım 5-54: Elektriksel Ekipmanın Seçilmesi ve Kurulması - Topraklama Düzenlemeleri ve Koruyucu İletkenler</p>
        <p className={styles["circle"]}>IEC 60364-6:2006 / HD 60364-6:2007 Düşük Voltajlı Elektriksel Montajlar - Kısım 6: Doğrulama ve Test Etme</p>
        <p className={styles["circle"]}>IEC/EN 60269-1:2006+A1:2009+A2:2014 Düşük Voltajlı Sigortalar - Kısım 1: Genel Gereklilikler</p>
        <p className={styles["circle"]}>IEC/EN 60898-1:2015 Elektrikli Aksesuarlar - Mesken ve Benzeri Montajlar için Aşırı Akım Korumalı Devre Kesiciler- Kısım 1: a.c. için devre kesiciler Çalıştırma</p>
        <p className={styles["circle"]}>IEC/EN 61010 Ölçüm, Kontrol ve Laboratuvar Kullanımında Elektriksel Ekipman için Emniyet Gerekliliği - Kısım 1: Genel Gereklilikler</p>
        <p className={styles["circle"]}>IEC/EN 61557 Düşük Voltajlı Dağıtım Sistemlerinde Elektriksel Emniyet-Test, Ölçüm veya Koruyucu Değerleri Görüntüleme Ekipmanları</p>
      </div>

      <div className={styles["box"]}>
        <p>Kanunlar ve standartlar</p>
        <p>Uluslararası standartlar</p>
        <p className={styles["circle"]}>EN 81-21:2018 Asansörlerin Yapılması ve Montajı için Emniyet Kuralları - Kısım 21: Mevcut Binalarda Yeni Yolcu ve Yük-Yolcu Asansörleri</p>
      </div>

      <div className={styles["box"]}>
        <p>Bu belgedeki tüm uluslararası kanunlar ve standartlar İngilizce dilindeki orijinal standarda atıfta bulunur. Diğer dillerdeki uluslararası kanunlar ve standartlardaki bölüm ve kısım numaraları İngilizce versiyonlardakinden farklı olabilir.</p>
        <p className={styles["arrow"]}>Çevrilmiş bir uluslararası standartla çalışıyorsanız kendi dilinizdeki standarttan doğru bölüm ve kısım numarasını bulun.</p>
        <p className={styles["arrow"]}>Ayrıca SAIS denetçisinin kılavuzunda verilen uluslararası standartlardan yerel sapmalara başvurun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Çin ve Asya Pasifik'te Standartlar</p>
        <p className={styles["circle"]}>Avustralya</p>
        <p>– AS 1735-1:2016 Asansörler, Yürüyen Merdivenler ve yürüyen yollar - Kısım 1: Genel gereklilikler</p>
        <p>– AS 1735.1.2:2021 Asansörlerin üretimi ve montajı için emniyet kuralları - Kısım 1.2: Yolcu ve yük yolcu asansörleri</p>
        <p>– AS 1735.1.3:2021 Asansörler, yürüyen merdivenler ve yürüyen yollar, Kısım 1.3: Asansörlerin üretimi ve montajı için emniyet kuralları - İnceleme ve testler - Asansör bileşenlerine yönelik tasarım kuralları, hesaplamalar, incelemeler ve testler</p>
        <p>– AS 1735.1.4:2021 Asansörler, yürüyen merdivenler ve yürüyen yollar Asansörlerin üretimi ve montajı için emniyet kuralları - Mevcut asansörler - Mevcut yolcu ve yük yolcu asansörlerinin emniyetini geliştirmek için kurallar</p>
        <p>– AS 1735.20:2020 Mevcut binalarda yeni yolcu ve yük asansörleri</p>
        <p className={styles["circle"]}>Çin</p>
        <p>– TSG T7001-2009+A1:2013+A2:2017 Asansörlerin gözetim incelemesi ve periyodik incelemeye ilişkin yönetmelik - Çekiş ve pozitif tahrikli asansör için yönetmelik</p>
        <p>– TSG T7002-2011+A1:2013+A2:2017 Asansörlerin gözetim incelemesi ve periyodik incelemeye ilişkin yönetmelik - Çin için itfaiyeci asansörleri</p>
        <p>– TSG T7007-2022 Asansörlerin tip testi yönetmeliği</p>
        <p>– GB 7588-2003+XG1-2015 Elektrikli asansörlerin üretimi ve montajı için emniyet kuralları</p>
        <p>– GB/T 7588.1-2020 Asansörlerin üretimi ve montajı için emniyet kuralları - Kısım 1: Yolcu ve yük yolcu asansörleri</p>
        <p>– GB/T 7588.2-2020 Asansörlerin üretimi ve montajı için emniyet kuralları - Kısım 2: Asansör bileşenlerine yönelik tasarım kuralları, hesaplamalar, incelemeler ve testler</p>
        <p>– GB 24803.1:2009 Asansörler için emniyet gereklilikleri - Kısım 1: Asansörler için global temel emniyet gereklilikleri (GESR)</p>
        <p>– GB/T 30560:2014 Asansör kontrol cihazları, sinyalleri ve ek bağlantı parçaları (yayınlanan resmi MOD ISO versiyonu 4190-5:2006 Asansör kontrol cihazları ve sinyalleri)</p>
        <p className={styles["circle"]}>Hong Kong</p>
        <p>– EMSD CoP:2019 Asansörler ve yürüyen merdivenlerin tasarım ve üretimi uygulama mevzuatı</p>
        <p className={styles["circle"]}>Kore</p>
        <p>– KIS6831:2001 Kore asansör inceleme standardı</p>
        <p>– KIS6831: Ek 4 2006 Kore asansör inceleme standardı (sadece MRL)</p>
        <p className={styles["circle"]}>Singapur</p>
        <p>– SS 550:2020 Elektrikli yolcu ve yük asansörlerinin montajı, çalıştırılması ve bakımı için uygulama mevzuatı</p>
        <p>– SS 341:2001 Binalarda kullanım için güvenlik camı malzemeleri (insan etkisi dikkate alınarak) cam</p>
        <p className={styles["circle"]}>Tayvan</p>
        <p>– CNS 15827-20-2015 Asansörlerin üretimi ve montajı için emniyet kuralları – Yolcu ve yük taşıma için asansörler – Kısım 20: Yolcu ve yük-yolcu asansörleri</p>
        <p>– CNS 15827-50-2015 Asansörlerin üretimi ve montajı için emniyet kuralları - İncelemeler ve testler</p>
        <p className={styles["circle"]}>Vietnam</p>
        <p>– TCVN 6395:2008 Elektrikli asansörlerin üretimi ve montajı için emniyet gereklilikleri</p>
        <p>– TCVN 6396-20:2017 Asansörlerin üretimi ve montajı için emniyet kuralları – Yolcu ve yük taşıma için asansörler – Kısım 20: Yolcu ve yük-yolcu asansörleri</p>
        <p>– TCVN 6396-50:2017 Asansörlerin üretimi ve montajı için emniyet kuralları – İncelemeler ve testler – Kısım 50: Asansör bileşenlerine yönelik tasarım kuralları, hesaplamalar, incelemeler ve testler</p>
        <p>– QCVN 02:2019 1 Temmuz 2021'den beri yayımlanan ve uygulanan elektrikli asansör için emniyetli çalışmaya ilişkin ulusal teknik düzenleme</p>
      </div>

      <div className={styles["box"]}>
        <p>Latin Amerika Standartları</p>
        <p className={styles["circle"]}>MERCOSUR ülkeleri: Arjantin (AR) / Brezilya (BR) / Paraguay (PY) / Uruguay (UY)</p>
        <p>– NBR NM 313:2007 Asansörlerin Üretimi ve Montajı için Emniyet Kuralları. Yolcu Asansörleri için Özel Uygulamalar. Engelli Kişiler Dahil Kişilerin Asansörlere Erişilebilirliği</p>
        <p className={styles["circle"]}>MERCOSUR üye ülkeler: Bolivya (BO) / Şili (CL) / Kolombiya (CO) / Ekvador (EC) / Peru (PE) / Venezuela (VE) / Meksika (MX)</p>
        <p>– NBR NM 313:2007 Asansörlerin Üretimi ve Montajı için Emniyet Kuralları. Yolcu Asansörleri için Özel Uygulamalar. Engelli Kişiler Dahil Kişilerin Asansörlere Erişilebilirliği</p>
        <p className={styles["circle"]}>Brezilya (BR)</p>
        <p>– NBR NM 207:1999 Yolcu Asansörleri – Üretim ve Montaj için Emniyet Gereklilikleri</p>
        <p>– ABNT NBR 16858-1:2020 Elevadores - Requisitos de segurança para construção e instalação - Parte 1: Elevadores de passageiros e elevadores de passageiros e cargas</p>
        <p>– ABNT NBR 16858-1:2021 Elevadores - Requisitos de segurança para construção e instalação - Parte 1: Elevadores de passageiros e elevadores de passageiros e cargas</p>
        <p>– ABNT NBR 16858-2:2020 Elevadores - Requisitos de segurança para construção e instalação - Parte 2: Requisitos de projeto, de cálculos e de inspeções e ensaios de componentes</p>
        <p>– NBR 5665:1987 Trafik Hesaplaması</p>
        <p>– NBR NM 196:1999 Yolcu Asansörü ve Servis Asansörü için Kılavuz Raylar</p>
        <p>– NBR 16042:2012 Yolcu Asansörleri – MRL için Üretim ve Montaj Emniyet Gereklilikleri</p>
        <p>– NBR 9077:2001 Binalarda Acil Çıkış</p>
        <p>– GEM IT001 Rio de Janeiro için Talimat</p>
        <p className={styles["circle"]}>Şili (CL)</p>
        <p>– NCH 440-1:2014 Asansörlerin Üretimi ve Montajı için Emniyet Gereklilikleri - Kısım 1: Elektrikli Asansörler</p>
        <p>– NCH 3362:2014 Sismik asansörlerin tasarımı, kurulumu ve işletimi için minimum gereksinimler</p>
        <p>– NCh 3357:2015 Yapısal olmayan bileşenlerin ve sistemlerin sismik tasarımı</p>
        <p className={styles["circle"]}>Kolombiya (CO)</p>
        <p>– NTC-2769-1/2 Asansörlerin Yapılması ve Montajı için Emniyet Kuralları - Kısım 1: Elektrikli Asansörler</p>
        <p>– RMT 1409:2012 İş Yerinde ve Yüksekten Düşmeye Karşı Koruma için Güvenlik Yönetmeliği</p>
        <p className={styles["circle"]}>Meksika (MX)</p>
        <p>– NOM 053 SCFI:2000 Elevadores Electricos de Traccion para Pasajeros y Carga</p>
        <p className={styles["circle"]}>Peru (PE)</p>
        <p>– EM. 070:2019 Yasal Standartlar - Mekanik Taşıma</p>
      </div>

      <div className={styles["box"]}>
        <p>Hindistan Standartları</p>
        <p className={styles["circle"]}>Hindistan</p>
        <p>– IS 14665+A3:2020 Çekiş asansörleri</p>
        <p>– IS 15785:2007+A1:2011 Geleneksel makina dairesi (MRL) olmayan asansörlerin montajı ve bakımı</p>
        <p>– IS 15330:2003+A1:2012 Engelliler için asansör montajı ve bakımı- Uygulama Kuralları</p>
        <p>– IS 17386:2020 Doc ETD 25 (11992) Elektrikli Çekiş Asansörleri – Mevcut binadaki mevcut yolcu ve yük yolcu asansörlerinin değiştirilmesi</p>
      </div>

      <div className={styles["box"]}>
        <p>İlgili belgeler</p>
        <p className={styles["circle"]}>EJ 49000052 Güvenli inceleme süreci</p>
        <p className={styles["circle"]}>EJ 49000053 SAIS Ana Eğitmen ve SAIS Denetçisi için Araç kiti</p>
        <p className={styles["circle"]}>EJ 49000054 SAIS geçici bina güç kaynağı</p>
        <p className={styles["circle"]}>EJ 46200095 SAIS elektrik ölçümleri için destek bilgisi</p>
        <p className={styles["circle"]}>EJ 604722 Tamponlar için SAIS destek bilgisi</p>
        <p className={styles["circle"]}>EJ 604723 Aşırı hız regülatörü için SAIS destek bilgisi</p>
        <p className={styles["circle"]}>EJ 604724 Paraşütler için SAIS destek bilgisi</p>
        <p className={styles["circle"]}>EJ 41351507 Kapılar için SAIS destek bilgisi</p>
        <p className={styles["circle"]}>EJ 46200065 İnşaat asansörleri için SAIS bilgisi</p>
        <p className={styles["circle"]}>J 46200087 Emniyet bileşeni veri toplama LD 2014/33/EU</p>
        <p className={styles["circle"]}>J 43401256 Asansör/yürüyen merdiven kurucusu ve devir-teslimi için açık madde listesi NI/MOD/EI protokolü (OIL)</p>
        <p className={styles["circle"]}>K 40700046 Semboller ve işaretler - Kurumsal dokümantasyonda tanım ve kullanım</p>
        <p className={styles["circle"]}>J 632167 SYBOK Cilt 1 - Sözlük.</p>
      </div>

      <div className={styles["box"]}>
        <p>İlgili belgeler - UCMP</p>
        <p className={styles["circle"]}>EJ 46200098 UCMP Etiketleme, EN 81-20:2014 için</p>
      </div>

      <div className={styles["box"]}>
        <p>İlgili belgeler - CO SC 1'e özel</p>
        <p className={styles["circle"]}>EJ 41326605 CO SC 1 - Montaj</p>
        <p className={styles["circle"]}>EJ 41326606 CO SC 1 - Devreye alma</p>
        <p className={styles["circle"]}>K 42524827 CO SC 1 - Konfigürasyon ve diagnostik (hızlı referans)</p>
      </div>

      <div className={styles["box"]}>
        <p>İlgili belgeler - ES global</p>
        <p className={styles["circle"]}>J 41373569 CWT/kabin ile SAIS kabul testi talimatı - Paraşüt blokajı</p>
        <p className={styles["circle"]}>J 41378670 SA GED serisi - %100 GQ frenleme izi tablosu</p>
      </div>

      <div className={styles["box"]}>
        <p>İlgili belgeler - Ürün grubuna özel ES1 Rel. 02 global</p>
        <p className={styles["circle"]}>Q 43405888 ES1 Rel. 2.0 EMBD doküman listesi</p>
        <p className={styles["circle"]}>J 632003 STM / HQ - Haritalama</p>
        <p className={styles["circle"]}>S 639000 Temel şema emniyet zinciri EN 81-20, TSD21 olan/olmayan</p>
        <p className={styles["circle"]}>J 59502634 Paraşüt fren iz etiketi talimatı - SA WSB 01/02/05</p>
        <p className={styles["circle"]}>J 59503719 MM WCB 60x - SAIS kabul testi işlemi</p>
        <p className={styles["circle"]}>J 59503369 Paraşütleme etiketi talimatı - SA WCB 0X</p>
      </div>

      <div className={styles["box"]}>
        <p>İlgili belgeler - Ürün hattına özel ES5.0 Rel. 02 global</p>
        <p className={styles["circle"]}>Q 43406074 ES5.0 Rel. 02 EMBD doküman listesi</p>
        <p className={styles["circle"]}>J 59502634 Paraşüt fren iz etiketi talimatı - SA WSB 01/02/05</p>
        <p className={styles["circle"]}>J 59503719 MM WCB 60x - SAIS kabul testi işlemi</p>
        <p className={styles["circle"]}>J 59503369 Paraşütleme etiketi talimatı - SA WCB 0X</p>
      </div>
     
      <div className={styles["box"]}>
        <p>İlgili belgeler - Ürün hattına özel ES5 Rel. 02 global</p>
        <p className={styles["circle"]}>Q 43406320 ES5 Rel. 02 EMBD doküman listesi</p>
        <p className={styles["circle"]}>J 59502634 Paraşüt fren iz etiketi talimatı - SA WSB 01/02/05</p>
        <p className={styles["circle"]}>J 59503719 MM WCB 60x - SAIS kabul testi işlemi</p>
        <p className={styles["circle"]}>J 59503369 Paraşütleme etiketi talimatı - SA WCB 0X</p>
      </div>
     
      <div className={styles["box"]}>
        <p>İlgili belgeler - Ürün hattına spesifik EU - TSD21</p>
        <p className={styles["circle"]}>ES1 Rel. 01 (CO BIC 7 ile):</p>
        <p>– J 639000 Azaltılmış kuyu dibi / üst boşluk TSD21 ile, EN 81-20 için - İşlevsel tanım</p>
        <p>– S 639000 TSD21, EN 81-20 için - Temel emniyet devre şeması</p>
        <p>– K 43405553 EMBD TSD21, CO BIC 7 için - IMS saha dokümantasyonu</p>
        <p>– Q 43405585 ES1 Rel. 01 EMBD doküman listesi</p>
        <p className={styles["circle"]}>ES1 Rel. 02 (CO SC 1 panolu):</p>
        <p>– J 639000 Azaltılmış kuyu dibi / üst boşluk TSD21 ile, EN 81-20 için - İşlevsel tanım</p>
        <p>– S 639000 TSD21, EN 81-20 için - Temel emniyet devre şeması</p>
        <p>– K 43405965 EMBD TSD21, CO SC 1 için - IMS saha dokümantasyonu</p>
        <p>– Q 43405888 ES1 Rel. 02 EMBD doküman listesi.</p>
      </div>
     
      <div className={styles["box"]}>
        <p>İlgili belgeler - Ürün hattına spesifik AP</p>
        <p className={styles["circle"]}>J 45320660 İstenmeden kabin hareketi koruma araçları isim plakası</p>
        <p className={styles["circle"]}>J 45344872 Çin UCM alanı test gereklilikleri ve işlemi</p>
        <p className={styles["circle"]}>J 45345706 UCM Saha testi gereklilikleri ve prosedür – CO SC 1</p>
        <p className={styles["circle"]}>EC 45346258 CTE sertifikasyonu, UCMP için</p>
        <p className={styles["circle"]}>J 41712120 Emniyetli park servisi aktivasyonu sonrası tekrar çalıştırma</p>
      </div>

      <ol>
        <h4>İçindekiler</h4>
        <li>1 Ofis verileri</li>
        <li>1.1 Asansör verileri</li>
        <li>1.2 Ana asansör belgeleri</li>
        <li>1.3 Güç kaynağı</li>
        <li>1.4.a Onaylı emniyet bileşenleri</li>
        <li>1.4.b Onaylı diğer bileşenler</li>
        <li>2 Emniyetli inceleme süreci</li>
        <li>3 Belgelendirme</li>
        <li>4 Ana güç kaynağı</li>
        <li>5 Makine dairesi / kumanda panosu</li>
        <li>5.1 Erişim</li>
        <li>5.2 Ana şalter</li>
        <li>5.3 Elektriksel cihazlar</li>
        <li>5.4 Emniyet açıklıkları ve bileşenler</li>
        <li>5.5 Makinalar</li>
        <li>5.6 Tahliye cihazları</li>
        <li>6 Kabin çatısı</li>
        <li>7 Kuyu baş kısmı</li>
        <li>7.1 Üst boşluk alanı</li>
        <li>7.2 Makinalar</li>
        <li>7.3 Kabin aşırı hız regülatörü</li>
        <li>7.4 Karşı ağırlık aşırı hız regülatörü</li>
        <li>7.5 Askı yolları</li>
        <li>8 Kuyu (aşağıya doğru seyir)</li>
        <li>8.1 Kat kapıları</li>
        <li>8.2 Kuyu duvarı</li>
        <li>8.3 Karşı Ağırlık</li>
        <p>8.4 Karşı ağırlık paraşütü</p>
        <li>9 Kuyu dibi</li>
        <li>9.1 Kuyu dibi alanı</li>
        <li>9.2 Karşı ağırlık paraşütü</li>
        <li>9.3 Karşı ağırlık aşırı hız regülatörü</li>
        <li>9.4 Dengeleme yöntemleri</li>
        <li>9.5 Kabin tamponları ve karşı ağırlık tamponları</li>
        <li>9.6 Kabin aşırı hız regülatörü</li>
        <li>9.7 Kuyu dibi emniyet boşluğu</li>
        <li>9.8 Kabin paraşütü</li>
        <li>10 Kuyu (yukarıya doğru seyir)</li>
        <li>10.1 Kılavuz raylar ve kılavuz ray sabitleme</li>
        <li>10.2 Acil durum kapıları ve inceleme kapıları</li>
        <li>10.3 Kuyu</li>
        <li>11 Kabin</li>
        <li>12 Kabul testleri</li>
        <li>12.1 Dengeli yük testleri</li>
        <li>12.2 Tam yük testleri (%100 GQ)</li>
        <li>12.3 Aşırı yük testleri (GQ  %100)</li>
        <li>12.4 Sıfır yük testleri (%0 GQ)</li>
        <li>13 STM hizalama</li>
        <li>13.1 Makina dairesi / kuyu başlığı</li>
        <li>13.2 Kabin çatısı</li>
        <li>13.3 Karşı ağırlık</li>
        <li>13.4 Kuyu dibi</li>
        <li>14 Kabin kapıları ve kat kapıları</li>
        <li>15 Elektriksel ölçümler</li>
        <li>16 Son kontroller</li>
        <li>17 İnceleme imzalama</li>
      </ol>

      <div>
        <h3 className={styles["title"]}>1 Ofis verileri</h3>
        <hr />
      </div>

      
        <p>Ofis, SAIS incelemesi başlamadan önce gerekli asansör verilerini sağlamalıdı</p>

        <p>Asansörün son durumu</p>

        <div className={styles["box"]}>
          <h4>Bina güç kaynağı elektriksel montajı son durumda mı?</h4>
          <div>{radio("ofis1", { variant: "horizontal", inputArray: ["-", "Yes", "No"] })}
          <p>Asansörde EJ 49000054 içinde belirtildiği şekilde geçici bina güç kaynağı varsa HAYIR'ı seçin. HAYIR seçilirse, bina güç kaynağının elektriksel montajı kalıcı haline geldiğinde, süpervizör yeniden inceleme talep eder.</p>
          </div>
        </div>
        <div className={styles["box"]}>
          <h4>Tüm asansör son durumda mı?</h4>
          <div>{radio("ofis2", { variant: "horizontal", inputArray: ["-", "Yes", "No"] })}
          <p>Asansörün EJ 46200065 içinde belirtildiği şekilde inşaat asansörü olarak kullanılması amaçlanmışsa HAYIR'ı seçin. HAYIR seçilirse, asansör son
          durumundayken süpervizör bir yeniden inceleme talep eder.</p>
          </div>
        </div>

        <div>{inputLine("kuyu_dibi_tipi", "Kuyu dibi tipi", {dontUseSymbol:true})}
          <p className={styles["subtitle"]}>Standart kuyu dibi (SP) / Azaltılmış kuyu dibi (RP)</p>
        </div>

        <div>{inputLine("ust_bosluk_tipi", "Üst boşluk tipi", {dontUseSymbol:true})}
          <p className={styles["subtitle"]}>Standart üst boşluk (SH) / Azaltılmış üst boşluk (RH), kaldırma makinası kılavuz ray üzerinde / Alçak üst boşluk (LH), kaldırma makinası kılavuz ray arkasında</p>
        </div>

        <div>{inputLine("tsd_gerekli", "TSD gerekli", {dontUseSymbol:true})}</div>

        <div className={styles["box"]}>
          <h5>TSD21 monte edilmiş</h5>
          <img src={eye}  className={styles["eye-image"]} />
          <div>{radio("tsd21_monte_edilmis", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
            <p className={styles["subtitle"]}>Azaltılmış kuyu dibi ve/veya azaltılmış/alçak üst boşluklu asansör için EVET'i seçin.</p>
          </div>
        </div>

        <div className={styles["box"]}>
          <p>SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız:</p>
          <p className={styles["arrow"]}>J/R__46200174 SAIS Eki: ES1 için TSD21 belgesini kullanın.</p>
        </div>

        <div className={styles["box"]}>
          <h5>Kurulu cam bileşenler</h5>
          <img src={eye}  className={styles["eye-image"]} />
          <div>{radio("kurulu_cam_bilesenler", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>

        <div className={styles["box"]}>
          <p>SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız:</p>
          <p className={styles["arrow"]}>Belge J/R__46200113 SAIS Eki: Cam uygulamaları EN 81-20 / EN 81-50'yi kullanın.</p>
        </div>

        <div>{inputLine("engelli_kisiler_icin_erısebilirlik", "Engelli kişiler için erişilebilirlik (EN 81-70)", {dontUseSymbol:true})}</div>
        <div>{inputLine("ilgili_uluslararasi_standart1", "İlgili uluslararası standart (EN 81-70)", {dontUseSymbol:true})}</div>

        <div className={styles["box"]}>
          <h5>Engelli kişiler için erişilebilirlik (EN 81-70:2018)</h5>
          <img src={eye}  className={styles["eye-image"]} />
          <div>{radio("kurulu_cam_bilesenler2", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>

        <div className={styles["box"]}>
          <p>SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız:</p>
          <p className={styles["arrow"]}>J/R__46200203 SAIS Eki: Engelli kişiler için erişilebilirlik EN 81-70:2018 belgesini kullanın.</p>
        </div>

        <div>{inputLine("vandalizme_dayali_asansor1", "Vandalizme dayanıklı asansör (EN 81-71)", {dontUseSymbol:true})}</div>
        <div>{inputLine("vandalizme_dayali_asansor_kategorisi", "Vandalizme dayanıklı asansör kategorisi (EN 81-71)", {dontUseSymbol:true})}</div>

        <div className={styles["box"]}>
          <h5>Vandalizme dayanıklı asansör (EN 81-71:2018+AC:2019)</h5>
          <div>{radio("vandalizme_dayali_asansor2", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>

        <div className={styles["box"]}>
          <p>EN 81-71:2018+AC:2019, bu SAIS belgesiyle desteklenmemektedir.</p>
          <p className={styles["arrow"]}>EN 81-71:2018+AC:2019 gerekliliklerine ve yerel yasalar ve standartlarınıza başvurun.</p>
        </div>

        <div>{inputLine("itfaiyeci_asansoru_icin_ilgili_standart", "İtfaiyeci asansörü için ilgili standart", {dontUseSymbol:true})}
          <p className={styles["subtitle"]}>Ülkenizde geçerli olan standart</p>
        </div>
        <div>{inputLine("itfaiyeci_asansoru_secenegi", "İtfaiyeci asansörü seçeneği (EN 81-72)", {dontUseSymbol:true})}</div>
        
        <div className={styles["box"]}>
          <h5>İtfaiyeci Asansörü seçeneği mevcut mu (EN 81-72:2015 / EN 81-72:2020)</h5>
          <div>{radio("itfaiyeci_asansoru_secenegi_mevcut_mu", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
            <p className={styles["subtitle"]}>Yangın servis tipi BR2</p>
          </div>
        </div>

        <div className={styles["box"]}>
          <p className={styles["arrow"]}>Şu belgeyi kullanın: J/R__46200108 SAIS Eki: İtfaiyeci asansörü EN 81-72:2015 / EN 81-72:2020.</p>
        </div>

        <div className={styles["box"]}>
          <p>Yangın servis tipi BR2 tanımı</p>
          <p>İtfaiyeci tahliye operasyonu</p>
          <p className={styles["circle"]}>İtfaiyeci asansörü itfaiyeci tahliye katına tahliye edilir ve burada park eder.</p>
          <p className={styles["circle"]}>Gruptaki kalan asansörler normal çalışmada seyir yapmaya devam eder.</p>
          <p>İtfaiyeci çalışması</p>
          <p className={styles["circle"]}>İtfaiyeci asansörü, itfaiye acil seyri için kullanılabilir.</p>
          <p className={styles["circle"]}>Gruptaki kalan asansörler normal çalışmada seyir yapmaya devam eder.</p>
        </div>

        <div>{inputLine("asansorun_yangin_durumunda_davranisi_secenegi", "Asansörün Yangın Durumunda Davranışı Seçeneği (EN 81-73)", {dontUseSymbol:true})}</div>

       <div>{inputLine("yangin_servis_tipi", "Yangın servis tipi", {dontUseSymbol:true})}</div>

       <div>
        <h5>Asansörün Yangın Durumunda Davranışı seçeneği mevcut mu (EN 81-73:2016 / EN 81-73:2020)</h5>
        <img src={eye}  className={styles["eye-image"]} />
        <div>{radio("urunhatti2", { variant: "circle", inputArray: 
          ["Evet",
            "Hayır"
           ] })}
        </div>
        <p className={styles["subtitle"]}>Yangın servis tipi BR1</p>
      </div>

        <div className={styles["box"]}>
          <p>SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız:</p>
          <p className={styles["arrow"]}>Şu belgeyi kullanın: J/R__46200109 SAIS Eki: Asansörün yangın durumunda davranışı EN 81-73:2016 / EN 81-73:2020.</p>
        </div>
        <div className={styles["box"]}>
          <p>Yangın servis tipi BR1 tanımı</p>
          <p>Yangın tahliye operasyonu</p>
          <p className={styles["circle"]}>Tek asansör için: Asansör yangın tahliye katına tahliye edilir ve burada park eder.</p>
          <p className={styles["circle"]}>Grup asansörleri için: Gruptaki tüm asansörler yangın tahliye katına tahliye edilir ve burada park eder.</p>
        </div>

        <div>{inputLine("asansorde_sismik_kosullarda_calisma", "Asansörde sismik koşullarda çalışma (EN 81-77)", {dontUseSymbol:true})}</div>
        <div>{inputLine("ilgili_uluslararasi_standart2", "İlgili uluslararası standart (EN 81-77)", {dontUseSymbol:true})}</div>
      
        <div className={styles["box"]}>
          <h5>Sismik koşullarda çalışma opsiyonu olan asansör (EN 81-77:2018)</h5>
          <img src={eye}  className={styles["eye-image"]} />
          <div>{radio("sismik_kosullarda_calısma_posiyonu_olan_asansor", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>

        <div className={styles["box"]}>
          <p>SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız:</p>
          <p className={styles["arrow"]}>Şu belgeyi kullanın: J/R__462000212 Eki: Sismik koşullarda asansör EN 81-77:2018.</p>
        </div>


        <div className={styles["box"]}>
        <h3 className={styles["title"]}>1.1 Asansör verileri</h3>
        <hr />
      </div>
      <div>{inputLine("anma_yuku_gq", "Anma yükü GQ (kg)")}</div>
      <div>{inputLine("yuk_dengeleme_kg", "Yük dengeleme KG (% GQ) ")}</div>
      <div>{inputLine("max_passanger", "Maksimum yolcu sayısı ZQG (-)")}</div>
      <div>{inputLine("anma_hizi_vkn", "Anma hızı VKN (m/s)")}</div>
      <div>{inputLine("seyiryuksekligi_hq", "Seyir yüksekliği HQ (m)")}</div>


      <div className={styles["box"]}>
        <p>Kabul testlerinin %100 GQ ile yapıldığı konfigürasyon</p>
        <p>Şu kriterler karşılanmalıdır:</p>
        <p className={styles["circle"]}>Mevcut EU Tip İncelemesi EN 81 gerekliliklerinden sapmayı mümkün kılar. KG'niz mevcut EU Tip İnceleme Sertifikasını uygular. KG belgeniz EN 81
        standardından sapmayı mümkün kılar.</p>
        <p className={styles["circle"]}>GQ ≤ 1360 kg</p>
        <p className={styles["circle"]}>VKN ≤ 1,75 m/s</p>
        <p className={styles["circle"]}>HQ {">"} 3,50 m</p>
        <p className={styles["circle"]}>DR VAF monte edilmiştir</p>
        <p className={styles["circle"]}>SA GED 10 veya SA GED 20 monte edilmiştir.</p>
        <p className={styles["arrow"]}>TÜM kriterler karşılanmışsa:</p>
        <p>– Belirtilen SAIS kontrolleri ve testlerini %125 GQ yerine %100 GQ ile yapmanıza izin verilir.</p>
        <p>– SAIS kontrolleri ve testlerini %125 GQ ile yapmak gerekli değildir (aşırı yük testleri).</p>
        <p className={styles["arrow"]}>Kriterlerden BİRİ KARŞILANMAZSA belirtilen SAIS kontrolleri ve testlerini %125 GQ ile yapmanız gerekir (aşırı yük testleri).</p>
      </div>

      <div className={styles["box"]}>
          <h5>Mevcut EU Tip İncelemesi EN 81 gerekliliklerinden sapmayı mümkün kılar. KG'niz mevcut EU Tip İnceleme Sertifikasını uygular. KG belgeniz EN 81 standardından sapmayı mümkün kılar.</h5>
          <img src={eye}  className={styles["eye-image"]} />
          <div>{radio("mevcut_eu_tip_incelemesi_eu81_gereklilikleri", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
            <p className={styles["subtitle"]}>HAYIR seçerseniz aşağıdaki listede belirtilen SAIS kontrollerini ve testlerini yapmanız gerekir.</p>
          </div>
        </div>

        <div className={styles["box"]}>
          <p>KG belgeniz mevcut EU Tip İnceleme Sertifikasında belirtilen EN 81 standardından sapmaya izin VERMİYORSA</p>
          <p className={styles["circle"]}>Şu SAIS kontrollerini ve testlerini yapmanız gerekir:</p>
          <p>– 7.5.4 Yukarı yöne giden kabin aşırı hız koruma cihazı</p>
          <p>– 5.3.4.a Yerçekimiyle yukarı hareket (sadece EN 81-20 için)</p>
          <p>– 7.6.1.b Yukarı yönde istenmeyen kabin hareketi</p>
          <p>– 5.3.6 %125 GQ / VKN ile tam fren testi (aşağıya doğru)</p>
          <p>– 8.3.2 %110 GQ yük boşaltma sırasında seviyeleme doğruluğu.</p>
          <p className={styles["circle"]}>Şu SAIS kontrollerini ve testlerini yapmanız gerekir:</p>
          <p>– 7.2.8 Kabin aşırı hız regülatörünün mekanik tetikleme hızı (VCA1)</p>
          <p>– 7.1.8.b %125 GQ / VKN ile kabin paraşüt testi</p>
        </div>

        <div className={styles["box"]}>
          <h5>GQ ≤ 1360 kg</h5>
          <div>{radio("gq_kucuktur_1360kg", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>
        <div className={styles["box"]}>
          <h5>VKN ≤ 1.75 m/s</h5>
          <div>{radio("vkn_kucukesit_1.75ms", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>
        <div className={styles["box"]}>
          <h5>HQ {">"} 3.50 m</h5>
          <div>{radio("hq_buyuktur_3.50m", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>
        <div className={styles["box"]}>
          <h5>DR VAF monte edilmiştir</h5>
          <div>{radio("drvaf_monte_edilmistır.50m", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>
        <div className={styles["box"]}>
          <h5>SA GED 10 veya SA GED 20 monte edilmiştir</h5>
          <div>{radio("saged10_saged20_monte_edilmistir", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>

        <div className={styles["box"]}>
          <h4>Belirtilen SAIS kontrolleri ve testlerini %100 GQ ile mi yapacaksınız?</h4>
          <img src={eye}  className={styles["eye-image"]} />
          <div>{radio("belirtilen_sais_kontrolleri_100gq", { variant: "horizontal", inputArray: ["-", "Yes", "No"] })}
          <p>Bu konfigürasyonda belirtilen SAIS Kontrolleri ve testlerini %125 GQ yerine %100 GQ ile yapmaya teknik ve yasal olarak izin verilir..</p>
          </div>
        </div>

        <div className={styles["box"]}>
          <p>Belirtilen SAIS kontrol ve testlerini %100 GQ ile yapmanıza teknik ve yasal olarak izin veriliyorsa</p>
          <p className={styles["circle"]}>SAIS kontrolleri ve testlerini %125 GQ ile yapmak gerekli değildir (aşırı yük testleri).</p>
          <p className={styles["circle"]}>Şu SAIS kontrol ve testlerini %125 GQ yerine %100 GQ ile yapmaya izin verilir:</p>
          <p>– 7.1.8.a %100 GQ / VCA1 ile kabin paraşüt testi.</p>
        </div>

        <div className={styles["box"]}>
          <p>Belirtilen SAIS kontrol ve testlerini %125 GQ ile yapmanız gerekiyorsa (aşırı yük testleri)</p>
          <p className={styles["circle"]}>Şu SAIS kontrollerini ve testlerini yapmanız gerekir:</p>
          <p>– 7.2.8 Kabin aşırı hız regülatörünün mekanik tetikleme hızı (VCA1)</p>
          <p>– 7.1.8.b %125 GQ / VKN ile kabin paraşüt testi</p>
        </div>
      

      <div>{inputLine("durak_sayisi", "Durak sayısı ZE (-)")}</div>
      <div>{inputLine("bos_kabin_agirligi", "Boş kabin ağırlığı GK (kg)")}</div>
      <div>{inputLine("kabin_parasutune_etki_eden_kg", "Kabin paraşütüne etki eden kütleler GKU (kg)")}</div>
      <div>{inputLine("karsi_agirlik_agirligi", "Karşı ağırlık ağırlığı GG (kg)")}</div>
      <div>{inputLine("karsi_agirlik_parasutune_etki_eden_kg", "Karşı ağırlık paraşütüne etki eden kütleler GGU (kg)")}</div>
      <div>
        <h5>Çok sayıda asansör</h5>
        <img src={eye}  className={styles["eye-image"]} />
        <div>{radio("cok_sayida_asansor", { variant: "circle", inputArray: ["Evet", "Hayır"] })}</div>
      </div>
      <div>
        <h5>Makina dairesi</h5>
        <img src={eye}  className={styles["eye-image"]} />
        <div>{radio("makine_dairesi", { variant: "circle", inputArray: ["Evet (MR)", "Hayır (MRL)"] })}</div>
      </div>

      <div>{inputLine("machine_type", "Makina tipi")}</div>
      <div>{inputLine("makina_fren_tipi", "Makina Freni Tipi (ACOP)")}</div>
      <div>{inputLine("nominal_fren_torku", "Nominal fren torku (Nm)")}</div>
      <div>{inputLine("kontrol_tipi", "Kontrol tipi")}</div>
      <div>{inputLine("tahrik_donusturucu_tipi2", "Tahrik dönüştürücü tipi")}</div>
      <div>{inputLine("stm_tipi", "STM tipi")}</div>
      <div>{inputLine("stm_adedi1", "STM adedi ZZ (-)")}</div>
      <div>{inputLine("dengeleme_zinciri_tipi", "Dengeleme zinciri tipi")}</div>
      <div>{inputLine("dengeleme_zinciri_miktarı", "Dengeleme zinciri miktarı ZUK (-)")}</div>
      <div>{inputLine("kabin_kilavuz_ray_tipi2", "Kabin kılavuz ray tipi")}</div>
      <div>{inputLine("karsi_agirlik_kilavuz_ray_tipi2", "Karşı ağırlık kılavuz ray tipi")}</div>
      <div>{inputLine("kabin_asiri_hiz_regulator_tipi", "Kabin aşırı hız regülatörü tipi")}</div>
      <div>{inputLine("kabin_parasut_tipi", "Kabin paraşütü tipi")}</div>

      <div className={styles["box"]}>
          <h5>Karşı ağırlıkta mekanik emniyet sistemi (aşırı hız regülatörü ve paraşüt)</h5>
          <img src={eye}  className={styles["eye-image"]} />
          <div>{radio("karsi_agirlikta_mekanik_emniyet_sistemi", { variant: "circle", inputArray: 
            ["Evet",
              "Hayır"
            ] })}
          </div>
        </div>

        <div>{inputLine("karsi_agirlik_asiri_hiz_regulator_tipi", "Karşı ağırlık aşırı hız regülatörü tipi")}</div>
        <div>{inputLine("karsi_agirlik_parasut_tipi2", "Karşı ağırlık paraşüt tipi")}</div>
        <div>{inputLine("kabin_tampon_tipi2", "Kabin tampon tipi")}</div>
        <div>{inputLine("kabin_tamponu_adedi2", "Kabin tamponu adedi ZPK (-)")}</div>
        <div>{inputLine("karsi_agirlik_tampon_tipi2", "Karşı ağırlık tampon tipi")}</div>
        <div>{inputLine("karsi_agirlik_tampon_adedi_zpg2", "Karşı ağırlık tampon adedi ZPG (-) ")}</div>
        <div>{inputLine("kat_sayisi_tipi", "Kat kapısı tipi")}</div>
        <div>{inputLine("kat_kapisinin_yangin_derecesi2", "Kat kapısının yangın derecesi")}</div>
        <div>{inputLine("kat_kapisi_kilidi_sertifika_no", "Kat kapısı kilidi sertifika numarası")}</div>


      <div>
        <h5>Kat kapısı kilidi tipi </h5>
        <div>{radio("kat_kapisi_kilidi_tipi", { variant: "circle", inputArray: 
          [ "DO WIA-AP (LD Wittur Augusta) tip 11/_ (T2) - ATV 617 / EU-DL 617",
            "DO WIA-AP (LD Wittur Augusta) tip 01/C (C2) - ATV 616 / EU-DL 616",
            "DO WMD-AP (LD Wittur Augusta MD) tip 01/C (C2) - EU-DL 810",
            "DO WIV-EU (LD Wittur EVO) 11/_ (T2) - ATV 617 / EU-DL 617",
            "DO WIV-LA (LD Wittur EVO) tip 11/_ (T2) - ATV 801",
            "DO WIV-EU (LD Wittur EVO) tip 01/C (C2) - ATV 616 / EU-DL 616",
            "DO WIV-LA (LD Wittur EVO) tip 01/C (C2) - ATV 802",
            "DO WIH-AP (LD Wittur Hydra) tip 11/_ (T2) - ATV 285",
            "DO WIH-AP (LD Wittur Hydra) tip 01/C (C2) - ATV 286",
            "DO WIH-AP (LD Wittur Hydra) tip 41/C (CT4) - ATV 295",
            "DO WIH-AP (LD Wittur Hydra) tip 41/E (CT4) - ATV 295",
            "DO WIH-AP (LD Wittur Hydra) tip 43/R (CT4) - ATV 364",
            "DO WIH-LA (LD Wittur Hydra Scorpion) tip 11/_M (T2) - ATV 439",
            "DO WIH-LA (LD Wittur Hydra Scorpion) tip 11/_M (T2) - ATV 731",
            "DO WIH-LA (LD Wittur Hydra Scorpion) tip 01/_M (C2) - ATV 732",
            "DO WIH-LA (LD Wittur Hydra Scorpion) tip 01/CM (C2) - ATV 438",
            "DO WIC-AP (LD Wittur Core) tip 01/C (C2) - EU-DL 1034",
            "DO WCM (LD Wittur Core MD) tip 11/_ (T2) - Sertifika numarası bekleniyor",
            "DO WCM (LD Wittur Core MD) tip 01/C (C2) - EU-DL 1066",
            "DO WIF (Wittur Fineline) (C2) - TÜV-A-AT-1-07-0147-EUTV-4",
            "DO WIF (Wittur Fineline) (CT4) - TÜV-A-AT-1-07-0147-EUTV-4",
            "DO SEC (Sematic) tip H153ABVX - CA50.00415",
            "DO SEC (Sematic) tip H153ABWX - CA50.00415",
            "DO SEC (Sematic) tip H153ACTX - CA50.00415",
            "DO SEC (Sematic) tip H153ADOX - CA50.00415",
            "DO SEG (Sematic) tip H153ABIX (T2, C2, CT4) - CA50.00388",
            "DO SEG (Sematic) tip H153ACSX (T2, C2, CT4) - CA50.00388",
            "DO SEG (Sematic) tip H153ADNX (T2, C2, CT4) - CA50.00388",
            "DO FEC (Fermator) tip 160/10/40 - NL 16-400-1002-075-04 / ES025684-1035",
            "DO FEL 440 (Fermator Elite C&M) tip Basic+ (T2) - NL16-400-1002-075-09",
            "DO FEL 440 (Fermator Elite C&M) tip Basic+ (CT4) - NL16-400-1002-075-09",
            "DO VL 15 (LD Varidor) (T2) - EU-DL 1069",
            "DO VL 15 (LD Varidor) (C2) - EU-DL 1070",
            "DO NST tip MKG161-17 (C2) - EU-DL 1063",
            "DO NST-CN tip MKG161-17 (C2) - TSX F340-022-2018-0095",
            "DO NSM 440 tip MKG161-17 (C2) - EU-DL 1063",
            "DO QKS 8 (Schindler Ets Henri Peignen) tip T11 - 0071/0199",
            "DO QKS 8 (Schindler Ets Henri Peignen) tip C11 - 0071/0199",
            "DO QKS 11 (Schindler Ets Henri Peignen) T11 - 0071/0199",
            "DO QKS 11 (Schindler Ets Henri Peignen) C11 - 0071/0199",
           "Diğer"
           ] })}<span className={styles["subtitle"]}>Asansör spesifikasyonuna bakın.</span></div>
           <div style={{marginTop:"15px"}}>{inputLine("diğer_kat_kapisi", "Diğer")}<span className={styles["subtitle"]}>Kat kapısı kilidinin tipini belirtin.</span></div>
      </div>


      <div>{inputLine("kabin_kapisi_kilidi", "Kabin kapısı kilidi")}</div>
      <div>
        <h5>Kabin kapısı kilidi tipi</h5>
        <div>{radio("kabin_kapisi_kilidi_sec", { variant: "circle", inputArray: 
          [ "DO VAR 15 için CDL",
            "DO VAR 35 için CDL",
            "DO WIF için CDL (Wittur Fineline)",
            "DO SEC için CDL (Sematic)",
            "DO FEL 430 için CDL (Fermator Elite)",
            "DO FEP için CDL (Fermator Compact PM150)",
           "Diğer"
           ] })}
           <p className={styles["subtitle"]}>Asansör spesifikasyonuna bakın.</p>
           </div>
      </div>

      <div>{inputLine("diger_kabin_kapisi_kilidi", "Diğer")}
        <span className={styles["subtitle"]}>Kabin kapısı kilidi tipini belirtin.</span>
      </div>

      <div>{inputLine("izleme_fonksiyonları", "İzleme fonksiyonları")}</div>
      <div>{inputLine("kuyu_bilgi_sistemi", "Kuyu bilgi sistemi")}</div>

      <div className={styles["box"]}>
        <h3 className={styles["title"]}>1.2 Ana asansör belgeleri </h3>
        <hr />
      </div>

      <div>{inputLine("onayli_yerlesim_cizimi_cizim_no", "Onaylı yerleşim çizimi - Çizim numaraları (-) ")}</div>
      <div>{inputLine("onayli_kablolama_semasi_cizim_no", "Onaylı kablolama şeması - Çizim numaraları (-) ")}</div>
      
      <div className={styles["box"]}>
        <h3 className={styles["title"]}>1.3 Güç Kaynağı </h3>
        <hr />
      </div>

      <div>{inputLine("topraklama_sistemi_tipi", "Topraklama sistemi tipi")}</div>
      <div>{inputLine("voltaj_u0u", "Voltaj U0/U (V)")}</div>
      <div>{inputLine("frekans_hz", "Frekans, f (Hz)")}</div>
      <div>{inputLine("jh_varyanti", "JH varyantı")}</div>
      <div>{inputLine("sabit_hiz_inna_sirasındaki_anma_ana_sebeke_akimi", "Sabit hız INN (A) sırasındaki anma ana şebeke akımı")}</div>
      <div>{inputLine("ivleme_ina_sirasındaki_ana_sebeke_akimi", "İvmelenme INA (A) sırasındaki ana şebeke akımı")}</div>
      <div>{inputLine("sih_icin_izin_verilen_max_sigorta_derecesi", "SIH (A) için izin verilen maksimum sigorta derecesi", {dontUseSymbol:true} )}
        <p className={styles["subtitle"]}>Sadece koruyucu işlevi olmayan ana şalter (JH) (bina tarafında SAIS kontrolü) için gereklidir</p>
      </div>
      <div>{inputLine("isik_salteri_tipi", "Işık şalteri tipi (SIL)")}</div>
      <div>{inputLine("kontrol_salteri_tipi", "Kontrol şalteri tipi (SIS)")}
      <p className={styles["subtitle"]}>Örnek: C6A, 30 mA tip A = 6A C tipi, IΔN 30mA tip A</p>
      </div>
      <div>{inputLine("schindler_tarafindan_saglanan_kuyu_aydinlatma", "Schindler tarafından sağlanan kuyu aydınlatma")}
        <p className={styles["subtitle"]}>Sipariş edilirse Schindler tarafından sağlanır / Sipariş edilmezse Schindler tarafından sağlanmaz.</p>
      </div>
      <div>{inputLine("kuyu_aydinlatma_salteri_tipi", "Kuyu aydınlatma şalteri tipi (SIBS)")}</div>

      <div className={styles["box"]}>
        <h3 className={styles["title"]}>1.4.a Onaylı emniyet bileşenleri </h3>
        <hr />
      </div>

      <div className={styles["box"]}>
          <p>Onaylı emniyet bileşenlerinin listesi - ES1 Rel. 02</p>
          <p>Geçerli sistem sertifikası, EC/EU Tip İnceleme Sertifikalarının güncel versiyonlarını içerir.</p>
          <p>Kat kapıları için kilitleme cihazı</p>
          <p className={styles["circle"]}>DO WIA-AP (LD Wittur Augusta) tip 01/C (C2) - ATV 616 / EU-DL 616</p>
          <p className={styles["circle"]}>DO WMD-AP (LD Wittur Augusta MD) tip 01/C (C2) - EU-DL 810</p>
          <p className={styles["circle"]}>DO WIV-EU (LD Wittur EVO) 11/_ (T2) - ATV 617 / EU-DL 617</p>
          <p className={styles["circle"]}>DO WIV-LA (LD Wittur EVO) tip 11/_ (T2) - ATV 801</p>
          <p className={styles["circle"]}>DO WIV-EU (LD Wittur EVO) tip 01/C (C2) - ATV 616 / EU-DL 616</p>
          <p className={styles["circle"]}>DO WIV-LA (LD Wittur EVO) tip 01/C (C2) - ATV 802</p>
          <p className={styles["circle"]}>DO WIC-AP (LD Wittur Core) tip 01/C (C2) - EU-DL 1034</p>
          <p className={styles["circle"]}>DO WCM (LD Wittur Core MD) tip 01/C (C2) - EU-DL 1066</p>
          <p className={styles["circle"]}>DO WIF (Wittur Fineline) (C2) - TÜV-A-AT-1-07-0147-EUTV-4</p>
          <p className={styles["circle"]}>DO WIF (Wittur Fineline) (CT4) - TÜV-A-AT-1-07-0147-EUTV-4</p>
          <p className={styles["circle"]}>DO SEC (Sematic) tip H153ABVX - CA50.00415</p>
          <p className={styles["circle"]}>DO SEC (Sematic) tip H153ABWX - CA50.00415</p>
          <p className={styles["circle"]}>DO SEC (Sematic) tip H153ACTX - CA50.00415</p>
          <p className={styles["circle"]}>DO SEC (Sematic) tip H153ADOX - CA50.00415</p>
          <p className={styles["circle"]}>DO FEC (Fermator) tip 160/10/40 - NL 16-400-1002-075-04 / ES025684-1035</p>
          <p className={styles["circle"]}>DO FEL 440 (Fermator Elite C&M) tip Basic+ (T2) - NL16-400-1002-075-09</p>
          <p className={styles["circle"]}>DO FEL 440 (Fermator Elite C&M) tip Basic+ (CT4) - NL16-400-1002-075-09</p>
          <p className={styles["circle"]}>DO NST tip MKG161-17 (C2) - EU-DL 1063</p>
          <p className={styles["circle"]}>DO NST-CN tip MKG161-17 (C2) - TSX F340-022-2018-0095</p>
          <p className={styles["circle"]}>DO QKS 8 (Schindler Ets Henri Peignen) tip T11 - 0071/0199</p>
          <p className={styles["circle"]}>DO QKS 8 (Schindler Ets Henri Peignen) tip C11 - 0071/0199</p>
          <p className={styles["circle"]}>DO QKS 11 (Schindler Ets Henri Peignen) tip T11 - 0071/0199</p>
          <p className={styles["circle"]}>DO QKS 11 (Schindler Ets Henri Peignen) tip C11 - 0071/0199</p>
          <p>Yukarı yönde giden kabin aşırı hız koruması</p>
          <p className={styles["circle"]}>Makina freni Leroy Somer FCRD90 / FCRD112 - NL04-400-1002-051-01</p>
          <p className={styles["circle"]}>Makina freni Leroy Somer FCRD90 G6 / FCRD112 G6 - NL19-400-1002-051-02</p>
          <p>Aşırı hız sınırlama cihazı</p>
          <p className={styles["circle"]}>Aşırı hız regülatörü SA GBP 201 - AGB 081 / EU-OG 081</p>
          <p>Paraşüt</p>
          <p className={styles["circle"]}>SA GED 10 - ABFV 489 / EU-SG 489</p>
          <p className={styles["circle"]}>SA RF 0002 - AFV 765 / EU-SG 765 / EU-SG 1037 / EU-SG 1042 / TSX F320-038-2017-1109</p>
          <p className={styles["circle"]}>SA WSB 05 (SA SGB 05) - TÜV-A-AT-1/99/104-CEFV</p>
          <p className={styles["circle"]}>SA WCB 01 (SA CSGB-01) - TÜV-A-AT-1/12/0314-EUFV</p>
          <p>Tampon</p>
          <p className={styles["circle"]}>Enerji birikimi SA AC 300400L (HPH = 72 mm) - 44 208 17 053401 / Ø 100 x 80</p>
          <p className={styles["circle"]}>Enerji birikimi SA AC 300401L (HPH = 72 mm) - 44 208 17 053403 / Ø 100 x 80</p>
          <p className={styles["circle"]}>Enerji birikimi SA AC 300402L (HPH = 72 mm) - 44 208 17 053404 / Ø 125 x 80</p>
          <p className={styles["circle"]}>Enerji birikimi SA AC 300403L (HPH = 72 mm) - 44 208 17 053406 / Ø 165 x 80</p>
          <p className={styles["circle"]}>Enerji birikimi SA PS D0 (HPH = 72 mm) - 44 208 12 1261 96 / 44 208 12 1262 03 / Ø 80 x 80</p>
          <p className={styles["circle"]}>Enerji birikimi SA PS D1 (HPH = 72 mm) - 44 208 12 1261 97 / 44 208 12 1262 05 / Ø 80 x 80</p>
          <p className={styles["circle"]}>Enerji birikimi SA PS D2 (HPH = 72 mm) - 44 208 12 1261 98 / 44 208 12 1262 06 / Ø 100 x 80</p>
          <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 16.2 (HPH = 173 mm) - BSI-LB-001 / TÜV-A-AT-1-19-0615-EUPU</p>
          <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 18.2 (HPH = 219 mm) - BSI-LB-002 / TÜV-A-AT-1-19-0615-EUPU</p>
          <p>Enerji dağıtma SA OLE LSB 10.A (HPH = 74 mm) - BSI-LB-559532 / TÜV-A-AT-1-19-0613-EUPU</p>
          <p className={styles["circle"]}>Enerji dağıtma SA OLE LSB 16.B (HPH = 175 mm) - BSI-LB-570095 / TÜV-A-AT-1-19-0613-EUPU</p>
          <p className={styles["circle"]}>Enerji dağıtma SA OLE LSB 18.B (HPH = 221 mm) - BSI-LB-570096 / TÜV-A-AT-1-19-0613-EUPU</p>
          <p className={styles["circle"]}>Enerji dağıtma SA HLO OBC 10B (HPH = 65 mm) - 1223/TE/15.03.2019</p>
          <p className={styles["circle"]}>Enerji dağıtma SA HLO OBC 15C (HPH = 160 mm) - 1224/TE/15.03.2019</p>
          <p className={styles["circle"]}>Enerji dağıtma SA HLO OBC 16C (HPH = 175 mm) - 1225/TE/15.03.2019</p>
          <p className={styles["circle"]}>Enerji dağıtma SA HLO OBC 18C (HPH = 210 mm) - 1226/TE/15.03.2019</p>
          <p className={styles["circle"]}>Enerji dağıtma SA HNO HYF 210C1 (HPH = 210 mm) - EU-B 067</p>
          <p>Elektronik emniyet bileşenleri</p>
          <p className={styles["circle"]}>Kuyu bilgi sistemi AC GSI 100 / AC GSI 101 - 01/208/4A/6136.xx/19</p>
          <p className={styles["circle"]}>Kuyu bilgi sistemi AC GSI 200 / AC GSI 201 - 01/208/4A/6133.xx/18 (TSX F360-014-2018-0062)</p>
      </div>


      <div className={styles["box"]}>
        <p>Onaylı emniyet bileşenlerinin listesi - ES5.0 Rel. 02</p>
        <p>Geçerli sistem sertifikası, EC/EU Tip İnceleme Sertifikalarının güncel versiyonlarını içerir.</p>
        <p>Kat kapıları için kilitleme cihazı</p>
        <p className={styles["circle"]}>DO WIA-AP (LD Wittur Augusta) tip 11/_ (T2) - ATV 617 / EU-DL 617</p>
        <p className={styles["circle"]}>DO WIA-AP (LD Wittur Augusta) tip 01/C (C2) - ATV 616 / EU-DL 616</p>
        <p className={styles["circle"]}>DO WMD-AP (LD Wittur Augusta MD) tip 01/C (C2) - EU-DL 810</p>
        <p className={styles["circle"]}>DO WCM (LD Wittur Core MD) tip 01/C (C2) - EU-DL 1066</p>
        <p className={styles["circle"]}>DO WIV-EU (LD Wittur EVO) 11/_ (T2) - ATV 617 / EU-DL 617</p>
        <p className={styles["circle"]}>DO WIV-LA (LD Wittur EVO) tip 11/_ (T2) - ATV 801</p>
        <p className={styles["circle"]}>DO WIV-EU (LD Wittur EVO) tip 01/C (C2) - ATV 616 / EU-DL 616</p>
        <p className={styles["circle"]}>DO WIV-LA (LD Wittur EVO) tip 01/C (C2) - ATV 802</p>
        <p className={styles["circle"]}>DO WIH-AP (LD Wittur Hydra) tip 11/_ (T2) - ATV 285</p>
        <p className={styles["circle"]}>DO WIH-AP (LD Wittur Hydra) tip 01/C (C2) - ATV 286</p>
        <p className={styles["circle"]}>DO WIH-LA (LD Wittur Hydra Scorpion) tip 11/_M (T2) - ATV 439</p>
        <p className={styles["circle"]}>DO WIH-LA (LD Wittur Hydra Scorpion) tip 11/_M (T2) - ATV 731</p>
        <p className={styles["circle"]}>DO WIH-LA (LD Wittur Hydra Scorpion) tip 01/_M (C2) - ATV 732</p>
        <p className={styles["circle"]}>DO WIH-LA (LD Wittur Hydra Scorpion) tip 01/CM (C2) - ATV 438</p>
        <p className={styles["circle"]}>DO SEG (Sematic) tip H153ACSX (T2, C2) - CA50.00388</p>
        <p className={styles["circle"]}>DO FEC (Fermator) tip 160/10/40 - NL16-400-1002-075-04 / ES025684-1035</p>
        <p className={styles["circle"]}>DO VL 15 (LD Varidor) (T2) - EU-DL 1069</p>
        <p className={styles["circle"]}>DO VL 15 (LD Varidor) (C2) - EU-DL 1070</p>
        <p className={styles["circle"]}>DO NST tip MKG161-17 (C2) - EU-DL 1063</p>
        <p className={styles["circle"]}>DO NST-CN tip MKG161-17 (C2) - TSX F340-022-2018-0095</p>
        <p className={styles["circle"]}>DO NSM 440 tip MKG161-17 (C2) - EU-DL 1063</p>
        <p>Yukarı yönde giden kabin aşırı hız koruması</p>
        <p className={styles["circle"]}>Makina freni Kendrion 78 11029B05 - 01/208/4A/17/7057</p>
        <p className={styles["circle"]}>Makina freni Leroy Somer FCRD90 / FCRD112 - NL04-400-1002-051-01</p>
        <p className={styles["circle"]}>Makina freni Leroy Somer FCRD90 G6 / FCRD112 G6 - NL19-400-1002-051-02</p>
        <p>İstenmeyen kabin hareketine karşı koruma - NL18-400-1002-004-85</p>
        <p>Aşırı hız sınırlama cihazı</p>
        <p className={styles["circle"]}>SA GBP 201 - AGB 081 / EU-OG 081</p>
        <p className={styles["circle"]}>SA WOL 35 - TÜV-A-AT-1/98/101 CEGB / TÜV-A-AT-1/17/0519 EUGB</p>
        <p>Paraşüt</p>
        <p className={styles["circle"]}>SA GED 10 - ABFV 489 / EU-SG 489</p>
        <p className={styles["circle"]}>SA GED 20 - ABFV 491 / EU-SG 491</p>
        <p className={styles["circle"]}>SA WSB 01 (SA SGB 01) - TÜV-A-AT-1/99/101-CEFV</p>
        <p className={styles["circle"]}>SA WSB 02 (SA SGB 02) - TÜV-A-AT-1/99/102-CEFV</p>
        <p className={styles["circle"]}>SA WSB 05 (SA SGB 05) - TÜV-A-AT-1/99/104-CEFV</p>
        <p className={styles["circle"]}>SA WCB 01 (SA CSGB-01) - TÜV-A-AT-1/12/0314-EUFV</p>
        <p className={styles["circle"]}>SA WCB 02 (SA CSGB-02) - TÜV-A-AT-1/12/0396-EUFV</p>
        <p className={styles["circle"]}>SA WCB 03 (SA CSGB-03) - TÜV-A-AT-1/16/0454-EUFV</p>
        <p>Tampon</p>
        <p className={styles["circle"]}>Enerji birikimi SA PS D2 (HPH = 72 mm) - 44 208 12 1261 98 / 44 208 12 1262 06 / Ø 100 x 80</p>
        <p className={styles["circle"]}>Enerji birikimi SA PS D3 (HPH = 72 mm) - 44 208 12 1261 99 / 44 208 12 1262 07 / Ø 125 x 80</p>
        <p className={styles["circle"]}>Enerji birikimi SA AC 300401L (HPH = 72 mm) - 44 208 17 053403 / Ø 100 x 80</p>
        <p className={styles["circle"]}>Enerji birikimi SA AC 300402L (HPH = 72 mm) - 44 208 17 053404 / Ø 125 x 80</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 16.2 (HPH = 173 mm) - BSI-LB-001 / TÜV-A-AT-1-19-0615-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 18.2 (HPH = 219 mm) - BSI-LB-002 / TÜV-A-AT-1-19-0615-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 20.2 (HPH = 279 mm) - BSI-LB-003 / TÜV-A-AT-1-19-0615-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 25.2 (HPH = 435 mm) - BSI-LB-004 / TÜV-A-AT-1-19-0615-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LSB 16.B (HPH = 175 mm) - BSI-LB-570095 / TÜV-A-AT-1-19-0613-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LSB 18.B (HPH = 221 mm) - BSI-LB-570096 / TÜV-A-AT-1-19-0613-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 16.1 (HPH = 175 mm) - BSI-LB-570091 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 18.1 (HPH = 221 mm) - BSI-LB-570092 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 20.1 (HPH = 281 mm) - BSI-LB-570093 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 25.1 (HPH = 437 mm) - BSI-LB-570094 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HDF YH72B (HPH = 175 mm) - BSI-LB-622214 / EU-B 118</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HDF YH73A (HPH = 210 mm) - BSI-LB-622218 / EU-B 119</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HDF YH74A (HPH = 275 mm) - BSI-LB-622221 / EU-B 120</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HDF YH75A (HPH = 435 mm) - BSI-LB-622222 / EU-B 121</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HNO HYF 210C1 (HPH = 210 mm) - EU-B 067</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HNO HYF 275E (HPH = 275 mm) - EU-B 068</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HNO HYF 425E (HPH = 425 mm) - EU-B 069</p>
        <p>Elektronik emniyet bileşenleri</p>
        <p className={styles["circle"]}>Kuyu Bilgi Sistemi AC GSI 200 / AC GSI 201 - 01/208/4A/6133.xx/18 / TSX F360-014-2018-0062</p>
      </div>

      <div className={styles["box"]}>
        <p>Onaylı emniyet bileşenlerinin listesi - ES5 Rel. 02</p>
        <p>Geçerli sistem sertifikası, EC/EU Tip İnceleme Sertifikalarının güncel versiyonlarını içerir.</p>
        <p>Kat kapıları için kilitleme cihazı</p>
        <p className={styles["circle"]}>DO WIA-AP (LD Wittur Augusta) tip 11/_ (T2) - ATV 617 / EU-DL 617</p>
        <p className={styles["circle"]}>DO WIA-AP (LD Wittur Augusta) tip 01/C (C2) - ATV 616 / EU-DL 616</p>
        <p className={styles["circle"]}>DO WMD-AP (LD Wittur Augusta MD) tip 01/C (C2) - EU-DL 810</p>
        <p className={styles["circle"]}>DO WIV-EU (LD Wittur EVO) 11/_ (T2) - ATV 617 / EU-DL 617</p>
        <p className={styles["circle"]}>DO WIV-LA (LD Wittur EVO) tip 11/_ (T2) - ATV 801</p>
        <p className={styles["circle"]}>DO WIV-EU (LD Wittur EVO) tip 01/C (C2) - ATV 616 / EU-DL 616</p>
        <p className={styles["circle"]}>DO WIV-LA (LD Wittur EVO) tip 01/C (C2) - ATV 802</p>
        <p className={styles["circle"]}>DO WIH-AP (LD Wittur Hydra) tip 11/_ (T2) - ATV 285</p>
        <p className={styles["circle"]}>DO WIH-AP (LD Wittur Hydra) tip 01/C (C2) - ATV 286</p>
        <p className={styles["circle"]}>DO WIH-AP (LD Wittur Hydra) tip 41/C (CT4) - ATV 295</p>
        <p className={styles["circle"]}>DO WIH-AP (LD Wittur Hydra) tip 41/E (CT4) - ATV 295</p>
        <p className={styles["circle"]}>DO WIH-AP (LD Wittur Hydra) tip 43/R (CT4) - ATV 364</p>
        <p className={styles["circle"]}>DO WIH-LA (LD Wittur Hydra Scorpion) tip 11/_M (T2) - ATV 439</p>
        <p className={styles["circle"]}>DO WIH-LA (LD Wittur Hydra Scorpion) tip 11/_M (T2) - ATV 731</p>
        <p className={styles["circle"]}>DO WIH-LA (LD Wittur Hydra Scorpion) tip 01/_M (C2) - ATV 732</p>
        <p className={styles["circle"]}>DO WIH-LA (LD Wittur Hydra Scorpion) tip 01/CM (C2) - ATV 438</p>
        <p className={styles["circle"]}>DO WIC-AP (LD Wittur Core) tip 01/C (C2) - EU-DL 1034</p>
        <p className={styles["circle"]}>DO WCM (LD Wittur Core MD) tip 11/_ (T2) - Sertifika numarası bekleniyor</p>
        <p className={styles["circle"]}>DO WCM (LD Wittur Core MD) tip 01/C (C2) - EU-DL 1066</p>
        <p className={styles["circle"]}>DO SEG (Sematic) tip H153ABIX (T2, C2, CT4) - CA50.00388</p>
        <p className={styles["circle"]}>DO SEG (Sematic) tip H153ACSX (T2, C2, CT4) - CA50.00388</p>
        <p className={styles["circle"]}>DO SEG (Sematic) tip H153ADNX (T2, C2, CT4) - CA50.00388</p>
        <p className={styles["circle"]}>DO FEC (Fermator) tip 160/10/40 - NL16-400-1002-075-04 / ES025684-1035</p>
        <p className={styles["circle"]}>DO NST tip MKG161-17 (C2) - EU-DL 1063</p>
        <p className={styles["circle"]}>DO NST-CN tip MKG161-17 (C2) - TSX F340-022-2018-0095</p>
        <p className={styles["circle"]}>DO NSM 440 tip MKG161-17 (C2) - EU-DL 1063</p>
        <p>Yukarı yönde giden kabin aşırı hız koruması</p>
        <p className={styles["circle"]}>Makina freni Kendrion 78 11019B01 - 01/208/4A/19/7076</p>
        <p className={styles["circle"]}>Makina freni Kendrion 78 11033B01 - 01/208/4A/19/7076</p>
        <p className={styles["circle"]}>Makina freni Kendrion 78 11040B01 - 01/208/4A/19/7076</p>
        <p className={styles["circle"]}>Makina freni Mayr RSQ 250 - EU-BD 1123</p>
        <p className={styles["circle"]}>Makina freni Mayr RSQ 300 - EU-BD 1123</p>
        <p className={styles["circle"]}>Makina freni Mayr RSQ 500 - EU-BD 1123</p>
        <p>Aşırı hız sınırlama cihazı</p>
        <p className={styles["circle"]}>SA GBP 201 - AGB 081 / EU-OG 081</p>
        <p className={styles["circle"]}>SA WOL 35 - TÜV-A-AT-1/17/0519 EUGB</p>
        <p>Paraşüt</p>
        <p className={styles["circle"]}>SA G 01 - AFV 806 / EU-SG 806</p>
        <p className={styles["circle"]}>SA SGM 01 - AFV 926 / EU-SG 926</p>
        <p className={styles["circle"]}>SA GED 10 - ABFV 489 / EU-SG 489</p>
        <p className={styles["circle"]}>SA GED 20 - ABFV 491 / EU-SG 491</p>
        <p className={styles["circle"]}>SA GED 30 - EU-SG 1023</p>
        <p className={styles["circle"]}>SA WSB 01 (SA SGB 01) - TÜV-A-AT-1/99/101-CEFV</p>
        <p className={styles["circle"]}>SA WSB 02 (SA SGB 02) - TÜV-A-AT-1/99/102-CEFV</p>
        <p className={styles["circle"]}>SA WSB 05 (SA SGB 05) - TÜV-A-AT-1/99/104-CEFV</p>
        <p className={styles["circle"]}>SA WCB 01 (SA CSGB-01) - TÜV-A-AT-1/12/0314-EUFV</p>
        <p className={styles["circle"]}>SA WCB 02 (SA CSGB-02) - TÜV-A-AT-1/12/0396-EUFV</p>
        <p className={styles["circle"]}>SA WCB 03 (SA CSGB-03) - TÜV-A-AT-1/16/0454-EUFV</p>
        <p>Tampon</p>
        <p className={styles["circle"]}>Enerji birikimi SA PS D2 (HPH = 72 mm) - 44 208 12 1261 98 / 44 208 12 1262 06 / Ø 100 x 80</p>
        <p className={styles["circle"]}>Enerji birikimi SA PS D3 (HPH = 72 mm) - 44 208 12 1261 99 / 44 208 12 1262 07 / Ø 125 x 80</p>
        <p className={styles["circle"]}>Enerji birikimi SA PS D5 (HPH = 72 mm) - 44 208 12 1262 01 / 44 208 12 1262 09 / Ø 165 x 80</p>
        <p className={styles["circle"]}>Enerji birikimi SA AC 300401L (HPH = 72 mm) - 44 208 17 053403 / Ø 100 x 80</p>
        <p className={styles["circle"]}>Enerji birikimi SA AC 300402L (HPH = 72 mm) - 44 208 17 053404 / Ø 125 x 80</p>
        <p className={styles["circle"]}>Enerji birikimi SA AC 300403L (HPH = 72 mm) - 44 208 17 053406 / Ø 165 x 80</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 16.2 (HPH = 173 mm) - BSI-LB-001 / TÜV-A-AT-1-19-0615-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 18.2 (HPH = 219 mm) - BSI-LB-002 / TÜV-A-AT-1-19-0615-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 20.2 (HPH = 279 mm) - BSI-LB-003 / TÜV-A-AT-1-19-0615-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE SEB 25.2 (HPH = 435 mm) - BSI-LB-004 / TÜV-A-AT-1-19-0615-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LSB 10.A (HPH = 74 mm) - BSI-LB-559532 / TÜV-A-AT-1-19-0613-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LSB 16.B (HPH = 175 mm) - BSI-LB-570095 / TÜV-A-AT-1-19-0613-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LSB 18.B (HPH = 220 mm) - BSI-LB-570096 / TÜV-A-AT-1-19-0613-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 13.1 (HPH = 122 mm) - BSI-LB-560138 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 16.1 (HPH = 175 mm) - BSI-LB-570091 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 18.1 (HPH = 221 mm) - BSI-LB-570092 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 20.1 (HPH = 281 mm) - BSI-LB-570093 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE MLB 25.1 (HPH = 437 mm) - BSI-LB-570094 / TÜV-A-AT-1-19-0614-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LB 16.003 (HPH = 204 mm) - BSI-LB-005 / TÜV-A-AT-1-19-0611-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LB 18.001 (HPH = 249 mm) - BSI-LB-006 / TÜV-A-AT-1-19-0611-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LB 20.001 (HPH = 300 mm) - BSI-LB-007 / TÜV-A-AT-1-19-0611-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LB 23.001 (HPH = 387 mm) - BSI-LB-008 / TÜV-A-AT-1-19-0611-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LB 25.003 (HPH = 462 mm) - BSI-LB-009 / TÜV-A-AT-1-19-0611-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA OLE LB 32.002 (HPH = 699 mm) - BSI-LB-010 / TÜV-A-AT-1-19-0611-EUPU</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HDF YH72B (HPH = 175 mm) - BSI-LB-622214 / EU-B 118</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HDF YH73A (HPH = 210 mm) - BSI-LB-622218 / EU-B 119</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HDF YH74A (HPH = 275 mm) - BSI-LB-622221 / EU-B 120</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HDF YH75A (HPH = 435 mm) - BSI-LB-622222 / EU-B 121</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HNO HYF 210C1 (HPH = 210 mm) - EU-B 067</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HNO HYF 275E (HPH = 275 mm) - EU-B 068</p>
        <p className={styles["circle"]}>Enerji dağıtma SA HNO HYF 425E (HPH = 425 mm) - EU-B 069</p>
        <p>Elektronik emniyet bileşenleri</p>
        <p className={styles["circle"]}>Kuyu bilgi sistemi AC GSI 2 / AC GSI 3 - 01/208/4A/6101.xx/16</p>
        <p className={styles["circle"]}>Kuyu Bilgi Sistemi AC GSI 200 / AC GSI 201 - 01/208/4A/6133.xx/18 / TSX F360-014-2018-0062</p>
        </div>

        <div className={styles["box"]}>
            <h3 className={styles["title"]}>1.4.b Onaylı diğer bileşenler </h3>
            <hr />
        </div>

        <div className={styles["box"]}>
          <p>Onaylı diğer bileşenlerin listesi - ES1 Rel. 02</p>
          <p>Kabin kapıları için kilitleme cihazı</p>
          <p className={styles["circle"]}>DO VAR 15 - IMQ N. 1081 (TSX F340-038-2017-0016, TSX F340-038-2017-0017)</p>
          <p className={styles["circle"]}>DO VAR 15 LH - IMQ N. 1081</p>
          <p className={styles["circle"]}>DO SEC (Sematic) - IMQ N. 985</p>
          <p className={styles["circle"]}>DO FEL 430 (Fermator Elite) - 9004122 (Bureau Veritas)</p>
          <p className={styles["circle"]}>DO FEP (Fermator Compact PM150) - 04/09 - 009/PR/R</p>
          <p className={styles["circle"]}>DO WIF (Wittur Fineline) - TÜV-A-AT-1-14-413-FKTV</p>
          <p>Emniyet torku kapalı (STO) işlevine sahip frekans dönüştürücü</p>
          <p className={styles["circle"]}>DR VAF - 968/FSP 1556.00/18</p>
        </div>

        <div className={styles["box"]}>
          <p>Onaylı diğer bileşenlerin listesi - ES5.0/ES5 Rel. 02</p>
          <p>Kabin kapıları için kilitleme cihazı</p>
          <p className={styles["circle"]}>DO VAR 15 - IMQ N. 1081</p>
          <p className={styles["circle"]}>DO VAR 35 - IMQ N. 1081</p>
          <p>Emniyet torku kapalı (STO) işlevine sahip frekans dönüştürücü</p>
          <p className={styles["circle"]}>DR VAF - 968/FSP 1556.00/18</p>
        </div>


        <div className={styles["box"]}>
            <h3 className={styles["title"]}>2 Emniyetli inceleme süreci</h3>
            <hr />
        </div>

        <p className={styles["arrow"]}>Emniyet inceleme sürecinin tam talimatı için bkz. EJ 49000052 Emniyet inceleme süreci</p>

        <div className={styles["box"]}>
          <p>İlk kontroller</p>
          <p className={styles["arrow"]}>Yerel/ulusal emniyet düzenlemeleri hakkında bilgi alın ve bunlara uyun (Direkt tahrikli yerel Kurumsal İnsan Kaynakları yöneticisinden elde edilebilir).</p>
          <p className={styles["arrow"]}>Düşme riskinin olmadığından emin olun.</p>
          <p className={styles["arrow"]}>Kuyu aydınlatmasının emniyetli çalışma için yeterli ışık sağladığından emin olun.</p>
          <p className={styles["arrow"]}>Montör(ler) ve/veya montaj süpervizörü ve/veya Sorumlu Teknisyenden (MiC) çalışma yeri ve asansör durumu hakkında bilgi alın.</p>
          <p className={styles["arrow"]}>Kabinin boş olduğundan emin olun.</p>
        </div>

        <div className={styles["box"]}>
          <p>Kuyu dibinin görsel incelemesi</p>
          <p>Erişim kapısından kuyu dibine görsel inceleme yapın. Kuyu dibine girmeyin.</p>
          <p className={styles["arrow"]}>Kuyu aydınlatmasının doğru çalıştığından emin olun.</p>
          <p className={styles["arrow"]}>Acil durdurma şalterlerinin kurulu olduğundan emin olun.</p>
          <p className={styles["arrow"]}>Kuyu dibinde su veya üçüncü parti ekipman olmadığından emin olun.</p>
          <p className={styles["arrow"]}>Kuyu dibi merdiveni, tamponlar, gergi cihazları ve karşı ağırlık seperatörünün kurulu olduğundan emin olun.</p>
          <p className={styles["arrow"]}>Asansörde azaltılmış kuyu dibi ve/veya azaltılmış üst boşluk varsa bunları tanımlamak için işaretler olduğundan emin olun (karşı ağırlık tampon
            desteği, emniyet kiti şalterleri, uyarılar, vs.).</p>
          <p className={styles["arrow"]}>Alt kat kapısı kilidi ve makine freninin doğru çalıştığından emin olun.</p>
          <p>– Asansörü en üst kata gönderin.</p>
          <p>– Seyir sırasında, alt kat kapısı kilidini kilit açma anahtarıyla açın.</p>
          <p>– Emniyet devresinin açık olduğundan emin olun.</p>
          <p>– Makine freninin doğru çalıştığından emin olun.</p>
          <p>– Fren performansını izleyin.</p>
          <p className={styles["arrow"]}>Asansör üst kata vardığında karşı ağırlık tampon plakası/plakaları ile karşı ağırlık tamponu/tamponları arasındaki mesafenin yeterli olduğundan
          emin olun.</p>
        </div>

        <div className={styles["box"]}>
          <p>Kat kapılarının görsel incelenmesi</p>
          <p>Merdivenlerden inerek veya çıkarak görsel inceleme yapın. Her kat kapısını kattan inceleyin.</p>
          <p className={styles["arrow"]}>Tüm kapıların kapalı olduğundan emin olun.</p>
          <p className={styles["arrow"]}>Tüm kapıların SAIS incelemesi nedeniyle asansörün hizmet dışı olduğunu gösterdiğinden emin olun.</p>
          <p className={styles["arrow"]}>Kapı çerçevesi ve bina arayüzleri arasında açıklık olmadığından emin olun.</p>
          <p className={styles["arrow"]}>Üst kat kapısı kilidinin doğru çalıştığından emin olun.</p>
          <p>– Asansörü en alt kata gönderin.</p>
          <p>– Seyir sırasında, üst kat kapısı kilidini kilit açma anahtarıyla açın.</p>
          <p className={styles["circle"]}>Emniyet devresinin açık olduğundan emin olun.</p>
          <p className={styles["circle"]}>Kabinin durduğundan emin olun.</p>
          <p className={styles["arrow"]}>Karşı ağırlık en yüksek pozisyonundayken, karşı ağırlık üzerinde yeterli alan olduğundan emin olun.</p>
        </div>

        <div className={styles["box"]}>
          <p>Güvenli SAIS incelemesi için onay</p>
          <p className={styles["arrow"]}>Tüm emniyetli inceleme kontrollerinin tamamlandığından emin olun.</p>
          <p className={styles["arrow"]}>Asansörün SAIS incelemesi yapılması için emniyetli olduğunu onaylayın.</p>
          <p className={styles["arrow"]}>Asansörün SAIS incelemesi yapılması için emniyetli olduğunu onaylayamıyorsanız asansörden sorumlu kişiyle konuşun. Problemin çözümü yoksa SAIS incelemesini tekrar planlayın.</p>
        </div>


        <div className={styles["box"]}>
        <h3 className={styles["title"]}>3 Belgelendirme</h3>
        <hr />
    </div>
    

    <div className={styles["box"]}>
      <h4>11.1 Asansör için yerleşim çizimleri ve kablolama şeması çalışma yerinde yerel dilde mevcut mu?</h4>
      <img src={stop} className={styles["stop-image"]} />
      <div>{radio("11.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        <p>Belgeler asansörün kurulu olduğu ülkenin yerel dilinde olmalıdır. Belgeler eksikse, SAIS incelemesini durdurun.</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Bu belgeler sahada mevcuttur:</p>
      <p className={styles["circle"]}>Onaylı yerleşim çizimi</p>
      <p className={styles["circle"]}>Kablolama şeması.</p>
    </div>

    <div className={styles["box"]}>
      <h4>11.2 Çalıştırma el kitapları ve asansör günlüğü yerel dilde mevcut mu?</h4>
      <div>{radio("11.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Belgeler asansörün kurulu olduğu ülkenin yerel dilinde olmalıdır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Bu belgeler çalışma yerinde veya ofiste mevcuttur:</p>
      <p className={styles["circle"]}>Aşağıdakileri çalıştırma el kitapları:</p>
      <p>– Normal çalışma.</p>
      <p>– Acil durum çalıştırma ve kurtarma</p>
      <p>– Bakım talimatları</p>
      <p>– Tamir talimatları (inceleme/test talimatları dahil)</p>
      <p>– Düzenli incelemeler ve kontroller (talimatlar)</p>
      <p>– Gerekliyse özel talimatlar.</p>
      <p className={styles["circle"]}>Aşağıdakileri içeren kayıt defteri:</p>
      <p>– Asansörün kamu hizmetine girdiği tarih</p>
      <p>– Olayların protokolü</p>
      <p>– Bileşenlerin tamir ve değişim protokolü</p>
      <p>– Düzenli incelemeler ve kontroller protokolü.</p>
    </div>

      <div>
        <h5>Bu kabul kriterlerinden birini seçin</h5>
        <div>{radio("kabul_kriterleri", { variant: "circle", inputArray: 
          ["Belgeler inceleme sırasında çalışma yerinde mevcuttur.",
           "Belgeler ofiste mevcuttur. Belgeler asansör halkın kullanımına açılmadan önce asansör sahibine teslim edilecektir.",
           "Belirtilen gibi değil (bulguları kaydedin).",
           ] })}
        </div>
      </div>

      <div>{inputLine("isim", "İsim")}
        <span className={styles["subtitle"]}>Ofisteki kişi bu kriterleri doğrular.</span>
      </div>

      <div>{inputLine("bolum", "Böllüm")}</div>
      <div>{inputLine("tarih", "Tarih")}</div>

      <div className={styles["box"]}>
      <h4>11.3 Asansör için teknik belgeler mevcut mu</h4>
      <div>{radio("11.3", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div>
        <h5>Bu kabul kriterlerinden birini seçin</h5>
        <div>{radio("kabul_kriterleri2", { variant: "circle", inputArray: 
          ["Belgeler inceleme sırasında çalışma yerinde mevcuttur.",
           "Belgeler ofiste mevcuttur. Belgeler asansör halkın kullanımına açılmadan önce asansör sahibine teslim edilecektir.",
           "Belirtilen gibi değil (bulguları kaydedin).",
           ] })}
        </div>
      </div>

      <div>{inputLine("isim2", "İsim")}
        <span className={styles["subtitle"]}>Ofisteki kişi bu kriterleri doğrular.</span>
      </div>

      <div>{inputLine("bolum2", "Bölüm")}</div>
      <div>{inputLine("tarih2", "Tarih")}</div>


      <div className={styles["box"]}>
        <h4>11.8 Montaj kontrol listesi var mı ve teknisyen / süpervizör tarafından imzalı mı</h4>
        <img src={eye}  className={styles["eye-image"]} />
        <div>{radio("11.8", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}</div>
        <p className={styles["subtitle"]}>[#2.2]</p>
      </div>


      <div className={styles["box"]}>
        <p>Not</p>
        <p className={styles["circle"]}>Montaj kontrol listesindeki (global ana montaj ve sertifikasyon kontrol listesi) imzasıyla teknisyen/süpervizör montaj kontrol listesinin tamamlanmış ve tüm negatif bulguların düzeltilmiş olduğunu doğrular.</p>
        <p className={styles["circle"]}>Montaj kontrol listesi yoksa, eksik doldurulmuşsa veya imzalanmamışsa süpervizör şunları yapmalıdır:</p>
        <p>– Teknisyene montaj kontrol listesinin nasıl doldurulması gerektiğini öğretmek.</p>
        <p>– Açık madde listesine (OIL) eğitimin verildiğini kaydetmek.</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Montör/süpervizör tarafından imzalanmış montaj kontrol listesi mevcut.</p>
        <p className={styles["circle"]}>Montaj kontrol listesinin imza sayfasının bir kopyası şu SAIS belgesine şu formatlardan birinde eklenmiştir:</p>
        <p>– Fotoğraf (sadece eSAIS için).</p>
        <p>- Basılı kopya.</p>
      </div>

      <div className={styles["box"]}>
        <h3 className={styles["title"]}>4 Ana güç kaynağı</h3>
        <hr />
      </div>

      <div className={styles["box"]}>
        <h4>10.2.2 Bina güç kaynağı montajı incelemeye hazır mı</h4>
        <img src={stop} className={styles["stop-image"]} />
        <div>{radio("10.2.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
          <p>Elektriksel montaj incelemeye hazırdır. Kabul kriterlerini karşılamazsa SAIS incelemesini durdurun.</p>
        </div>
      </div>

      <div>
        <h5>Bu kabul kriterlerinden birini seçin:</h5>
        <div>{radio("kabul_kriterleri3", { variant: "circle", inputArray: 
          ["Elektrik tesisatı son durumundadır.",
           "Elektrik tesisatı ön durumdadır ama EJ 49000054 SAIS Geçici Bina Güç Kaynağı uyarınca inceleme için uygundur.",
           "Belirtilen gibi değil (bulguları kaydedin).",
           ] })}
        </div>
      </div>

      <div className={styles["box"]}>
          <p className={styles["arrow"]}>Elektriksel montaj geçici bir bina güç kaynağı ile (EJ 49000054) çıkarılmışsa son bina güç kaynağının tekrar incelenmesi şarttır. Gereken tekrar incelemeyi açık madde listesine (OIL) kaydedin.</p>
      </div>

      <div className={styles["box"]}>
        <h4>10.2.3 Görsel inceleme: Elektrik tesisatı gerektiği gibi mi</h4>
        <div>{radio("10.2.3", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2]</p>
        </div>
      </div>


      <div className={styles["box"]}>
           <p>Kabul kriterleri</p>
           <p className={styles["circle"]}>Tüm gerekli kapaklar kurulu.</p>
           <p className={styles["circle"]}>Elektriksel ekipman hasarsız. Açıkta çıplak teller yoktur (örneğin bakır teller).</p>
           <p className={styles["circle"]}>Tüm yeşil/sarı kablolar (koruyucu toprak) kumanda panosu ve kabin terminal kutusunda bağlı.</p>
           <p className={styles["circle"]}>Tüm kablolar güvenle sabitlenmiş (kontrol etmek için rastgele kabloları çekin).</p>
           <p className={styles["circle"]}>Kabloların hiçbiri keskin kenarlara dokunmuyor.</p>
           <p className={styles["circle"]}>Gereğinden uzun teller/kablolar sabitlenmiştir.</p>
           <p className={styles["circle"]}>Termal şalterler ayarlanmış (It = 0,8 ... 1 x IN).</p>
           <p className={styles["circle"]}>Mevcut RCD test düğmeleri doğrulanmış.</p>
           <p className={styles["circle"]}>Tüm mevcut şalterler ve sigortalar doğrulanmış.</p>
           <p className={styles["circle"]}>Gerekliyse yangın bariyerleri mevcut (örneğin kumanda panosuna kurulu bir yangın koruma kiti).</p>
           <p className={styles["circle"]}>Olağan dışı çevre koşulları için gerekliyse (örneğin açık mekanda asansör montajı), özel koruma sağlanmış.</p>
           <p className={styles["circle"]}>Besleme tarafındaki pano, ana şalter ve aydınlatma güç kaynağının durumları ofis verilerine göre.</p>
           <p className={styles["circle"]}>Ekranlı kabloların ekranlaması kablolama şemasında tanımlandığı şekilde doğru bağlanmış.</p>
      </div>




      <div className={styles["box"]}>
      <h4>10.2.1 Binadan gelen koruyucu iletkenin (PE) kesit alanı ilgili standart / çizime göre mi</h4>
      <div>{radio("10.2.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
      <div>
          <p>Not</p>
          <p className={styles["circle"]}>ACVF içerisindeki filtreler nedeniyle, ACVF asansörlerinde 10 mA üzerinde kaçak akım vardır. Bu durum güçlendirilmiş bir koruyucu iletken (PE) gerektirir.</p>
          <p className={styles["circle"]}>Yalıtkanlı veya çıplak koruyucu iletkenlere (PE) izin verilir.</p>
          <p className={styles["arrow"]}>Her gelen koruyucu iletken ve PE bağlantı noktasından ACVF'ye giden koruyucu iletkenin (PE) kesit alanını inceleyin.</p>
        </div>
      <div>
        <h5 className={styles["box"]}>Bu kabul kriterlerinden birini seçin:</h5>
        <div>{radio("kabul_kriterleri4", { variant: "circle", inputArray: 
          ["Yalıtımlı koruyucu iletkenin (PE) kesit alanı ≥ 10 mm2.",
           "Ana şebeke kaynağının yalıtımlı koruyucu iletkeninin (PE) kesit alanı < 10 mm2. En az aynı kesit alanına sahip ikinci bir yalıtımlı koruyucu iletken (PE) (örneğin aydınlatma kaynağından) bağlanmış.",
           "ACVF kaçak akımı < 10 mA AC veya DC (örneğin bir DR VSB (adım dönüştürücü) monte edilmişse). Koruyucu iletkenin (PE) kesit alanı faz iletkeninin kesit alanına eşit veya bu kesit alanından daha büyük (L1, L2, L3).",
           "Ana şebeke kaynağının çıplak koruyucu iletkeninde (PE) bunlardan biri vardır: – ≥ 24 mm2 dikdörtgen kesit alanı (12 mm genişliğinde x 2mm kalınlığında) ve bakır (Cu) veya alüminyumdan (Al) yapılmış. – ≥ 50 mm2 dikdörtgen kesit alanı (25 mm genişliğinde x 2 mm kalınlığında) ve galvanik demirden (Fe) yapılmış.",
           "Ana şebeke kaynağının çıplak koruyucu iletkeninin (PE) < 24 mm2 kesit alanı varsa ve bakır (Cu) veya alüminyumdan (Al) yapılmışsa: – En az aynı kesit alanına sahip ikinci bir çıplak koruyucu iletken (PE) (örneğin aydınlatma kaynağından) bağlanmış. – İkinci çıplak koruyucu iletken (PE) bakırdan (Cu) veya alüminyumdan (Al) yapılmıştır.● Ana şebeke kaynağının çıplak koruyucu iletkeninin (PE) < 50 mm2 kesit alanı varsa ve galvanik demirden (Fe) yapılmışsa: – En az aynı kesit alanına sahip ikinci bir çıplak koruyucu iletken (PE) (örneğin aydınlatma kaynağından) bağlanmış. – İkinci çıplak koruyucu iletken (PE) galvanik demirden (Fe) yapılmıştır.",
           "Kılavuz raylar eş potansiyelli bağa bağlanmıştır. ACVF muhafazasıyla kılavuz raylar arasındaki bağlantıların elektriksel sürekliliği değerlendirilmiş (test 10.3.1.b yapın).",
           "Belirtilen gibi değil (bulguları kaydedin)."
           ] })}
        </div>
      </div>
      </div>
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>5 Makine dairesi / kumanda panosu </h3>
      <hr />
    </div>
    <div className={styles["box"]}>
      <h3 className={styles["title"]}>5.1 Erişim </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>2.4.1 Makine dairesi ve kumanda panosuna erişim ilgili standarda göre mi</h4>
      <div>{radio("2.4.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Erişim:</p>
      <p>– Emniyetli.</p>
      <p>– Doğrudan.</p>
      <p className={styles["circle"]}>Erişim için özel odalardan geçilmesi gerekiyorsa, yetkili kişilerin kalıcı erişimi ve ilgili talimatlar mevcut.</p>
      <p className={styles["circle"]}>Kalıcı olarak kurulu elektrikli aydınlatma mevcut.</p>
      <p className={styles["circle"]}>Kat seviyesinde aydınlatma şiddeti ≥ 50 lüks.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.11.1 Makina dairesi erişim kapıları veya kurtarma kapıları ilgili standarda göre mi</h4>
      <div>{radio("2.11.1", { variant: "horizontal", inputArray: ["-", "N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Erişim kapıları:</p>
      <p className={styles["circle"]}>Erişim kapısı odanın içine doğru açılmaz.</p>
      <p className={styles["circle"]}>Erişim kapısının yüksekliği ≥ 2.00 m. Erişim kapısı genişliği ≥ 0,60 m.</p>
      <p className={styles["circle"]}>Makine dairesi erişim tarafında erişim kapısına anahtarla çalışan bir kilit monte edilmiştir. Anahtarla çalışan kilit, anahtar olmadan tekrar kapatılıp tekrar kilitlenebilir.</p>
      <p className={styles["circle"]}>Makine dairesi içinden erişim kapısı kilitli olsa bile bir anahtar olmadan açılabilir.</p>
      <p className={styles["circle"]}>Her erişim kapısına "Makine Dairesi - Tehlike/Yetkisiz kişilerin erişimi yasaktır" etiketi konmuştur.</p>
      <p>Erişim kurtarma kapıları:</p>
      <p className={styles["circle"]}>Kişiler için net geçiş ≥ (0,80 m x 0,80 m).</p>
      <p className={styles["circle"]}>Kişiler için erişim kurtarma kapıları karşı dengelidir.</p>
      <p className={styles["circle"]}>Kapalı erişim kurtarma kapısı her pozisyonda 0,20 m x 0,20 m bölgede 2000 N destekleyebilir.</p>
      <p className={styles["circle"]}>Erişim kurtarma kapıları aşağı doğru açılmaz.</p>
      <p className={styles["circle"]}>Menteşeli erişim kurtarma kapıları için menteşeler çıkartılamayan tiptendir.</p>
      <p className={styles["circle"]}>Makine dairesi erişim tarafında erişim kurtarma kapısına anahtarla çalışan bir kilit monte edilmiştir. Anahtarla çalışan kilit, anahtar olmadan tekrar kapatılıp tekrar kilitlenebilir.</p>
      <p className={styles["circle"]}>Makine dairesi içinden erişim kurtarma kapısı kilitli olsa bile bir anahtar olmadan açılabilir.</p>
      <p className={styles["circle"]}>Erişim kurtarma kapısı açık pozisyonda olduğunda kişilerin düşmesini önlemek ve kurtarma kapısının kapanmasını önlemek için önlemler (örneğin koruma rayı) alınmıştır.</p>
      <p className={styles["circle"]}>Her erişim kurtarma kapısına "Düşme tehlikesi - Kurtarma kapısını tekrar kapatın" şeklinde bir uyarı işareti konmuştur.</p>
    </div>



    <div className={styles["box"]}>
      <h3 className={styles["title"]}>5.2 Ana şalter</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>2.1.2 Ana şalter (JH) kolayca fark edilebilir, erişilebilir ve kilitlenebilir mi</h4>
      <div>{radio("2.1.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        <p>[#2.2]</p>
      </div>
    </div>


    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Ana şalter kontrol mekanizması kolayca tanımlanabilir.</p>
      <p className={styles["circle"]}>Ana şaltere makina dairesinde, kattaki kumanda panosunda veya kuyudaki acil durum panelinde asansör yerleşimine bağlı olarak erişilebilir.</p>
      <p className={styles["circle"]}>Ana şalter KAPALI pozisyonda kilitlenebilir.</p>
      <p className={styles["circle"]}>Otomatik kurtarma cihazı ana şalter kapandığında çalışmaz.</p>
      <p className={styles["circle"]}>Ana şalter "JH" etiketlidir.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.1.4 Makinanın 1000 mm dahilinde ana şalter (JH) veya acil durdurma butonu mevcut, etiketli ve kolay erişilebilir mi?</h4>
      <div>{radio("2.1.4", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>5.3 Elektriksel cihazlar</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>2.2.1.b Kumanda panosu önündeki geçiş ve çalışma alanlarında aydınlatma şiddeti ilgili standarda göre m</h4>
      <div>{radio("2.2.1.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}</div>
      <p>[#2.2]</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kalıcı olarak kurulu elektrikli aydınlatma mevcut.</p>
      <p className={styles["circle"]}>Elektrikli aydınlatma makinanın güç kaynağından bağımsızdır.</p>
      <p className={styles["circle"]}>Çalışma alanlarının kat seviyesinde aydınlatma şiddeti ≥ 200 lüks, veya "≥ 50 lüks ve uygun bir servis lambası mevcut".</p>
      <p className={styles["circle"]}>Geçiş alanlarının kat seviyesinde aydınlatma şiddeti ≥ 50 lüks.</p>
    </div>

    <div className={styles["box"]}>
      <h4>2.2.4 Kabin, kuyu ve makine dairesinde aydınlatmanın bağımsız kaynağı ve koruması var mı</h4>
      <div>{radio("2.2.4", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Kabin, kuyu, makina dairesi ve kumanda panosu içindeki aydınlatma:</p>
        <p className={styles["circle"]}>Ana şalter (JH) pozisyonundan bağımsızdır.</p>
        <p className={styles["circle"]}>Makina kaynağından bağımsızdır.</p>
        <p className={styles["circle"]}>Kendi koruması var.</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.7.3.a Kuyu aydınlatması makina dairesi veya kumanda panosunda, diğer tüm kuyu ışığı şalterlerinden bağımsız olarak çalıştırılabiliyor mu </h4>
      <div>{radio("3.7.3", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>2.2.3.a En az bir priz çıkışı kurulu ve işlevsel mi </h4>
      <div>{radio("2.2.3.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Priz çıkışı ülke koduna göre doğru tipte veya bir dönüştürücü mevcut.</p>
    </div>

    <div className={styles["box"]}>
      <h4>6.0.11 Sabit revizyon kontrol paneli/panelleri doğru çalışıyor mu </h4>
      <div>{radio("6.0.11", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Revizyon kontrol panelinin tüm işlevleri doğru çalışıyor.</p>
      <p className={styles["circle"]}>İnceleme kontrolü revizyon kontrolüne göre daima öncelik sahibidir.</p>
      <p className={styles["circle"]}>Monte edilmişse, acil durdurma şalteri emniyet devresini açar ve kabini durdurur.</p>
    </div>

    <div className={styles["box"]}>
      <h4>10.4.8.a Emniyet devresi kontakları ilgili standarda göre mi </h4>
      <div>{radio("10.4.8.a", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    
    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Asansörün kablolama şemasına başvurun.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tüm kontaklar doğru kurulu, mekanik olarak ayarlı ve işlevsel.</p>
      <p className={styles["circle"]}>Emniyet devresindeki tüm kontaklar revizyon ve inceleme modunda test edilmiş.</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>5.4 Emniyet açıklıkları ve bileşenler </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>2.3.1.a Makina dairesinin boyutları ve emniyet açıklıkları ilgili standartlara göre mi </h4>
      <div>{radio("2.3.1.a", { variant: "horizontal", inputArray: ["-", "N/A" ,"Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Makina dairesi boyutları:</p>
      <p className={styles["circle"]}>Çalışma alanlarında net yükseklik ≥ 2,10 m.</p>
      <p className={styles["circle"]}>Hareket için açık yükseklik ≥ 1,80 m.</p>
      <p className={styles["circle"]}>Makinenin dönen parçaları üzerindeki net dikey mesafe: ≥ 0,30 m.</p>
      <p className={styles["circle"]}>Net yatay alan aşağıdakiler için ≥ (0,50 m x 0,60 m):</p>
      <p>– Gerekli olduğu noktalarda hareketli parçaların bakım ve incelemesi.</p>
      <p>– Gerekliyse manuel acil çalıştırma.</p>
      <p className={styles["circle"]}>Açık alanlara erişim yollarının genişliği:</p>
      <p>– Hareketli parçalar varsa: ≥ 0,50 m.</p>
      <p>– Hareketli parçalar yoksa: ≥ 0,40 m.</p>
    </div>
    

    <div className={styles["box"]}>
      <h4>2.3.1.b Kumanda panosunun boyutları ve emniyet açıklıkları ilgili standartlara göre mi</h4>
      <div>{radio("2.3.1.b", { variant: "horizontal", inputArray: ["-", "N/A" ,"Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Bölgeler:</p>
      <p className={styles["circle"]}>EU</p>
      <p className={styles["circle"]}>AP (CN hariç)</p>
      <p className={styles["circle"]}>LA</p>
      <p className={styles["circle"]}>IN</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
      <p>Kumanda panosunun önünde emniyet açıklıkları - ES1</p>
      <p>A Genişlik</p>
      <p>B Derinlik</p>
      <p>1 Kumanda panosu</p>
      <img src={şekil9} className={styles["w-400"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Kumanda panosunun önündeki emniyet açıklıkları - ES5.0 / ES5</p>
      <p>A Genişlik</p>
      <p>B Derinlik</p>
      <p>1 Kumanda panosu</p>
      <img src={şekil10} className={styles["w-400"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Çalışma alanı boyutları:</p>
      <p className={styles["circle"]}>Çalışma alanlarında net yükseklik ≥ 2,10 m.</p>
      <p>– Kapı başlığı altında net yükseklik: ≥ 2,00 m.</p>
      <p>– EN 81-21 uyarınca modernizasyon için: Çalışma alanlarında açık yükseklik ≥ 1,80 m.</p>
      <p className={styles["circle"]}>Hareket için açık yükseklik ≥ 1,80 m.</p>
      <p className={styles["circle"]}>Kumanda panosunun önündeki net yatay alan:</p>
      <p>– Derinlik (B):</p>
      <p className={styles["circle"]}>≥ 0,70 m veya</p>
      <p className={styles["circle"]}>≥ BT (kat kapısının açık genişliği).</p>
      <p>– Genişlik (A): Kumanda panosunun genişliği, minimum 0,50 m.</p>
      <p className={styles["circle"]}>Açık kumanda pano kapıları kumanda panosuna erişimi sınırlamaz. Kumanda panosu kapağının açılma açısı ≥ 90°.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.3.1.d Kumanda panosunun boyutları ve emniyet açıklıkları ilgili standartlara göre mi</h4>
      <div>{radio("2.3.1.d", { variant: "horizontal", inputArray: ["-", "N/A" ,"Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Çin (CN)</p>
    </div>
    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
      <p>Kumanda panosunun önünde emniyet açıklıkları - ES1</p>
      <p>A Genişlik</p>
      <p>B Derinlik</p>
      <p>1 Kumanda panosu</p>
      <img src={şekil11} className={styles["w-400"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Kumanda panosunun önündeki emniyet açıklıkları - ES5.0 / ES5</p>
      <p>A Genişlik</p>
      <p>B Derinlik</p>
      <p>1 Kumanda panosu</p>
      <img src={şekil12} className={styles["w-400"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Çalışma alanı boyutları:</p>
      <p className={styles["circle"]}>Çalışma alanlarında net yükseklik ≥ 2,10 m.</p>
      <p className={styles["circle"]}>Hareket için açık yükseklik ≥ 1,80 m.</p>
      <p className={styles["circle"]}>Kumanda panosunun önündeki net yatay alan:</p>
      <p>– Derinlik (B): ≥ 0,70 m</p>
      <p>– Genişlik (A): Kumanda panosunun genişliği, minimum 0,50 m.</p>
      <p className={styles["circle"]}>Açık kumanda pano kapıları kumanda panosuna erişimi sınırlamaz. Kumanda panosu kapağının açılma açısı ≥ 90°.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.3.2 Merdivenler veya basamaklar ve korkuluklar monte edilmiş mi</h4>
      <div>{radio("2.3.2", { variant: "horizontal", inputArray: ["-", "N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>{">"} 0,50 m farklı çok sayıda düzeyli makina dairesi zemini</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.3.3 Girintiler ve kanallar çevrelenmiş mi</h4>
      <div>{radio("2.3.3", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Makine dairesinde aşağıdakilerden birini içeren çalışma veya geçiş alanı mevcut:</p>
      <p className={styles["circle"]}>{">"} 50 mm derinliğinde ve 50 ... 500 mm genişliğindeki girintiler</p>
      <p className={styles["circle"]}>Kanallar.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.13.1 Kuyuya nesneler ve/veya insanların düşmesine karşı koruma mevcut mu</h4>
      <div>{radio("2.13.1", { variant: "horizontal", inputArray: ["-", "N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Zemindeki açıklıkları korumak için, açıklıkların çevrelerindeki korumaların yüksekliği tabliyeden veya bitmiş zeminden ≥ 50 mm.</p>
      <p className={styles["circle"]}>Kişileri tehlikeye atan herhangi bir açıklık yok.</p>
    </div>

    <div className={styles["box"]}>
      <h4>2.5.1 Gerekli uyarılar, ikazlar ve işaretler yerleştirilmiş mi</h4>
      <div>{radio("2.5.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Şu uyarılar, ikazlar ve işaretler yerel dillerde takılıdır:</p>
      <p className={styles["circle"]}>Gerekliyse makina üzerine eklenmiş kabin hareket yön göstergesi</p>
      <p className={styles["circle"]}>Elektriksel tehlikeler</p>
      <p className={styles["circle"]}>Kurtarma operasyonu talimatı</p>
      <p className={styles["circle"]}>Emniyet devresi çizimi</p>
      <p className={styles["circle"]}>Uyarı: Emniyet devrelerinde normal çalışma sırasında köprülere izin verilmez</p>
      <p className={styles["circle"]}>Test seyir modu talimatı (örneğin KFM)</p>
      <p className={styles["circle"]}>Gerekliyse yerel gerekliliklere göre ilk yardım talimatı</p>
      <p className={styles["circle"]}>Yerel gerekliliklere göre diğer uyarılar, ikazlar veya işaretler.</p>
    </div>

    <div className={styles["box"]}>
      <p>AP için Uluslararası Standartlardan Yerel Sapmalar</p>
      <p>Çin:</p>
      <p className={styles["circle"]}>Asansör üreticisi kumanda panosunda çıkan aşırı hız koruma cihazının ve istenmeyen kabin hareketi koruma cihazının (test hızı altında) işletim prosedürünü belirtmelidir.</p>
    </div>


    <div className={styles["box"]}>
      <h4>5.1.19 STM etiketi doğru konuma yerleştirilmiş ve STM etiketi üzerindeki STM üretim tarihi doğru mu</h4>
      <div>{radio("5.1.19", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Çin (SCN) TSG T7001:2009+A2:2017 ve GB 7588- 2003+XG1-2015 uyarınca</p>
    </div>
    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
      <p>STM etiketi örneği</p>
      <img src={şekil13} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>STM etiketi doğru pozisyona yerleştirilmiştir:</p>
      <p>– MRL asansör için: Kumanda panosu kapısının içinde.</p>
      <p>– MR asansör için: Kumanda panosu kapısının dışında.</p>
      <p className={styles["circle"]}>İzin verilen maksimum seyir ve dönme sayısı STM etiketinde belirtilmiştir.</p>
      <p className={styles["circle"]}>STM etiketinde belirtilen STM üretim tarihi STM üzerinde basılı üretim tarihi ile aynıdır.</p>
    </div>



    <div className={styles["box"]}>
      <h3 className={styles["title"]}>5.5 Makinalar</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>2.15.1.a Farklı asansörler için bileşenler açıkça işaretli mi</h4>
      <div>{radio("2.15.1.a", { variant: "horizontal", inputArray: ["-", "N/A" ,"Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Çok sayıda MR veya MRL asansörler, örneğin:</p>
      <p className={styles["circle"]}>Aynı grupta çok sayıda asansör</p>
      <p className={styles["circle"]}>Aynı uygulama aralığında birden çok tekli asansör.</p>
      <p className={styles["circle"]}>Emniyetli inceleme ve bakım için açıkça tanımlanamayan çok sayıda asansör.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.8.1 Belirtilen kontrol kurulu mu  </h4>
      <div>{radio("2.8.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    
    <div className={styles["box"]}>
      <p>Not</p>
      <p>Yazılım versiyonunu bulmak için SMLCD üzerinde şu parametreyi seçin:</p>
      <p>Status (Durum) → Versions (Versiyonlar) → GC software (GC yazılım)</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>


    <div>{selectField("control_type2", "Kontrol tipi", 
        [ { _id: "1", name: "CO SC 1"},
          { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p>Belirtilen: CO SC 1</p>
    </div>
    <div>{inputLine("yazilim_versiyonu", "Yazılım versiyonu ")}</div>

    <div className={styles["box"]}>
      <h4>2.8.2 Fren tipi şalteri doğru pozisyonda ayarlı m </h4>
      <div>{radio("2.8.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>


    <div className={styles["box"]}>
      <p>SCPOW PCBA üzerinde fren tip şalteri</p>
      <img src={şekil14} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>A Makina tipi</p>
      <p>B Makina fren tipi</p>
      <p>C Fren tipi şalterinin konumu</p>
      <p>1) Bölge EU, AP, LA</p>
      <p>2) Bölge IN</p>
      <img src={tablo1} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Fren tipi şalteri belirtilen şekilde ayarlıdır.</p>
    </div>



    <div className={styles["box"]}>
      <h4>4.2.7.j İstenmeyen kabin hareketi koruma cihazının/cihazlarının tip etiketi, yerleşim çiziminde mevcut mu</h4>
      <div>{radio("4.2.7.j", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Şu bilgiler gösterilmiştir:</p>
      <p className={styles["circle"]}>(EU) Tip İnceleme Sertifika numarası/numaraları.</p>
      <p className={styles["circle"]}>Saptama cihazları.</p>
      <p className={styles["circle"]}>Durdurma cihazları.</p>
    </div>

    <div className={styles["box"]}>
      <p>AP için Uluslararası Standartlardan Yerel Sapmalar</p>
      <p className={styles["circle"]}>Bilgi, sahadaki istenmeyen kabin hareketi koruma cihazına eklenmiş.</p>
      <p>Çin:</p>
      <p className={styles["circle"]}>J 45320660 İstenmeyen Kabin Hareketi Koruma Araçları İsim Plakasında belirtilmiştir.</p>
    </div>

    <div className={styles["box"]}>
      <h4>5.1.14 Makina destek kirişleri yerleşim çizimine göre monte edilmiş ve tutturulmuş mu </h4>
      <div>{radio("5.1.14", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>
      
    <div className={styles["box"]}>
      <p>Test ayarı</p>
    </div>

    <div className={styles["box"]}>
      <p>1 Makina destek kirişi (örnek)</p>
      <img src={şekil15} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kirişler etrafındaki bölge betonla tamamen doldurulmuş.</p>
      <p className={styles["circle"]}>Kirişleri destekleyen yüzeyde çatlak yok.</p>
    </div>
      

    <div className={styles["box"]}>
      <h4>5.1.17 Makina desteğindeki tutturucu cıvatalar doğru monte edilmiş mi </h4>
      <div>{radio("5.1.17", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>
      
    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Tutturucu cıvatalar monte edilmiş ve doğru şekilde sıkılmış.</p>
    </div>

    <div className={styles["box"]}>
      <h4>2.14.1.a Ağır bileşenleri kaldırmak için doğru yollar mevcut mu ve yerleşim çizimine göre maksimum kaldırma kapasitesiyle işaretli mi</h4>
      <div>{radio("2.14.1.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.10.1 Makine dairesi havalandırması yerleşim çizimine göre mi </h4>
      <div>{radio("2.10.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Eğer kuyu, makina dairesinden havalandırılıyorsa; makina dairesi uygun şekilde havalandırılmalıdır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Havalandırma yerel gerekliliklere göredir ve yerleşim çiziminde belirtilmiştir.</p>
      <p className={styles["circle"]}>Havalandırma mevcutsa ve açıklık dışarıya doğru ise açıklık korumalıdır.</p>
      <p className={styles["circle"]}>Kuyu, asansöre ait olanlar dışındaki odaların havalandırmasını sağlamak üzere kullanılmaz.</p>
      <p className={styles["circle"]}>Makineler, ekipman, elektrik kabloları vs. toz, zararlı dumanlar ve nemden korunmuş.</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.4.14.a Dönen makaralar ve çekiş kasnakları korumalı mı ve STM'ler gerektiği şekilde kurulu mu </h4>
      <div>{radio("3.4.14.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Dönen parçalara sahip MR asansörü</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Dönen makaralar ve çekiş şaftları aşağıdakileri önlemek üzere korunmuş:</p>
      <p>– Personelin yaralanması (makara kapağı takılıdır)</p>
      <p>– Gevşediğinde (STM tutucuları monte edilmiş) STM'lerin makaralardan çıkması</p>
      <p>– STM'ler ile makaralar arasında istenmeyen nesneler.</p>
      <p className={styles["circle"]}>STM'ler makaraların ortasında kurulmuş.</p>
      <p className={styles["circle"]}>STM tutucular monte edilmiştir ve STM'lerle temas halinde değil.</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.1.16.a Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı</h4>
      <div>{radio("4.1.16.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Çalışma yerinde kaynaklama yapılmasına sertifikasyonlu bir kaynakçı tarafından VE yerleşim çizimi, kaynak çizimleri ve/veya kaynak için çalışma talimatındaki spesifikasyonlara göre yapılırsa izin verilir.</p>
      <p className={styles["circle"]}>Kaynakçının sertifikasyonu KG'nin sorumluluğundadır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p className={styles["circle"]}>Makine desteği, sabitleme noktaları, aşırı hız regülatörü/regülatörleri ve kumanda panosunun birkaç yapısal sabitlemesini rastgele kontrol edin.</p>
      <p className={styles["circle"]}>Sadece sahada yapılan kaynakların kontrol edilmesi yeterlidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tutturucu cıvatalar:</p>
      <p>– Tutturucu cıvataların hiçbiri eksik değil.</p>
      <p>– Doğru rondelalar kurulu.</p>
      <p>– Tutturucu cıvatalar doğru şekilde sıkılmış.</p>
      <p className={styles["circle"]}>Çalışma yerinde yapılan kaynaklar (varsa): Çalışma yerinde yapılan tüm kaynaklar sertifikasyonlu bir kaynakçı tarafından ve yerleşim çizimleri, kaynak çizimleri ve/veya kaynak için hazırlanan çalışma talimatındaki spesifikasyonlara göre yapılmış.</p>
    </div>

    <div className={styles["box"]}>
      <h4>2.16.2 Makina dairesinde üçüncü parti ekipman bulunmuyor mu </h4>
      <div>{radio("2.16.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>5.6 Tahliye cihazları</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>2.9.1.a Kurtarma çalışması için sistem monte edilmiş, işlevsel ve doğru etiketli mi</h4>
      <div>{radio("2.9.1.a", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p className={styles["circle"]}>MRL asansör</p>
      <p className={styles["circle"]}>Elektriksel fren açma ünitesi (PEBO) olan MR asansörü sipariş edilmiş ve kurulmuş</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Elektrikli fren açma üniteli (PEBO) MR asansörü için: Manuel fren açma kolunun kullanılmasına izin verilmez.</p>
      <p className={styles["circle"]}>Manuel fren açma kolunun mevcut olmadığından emin olun.</p>
      <p className={styles["circle"]}>Manuel fren açma kolu varsa asansörden çıkarın.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kabin yükü: % 0 GQ</p>
      <p>Seyir hızı: Boşa dönme</p>
      <p>Kabin seyir yönü: YUKARI (UP)</p>
    </div>

    <div className={styles["box"]}>
      <p>Manuel tahliye şalteri JEM/JRH</p>
      <img src={şekil16} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kapı bölgesinde (LUET) kabin pozisyonu saptanabilir.</p>
      <p className={styles["circle"]}>Kurtarma çalışması için talimat takılıdır, görünür ve yerel dildedir.</p>
      <p className={styles["circle"]}>SCMAIN PCBA kısmından SCMAIN.KBV fişi çıkarıldığında kurtarma çalışması gerçekleşmez.</p>
      <p className={styles["circle"]}>KBV kontağı etkinleştirildiğinde, elektriksel fren açma cihazıyla acil çalıştırma mümkün değildir.</p>
      <p className={styles["circle"]}>Azaltılmış kuyu dibi ve/veya azaltılmış/alçak üst boşluk için: KNET aktive edildiğinde, kurtarma çalışması ancak TSD21 cıvataları inceleme/açılmış pozisyondayken mümkündür.</p>
    </div>

    <div className={styles["box"]}>
      <p>AP için Uluslararası Standartlardan Yerel Sapmalar</p>
      <p>Çin (TSG T7001:2009 2.1.4, GB 7588-2003+XG1-2015):</p>
      <p className={styles["circle"]}>Tahliye hızı SMLCD üzerinde gösterilir ve ≤ 0,63 m/s'dir.</p>
      <p className={styles["circle"]}>Tahliye yön göstergesi doğru çalışıyor.</p>
      <p className={styles["circle"]}>Kapı bölgesinde (LUET) kabin pozisyonu sesli bir sinyalle belirtilir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.2.9.1.a</p>
      <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında, kapı bölgesi dışında konumlandırın.</p>
      <p className={styles["arrow"]}>Ana şalter JH'yi kapatın.</p>
      <p className={styles["arrow"]}>SMLCD: YUKARI ve AŞAĞI düğmelerine aynı anda basın.</p>
      <p className={styles["arrow"]}>LUET LED'in açık olduğundan emin olun.</p>
      <p className={styles["arrow"]}>Testi yapın.</p>
      <p>– Kabinin kapı bölgesi dışında olduğundan emin olun.</p>
      <p>– Tüm kapıların kapalı olduğundan emin olun.</p>
      <p>– Manuel tahliye şalteri JEM/JRH'yi “TAHLİYE” pozisyonuna getirin.</p>
      <p>– Üç saniye boyunca DEM manuel tahliye düğmesine basın.</p>
      <p>– Kabin sonraki kapı bölgesine ulaşıncaya kadar birkaç kez DEM butonunu bırakıp tekrar basın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Kabin yukarı yönde hareket eder.</p>
      <p>– Kabin, kapı bölgesine erişir.</p>
      <p>– Kabin, kapı bölgesine geldiğinde, artık DEM düğmesiyle hareket ettirilemez.</p>
      <p>– LUET LED'i yanar.</p>
      <p>– Kapılar manuel olarak açılabilir.</p>
      <p>Başarısız:</p>
      <p>– Kabin yukarı yönde hareket etmez.</p>
      <p>– Kabin, kapı bölgesine erişemez.</p>
      <p>– Kabin, kapı bölgesine geldiğinde, halen DEM düğmesiyle hareket ettirilebilir.</p>
      <p>– LUET LED kapalıdır.</p>
      <p>– Kapılar manuel olarak açılamıyor.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– Manuel tahliye şalteri JEM/JRH'yi “NORMAL” pozisyonuna getirin.</p>
      <p>– Ana şalter JH'yi açın.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.9.1.b Kurtarma çalışması için manuel fren açma kolu mevcut ve işlevsel mi ve fren açma mekanizmasının hareket serbestisi kurulum el kitabına göre mi</h4>
      <div>{radio("2.9.1.b", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Manuel fren açma kolu olan MR asansörü sipariş edilmiş ve kurulmuş</p>
    </div>

    <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: Serbest Hareket</p>
        <p>Kabin seyir yönü: YUKARI</p>
    </div>

    <div className={styles["box"]}>
      <p>Manuel fren açma kolu</p>
      <img src={şekil17} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kurtarma çalışması sistemi, çalıştırma talimatlarına göre çalışıyor ve doğru etiketlenmiş.</p>
      <p className={styles["circle"]}>Kurtarma çalışması için talimat takılıdır, görünür ve yerel dildedir.</p>
      <p className={styles["circle"]}>El volanlı (HWD) asansör için: El volanı kontağı (KHA) mevcut ve işlevseldir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.2.9.1.b</p>
      <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında, kapı bölgesi dışında konumlandırın.</p>
      <p className={styles["arrow"]}>Ana şalter JH'yi kapatın.</p>
      <p className={styles["arrow"]}>SMLCD: YUKARI ve AŞAĞI düğmelerine aynı anda basın.</p>
      <p className={styles["arrow"]}>LUET LED'in açık olduğundan emin olun.</p>
      <p className={styles["arrow"]}>Testi yapın.</p>
      <p>UYARI</p>
      <p>Kabin çok hızlı hareket ettiğinde (sesli sinyalle anlaşılmaktadır) manuel fren açma kolunu hemen bırakın ve makina frenini kapatın.</p>
      <p>– Manuel fren açma kolunu makine içine yerleştirin.</p>
      <p>– Manuel fren açma kolunu çekin ve makina frenini çok kısa bir süre açık tutun. Tahrik kasnağının hızını makina frenini açıp kapatarak izleyin ve kontrol edin.</p>
      <p>– Kabin, sonraki kapı bölgesine ulaşıncaya kadar işlemi birkaç kez tekrarlayın.</p>
      <p>– Manuel fren açma kolunu çıkarın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Kabin yukarı yönde hareket eder.</p>
      <p>– Kabin, kapı bölgesine erişir.</p>
      <p>– LUET LED'i yanar.</p>
      <p>– Kapılar manuel olarak açılabilir.</p>
      <p>Başarısız:</p>
      <p>– Kabin yukarı yönde hareket etmez.</p>
      <p>– Kabin, kapı bölgesine erişemez.</p>
      <p>– LUET LED kapalıdır.</p>
      <p>– Kapılar manuel olarak açılamıyor.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– Manuel fren açma kolunun çıkarıldığından emin olun.</p>
      <p>– Ana şalter JH'yi açın.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.9.4 Otomatik bir tahliye besleme cihazı (AESD) kurulu ve işlevsel mi</h4>
      <div>{radio("2.9.4", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Otomatik tahliye besleme cihazı (AESD) istenmiş ve kurulmuş</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>AESD, kablolama şemasına göre kablolanmış ve bağlanmış.</p>
      <p className={styles["circle"]}>Asansör ana şalter (JH) kapalı olduğunda tahliye yapmaz.</p>
      <p className={styles["circle"]}>Yük değerine göre kabin gidebileceği en yakın kata hareket eder ve kapı açılır.</p>
      <p className={styles["circle"]}>AESD ; inceleme (REC), kuyu dibi inceleme (RESG) ve revizyon (ESE) çalışması sırasında aktif değildir.</p>
      <p className={styles["circle"]}>Tüm emniyet kontakları halen aktif.</p>
      <p className={styles["circle"]}>Azaltılmış kuyu dibi ve/veya azaltılmış/alçak üst boşluk için: KNET aktive edildiğinde, AESD çalışması mümkün değildir.</p>
      <p className={styles["circle"]}>Ana şebeke güç kaynağı kesilse bile, asansörün davranışı aşağıdakilerin çalışmasına engel teşkil etmez:</p>
      <p>– Elektriksel emniyet cihazları.</p>
      <p>– Acil elektriksel çalışma.</p>
      <p>– İtfaiyeci şalteri.</p>
    </div>


    <div className={styles["box"]}>
      <p>Test yöntemi m.2.9.4</p>
      <p className={styles["arrow"]}>Boş kabini en üst katta konumlandırın.</p>
      <p className={styles["arrow"]}>Testi yapın.</p>
      <p>– JH'nin yardımcı kontağının iki noktasını (JH [13-14]) testten önce köprüleyin.</p>
      <p>– Tahliye cihazı LDU'ya gömülüyse: SCPOW kartında SCPOW.JH soketini ayırın.</p>
      <p>– SMLCD: Commands (Komutlar) → Service visit (Servis ziyareti) → OFF (KAPALI).</p>
      <p>– Kabini en alt kata gönderin.</p>
      <p>– Kabin kapı bölgesinin dışına çıktığında, güç beslemesi kesintisi başlatmak üzere ana şalter JH'yi kapatın.</p>
      <p>– Sistemin tahliye besleme koşulları altında çalışmasını ve kabinde tahliyeyi başlatmasını bekleyin.</p>
      <p className={styles["arrow"]}>Kabin hareket ederken acil durdurma başlatmak için revizyon kontrolü üzerindeki acil durdurma butonuna (JHM) basın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Kabin durur.</p>
      <p>Başarısız:</p>
      <p>– Kabin durmaz.</p>
      <p className={styles["arrow"]}>Acil durum butonunu (JHM) geri açın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Kabin gidebileceği en yakın kata yavaşça hareket eder.</p>
      <p>– Kapı açılır.</p>
      <p>– Yolcu tahliye süresi sona erdiğinde kapı kapanır.</p>
      <p>– Kontrol AESD beslemesini kapatır.</p>
      <p className={styles["arrow"]}>Testi aşağıdakiler için tekrar yapın:</p>
      <p>– Acil elektriksel çalışma.</p>
      <p>– İtfaiyeci şalteri.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– SMLCD: Commands (Komutlar) → Service visit (Servis ziyareti) → ON (AÇIK).</p>
      <p>– Çıkarılmışsa SCPOW kartında SCPOW.JH soketini takın.</p>
      <p>– JH yardımcı kontağının iki pini (JH [13-14]) arasındaki köprüyü kaldırın.</p>
      <p>– Ana şalter JH'yi açın.</p>
      <p>– Sistemin geri gelmesini bekleyin.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.4.16 Kullanıcı talimatı ve emniyet uyarılarının olduğu bir etikete sahip kat kapısı kilidi açma anahtarı mevcut mu </h4>
      <div>{radio("4.4.16", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kat kapısı kilit açma anahtarının doğru kullanımı için talimat ve uyarılara sahip bir etiket, tahliye işlemlerini yapacak sorumlu kişi için mevcut.</p>
      <p className={styles["circle"]}>Acil durum kilit açma cihazı kapı başlığına monte edilmişse acil durum kilit açma anahtarı uzunluğu en azından "kat kapısı yüksekliği -2,00 m" yüksekliğine eşit.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.12.1 Makine dairesi/kumanda panosu ile kabin içi arasında acil güç kaynağına sahip bir haberleşme cihazı var mı</h4>
      <div>{radio("2.12.1", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>HQ {">"} 30 m veya doğrudan akustik iletişim mümkün değil</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kalıcı olarak iki yönlü iletişim mevcut.</p>
      <p className={styles["circle"]}>Acil durum alarm cihazı bağımsız güç alıyor.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.2.2 Azaltılmış tampon hareketi için uyarı işareti manuel fren açma kolu yakınında monte edilmiş mi</h4>
      <div>{radio("3.2.2", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Azaltılmış tampon hareketli (VKN {">"} 2,50 m/s) enerji dağıtım tamponları (yağ tamponları) ve fren açma kollu makine sipariş edilmiş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Schindler ürün hatları için azaltılmış tampon hareketi için güvenlik uyarısı kurtarma çalışması talimatına dahil edilmiştir.</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>6 Kabin çatısı </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <p>Emniyet incelemesi için hazırlama</p>
      <p>Bu işleri kabin çatısına çıkmadan yapın:</p>
      <p className={styles["arrow"]}>Asansör spesifikasyonundan yük dengeleme KG'sini bulun. Asansörün sistemini dengelemek için kabine gerekli yükü koyun.</p>
      <p className={styles["arrow"]}>Kabini en üst katın altına hareket ettirin. HSK mesafesini ölçün.</p>
      <p className={styles["arrow"]}>Karşı ağırlığı tamponların üzerine yerleştirin. Kabinin statik aşırı seyrini (SKO) tahmin edin.</p>
      <p className={styles["arrow"]}>Kabin çatısında emniyet boşluklarının yaklaşık boyutlarını hesaplayın.</p>
      <p className={styles["arrow"]}>Kabin çatısında emniyet boşluklarının ve açık ayakta durma alanlarının yerini bulun.</p>
      <p className={styles["arrow"]}>Asansörde standart üst boşluk veya kısa üst boşluk (azalmış tampon hareketi vs.) olup olmadığına bakın. Azaltılmış üst boşluk için emniyet cihazı kuruluysa emniyet cihazının aktive olduğundan emin olun.</p>
      <p className={styles["arrow"]}>Çekiş araçları, sabitleme noktası veya saptırma makarası/makaralarının konfigürasyonuna aşina hale gelin.</p>
      <p className={styles["arrow"]}>Aşırı hız regülatör halatının, kuplajın aktivasyon mekanizmasına bağlı olduğundan emin olun.</p>
      <p className={styles["arrow"]}>Monte edilmişse, korkuluğun iyi durumda olduğundan emin olun.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.1 Acil durdurma şalteri/şalterleri (JHC) kolay erişilebilir, işaretli ve işlevsel mi </h4>
      <div>{radio("4.2.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>


    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Acil durum butonu/butonları her giriş noktasından ≤ 1 m uzağa monte edilmiştir.</p>
        <p className={styles["circle"]}>Acil durum butonu “STOP” işaretli.</p>
        <p className={styles["circle"]}>Acil durdurma şalteri etkinleştirildiğinde emniyet devresini açar. Kabin hareket edemez.</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.2.3.g İnceleme kontrolü kuyu dışından resetlenebiliyor mu ve resetleme işlemi bir uyarı sinyali ile doğrulanıyor mu </h4>
      <div>{radio("4.2.3.g", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Azaltılmış/alçak üst boşluğu olmayan asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>İnceleme kontrol sadece emniyet devresi kapalı olduğunda resetlenebilir.</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.1.2.a Kabin çatısına girmesine izin verilen kişi sayısı ilgili standarda / yerleşim çizimine göre kabin çatısının herhangi bir giriş noktasında
      belirtilmiş mi?</h4>
      <div>{radio("3.1.2.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Uyarı işareti kalıcı olarak monte edilmiştir, açıkça görünür ve kolayca okunur.</p>
      <p className={styles["circle"]}>Uyarı işareti aşağıdakileri içerir:</p>
      <p>– Kabin çatısına girmesine izin verilen kişi sayısı.</p>
      <p>– Kabin çatısında mevcut sığınma alanı için belirtilen duruş (ayakta veya çömelerek).</p>
      <p className={styles["circle"]}>Kabin çatısına birden fazla kişinin girmesine izin veriliyorsa, tüm kişiler için belirtilen duruş (ayakta veya çömelerek) aynı.</p>
    </div>
    

    <div className={styles["box"]}>
      <h4>2.15.1.c Çok sayıda asansör açıkça işaretli mi </h4>
      <div>{radio("2.15.1.c", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Çok sayıda MR veya MRL asansörler, örneğin:</p>
      <p className={styles["circle"]}>Aynı grupta çok sayıda asansör</p>
      <p className={styles["circle"]}>Aynı uygulama aralığında birden çok tekli asansör.</p>
      <p className={styles["circle"]}>Emniyetli inceleme ve bakım için açıkça tanımlanamayan çok sayıda asansör.</p>
    </div>
    

    <div className={styles["box"]}>
      <h4>4.2.3.a İnceleme kontrolü erişilebilir ve işlevsel mi </h4>
      <div>{radio("4.2.3.a", { variant: "horizontal", inputArray: ["-" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>İnceleme kontrolü kalıcı olarak monte edilmiştir ve sığınma alanından kolayca erişilebilir.</p>
      <p className={styles["circle"]}>İnceleme kontrolü bir bi-stabil şalterle etkinleştirilir.</p>
      <p className={styles["circle"]}>“STOP” işaretli bir acil durdurma şalteri monte edilmiştir.</p>
      <p className={styles["circle"]}>Kabin iki bağımsız basma düğmesiyle hareket ettirilir. Basma butonları “Yukarı”, “Aşağı” ve “Çalıştır” şeklinde gösterilen sembollerle tanımlanmıştır.</p>
      <p className={styles["circle"]}>Asansör inceleme hızı VKI ≤ 0,63 m/s. Kabin kuyu sonuna yaklaşırken VKI azaltılır.</p>
      <p className={styles["circle"]}>İnceleme kontrolü revizyon kontrolüne göre daima öncelik sahibidir.</p>
      <p className={styles["circle"]}>Normal seyir limitleri etkin.</p>
      <p className={styles["circle"]}>Asansör çalışması halen emniyet devresine bağımlı.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.1.7.c Acil durum alarm cihazı ve acil durum aydınlatması işlevsel mi </h4>
      <div>{radio("4.1.7.c", { variant: "horizontal", inputArray: ["-" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kalıcı olarak iki yönlü iletişim mevcut.</p>
      <p className={styles["circle"]}>İki yönlü iletişim başlatıldıktan sonra açık kalıyor.</p>
      <p className={styles["circle"]}>Acil durum alarm cihazı bağımsız güç alıyor.</p>
      <p className={styles["circle"]}>Acil durum alarm cihazı sığınma alanından/alanlarından çalıştırılabilir.</p>
      <p className={styles["circle"]}>Acil durum alarm cihazı doğru etiketlidir.</p>
      <p className={styles["circle"]}>Acil alarm butonunda aydınlatma şiddeti ≥ 5 lüks.</p>
      <p className={styles["circle"]}>Kabin çatısı ortasının 1 m üzerinde aydınlatma şiddeti ≥ 5 lüks.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.4.1.7.c</p>
      <p className={styles["arrow"]}>Ana şalteri (JH) ve ışık şalterini (SIL) kapatın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Acil durum alarm butonu yanar.</p>
      <p>– Acil aydınlatma açılır.</p>
      <p className={styles["arrow"]}>Acil durum alarm butonuna basın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Sesli alarm duyulur.</p>
      <p>– Kurtarma servisi ile bir bağlantı oluşturulur.</p>
      <p>– Kurtarma servisi kalıcı olarak kullanılabilir durumdadır.</p>
      <p className={styles["arrow"]}>Ana şalteri (JH) ve ışık şalterini (SIL) açın.</p>
    </div>

    <div className={styles["box"]}>
      <h4>10.4.8.b Emniyet devresi kontakları ilgili standarda göre mi</h4>
      <div>{radio("10.4.8.b", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Asansörün kablolama şemasına başvurun.</p>
      <p className={styles["circle"]}>Kabin çatısı ve kuyu baş kısmındaki tüm emniyet devresi kontaklarını kontrol edin.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tüm kontaklar doğru kurulu, mekanik olarak ayarlı ve işlevsel.</p>
      <p className={styles["circle"]}>Katlanabilir korkuluksuz asansör için: Emniyet devresindeki tüm kontaklar revizyon ve kabin üstü inceleme modunda test edilmiş.</p>
      <p className={styles["circle"]}>Katlanabilir korkuluklu asansör için: Emniyet devresindeki tüm kontaklar kabin üstü inceleme modunda test edilmiş.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.10.4.8.b</p>
      <p className={styles["arrow"]}>Monte edilmiş tüm emniyet şalterleri/kontaklarını kontrol edin, örneğin:</p>
      <p>– JHC (kabinde durdurma şalteri)</p>
      <p>– JHCT (kabin kapısında durdurma şalteri)</p>
      <p>– JHM1 (makinada durdurma şalteri)</p>
      <p>– KNA (kabinin acil durum çıkış kontağı)</p>
      <p>– Mekanik KNE (kuyu sonunda sınırlayıcı kontak)</p>
      <p>– KBV (kabin için aşırı hız regülatör kontağı)</p>
      <p>– KBVG (karşı ağırlık için aşırı hız regülatörü kontağı)</p>
      <p>– KSERE-U (kuyu sonu inceleme kontağı)</p>
      <p>– KFB/KFB1 (katlanabilir korkuluk için kontak)</p>
      <p>– KMP (bakım basamağında kontak)</p>
      <p>– KCBS (kabin blokaj sisteminde kontak).</p>
    </div>

    <div className={styles["box"]}>
      <h4>2.2.3.b En az bir priz çıkışı kurulu ve işlevsel mi? </h4>
      <div>{radio("2.2.3.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Priz çıkışı ülke koduna göre doğru tipte veya bir dönüştürücü mevcut.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.17 Kabin çatısı uzatmaları ilgili standarda göre mi</h4>
      <div>{radio("4.2.17", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Kabin çatısı uzantısı sipariş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabin çatısı uzatmaları (CA PK 44 gösterilmiştir)</p>
      <img  src={şekil18} className={styles["w-250"]}  />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kabin çatısı ile kuyu duvarı/kat kapısı arasındaki açıklığı azaltmak üzere kabin uzatma plakaları kuruludur.</p>
      <p className={styles["circle"]}>Yasak işareti “Bu alana basmayın” kabin uzatma plakalarına tutturulmuştur.</p>
      <p className={styles["circle"]}>Kabin çatısı ile kuyu duvarı/kat kapısı arasındaki açık yatay alanlar {"<"} 0,30 m genişliğinde veya {"<"} 0,30 m derinliğindedir. Kabin çatısına kabin uzatma plakaları ve kabin kapısı tahriki dahildir. Kuyu duvarına kılavuz raylar dahildir.</p>
      <p>Açık yatay alanlara örnekler:</p>
      <p>– 0,40 x 0,29 m: Geçti</p>
      <p>– 0,29 x 0,40 m: Geçti</p>
      <p>– 0,30 x 0,31 m: Başarısız.</p>
      <p>– 0,31 x 0,30 m: Başarısız.</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.2.6 Yük kapasitesi ve kabin çatısında ayakta durma bölgesi ilgili standarda göre mi   </h4>
      <div>{radio("4.2.6", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>


    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kabin çatısı kişi başına 0,30 x 0,30 m alanda her biri 100 kg olan iki kişinin ağırlığını kalıcı deformasyon olmadan kaldırabilir.</p>
      <p className={styles["circle"]}>Açık ayakta durma alanının boyutları şöyledir:</p>
      <p>– Ayakta durma alanı: ≥ 0,12 m2</p>
      <p>– Ayak basma yerinin kısa tarafı: ≥ 0,25 m.</p>
      <p className={styles["circle"]}>Kabin çatısı yüzeyi kaydırmaz.</p>
    </div>



    <div className={styles["box"]}>
      <h4>4.2.4 Tekmelik ilgili standarda göre monte edilmiş mi </h4>
      <div>{radio("4.2.4", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tekmelik kabin çatısından veya kabin çatısı dış kenarına monte edilmiş herhangi bir bileşenden ≥ 0,10 m daha uzundur.</p>
      <p className={styles["circle"]}>Tekmelik şu pozisyonlardan birinde monte edilir:</p>
      <p>– Kabin çatısının dış kenarında</p>
      <p>– Kabin çatısının dış kenarı ile korkuluk arasında.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.5 Korkuluk veya düşme koruması ilgili standarda göre mi </h4>
      <div>{radio("4.2.5", { variant: "horizontal", inputArray: ["-", , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p className={styles["circle"]}>Kuyu duvarı ile kabin çatısının dış kenarı arasındaki yatay açıklık {">"} 0,30 m VE</p>
      <p className={styles["circle"]}>Açıklık {">"} 0.30 m genişliğinde.</p>
      <p>1 Kabin çatısının dış kenarı</p>
      <p>2 Kuyu duvarı</p>
      <p>3 Korkuluk</p>
      <img src={şekil19} className={styles["w-250"]} />
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Açıklık ≤ 0,30 m genişliğinde (girinti) ise, korkuluk veya düşme koruması gerekli değildir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Not - Katlanabilir korkuluk</p>
      <p className={styles["circle"]}>Korkuluk katlanmış pozisyondayken, kabin çatısına girmeye izin verilmez.</p>
      <p className={styles["circle"]}>Kuyu düzenine bağlı olarak farklı katlanabilir korkuluk uygulamaları mevcuttur. Tüm katlanabilir korkuluk çözümünün kontrol edilmesi gerekir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Katlanabilir korkuluk pozisyonları</p>
      <p>A Katlı</p>
      <p>B Açılmış</p>
      <img src={şekil20} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
    </div>
      

     <div className={styles["box"]}>
        <h5>Kurulu düşme koruması türünü seçin:</h5>
        <div className={styles.checkbox}>
          {checkbox("korkuluk", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>Korkuluk</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("kuyu_duvari_ile_kabin_catisi_arasindaki_bilesen", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>Kuyu duvarı ile kabin çatısının dış kenarı arasındaki bileşenler</span>
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri - Korkuluk</p>
        <p className={styles["circle"]}>Bir korkuluk mevcut ve şu gereklilikleri karşılıyor:</p>
        <p>– Bir el tutamağı kurulu.</p>
        <p>– Korkuluğunun yarı yüksekliğine bir ara çubuk kurulu.</p>
        <p className={styles["circle"]}>Korkuluk ile kabin kenarı arasındaki açıklık ≤ 0,15 m.</p>
        <p className={styles["circle"]}>El tutamağının dış kenarı ile kuyu ekipmanı veya diğer bileşenler arasındaki açıklık ≥ 0,10 m.</p>
        <p className={styles["circle"]}>Korkuluğun üzerinden eğilmenin tehlikesini ifade eden bir uyarı işareti korkuluğa tutturulmuş.</p>
        <p className={styles["circle"]}>El tutamağı iç kenarı ile kuyu duvarı arasındaki mesafe ≤ 0,50 m ise: Korkuluk yüksekliği ≥ 0,70 m.</p>
        <p className={styles["circle"]}>El tutamağı iç kenarı ile kuyu duvarı arasındaki mesafe {">"} 0,50 m ise: Korkuluk yüksekliği ≥ 1,10 m.</p>
      </div>

      <div className={styles["box"]}>
        <p>Korkuluk yüksekliği ≥ 0,70 m</p>
        <img src={korkuluk1} className={styles["w-150"]} />
      </div>

      <div className={styles["box"]}>
        <p>Korkuluk yüksekliği ≥ 1,10 m</p>
        <img src={korkuluk2} className={styles["w-200"]} />
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriteri - Katlanabilir korkuluk (ek gereklilikler)</p>
        <p className={styles["circle"]}>Katlanabilir korkuluk yerleşim çizimine göre kurulu.</p>
        <p className={styles["circle"]}>Korkuluk emniyet kontakları (KFB/KFB1) korkuluk pozisyonunu izler.</p>
        <p className={styles["circle"]}>Korkuluk katlanmış pozisyondayken:</p>
        <p>– Korkuluk yüksekliği (kabin çatısında ayakta durma alanının zemini ile korkuluk mafsal noktası arasındaki mesafe) ≥ 0,70 m.</p>
        <p>– Eğer kabin çatısı ve kuyu dibinde inceleme kontrolü devre dışı bırakılmışsa, kabin revizyon ve normal çalışma modunda hareket ettirilebilir.</p>
        <p className={styles["circle"]}>Korkuluk açılmış pozisyondayken:</p>
        <p>– Korkuluğun katlanabilir kısmı doğru kilitlenmiş.</p>
        <p>– Korkuluk yüksekliği (kabin çatısındaki ayakta durma alanının zemini ile el tutamağının üst kenarı arasındaki mesafe) ≥ 1,10 m.</p>
        <p>– El tutamağının üst kenarı ile tamponun üst kenarı arasındaki mesafe ≥ 0,30 m.</p>
        <p>– Ek uyarı işareti “Korkuluğa basmayın” korkuluğun el tutamağına takılıdır.</p>
        <p>– Kabin normal çalışma modunda ve revizyon modunda seyir yapamaz.</p>
        <p>– Kabin, sadece kabin çatısında inceleme kontrol ile hareket ettirilebilir (DREC-U / DREC-D).</p>
        <p>– Kabin çatısında ve üst boşluk alanında emniyet kontakları sadece inceleme modunda test edilebilir.</p>
        <p className={styles["circle"]}>Korkuluk katlanmış veya açılmış pozisyondayken acil durum çalışma sistemi (PEBO) aktiftir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri - Kuyu duvarı ile kabin çatısının dış kenarı arasına monte edilmiş bileşenler</p>
        <p>Her bileşen:</p>
        <p className={styles["circle"]}>Kabin çatısının dış kenarı veya korkuluğun ucundan çap olarak ≤ 0,30 m uzakta monte edlir.</p>
        <p className={styles["circle"]}>Kuyuda herhangi bir kabin pozisyonunda 300 N yatay güce dayanır. Bu güç uygulandığında kabin çatısı dış kenarı ile bileşen arasındaki mesafe ≤ 0,30 m'dir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Kuyu duvarı ile kabin çatısının dış kenarı arasına monte edilmiş bileşenler</p>
        <p>1 Kabin çatısının dış kenarı</p>
        <p>2 Kuyu duvarı</p>
        <p>3 Bileşen</p>
        <p>4 Kılavuz ray</p>
        <p>5 Korkuluk</p>
        <img src={korkuluk3} className={styles["w-200"]} />
      </div>

      <div className={styles["box"]}>
        <h4>4.2.8 Bakım basamağı doğru kurulu ve işlevsel mi</h4>
        <div>{radio("4.2.8", { variant: "horizontal", inputArray: ["-","N/A" , "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2]</p>
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Bakım basamağı sipariş edilmiş ve monte edilmiş</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Bakım basamağı kabin askısına kanca şeklinde takıldığında acil durum çalıştırma sistemi (PEBO) aktiftir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
      </div>

      <div className={styles["box"]}>
        <p>Bakım basamağı pozisyonları</p>
        <p>A Kuyu duvarında kurulu pozisyon</p>
        <p>B Kabin askısında kancalı pozisyon</p>
        <img src={şekil21} className={styles["w-300"]} />
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}></p>
        <p>– Üst kat kapısı üzerinde, kuyu duvarında doğru pozisyonda kurulu.</p>
        <p>– Montaj el kitabına göre kurulu.</p>
        <p className={styles["circle"]}>Bakım basamağı emniyet kontağı (KMP) bakım basamağı pozisyonunu izler.</p>
        <p className={styles["circle"]}>Bakım basamağı kabin askısına takılabilir.</p>
        <p className={styles["circle"]}>Bakım basamağı kabin askısına takıldığında:</p>
        <p>– Kabin herhangi bir çalışma modunda hareket ettirilemez.</p>
        <p>– Kuyu baş kısmındaki tüm bileşenlere bakım basamağından güvenle erişilebilir.</p>
        <p>– Bakım basamağı emniyet kontağı (KMP) emniyet devresini açar.</p>
        <p className={styles["circle"]}>Yerleşim çiziminde karşı ağırlık koruma çubukları gösterilmişse: Karşı ağırlık koruma çubukları monte edilmiştir. Karşı ağırlık koruma çubuklarının adet ve pozisyonu yerleşim çizimine göredir.</p>
        <p className={styles["circle"]}>Yerleşim çiziminde kuyu duvarı uzantıları gösterilmişse: Kuyu duvarı uzantıları yerleşim çizimine göre monte edilmiştir.</p>
      </div>



    <div className={styles["box"]}>
      <h4>4.1.13.a Kabinin her acil kurtarma kapısı ilgili standarda göre mi </h4>
      <div>{radio("4.1.13.a", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Acil kurtarma kapısı sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Acil kurtarma kapısına dışarıdan erişilebiliyor.</p>
        <p className={styles["circle"]}>Acil kurtarma kapısı manuel kilitli.</p>
        <p className={styles["circle"]}>Kabinin içinden, acil kurtarma kapısı bir üçgen anahtarla kilitleniyor.</p>
        <p className={styles["circle"]}>Kabinin dışından, acil kurtarma kapısı anahtarsız kilitleniyor.</p>
        <p className={styles["circle"]}>Acil kurtarma kapısı kabin dışına açılıyor.</p>
        <p className={styles["circle"]}>Açık olduğunda acil kurtarma kapısı kabin çatısı kenarını geçmez.</p>
        <p className={styles["circle"]}>Kabin çatısı acil kurtarma kapısına erişimi önlemez.</p>
        <p className={styles["circle"]}>Kabin çatısı açıklığı ≥ 0,40 m x 0,50 m.</p>
        <p className={styles["circle"]}>Kilit açıldığında emniyet devresini açıyor.</p>
      </div>

    <div className={styles["box"]}>
        <h4>4.2.14 Yerel dilde doğru etiketler monte edilmiş mi ve kabin kaldırma cihazları sökülmüş mü</h4>
        <div>{radio("4.2.14", { variant: "horizontal", inputArray: ["-","N/A" , "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2]</p>
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>AP Bölgesi</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Şu etiketler kabin çatısında bulunur:</p>
        <p className={styles["circle"]}>“Kaldırma noktası" uyarı işareti <IoTriangleOutline />x60 mm kabin kaldırma noktalarında</p>
        <p className={styles["circle"]}>“Bu alana basmayın" yasak işareti <IoSquareOutline /> x100 mm her koruyucu kapak üzerinde, geçerliyse</p>
        <p className={styles["circle"]}>"Örtüşme alanı" yasak işareti sarı/siyah 200x60 mm motorda ve aşırı hız regülatörü desteği ile örtüşen alanlarda, geçerliyse.</p>
      </div>


    <div className={styles["box"]}>
        <h4>SR.5 Yangın koruma kiti LDU'da kurulu mu</h4>
        <div>{radio("sr_5_yangin_koruma_kiti_ldu", { variant: "horizontal", inputArray: ["-","N/A" , "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2]</p>
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Kapı çerçevesine LDU monte edilmiş ve şu kat kapısı tiplerinden biri sipariş edilmiş ve monte edilmiş:</p>
        <p className={styles["circle"]}>DO WMD (Wittur MD)</p>
        <p className={styles["circle"]}>DO WIC (Wittur Core)</p>
        <p className={styles["circle"]}>DO WCM (Wittur Core MD)</p>
        <p className={styles["circle"]}>DO FEC (Fermator)</p>
        <p className={styles["circle"]}>DO WIV (Wittur EVO).</p>
      </div>

      <div className={styles["box"]}>
      <h4>10.4.7 Kurulu kablolama EMC gereklilikleriyle uyumlu mu  </h4>
      <div>{radio("10.4.7", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Asansörün kablolama şemasına başvurun.</p>
      <p className={styles["circle"]}>Standart olmayan ek bileşenleri EMC gerekliliğine göre kontrol edin.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Kablolama kurulumu kablolama şemasının EMC gereklilikleriyle uyumlu.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.10.4.7</p>
      <p className={styles["arrow"]}>Kablolama şemasına başvurun.</p>
      <p className={styles["arrow"]}>Kurulu bileşenlerde ekranlama kontrolü yapın, örneğin:</p>
      <p>– Motor kablolama</p>
      <p>– VF kablolama</p>
      <p>– IG kablosu ayrı yönlendirilmiş</p>
      <p>– COP kablosu</p>
      <p>– Yük ölçüm sistemi</p>
      <p>– Seyir kabloları.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.11 Belirtilen kabin blokaj cihazı (CBD) ve kenedi doğru monte edilmiş, işlevsel ve etiketli mi </h4>
      <div>{radio("4.2.11", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p className={styles["circle"]}>Yerel kanunlar ve standartların gerekliliklerine uygun MRL asansör</p>
      <p className={styles["circle"]}>CBD sipariş edilmiş ve kurulmuş</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>CBD fren bakımı sırasında kabini bloke eder.</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("cbd_siparis_edilmis_gerekli", "CBD sipariş edilmiş/gerekli", {dontUseSymbol:true})}</div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>CBD kenedi veya kılavuz ray doğru monte edilmiş ve yaylı pimlerle sabitlenmiştir. CBD aktif edildiğinde en yüksek kabin pozisyonu en üst kat seviyesindedir. Bu kabin pozisyonunda kabin çatısı veya bakım platformu ile makinanın en üst yüzeyi arasındaki dikey mesafe ≤ 2100 mm'dir.</p>
      <p className={styles["circle"]}>CBD geçtiyse kabin çatısı veya bakım platformu ile kuyu tavanı arasındaki dikey mesafe çalışma alanlarında ≥ 2100 mm'dir.</p>
      <p className={styles["circle"]}>CBD geçtiğinde, şu seçeneklerden biri mevcuttur:</p>
      <p>– Kabin çatısından kat kapısı açıklığı yoluyla çıkmak üzere en az 0,50 x 0,70 m bir boşluk mevcuttur.</p>
      <p>– Kabin çatısında acil kurtarma kapısı monte edilmiş ve işlevseldir.</p>
      <p>– Kuyu üstünde bir acil durum kapısı monte edilmiş ve işlevseldir.</p>
      <p className={styles["circle"]}>CBD ve güvenlik kontağı KCBS doğru çalışıyor.</p>
      <p className={styles["circle"]}>CBD etiketi görünürdür ve doğru konuma tutturulmuştur.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.4.2.11</p>
      <p className={styles["arrow"]}>Gerekirse, yağlayıcıyı çıkarın. STM'lere yağ bulaşmasını önleyin.</p>
      <p className={styles["arrow"]}>Kabini, CBD cıvatası kılavuz raydaki CBD kenediyle hizalanacak şekilde konumlandırın.</p>
      <p className={styles["arrow"]}>CBD'yi geçirin.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– CBD doğru çalışıyor.</p>
      <p>– CBD cıvatası kılavuz raydaki CBD kenedine doğru şekilde oturur.</p>
      <p>– KCBS kontağı emniyet devresini açar.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– CBD'yi ayırın.</p>
      <p>– CBD cıvatasının aktif durumdan çıkarılmış olarak sabitlendiğinden emin olun.</p>
      <p>– KCBS kontağının aktif durumdan çıkarılmış olduğundan emin olun.</p>
      <p>– Çıkarılmışsa, yağlayıcıyı monte edin. STM'lere yağ bulaşmasını önleyin.</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.2.9.a Kılavuz patenler doğru kurulu mu  </h4>
      <div>{radio("4.2.9.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Çalışma açıklığı montaj kılavuzuna göre.</p>
      <p className={styles["circle"]}>Gerekliyse acil durum kılavuzları kurulu.</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.1.16.b Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı  </h4>
      <div>{radio("4.1.16.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Çalışma yerinde kaynaklama yapılmasına sertifikasyonlu bir kaynakçı tarafından VE yerleşim çizimi, kaynak çizimleri ve/veya kaynak için çalışma talimatındaki spesifikasyonlara göre yapılırsa izin verilir.</p>
      <p className={styles["circle"]}>Kaynakçının sertifikasyonu KG'nin sorumluluğundadır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p className={styles["circle"]}>Kabin süspansiyonu, kabin çatısı, kılavuz patenler ve kapı tahrikinin birkaç yapısal sabitlemesini rastgele kontrol edin.</p>
      <p className={styles["circle"]}>Sadece sahada yapılan kaynakların kontrol edilmesi yeterlidir.</p>
    </div>


    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tutturucu cıvatalar:</p>
      <p>– Tutturucu cıvataların hiçbiri eksik değil.</p>
      <p>– Doğru rondelalar kurulu.</p>
      <p>– Tutturucu cıvatalar doğru şekilde sıkılmış.</p>
      <p className={styles["circle"]}>Çalışma yerinde yapılan kaynaklar (varsa): Çalışma yerinde yapılan tüm kaynaklar sertifikasyonlu bir kaynakçı tarafından ve yerleşim çizimleri, kaynak çizimleri ve/veya kaynak için hazırlanan çalışma talimatındaki spesifikasyonlara göre yapılmış.</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>7 Kuyu baş kısmı </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <p>Emniyet incelemesi için hazırlama</p>
      <p className={styles["arrow"]}>Kuyuda yukarı aşağı hareket ederken kuyu ekipmanına çarpmayın.</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>7.1 Üst boşluk alanı  </h3>
      <hr />
    </div>
    

    <div className={styles["box"]}>
      <h4>3.4.10 Kuyu havalandırması ilgili standarda göre mi </h4>
      <div>{radio("3.4.10", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Kuyu baş kısmında havalandırma açıklığı olarak yatay kuyu kesitinin %1'inin kullanılması önerilir. Yerel bina standardı bu tavsiyeye göre öncelik taşır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kuyu asansöre ait olanlar dışındaki odaların havalandırmasını sağlamak üzere kullanılmaz.</p>
      <p className={styles["circle"]}>Son açıklık dışarıya olduğunda açıklık korumalıdır.</p>
      <p className={styles["circle"]}>Havalandırma yerleşim çiziminde uygulanan yerel bina standardı uyarıncadır.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.2.1.a Çalışma alanları ve makina alanlarının geçiş kısımlarındaki aydınlatma şiddeti ilgili standarda göre mi</h4>
      <div>{radio("2.2.1.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kalıcı olarak kurulu elektrikli aydınlatma mevcut.</p>
      <p className={styles["circle"]}>Elektrikli aydınlatma makinanın güç kaynağından bağımsızdır.</p>
      <p className={styles["circle"]}>Çalışma alanlarının kat seviyesinde aydınlatma şiddeti ≥ 200 lüks.</p>
      <p className={styles["circle"]}>MR asansör için: Geçiş alanlarının kat seviyesinde aydınlatma şiddeti ≥ 50 lüks.</p>
    </div>


    <div className={styles["box"]}>
      <h4>2.14.1.b Ağır bileşenleri kaldırmak için doğru yollar mevcut mu ve yerleşim çizimine göre maksimum kaldırma kapasitesiyle işaretli mi </h4>
      <div>{radio("2.14.1.b", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MRL asansör</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.1.3.b Üst boşluktaki emniyet açıklıkları ilgili standart / yerleşim çizimine göre mi </h4>
      <div>{radio("3.1.3.b", { variant: "horizontal", inputArray: ["-", "N/A", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Azaltılmış/alçak üst boşluğu olmayan asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Katlanabilir korkuluklu asansör için gerekli emniyet açıklıkları, katlanmış pozisyondaki korkuluk için geçerlidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kabin üst katın X yüksekliği kadar altındadır.</p>
    </div>

    <div className={styles["box"]}>
      <p>MRL asansör</p>
      <img src={asansor1} className={styles["w-350"]} />
    </div>
    <div className={styles["box"]}>
      <p>MR asansör</p>
      <img src={asansor2} className={styles["w-350"]} />
    </div>

    <div className={styles["box"]}>
      <p>Ölçülen değer</p>
    </div>
    <div className={styles["box"]}>
      <p>SKS ölçüsü (kabin zıplama mesafesi)</p>
    </div>

    <div className={styles["box"]}>
      <p>1) Standart asansör için (yavaşlama izleme cihazı olmayan asansör), aşağıdaki tabloya başvurun veya bu formülü kullanın:</p>
      <p>SKS = (0,035*VKN^2)*1000 (mm)</p>
        <img src={tablo2} className={styles["w-350"]} />
    </div>

    <div className={styles["box"]}>
      <p>2) Yavaşlama izleme cihazı bulunan bir asansör için (örneğin ETSL), aşağıdaki tabloya başvurun.</p>
        <img src={tablo3} className={styles["w-150"]} />
    </div>

    <div>{inputLine("sks", "SKS (mm)")}
      <h5 className={styles["subtitle"]}>Between 0 and 2000</h5>
      <p>Kabin zıplama mesafesi</p>
    </div>
    <div>{inputLine("hgp", "HGP (mm) ")}
      <h5 className={styles["subtitle"]}>Between 0 and 2000</h5>
      <p>Karşı ağırlık tamponu ile tampon darbe plaka arasında ölçülen mesafe</p>
    </div>
    <div>{inputLine("hphg", "HPHG (mm)")}
      <h5 className={styles["subtitle"]}>Between 0 and 2000</h5>
      <p>Karşı ağırlık tampon stroku</p>
    </div>
    <div>{inputLine("parasut_tipi_sa_rf_0002_olan_karsı_agırlık", "Paraşüt tipi SA RF 0002 olan karşı ağırlık için: 70 (mm) girin")}
      <h5 className={styles["subtitle"]}>Paraşütsüz veya SA RF 0002'den başka paraşüt tipli karşı ağırlık için: 0 girin.</h5>
    </div>
    <div>{inputLine("x_mm", "X (mm) ")}
      <h5 className={styles["subtitle"]}>Between 0 and 3000</h5>
      <p>LKO (üst kat altında kabin offseti)</p>
    </div>

    <div>
      <h5>Toplam Y (mm) </h5>
      <p>Value: ?<br />
      Karşı ağırlık paraşütsüz veya paraşüt tipi SA RF 0002'den farklı ise: SKS + HGP + HPH + X / Karşı ağırlık paraşütü SA RF 0002 ise: SKS + HGP + HPH + 70 + X</p>
    </div>

    <div>{inputLine("olculen_guvenlik_mesafesi", "Ölçülen güvenlik mesafesi A (mm) ", {variant: "border"})}
      <h5 className={styles["subtitle"]}>Kabin çatısında sığınma alanı/alanlarının herhangi biri ile kuyu tavanının en alçak kısmı arasındaki serbest dikey mesafe</h5>
    </div>

    <div>
      <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi A-Y (mm) </h5>
      <p>Value: ?<br />
      Kabul kriteri: A-Y ≥ 1000 mm</p>
    </div>

    <div className={styles["box"]}>
      <h4>Güvenlik mesafesi B için ölçüm yöntemini seçin:</h4>
      <div>{radio("guvenlik_mesafesi_b_olcum_yontemi", { variant: "circle", inputArray: 
        ["Basitleştirilmiş ölçüm yöntemi: Mesafe E ≥ 500 mm",
         "Ayrıntılı ölçüm yöntemi: Mesafe E < 500 mm"] })}</div>
    </div>

    <div>
      <p>Basitleştirilmiş ölçüm yöntemi: <br />
      EN 81-20:2014/EN 81-20:2020 5.2.5.7.2.a maddesinin gerektirdiğinden daha katı sonuçlara yol açan ölçüm yöntemi.</p>
      <p className={styles["circle"]}>B mesafesini kuyu tavanına dikey olarak ölçün</p>
      </div>
      <div>{inputLine("olculen_guvenlik_mesafesi2", "Ölçülen güvenlik mesafesi B (mm) ", {variant: "border"})}
        <h5 className={styles["subtitle"]}>Kabin izdüşümü dahilinde; kabin çatısına monte edilmiş en yüksek ekipman ile 500 mm (E mesafesi) yatay mesafede kuyu tavanının en alçak kısmı arasındaki serbest dikey mesafe</h5>
    </div>
    <div>
      <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi B-Y (mm) </h5>
      <p>Value: ?<br />
      Kabul kriteri: B-Y ≥ 500 mm</p>
    </div>
    <div>
      <p>Ayrıntılı ölçüm yöntemi:</p>
      <p className={styles["circle"]}>B mesafesini kuyu tavanına dikey olarak ölçün. </p>
      <p className={styles["circle"]}>Ölçülen F mesafesi, Belirtilen Fmaks değerini geçerse B mesafesinin azaltılması gerekir.</p>
    </div>

    <div>{inputLine("olculen_guvenlik_mesafesi3", "Ölçülen güvenlik mesafesi E (mm) ", {variant: "border"})}
      <h5 className={styles["subtitle"]}>Between 0 and 499</h5>
      <p>Engele kadar olan yatay mesafe</p>
    </div>
    <div>{inputLine("olculen_yukseklik", "Ölçülen yükseklik F (mm)  ", {variant: "border"})}
      <h5 className={styles["subtitle"]}>Between 0 and 2000</h5>
      <p>Engelin yüksekliği</p>
    </div>
    <div>
      <h5 className={styles["circle"]}>Hesaplanan yükseklik Fmaks (mm)  </h5>
      <p>Value: ?<br />
      SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız: Fmaks yüksekliği aşağıdaki tabloda belirtildiği şekildedir. Ara değerler için Fmaks mesafesini interpolasyonla hesaplayın. Referans olarak en yakın E değerini kullanın.</p>
    </div>

    <img src={tablo4} className={styles["w-400"]} />

    <div>
      <h5 className={styles["circle"]}>Hesaplanan F* (mm) </h5>
      <p>Value: ?<br />
      Ölçülen F - Fmaks / SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız: F* {">"} 0 ise: F* değerini gir(sonra girilen bu değer, B mesafesinden çıkarılacaktır). F* ≤ 0 ise: 0 girin</p>
    </div>
     <div>{inputLine("olculen_guvenlik_mesafesi4", "Ölçülen güvenlik mesafesi B (mm)")}
      <h5 className={styles["subtitle"]}>Kabin izdüşümü dahilinde; kabin çatısına monte edilmiş en yüksek ekipman ile 500 mm (E mesafesi) yatay mesafede kuyu tavanının en alçak kısmı
      arasındaki serbest dikey mesafe</h5>
    </div>
    <div>
      <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi B- F*-Y (mm) </h5>
      <p>Value: ?<br />
      Kabul kriteri: B-F*-Y ≥ 500 mm</p>
    </div>

    <div className={styles["box"]}>
      <h4>Korkuluk kurulu</h4>
      <div>{radio("korkuluk_kurulu", { variant: "circle", inputArray: 
        ["Evet","Hayır"] })}
        <p className={styles["subtitle"]}>Monte edilmiş korkuluk yoksa C mesafesini ölçmek gerekmez.</p>
        </div>
    </div>

    <div className={styles["box"]}>
      <h4>Güvenlik mesafesi C için ölçüm yöntemini seçin:</h4>
      <div>{radio("ofis4", { variant: "circle", inputArray: 
        ["Basitleştirilmiş ölçüm yöntemi: Mesafe E ≥ 500 mm",
         "Ayrıntılı ölçüm yöntemi: Mesafe E < 500 mm"] })}</div>
         <p className={styles["subtitle"]}>Monte edilmiş korkuluk yoksa C mesafesini ölçmek gerekmez.</p>
    </div>
    <div>
      <p>Basitleştirilmiş ölçüm yöntemi:<br />
      EN 81-20:2014/EN 81-20:2020 5.2.5.7.2.c.2 maddesinin gerektirdiğinden daha katı sonuçlara yol açan ölçüm yöntemi.</p>
      <p className={styles["circle"]}>C mesafesini kuyu tavanına dikey olarak ölçün.</p>
    </div>
    <div>{inputLine("olculen_guvenlik_mesafesi5", "Ölçülen güvenlik mesafesi C (mm) ", {variant: "border"})}
      <h5 className={styles["subtitle"]}>Kabin izdüşümü dahilinde; korkuluğun en yüksek kısmı ile 500 mm (E mesafesi) yatay mesafede kuyu tavanının en alçak kısmı arasındaki serbest
      dikey mesafe</h5>
    </div>
    <div>
      <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi C-Y (mm) </h5>
      <p>Value: ?<br />
      Kabul kriteri: C-Y ≥ 300 mm</p>
    </div>
    <div>
      <p>Ayrıntılı ölçüm yöntemi:</p>
      <p className={styles["circle"]}>C mesafesini kuyu tavanına dikey olarak ölçün.</p>
      <p className={styles["circle"]}>Ölçülen F mesafesi, Belirtilen Fmaks değerini geçerse C mesafesinin azaltılması gerekir.</p>
    </div>
    <div>{inputLine("olculen_yukseklik_mesafesi6", "Ölçülen güvenlik mesafesi E (mm)", {variant: "border"})}
      <h5 className={styles["subtitle"]}>Between 0 and 499</h5>
      <p>Engele kadar olan yatay mesafe</p>
    </div>
    <div>{inputLine("olculen_yukseklik2", "Ölçülen yükseklik F (mm)", {variant: "border"})}
      <h5 className={styles["subtitle"]}>Between 0 and 2000</h5>
      <p>Engelin yüksekliği</p>
    </div>
    <div>
      <h5 className={styles["circle"]}>Hesaplanan yükseklik Fmaks (mm) </h5>
      <p>Value: ?<br />
      SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız: Fmaks yüksekliği aşağıdaki tabloda belirtildiği şekildedir. Ara değerler için Fmaks mesafesini interpolasyonla hesaplayın. Referans olarak en yakın E değerini kullanın</p>
    </div>

    <img src={tablo5} className={styles["w-400"]} />

    <div>
      <h5 className={styles["circle"]}>Hesaplanan F* (mm) </h5>
      <p>Value: ?<br />
      Ölçülen F - Fmaks / SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız: F* {">"} 0 ise: F* değerini girin (sonra girilen bu değer, ölçülen C mesafesinden çıkarılacaktır). F* ≤ 0 ise: 0 girin</p>
    </div>
    <div>{inputLine("olculen_guvenlik_mesafesi6", "Ölçülen güvenlik mesafesi C (mm) ", {variant: "border"})}
      <h5 className={styles["subtitle"]}>Kabin izdüşümü dahilinde; korkuluğun en yüksek kısmı ile 500 mm (E mesafesi) yatay mesafede kuyu tavanının en alçak kısmı arasındaki serbest dikey mesafe</h5>
    </div>
    <div>
      <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi C- F*-Y (mm) </h5>
      <p>Value: ?<br />
      Kabul kriteri: C- F*-Y ≥ 300 mm</p>
    </div>
    <div>{inputLine("olculen_guvenlik_mesafesi7", "Ölçülen güvenlik mesafesi D (mm)", {variant: "border"})}
      <h5 className={styles["subtitle"]}>Kılavuz patenlerin üstü ve kılavuz rayların sonu arasındaki serbest dikey mesafe. / Kabin çatısı ve makinenin altındaki en alt kısım arasındaki serbest dikey mesafe (makine, kabin çatısı ile örtüşüyorsa - MRL asansörü için geçerli). / Kabin çatısının üstü ve aşırı hız regülatör desteğinin en alt kısmı arasındaki serbest dikey mesafe</h5>
    </div>
    <div>
      <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi D-Y (mm) </h5>
      <p>Value: ?<br />
      Kabul kriteri: D-Y ≥ 100 mm / ES1 için (MRL asansör): Mevcut EU Tip İncelemesi EN 81 gerekliliklerinden sapmayı mümkün kılar. KG'niz mevcut EU Tip İnceleme Sertifikasını uyguluyorsa ve makine kabin çatısı üzerine çıkıyorsa D-Y ≥ 85 mm'ye izin verilir.</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.1.4 Sığınma alanı ilgili standarda göre mi  </h4>
      <div>{radio("3.1.4", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>


    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p className={styles["circle"]}>Azaltılmış/alçak üst boşluğu olmayan asansör için: Karşı ağırlık tamamen sıkıştırılmış tamponlar üzerindedir.</p>
      <p className={styles["circle"]}>Azaltılmış/alçak üst boşluğu olan asansör için: Kabin sıkıştırılmış TSD21 tamponları üzerindedir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
      <p>ES1 için</p>
      <p>Mevcut sığınma alanı resmi - Dik duruş (1 kişi için mevcut sığınma alanı gösterilmiştir)</p>
      <p>Sığınma alanı boyutları:</p>
      <p className={styles["circle"]}>Yatay alan:</p>
      <p>– ≥ 0,30 x 0,50 m, sığınma alanı azaltımı maksimum 0,10 x 0,30 m ise</p>
      <p>– ≥ 0,40 x 0,50 m, sığınma alanı azaltması yoksa</p>
      <p className={styles["circle"]}>Yükseklik ≥ 2,00 m.</p>
      <img src={photo1} className={styles["w-100"]} />
    </div>
    
    <div className={styles["box"]}>
      <p>ES1 için</p>
      <p>Ayakta duruyorsanız: Maksimum izin verilen sığınma alanı azaltma</p>
      <img src={şekil22} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>ES5.0 / ES5 için:</p>
      <p>Mevcut sığınma alanı resmi - Dik duruş (1 kişi için mevcut sığınma alanı gösterilmiştir)</p>
      <p>Sığınma alanı boyutları:</p>
      <p className={styles["circle"]}>Yatay alan: ≥ 0,40 x 0,50 m</p>
      <p className={styles["circle"]}>Yükseklik ≥ 2,00 m.</p>
      <img src={photo2} className={styles["w-100"]} />
    </div>

    <div className={styles["box"]}>
      <p>Mevcut sığınma alanı resmi - Çömelerek duruş (1 kişi için mevcut sığınma alanı gösterilmiştir)</p>
      <p>Sığınma alanı boyutları:</p>
      <p className={styles["circle"]}>Yatay alan: ≥ 0,50 x 0,70 m</p>
      <p className={styles["circle"]}>Yükseklik: ≥ 1,00 m.</p>
      <img src={photo3} className={styles["w-100"]} />
    </div>

    <div className={styles["box"]}>
      <p>Çömelerek duruyorsanız: Maksimum izin verilen sığınma alanı azaltma</p>
      <img src={şekil23} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>En az bir sığınma alanı mevcut.</p>
      <p className={styles["circle"]}>Kabin çatısına birden fazla kişinin girmesine izin veriliyorsa, kişi başına bir sığınma alanı mevcut.</p>
      <p className={styles["circle"]}>Mevcut sığınma alanı/alanları kabin çatısı giriş noktasında gösterilen ekli resme göre.</p>
      <p className={styles["circle"]}>Birden fazla sığınma alanı mevcutsa sığınma alanları aynı tipte ve birbiri ile kesişmiyor.</p>
      <p className={styles["circle"]}>Gerekliyse her sığınma alanı kabin çatısında yerleşim çiziminde belirtildiği gibi açıkça işaretlidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>AP için Uluslararası Standartlardan Yerel Sapmalar</p>
      <p>Çin:</p>
      <p className={styles["circle"]}>Sığınma alanı için belirtilen uyarı işaretleri yerleştirilmiştir (1 kişilik sığınma alanı gösterilmiştir).</p>
      <img src={photo4} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <h4>3.1.5 Kabin kılavuz rayları ve karşı ağırlık üzerindeki açıklıklar yerleşim çizimine göre mi  </h4>
      <div>{radio("3.1.5", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>MR asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Standart tavsiye:</p>
      <p className={styles["circle"]}>HQ ≤ 100 m için: X ≥ 100 mm</p>
      <p className={styles["circle"]}>HQ {">"} 100 m için: X ≥ 150 mm.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
    </div>

    <div className={styles["box"]}>
      <img src={şekil24} className={styles["w-300"]} />
    </div>
    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>X mesafesi yerleşim çizimine göredir.</p>  
    </div>

    <div className={styles["box"]}>
      <h4>3.4.14.c Dönen makaralar ve çekiş kasnakları korumalı mı ve STM'ler gerektiği şekilde kurulu mu</h4>
      <div>{radio("3.4.14.c", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Üst boşlukta dönen parçalar aşağıdakilere karşı mevcut</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Dönen makaralar ve çekiş şaftları aşağıdakileri önlemek üzere korunmuş:</p>
      <p>– Personelin yaralanması (makara kapağı takılıdır).</p>
      <p>– Gevşekse (STM tutucuları monte edilmiş) STM'lerin makaralardan çıkması.</p>
      <p>– STM'ler ile makaralar arasında istenmeyen nesneler.</p>
      <p className={styles["circle"]}>STM'ler makaraların ortasında kurulmuş.</p>
      <p className={styles["circle"]}>STM tutucular monte edilmiştir ve STM'lerle temas halinde değil.</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.1.16.c Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı </h4>
      <div>{radio("4.1.16.c", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Çalışma yerinde kaynaklama yapılmasına sertifikasyonlu bir kaynakçı tarafından VE yerleşim çizimi, kaynak çizimleri ve/veya kaynak için çalışma talimatındaki spesifikasyonlara göre yapılırsa izin verilir.</p>
      <p className={styles["circle"]}>Kaynakçının sertifikasyonu KG'nin sorumluluğundadır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p className={styles["circle"]}>Makina çerçevesi (MRL) ve kılavuz ray tutturma kısımlarının birkaç yapısal sabitlemesini rastgele kontrol edin.</p>
      <p className={styles["circle"]}>Sadece sahada yapılan kaynakların kontrol edilmesi yeterlidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tutturucu cıvatalar:</p>
      <p>– Tutturucu cıvataların hiçbiri eksik değil.</p>
      <p>– Doğru rondelalar kurulu.</p>
      <p>– Tutturucu cıvatalar doğru şekilde sıkılmış.</p>
      <p className={styles["circle"]}>Çalışma yerinde yapılan kaynaklar (varsa): Çalışma yerinde yapılan tüm kaynaklar sertifikasyonlu bir kaynakçı tarafından ve yerleşim çizimleri, kaynak çizimleri ve/veya kaynak için hazırlanan çalışma talimatındaki spesifikasyonlara göre yapılmış.</p>
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>7.2 Makinalar </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>2.6.1 Belirtilen makina kurulu mu   </h4>
      <div>{radio("2.6.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_makine_tipi", "Belirtilen makine tipi  ")}</div>

    <div>{selectField("makina_tipi", "Makina tipi  ", 
        [ { _id: "1", name: "DR FMB 130-LS-4A352"},
          {_id: "2", name: "DR FMB 130-LS-4A640"},
          {_id: "3", name: "DR FMB 130-LS-4A880"},
          {_id: "4", name: "DR FMB 130-LS-4AL640"},
          {_id: "5", name: "DR FMB 130-LS-4AL880"},
          {_id: "6", name: "DR FMB 130-LS-4B160"},
          {_id: "7", name: "DR FMB 130-LS-4B272"},
          {_id: "8", name: "DR FMB 130-LS-4B304"},
          {_id: "9", name: "DR FMB 130-LS-4B352"},
          {_id: "10", name: "DR FMB 130-LS-4B512"},
          {_id: "11", name: "DR FMB 130-LS-4BS160"},
          {_id: "12", name: "DR FMB 130-LS-4BS272"},
          {_id: "13", name: "DR FMB 130-LS-4BS304"},
          {_id: "14", name: "DR FMB 130-LS-4BS352"},
          {_id: "15", name: "DR FMB 130-LS-4BS512"},
          {_id: "16", name: "DR FMB 130-LS-4C96"},
          {_id: "17", name: "DR FMB 130-LS-4C176"},
          {_id: "18", name: "DR FMB 130-LS-4C192"},
          {_id: "19", name: "DR FMB 130-LS-4C224"},
          {_id: "20", name: "DR FMB 130-LS-4C320"},
          {_id: "21", name: "DR FMB 130-LS-4CL192"},
          {_id: "22", name: "DR FMB 130-LS-4CL320"},
          {_id: "23", name: "DR FMB 130-LS-4CS192"},
          {_id: "24", name: "DR FMB 130-LS-4CS320"},
          {_id: "25", name: "DR FMB 130-LS-4KL768"},
          {_id: "26", name: "DR FMB 130-LS-4KL1040"},
          {_id: "27", name: "DR PMB 125-A07"},
          {_id: "28", name: "DR PMB 125-A09"},
          {_id: "29", name: "DR PMB 125-B07"},
          {_id: "30", name: "DR PMB 125-B08"},
          {_id: "31", name: "DR PMB 125-B09"},
          {_id: "32", name: "DR PMB 125-B11"},
          {_id: "33", name: "DR PMB 125-C08"},
          {_id: "34", name: "DR PMB 125-C09"},
          {_id: "35", name: "DR PMB 125-C11"},
          {_id: "36", name: "DR PMB 125-C13"},
          {_id: "37", name: "DR PMB 135-A"},
          {_id: "38", name: "DR PMB 135-B"},
          {_id: "39", name: "DR PMB 135-C"},
          {_id: "40", name: "DR PMB 135-A09"},
          {_id: "41", name: "DR PMB 135-A11"},
          {_id: "42", name: "DR PMB 135-A13"},
          {_id: "43", name: "DR PMB 135-A15"},
          {_id: "44", name: "DR PMB 135-B13"},
          {_id: "45", name: "DR PMB 135-B15"},
          {_id: "46", name: "DR PMB 135-B17"},
          {_id: "47", name: "DR PMB 135-B20"},
          {_id: "48", name: "DR PMB 135-C15"},
          {_id: "49", name: "DR PMB 135-C17"},
          {_id: "50", name: "DR PMB 135-C20"},
          {_id: "51", name: "DR PMB 135-C24"},
          {_id: "52", name: "DR PML 145"},
          {_id: "53", name: "DR PML 155"},
          { _id: "54", name: "Belirtilen gibi değil (bulguları kaydedin)"}
        ])}
        <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
    </div>

    <div className={styles["box"]}>
      <h4>2.6.2 Makinanın hizalanması ve tutturulması yerleşim çizimine göre mi  </h4>
      <div>{radio("2.6.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
    </div>

    <div className={styles["box"]}>
      <p>DR FMB 130 - Makinanın hizalanması ve tutturulması</p>
      <p>1 Duvar tarafında cıvata</p>
      <p>2 Cıvata</p>
      <p>3 Kabin tarafında cıvata</p>
      <p>4 Su terazisi</p>
      <p>5 Kilitleme somunu</p>
      <p>6 Kilitleme somunu</p>
      <p>7 Tel</p>
      <img src={şekil25} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>DR FMB 130 / DR PMB 125 / DR PMB 135 - Makina desteğinin sabitlenmesi</p>
      <p>1 Yaylı pim</p>
      <img src={şekil26} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>DR PML 145 / DR PML 155 - Makina desteğinin seviyelenmesi</p>
      <p>1 Hizalayıcı cıvata</p>
      <img src={şekil27} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Makina desteği doğru monte edilmiş ve tutturulmuş.</p>
      <p className={styles["circle"]}>Makina desteği ve kabin askısı her yönde yatay seviyelidir ve sağlamca tutturulmuştur.</p>
      <p className={styles["circle"]}>Makina, desteğine doğru şekilde tutturulmuş.</p>
      <p className={styles["circle"]}>Makina, desteğinde yatay olarak hizalıdır.</p>
      <p className={styles["circle"]}>DR FMB 130 / DR PMB 125 / DR PMB 135 için: Karşı ağırlık kılavuz rayları yaylı pimlerle sabitlenmiştir.</p>
      <p className={styles["circle"]}>DR PML 145 / DR PML 155: Seviyeleme cıvatası, karşı ağırlık kılavuz rayına doğru şekilde sabitlenmiştir.</p>
      <p className={styles["circle"]}>Sırtı kama girintili kılavuz raylar için: Şim plaka monte edilmiştir.</p>
    </div>

    <div className={styles["box"]}>
      <h4>5.1.16 Makinanın her tutturma cıvatası bir emniye teliyle sabitlenmiş mi  </h4>
      <div>{radio("5.1.16", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
    </div>

    <div className={styles["box"]}>
      <p>Tutturma cıvatası üstünde güvenlik teli (örnek)</p>
      <img src={şekil28} className={styles["w-300"]} />
    </div>


    <div className={styles["box"]}>
      <h4>7.5.1 Yukarı yönde giden kabin aşırı hız koruma cihazı (makina freni) kurulu ve CE işaretli mi </h4>
      <div>{radio("7.5.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_makina_fren_tipi", "Belirtilen makina freni tipi")}</div>

    <div>{selectField("makina_fren_tipi2", "Makina fren tipi", 
        [ { _id: "1", name: "Leroy Somer - FCRD90"},
          { _id: "2", name: "Leroy Somer - FCRD112"},
          { _id: "3", name: "Kendrion - 78 11029B05"},
          { _id: "4", name: "Kendrion - 78 11019B01"},
          { _id: "5", name: "Kendrion - 78 11033B01"},
          { _id: "6", name: "Kendrion - 78 11040B01"},
          { _id: "7", name: "Mayr - RSQ 250"},
          { _id: "8", name: "Mayr - RSQ 300"},
          { _id: "9", name: "Mayr - RSQ 500"},
          { _id: "10", name: "Belirtilen gibi değil (bulguları kaydedin)"}
        ])}
        <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
    </div>


    <div>{inputLine("belirtilen_nominal_fren_torku", "Belirtilen nominal fren torku (Nm)")}</div>

    <div>{selectField("nominal_fren_torku2", "Nominal fren torku (Nm)", 
        [ { _id: "1", name: "2 x 65"},
          { _id: "2", name: "2 x 80"},
          { _id: "3", name: "2 x 88"},
          { _id: "4", name: "2 x 100"},
          { _id: "5", name: "2 x 105"},
          { _id: "6", name: "2 x 110"},
          { _id: "7", name: "2 x 125"},
          { _id: "8", name: "2 x 150"},
          { _id: "9", name: "2 x 160"},
          { _id: "10", name: "2 x 165"},
          { _id: "11", name: "2 x 200"},
          { _id: "12", name: "2 x 220"},
          { _id: "13", name: "2 x 250"},
          { _id: "14", name: "2 x 300"},
          { _id: "15", name: "2 x 320"},
          { _id: "16", name: "2 x 400"},
          { _id: "17", name: "2 x 500"},
          { _id: "18", name: "2 x 630"},
          { _id: "19", name: "Belirtilen gibi değil (bulguları kaydedin)"}
        ])}
        <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
    </div>

    <div className={styles["box"]}>
      <h4>2.7.1 Belirtilen tahrik dönüştürücü kurulu mu </h4>
      <div>{radio("2.7.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Yazılım versiyonunu bulmak için SMLCD üzerinde şu parametreyi seçin:</p>
      <p>Status (Durum) → Versions (Versiyonlar) → Inverter SW (İnverter SW)</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_tahrik_donusturucu_tipi", "Belirtilen tahrik dönüştürücü tipi ", {dontUseSymbol:true})}</div>

    <div>{selectField("tahrik_donusturucu_tipi", "Tahrik dönüştürücü tipi  ", 
        [ { _id: "1", name: "DR VAB 033"},
          { _id: "2", name: "DR VAB 044"},
          { _id: "3", name: "DR VAB 088"},
          { _id: "4", name: "DR VAB 022"},
          { _id: "5", name: "DR VAB 033"},
          { _id: "6", name: "DR VAP 055"},
          { _id: "7", name: "DR VAP 077"},
          { _id: "8", name: "DR VAP 088"},
          { _id: "9", name: "DR VAP 155"},
          { _id: "10", name: "DR VAP 013"},
          { _id: "11", name: "DR VAP 014"},
          { _id: "12", name: "DR VAF 023"},
          { _id: "13", name: "DR VAF 025"},
          { _id: "14", name: "DR VAF 043"},
          { _id: "15", name: "Belirtilen gibi değil (bulguları kaydedin)"}
        ])}
    </div>

      <div>{inputLine("yazilim_versiyonu2", "Yazılım versiyonu", {dontUseSymbol:true})}</div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Belirtilen tahrik dönüştürücü tipi monte edilmiş.</p>
        <p className={styles["circle"]}>DR VAF / DR VAB için: Garanti etiketi bozulmamış.</p>
      </div>

      
      <div className={styles["box"]}>
        <h4>2.1.5 İkinci ana şalter JH1 tahriğe yakın monte edilmiş, kolayca tanımlanabilir ve erişilebilir ve işlevsel mi </h4>
        <div>{radio("2.1.5", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>İkinci ana şalter JH1 sipariş edilmiş ve kurulmuş</p>
      </div>

      <div>{inputLine("jh1_sipariş_edilmiş", "JH1 sipariş edilmiş", {dontUseSymbol:true})}</div>

      <div className={styles["box"]}>
        <h3 className={styles["title"]}>7.3 Kabin aşırı hız regülatörü</h3>
        <hr />
      </div>


      <div className={styles["box"]}>
        <h4>7.2.1 Belirtilen kabin aşırı hız regülatörü doğru dönüş yönünde kurulu, mühürlü ve CE işaretli mi ve emniyet kontağı (KBV) işlevsel mi </h4>
        <div>{radio("7.2.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Tip etiketindeki kısaltmalar:</p>
        <p className={styles["circle"]}>Anma hızı:</p>
        <p>– Schindler: VKN</p>
        <p>– Wittur (SA WOL): VNS.</p>
        <p className={styles["circle"]}>Kabin aşırı hız regülatörü tetiklenme hızı:</p>
        <p>– Schindler: VCA1</p>
        <p>– Wittur (SA WOL): VTS.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

      <div>{inputLine("belirtilen_asiri_hiz_regulator_tipi", "Belirtilen aşırı hız regülatörü tipi ")}</div>
      
      <div>{selectField("asiri_hiz_regulator_tipi2", "Aşırı hız regülatörü tipi", 
          [ { _id: "1", name: "SA GBP 201"},
            { _id: "2", name: "SA WOL 35"},
            { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
      </div>
  
      <div>{inputLine("belirtilen_vkn_ms", "Belirtilen VKN (m/s)")}</div>


      <div>{selectField("vkn_ms", "VKN (m/s) ", 
        [ { _id: "1", name: "0.63"},
          { _id: "2", name: "0.80"},
          { _id: "3", name: "1.00"},
          { _id: "4", name: "1.50"},
          { _id: "5", name: "1.60"},
          { _id: "6", name: "1.75"},
          { _id: "7", name: "2.00"},
          { _id: "8", name: "2.50"},
          { _id: "9", name: "3.00"},
          { _id: "10", name: "3.50"},
          { _id: "11", name: "4.00"},
          { _id: "12", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
    </div>

    <div>{selectField("vca1", "VCA1 (m/s) ", 
        [ { _id: "1", name: "VKN 0,63: 0,72 ... 1,50"},
          { _id: "2", name: "VKN 0,80: 0,92 ... 1,32"},
          { _id: "3", name: "VKN 1,00: 1,15 ... 1,50"},
          { _id: "4", name: "VKN 1,50: 1,72 ... 2,04"},
          { _id: "5", name: "VKN 1,60: 1,84 ... 2,15"},
          { _id: "6", name: "VKN 1,75: 2,01 ... 2,33"},
          { _id: "7", name: "VKN 2,00: 2,30 ... 2,62"},
          { _id: "8", name: "VKN 2,50: 2,87 ... 3,22"},
          { _id: "9", name: "VKN 3,00: 3,45 ... 3,83"},
          { _id: "10", name: "VKN 3,50: 4,03 ... 4,45"},
          { _id: "11", name: "VKN 4,00: 4,60 ... 5,06"},
          { _id: "12", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tip etiketinde belirtilen kabin aşırı hız regülatör tipi ve VKN asansör verileriyle uyuşuyor.</p>
      <p className={styles["circle"]}>Kabin aşırı hız regülatörünün VCA1 değeri VKN için belirtilen VCA1 aralığı içinde.</p>
      <p className={styles["circle"]}>Dönüş yönü etiketi görünür durumda ve kabin aşırı hız regülatörü doğru yönde çalışıyor.</p>
      <p className={styles["circle"]}>Kabin aşırı hız regülatörü mühürlü ve CE işaretli.</p>
      <p className={styles["circle"]}>Kabin aşırı hız regülatörü hasarsız.</p>
      <p className={styles["circle"]}>Emniyet kontağı (KBV) her iki seyir yönünde çalışır.</p>
      <p className={styles["circle"]}>Kabin aşırı hız regülatörü yatay ve dikey olarak hizalı.</p>
      <p className={styles["circle"]}>Aşırı hız regülatör halatı için bir tutucu kuruludur.</p>
      <p className={styles["circle"]}>Azaltılmış/alçak üst boşluksuz asansör için: Kabin aşırı hız regülatörü bir kapakla korunmuştur.</p>
      <p className={styles["circle"]}>Sırtı kama girintili kılavuz raylar için: Şim plaka monte edilmiştir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.7.2.1 (SA GBP 201 için örnek)</p>
      <p className={styles["arrow"]}>KBV kontağını her iki yönde hareket ettirin.</p>
      <p className={styles["arrow"]}>KBV kontağının emniyet devresini her iki yönde çalıştırdığından emin olun.</p>
    </div>

    <div className={styles["box"]}>
      <p>SA GBP 201</p>
      <img src={şekil29} className={styles["w-200"]} />
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>7.4 Karşı ağırlık aşırı hız regülatörü</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>7.4.1 Belirtilen karşı ağırlık aşırı hız regülatörü doğru dönüş yönünde kurulu, mühürlü ve CE işaretli mi ve emniyet kontağı (KBVG) işlevsel mi </h4>
      <div>{radio("7.4.1", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Karşı ağırlık üzerinde mekanik emniyet sistemi sipariş edilmiş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Tip etiketindeki kısaltmalar:</p>
      <p className={styles["circle"]}>Anma hızı:</p>
      <p>– Schindler: VKN</p>
      <p>– Wittur (SA WOL): VNS.</p>
      <p className={styles["circle"]}>Karşı ağırlık aşırı hız regülatörü tetiklenme hızı:</p>
      <p>– Schindler: VCA2</p>
      <p>– Wittur (SA WOL): VTS.</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_asiri_hiz_regulator_tipi2", "Belirtilen aşırı hız regülatörü tipi ")}</div>

    <div>{selectField("asiri_hiz_regulator_tipi3", "Aşırı hız regülatörü tipi", 
        [ { _id: "1", name: "SA GBP 201"},
          { _id: "2", name: "SA WOL 35"},
          { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
    </div>

    <div>{inputLine("belirtilen_vkn_ms2", "Belirtilen VKN (m/s)")}</div>

    <div>{selectField("vkn_ms21", "VKN (m/s) ", 
        [ { _id: "1", name: "0.63"},
          { _id: "2", name: "0.80"},
          { _id: "3", name: "1.00"},
          { _id: "4", name: "1.50"},
          { _id: "5", name: "1.60"},
          { _id: "6", name: "1.75"},
          { _id: "7", name: "2.00"},
          { _id: "8", name: "2.50"},
          { _id: "9", name: "3.00"},
          { _id: "10", name: "3.50"},
          { _id: "11", name: "4.00"},
          { _id: "12", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
    </div>
    <div>{selectField("vca2", "VCA2 (m/s)", 
        [ { _id: "1", name: "VKN 0,63: 0,72 ... 1,50"},
          { _id: "2", name: "VKN 0,80: 0,92 ... 1,32"},
          { _id: "3", name: "VKN 1,00: 1,15 ... 1,50"},
          { _id: "4", name: "VKN 1,50: 1,72 ... 2,04"},
          { _id: "5", name: "VKN 1,60: 1,84 ... 2,15"},
          { _id: "6", name: "VKN 1,75: 2,01 ... 2,33"},
          { _id: "7", name: "VKN 2,00: 2,30 ... 2,62"},
          { _id: "8", name: "VKN 2,50: 2,87 ... 3,22"},
          { _id: "9", name: "VKN 3,00: 3,45 ... 3,83"},
          { _id: "10", name: "VKN 3,50: 4,03 ... 4,45"},
          { _id: "11", name: "VKN 4,00: 4,60 ... 5,06"},
          { _id: "12", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Tip etiketine başvurun.</h5>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tip etiketinde bulunan karşı ağırlık aşırı hız regülatör tipi ve VKN asansör verileriyle uyuşuyor.</p>
      <p className={styles["circle"]}>Karşı ağırlık aşırı hız regülatörünün VCA2 değeri VKN için belirtilen VCA2 aralığı içinde.</p>
      <p className={styles["circle"]}>Dönme yönü etiketi görünür durumda ve karşı ağırlık aşırı hız regülatörü doğru yönde çalışıyor.</p>
      <p className={styles["circle"]}>Karşı ağırlık aşırı hız regülatörü mühürlü ve CE işaretli.</p>
      <p className={styles["circle"]}>Karşı ağırlık aşırı hız regülatörü hasarsız.</p>
      <p className={styles["circle"]}>Elektriksel emniyet kontağı (KBVG) her iki seyir yönünde çalışır.</p>
      <p className={styles["circle"]}>Karşı ağırlık aşırı hız regülatörü yatay ve dikey olarak hizalı.</p>
      <p className={styles["circle"]}>Aşırı hız regülatör halatı için bir tutucu kuruludur.</p>
      <p className={styles["circle"]}>Karşı ağırlık aşırı hız regülatörü bir kapakla korunmuştur.</p>
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>7.5 Askı yolları</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>5.1.1 Belirtilen STM'ler doğru kurulu mu </h4>
      <div>{radio("5.1.1", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_stm_tipi", "Belirtilen STM tipi ")}</div>

    <div>{selectField("stm_tipi", "STM tipi", 
        [ { _id: "1", name: "STM-PV30"},
          { _id: "2", name: "STM-PV40"},
          { _id: "3", name: "STM-PV50"},
          { _id: "4", name: "STM-PV60"},
          { _id: "5", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div>{inputLine("belirtilen_stm_adedi", "Belirtilen STM adedi ZZ (-)")}</div>

    <div>{selectField("stm_adedi2", "STM adedi ZZ (-) ", 
        [ { _id: "1", name: "2"},
          { _id: "2", name: "3"},
          { _id: "3", name: "4"},
          { _id: "4", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>STM'lerin tip ve adedi yerleşim çizimiyle uyumlu.</p>
      <p className={styles["circle"]}>STM'ler kama soketi muhafazasına kurulum el kitabına göre doğru yönde yerleştirilmiş.</p>
    </div>

    <div className={styles["box"]}>
      <h4>5.1.18 Tüm STM'lerin doğru üretim tarihleri kontrol parametresi (TMManufactDate) içine girilmiş mi</h4>
      <div>{radio("5.1.18", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
      <p>1 Pazartesi ... Pazar (1 ... 7)</p>
      <p>2 Hafta (01 ... 52)</p>
      <p>3 Yıl (04 ... 99)</p>
      <p>STM'de basılı üretim tarihi (örnek)</p>
      <img src={şekil30} className={styles["w-400"]} />
    </div>

    <div className={styles["box"]}>
      <p>SMLCD'de gösterilen üretim tarihi (örnek)</p>
      <img src={şekil31} className={styles["w-200"]} />
    </div>

    <div>{inputLine("stm_1_basili_uretim_tarihi", "STM-1'de basılı üretim tarihi ")}</div>

    <div>
        <h5>Diğer STM'lerde basılı üretim tarihi</h5>
        <div>{radio("diger_stmlerde_basili_uretim_tarihi", { variant: "circle", inputArray: 
          ["STM-1 ile aynı",
           "STM-1'den farklı",
          ] })}
        </div>
    </div>

    <div>{inputLine("stm_2_basili_uretim_tarihi", "STM-2'de basılı üretim tarihi ")}</div>
    <div>{inputLine("monte_edilmis_stm3_basili_uretim_tarihi", "Monte edilmişse, STM-3'te basılı üretim tarihi   ")}</div>
    <div>{inputLine("monte_edilmis_stm4_basili_uretim_tarihi", "Monte edilmişse, STM-4'te basılı üretim tarihi   ")}</div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Kontrol parametresi (TMManufactDate) değeri STM'ler üzerine basılı olan üretim tarihiyle örtüşüyor.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.5.1.18</p>
      <p className={styles["arrow"]}>Her STM üzerinde basılı üretim tarihini kaydedin.</p>
      <p className={styles["arrow"]}>TMManufactDate parametresini kontrol edin.</p>
      <p>– SMLCD: Parameters (Parametreler) → TractionMediaMon → STMInstallDate → CommissNbr → OK (Tamam)→ 1 (STM number) (STM numarası) → OK? (Tamam?). SMLCD, TMManufactDate parametresinin değerini gösterir.</p>
      <p>– Parametre değerini sözkonusu STM için kaydedilen üretim tarihiyle karşılaştırın.</p>
      <p>– OK (Tamam) kısmına basın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Kontrol parametresi TMManufactDate değerinin STM üzerine basılı üretim tarihiyle aynıdır.</p>
      <p>Başarısız:</p>
      <p>– Kontrol parametresi TMManufactDate değerinin STM üzerine basılı üretim tarihiyle aynı değildir.</p>
      <p className={styles["arrow"]}>Karşılaştırma başarısız olduysa kontrol parametresi TMManufactDate düzeltin.</p>
      <p className={styles["arrow"]}>Her STM için işlemi tekrarlayın.</p>
    </div>

    <div className={styles["box"]}>
      <h4>5.1.2 STM'ler için belirtilen sonlandırma bağlantıları doğru kurulmuş ve bir bükülme önleyici cihazla sabitlenmiş mi </h4>
      <div>{radio("5.1.2", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{selectField("stm_soket_tipi", "STM soket tipi ", 
        [ { _id: "1", name: "PV30 kama soketi (malzeme numarası 59101244)"},
          { _id: "2", name: "PV40 kama soketi (malzeme numarası 59102531)"},
          { _id: "3", name: "PV50 kama soketi (malzeme numarası 59101687)"},
          { _id: "4", name: "PV60 kama soketi (malzeme numarası 59100946)"},
          { _id: "5", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Karşılık gelen doğru materyal numaralı STM sonlandırma bağlantıları monte edilmiştir.</p>
      <p className={styles["circle"]}>Soket tipi STM tipiyle uyumludur.</p>
      <p className={styles["circle"]}>STM sonlandırma bağlantıları doğru yapılıp gerektiği şekilde sabitlenmiştir.</p>
      <p className={styles["circle"]}>Kabin tarafında ve karşı ağırlık tarafında bir dönme önleyici cihaz monte edilmiştir.</p>
      <p className={styles["circle"]}>Kama soket yüzleri (2) belirtildiği şekilde hizalanmıştır:</p>
      <p>– HSK {"<"} 2900 mm için:</p>
      <p className={styles["circle"]}>Kabin tarafında: Kabine doğru.</p>
      <p className={styles["circle"]}>Karşı ağırlık tarafında: Kabine doğru.</p>
      <p>– HSK ≥ 2900 mm için:</p>
      <p className={styles["circle"]}>Kabin tarafında: Kuyu duvarına doğru.</p>
      <p className={styles["circle"]}>Karşı ağırlık tarafında: Kabine doğru.</p>
      <p className={styles["circle"]}>STM'ler karşı ağırlık tarafında, arka tarafları kılavuz raya doğru olacak şekilde 180° bir bükülmeyle kuruludur.</p>
      <p className={styles["circle"]}>STM sonlandırma bağlantıları ile makina desteği arasındaki açık mesafe ≥ 25 mm'dir.</p>
    </div>

    <div className={styles["box"]}>
      <p>STM kama soketi</p>
      <p>1 Soket arkası</p>
      <p>2 Soket yüzü</p>
      <img src={şekil32} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>180° STM bükülmesi</p>
      <img src={şekil33} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>STM sonlandırma bağlantıları ve makina desteği arasındaki açık mesafe (örnek)</p>
      <img src={şekil34} className={styles["w-250"]} />
    </div>

    <div className={styles["box"]}>
      <h4>5.1.4 STM'ler arasında yük dağılımı gerektiği gibi mi </h4>
      <div>{radio("5.1.4", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>STM gerilimi SAIS sırasında ayarlandıysa, ayarlama sonrasında en az iki tam tur seyir yapılması önerilir.</p>
      <p className={styles["circle"]}>STM gerilimini incelemek için STM'ye manuel olarak bastırıp çekin. Bunu kabin çatısında üst kata yakın yerde, kabin sabitleme noktasında yapın.</p>
    </div>

    <div className={styles["box"]}>
      <p>STM gerilim kontrolü (örnek)</p>
      <img src={şekil35} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
    </div>

    <div>
        <h5>Bu kabul kriterlerinden birini seçin: </h5>
        <div>{radio("stm_kriter_sec", { variant: "circle", inputArray: 
          ["Sabitleme noktasındaki gerilim yaylarının yükseklik farkı ≤ 2 mm. STM geriliminde belirgin bir fark yoktur",
           "STM gerilimi SAIS incelemesi sırasında ayarlanmıştır. Tüm STM'lerde aynı STM gerilimini elde etmek adına sabitleme noktalarında gerilim yaylarının yükseklik farkı > 2 mm",
           "Belirtilen gibi değil (bulguları kaydedin)."
          ] })}
        </div>
    </div>

    <div className={styles["box"]}>
      <h4>5.1.8 Gevşek STM kontakları KSS/KSS1, elle yapılan kontrolden geçiyor mu </h4>
      <div>{radio("5.1.8", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
        <h5>Asansör sistemi</h5>
        <div>{radio("asansor_sistemi2", { variant: "circle", inputArray: 
          ["ES1",
           "ES5.0",
           "ES5",
           ] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Renk kodu - ES1</p>
        <p>A STM adedi</p>
        <p>B Kabinde STM sabitleme noktası</p>
        <p>C Karşı ağırlıkta STM sabitleme noktası</p>
        <p>BU Mavi</p>
        <p>RD Kırmızı</p>
        <img src={tablo6} className={styles["w-300"]} />
      </div>

      <div className={styles["box"]}>
        <p>Renk kodu - ES5.0</p>
        <p>A STM adedi</p>
        <p>B Kabinde STM sabitleme noktası</p>
        <p>C Karşı ağırlıkta STM sabitleme noktası</p>
        <p>BK Siyah</p>
        <p>BU Mavi</p>
        <p>RD Kırmızı</p>
        <img src={tablo7} className={styles["w-300"]} />
      </div>

      <div className={styles["box"]}>
        <p>Renk kodu - ES5</p>
        <p>A STM adedi</p>
        <p>B Kabinde STM sabitleme noktası</p>
        <p>C Karşı ağırlıkta STM sabitleme noktası</p>
        <p>BK Siyah</p>
        <p>GN Yeşil</p>
        <p>GY Gri</p>
        <p>1) STM seyir yüksekliği ≤ 95 m (MRL için: HQ / MR için: HQ + HSK)</p>
        <p>2) STM seyir yüksekliği {">"} 95 ...150 m (MRL için: HQ / MR için: HQ + HSK)</p>
        <img src={tablo8} className={styles["w-300"]} />
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Her gevşek STM kontağı emniyet devresini açar.</p>
        <p className={styles["circle"]}>Kabin ve karşı ağırlıktaki her STM sabitleme noktasına renk koduna göre doğru aktivasyon yayı kuruludur.</p>
        <p className={styles["circle"]}>ES1 / ES5.0 için: Her STM sonlandırma bağlantısı (kabin ve karşı ağırlık STM sabitleme noktası) bir gevşek STM detektörüyle izlenmektedir.</p>
        <p className={styles["circle"]}>ES5 için:</p>
        <p>– İki STM için: Her STM sonunda(kabin ve karşı ağırlıkta STM sabitleme noktası), bir gevşek STM kontağı kurulu ve işlevseldir (toplam: dört gevşek STM kontağı).</p>
        <p>– Dört STM için: Bir gevşek STM kontağı kabin tarafındaki STM sabitleme noktasında kuruludur. Bir gevşek STM kontağı karşı ağırlıkta STM sabitleme noktasında kuruludur (toplam: iki gevşek STM kontağı). Gevşek STM kontakları birbirine çapraz olarak düzenlenmiştir. Bir çubuk her gevşek STM kontağını iki STM ile birleştirir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.5.1.8</p>
        <p className={styles["arrow"]}>Salınım koluna (2) tanımlama çizgisini (1) geçinceye kadar bastırın. Bu hareket gevşek STM kontağının aktivasyonunu simule eder.</p>
        <p className={styles["arrow"]}>Gözlem açıklığına (3) bakın ve kapak içindeki aktivasyon yayının renk kodunu bulun.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Emniyet devresi açılır.</p>
        <p>– Doğru aktivasyon yayı, kabin ve karşı ağırlıkta her STM sabitleme noktasında kapak içinde kuruludur.</p>
        <p>Başarısız:</p>
        <p>– Emniyet devresi açılmaz.</p>
        <p>– Aktivasyon yayı monte edilmemiştir veya aktivasyon yayı tipi doğru değildir.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Salınım kolunu normal pozisyonuna bırakın.</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabin tarafı / karşı ağırlık tarafı (örnek)</p>
        <p>1 Tanım çizgisi</p>
        <p>2 Salınım kolu</p>
        <p>3 Kapaktaki gözlem açıklığı</p>
        <img src={şekil36} className={styles["w-150"]} />
      </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>8 Kuyu (aşağıya doğru seyir)</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <p>Emniyet incelemesi için hazırlama</p>
      <p className={styles["arrow"]}>Kuyuda aşağı hareket ederken kuyu ekipmanına çarpmayın.</p>
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>8.1 Kat kapıları </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>3.6.1 Belirtilen kat kapısı kilitleri kurulu ve CE işaretli mi</h4>
      <div>{radio("3.6.1", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    
    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_kat_sayisi_tipi", "Belirtilen kat kapısı tipi")}</div>

    <div>{inputLine("kat_kapisi_kilidi_sertifika_no2", "Kat kapısı kilidi sertifika numarası")}</div>

    <div>{selectField("kapi_kilidi_tipi", "Kapı kilidi tipi ", 
        [ { _id: "1", name: "DO WIA-AP (LD Wittur Augusta) tip 11/_ (T2) - ATV 617 / EU-DL 617"},
          { _id: "2", name: "DO WIA-AP (LD Wittur Augusta) tip 01/C (C2) - ATV 616 / EU-DL 616"},
          { _id: "3", name: "DO WMD-AP (LD Wittur Augusta MD) tip 01/C (C2) - EU-DL 810"},
          { _id: "4", name: "DO WIV-EU (LD Wittur EVO) 11/_ (T2) - ATV 617 / EU-DL 617"},
          { _id: "5", name: "DO WIV-EU (LD Wittur EVO) tip 01/C (C2) - ATV 616 / EU-DL 616"},
          { _id: "6", name: "DO WIV-LA (LD Wittur EVO) tip 11/_ (T2) - ATV 801"},
          { _id: "7", name: "DO WIV-LA (LD Wittur EVO) tip 01/C (C2) - ATV 802"},
          { _id: "8", name: "DO WIH-AP (LD Wittur Hydra) tip 11/_ (T2) - ATV 285"},
          { _id: "9", name: "DO WIH-AP (LD Wittur Hydra) tip 01/C (C2) - ATV 286"},
          { _id: "10", name: "DO WIH-AP (LD Wittur Hydra) tip 41/C (CT4) - ATV 295"},
          { _id: "11", name: "DO WIH-AP (LD Wittur Hydra) tip 41/E (CT4) - ATV 295"},
          { _id: "12", name: "DO WIH-AP (LD Wittur Hydra) tip 43/R (CT4) - ATV 364"},
          { _id: "13", name: "DO WIH-LA (LD Wittur Hydra Scorpion) tip 11/_M (T2) - ATV 439"},
          { _id: "14", name: "DO WIH-LA (LD Wittur Hydra Scorpion) tip 11/_M (T2) - ATV 731"},
          { _id: "15", name: "DO WIH-LA (LD Wittur Hydra Scorpion) tip 01/_M (C2) - ATV 732"},
          { _id: "16", name: "DO WIH-LA (LD Wittur Hydra Scorpion) tip 01/CM (C2) - ATV 438"},
          { _id: "17", name: "DO WIC-AP (LD Wittur Core) tip 01/C (C2) - EU-DL 1034"},
          { _id: "18", name: "DO WCM (LD Wittur Core MD) tip 11/_ (T2) - Sertifika numarası bekleniyor"},
          { _id: "19", name: "DO WCM (LD Wittur Core MD) tip 01/C (C2) - EU-DL 1066"},
          { _id: "20", name: "DO WIF (Wittur Fineline) (C2) - TÜV-A-AT-1-07-0147-EUTV-4"},
          { _id: "21", name: "DO WIF (Wittur Fineline) (CT4) - TÜV-A-AT-1-07-0147-EUTV-4"},
          { _id: "22", name: "DO SEC (Sematic) tip H153ABVX - CA50.00415"},
          { _id: "23", name: "DO SEC (Sematic) tip H153ABWX - CA50.00415"},
          { _id: "24", name: "DO SEC (Sematic) tip H153ACTX - CA50.00415"},
          { _id: "25", name: "DO SEC (Sematic) tip H153ADOX - CA50.00415"},
          { _id: "26", name: "DO SEG (Sematic) tip H153ABIX (T2, C2, CT4) - CA50.00388"},
          { _id: "27", name: "DO SEG (Sematic) tip H153ACSX (T2, C2, CT4) - CA50.00388"},
          { _id: "28", name: "DO SEG (Sematic) tip H153ADNX (T2, C2, CT4) - CA50.00388"},
          { _id: "29", name: "DO FEC (Fermator) tip 160/10/40 - NL16-400-1002-075-04 / ES025684-1035"},
          { _id: "30", name: "DO FEL 440 (Fermator Elite C&M) tip Basic+ (T2) - NL16-400-1002-075-09"},
          { _id: "31", name: "DO FEL 440 (Fermator Elite C&M) tip Basic+ (CT4) - NL16-400-1002-075-09"},
          { _id: "32", name: "DO VL 15 (LD Varidor) (T2) - EU-DL 1069"},
          { _id: "33", name: "DO VL 15 (LD Varidor) (C2) - EU-DL 1070"},
          { _id: "34", name: "DO NST tip MKG161-17 (C2) - EU-DL 1063"},
          { _id: "35", name: "DO NST-CN tip MKG161-17 (C2) - TSX F340-022-2018-0095"},
          { _id: "36", name: "DO NSM 440 tip MKG161-17 (C2) - EU-DL 1063"},
          { _id: "37", name: "DO QKS 8 (Schindler Ets Henri Peignen) tip T11 - 0071/0199"},
          { _id: "38", name: "DO QKS 8 (Schindler Ets Henri Peignen) C11 - 0071/0199"},
          { _id: "39", name: "DO QKS 11 (Schindler Ets Henri Peignen) T11 - 0071/0199"},
          { _id: "40", name: "DO QKS 11 (Schindler Ets Henri Peignen) C11 - 0071/0199"},
          { _id: "41", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Belirtilen: Asansör spesifikasyonuna bakın.</h5>
    </div>

    <div className={styles["box"]}>
      <h4>3.5.3 Her kat kapısı yangın derecesine göre ve uygun etiketlenmiş mi  </h4>
      <div>{radio("5.1.4", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Yangın dirençli kat kapıları sipariş edilmiş ve kurulmuş</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Yangın derecesi sınıflandırmayı ve dereceyi içerir (örneğin E120, EI120, EW60).</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_kat_kapisi_tipi", "Belirtilen kat kapısı tipi")}</div>

    <div>{selectField("kapi_kapisi_tipi", "Kat kapısı tipi ", 
        [ { _id: "1", name: "DO WIA-AP (LD Wittur Augusta)"},
          { _id: "2", name: "DO WMD-AP (LD Wittur Augusta MD)"},
          { _id: "3", name: "DO WIV-EU (Wittur EVO)"},
          { _id: "4", name: "DO WIV-LA (Wittur EVO)"},
          { _id: "5", name: "DO WIH-AP (LD Wittur Hydra)"},
          { _id: "6", name: "DO WIH-LA (LD Wittur Hydra Scorpion)"},
          { _id: "7", name: "DO WIC-AP (LD Wittur Core)"},
          { _id: "8", name: "DO WCM (LD Wittur Core MD)"},
          { _id: "9", name: "DO WIF (Wittur Fineline)"},
          { _id: "10", name: "DO SEC (Sematic)"},
          { _id: "11", name: "DO SEG (Sematic)"},
          { _id: "12", name: "DO FEC (Fermator)"},
          { _id: "13", name: "DO FEL 440 (Fermator Elite C&M)"},
          { _id: "14", name: "DO VL 15 (LD Varidor)"},
          { _id: "15", name: "DO NST"},
          { _id: "16", name: "DO NST-CN"},
          { _id: "17", name: "DO NSM 440"},
          { _id: "18", name: "DO QKS 8 (Schindler Ets Henri Peignen)"},
          { _id: "19", name: "DO QKS 11 (Schindler Ets Henri Peignen)"},
          { _id: "20", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div>{inputLine("belirtilen_yangin_derecesi", "Belirtilen yangın derecesi")}</div>
    <div>{selectField("yangin_derecesi", "Yangın derecesi ", 
        [ { _id: "1", name: "E30"},
          { _id: "2", name: "E90"},
          { _id: "3", name: "E120"},
          { _id: "4", name: "El60"},
          { _id: "5", name: "El120"},
          { _id: "6", name: "EW60"},
          { _id: "7", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div className={styles["box"]}>
      <h4>3.6.4 Kat kapısı kilitleri, kat kapısı kontakları (KTS/2KTS) dahil, ilgili standarda göre doğru çalışıyor mu </h4>
      <div>{radio("3.6.4", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>


    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kapı kilidi durumu: Kapalı</p>
      <p>Kapı kontağı durumu: Kapalı</p>
      <p>Kanca durumu: ≥ 7 mm geçmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Kat kapısı kilidi Ayarı - T2 (örnek)</p>
      <img src={şekil37} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kat kapısı kilidi ayarı - C2 (örnek)</p>
      <img src={şekil38} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kat kapısı kilidi doğru çalışıyor.</p>
      <p className={styles["circle"]}>Kat kapısı kilidi pozitif kilitlenmiş.</p>
      <p className={styles["circle"]}>Kanca, kat kapısı kilidi kontağı kapanmadan önce ≥ 7 mm geçiyor.</p>
      <p className={styles["circle"]}>Kapı kilitli pozisyonda iken kat kapısı kontağı aktiftir.</p>
      <p className={styles["circle"]}>Kat kapısı kontağı (KTS/2KTS) emniyet devresini açıyor ve doğru ayarlı.</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.6.7.b Bir kapı paneli kapalı pozisyonda kilitliyken diğer kapı panelleri açılamıyor durumda mı</h4>
      <div>{radio("3.6.7.b", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Kanca şeklinde geçmiş panelleri olan teleskopik kabin kapısı ve kat kapısı</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.4.7 Her kat kapısı için acil kilit açma cihazı monte edilmiş ve işlevsel mi </h4>
      <div>{radio("4.4.7", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    
    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Acil durum kilit açma cihazı şu şekilde monte edilmiştir:</p>
      <p className={styles["circle"]}>Kat zemininin ≤ 2,00 m üzerinde kat kapısı pervazı veya kat kapısı panelinde.</p>
      <p className={styles["circle"]}>Kat zemininin ≤ 2,70 m üzerinde kat kapısı başlığında.</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.6.5 Kat kapısı panelleri arasındaki açıklık ilgili standarda göre mi </h4>
      <div>{radio("3.6.5", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Merkezi kapılarda aralığı ölçmek üzere her iki taraftaki panelleri hareket ettirin.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kapı durumu: Kapalı ve kilitli</p>
      <p>Kabin konumu: Kilit açma bölgesi dışında</p>
      <p>Açma gücü: 150 N (eşik yakınında)</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Teleskopik kapılar için: Açıklık ≤ 30 mm.</p>
      <p className={styles["circle"]}>Merkezi kapılar için: Açıklık ≤ 45 mm.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.5.1 Kapılar kapalıyken; kat kapısı panelleri ile, paneller ve "dikmeler, başlıklar ve eşikler" arasındaki çalışma açıklığı ≤ 6 mm mi  </h4>
      <div>{radio("3.5.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.5.2 Kat kapısı panelinin yüzeyindeki tüm girintiler veya çıkıntılar ≤ 3 mm mi </h4>
      <div>{radio("3.5.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>3.6.6 Otomatik kendinden kapanma mekanizması tüm kat kapıları için işlevsel mi </h4>
      <div>{radio("3.6.6", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.16.g Ana yapısal sabitlemeler (cıvatalar, kaynaklar) kat kapılarında gerektiği gibi tamamlanmış mı </h4>
      <div>{radio("4.1.16.g", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Çalışma yerinde kaynaklama yapılmasına sertifikasyonlu bir kaynakçı tarafından VE yerleşim çizimi, kaynak çizimleri ve/veya kaynak için çalışma talimatındaki spesifikasyonlara göre yapılırsa izin verilir.</p>
      <p className={styles["circle"]}>Kaynakçının sertifikasyonu KG'nin sorumluluğundadır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p className={styles["circle"]}>Kat kapısı çerçeveleri, kapı mekanizması ve kat kapısı panellerinin birkaç yapısal sabitlemesini rastgele kontrol edin.</p>
      <p className={styles["circle"]}>Sadece sahada yapılan kaynakların kontrol edilmesi yeterlidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tutturucu cıvatalar:</p>
      <p>– Tutturucu cıvataların hiçbiri eksik değil.</p>
      <p>– Doğru rondelalar kurulu.</p>
      <p>– Tutturucu cıvatalar doğru şekilde sıkılmış.</p>
      <p className={styles["circle"]}></p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>8.2 Kuyu duvarı </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>3.4.11 Ayak parmak koruma ilgili standarda göre mi </h4>
      <div>{radio("3.4.11", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
    </div>

    <img src={şekil39} className={styles["w-200"]} />

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Her kat kapısı eşiğinde bir ayak parmak koruması vardır. Ayak parmak korumasının boyutları:</p>
      <p>– Yükseklik ≥ 1/2 kapı açma bölgesi (SKT) + 50 mm</p>
      <p>– Genişlik ≥ BT + 25 mm (her iki tarafta).</p>
      <p className={styles["circle"]}>Ayak parmak koruma şu kriterlerden birini karşılar:</p>
      <p>– Sonraki kapının başlığına bağlı.</p>
      <p>– Açısı yatay düzleme ≥ 60° olan sert ve düzgün bir kısım şeklinde aşağıya uzatılmış. Eğimin yatay ölçüsü ≥ 20 mm.</p>
      <p className={styles["circle"]}>Herhangi bir çıkıntı ≤ 5 mm. 2 mm üzerindeki projeksiyonlar yataya göre ≥ 75° açılı.</p>
      <p className={styles["circle"]}>Yüzey düz ve 500 mm2 alanda 300 N güç uygulandığında en fazla 15 mm elastik deformasyon olacak ve hiç plastik deformasyon olmayacak kadar serttir.</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.2.10 Belirtilen global kuyu bilgisi sistemi (AC GSI) doğru kurulu, etiketli ve CE işaretli mi </h4>
      <div>{radio("4.2.10", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_kuyu_bilgi_sistemi", "Belirtilen kuyu bilgi sistemi")}</div>

    <div className={styles["box"]}>
        <h5>Kuyu bilgi sistemi</h5>
        <div>{radio("urunhatti3", { variant: "circle", inputArray: 
          ["AC GSI 100 / AC GSI 101 (UET olmadan)",
           "AC GSI 200 / AC GSI 201 (UET ile)",
           "AC GSI 3 (UET ve ETSL ile)",
           ] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Doğru kuyu bilgi sistemi (AC GSI) yerleşim çizimine göre doğru monte edilmiştir.</p>
        <p className={styles["circle"]}>Tüm AC GSI bileşenleri (ana sensör, manyetik bant, askı ve gergi ağırlığı, hepsi manyetik bantla bağlı) doğru kurulu. Manyetik bant gerilimi doğru ve KSSSI emniyet şalteriyle izleniyor.</p>
        <p className={styles["circle"]}>AC GSI ana sensörü doğru etiketli ve CE işaretli.</p>
      </div>

    <div className={styles["box"]}>
      <h4>6.0.7 Emniyet kontağı KSERE-U doğru kurulu ve işlevsel mi </h4>
      <div>{radio("6.0.7", { variant: "horizontal", inputArray: ["-","N/A", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
         <p>Katlanabilir korkuluk sipariş edilmiş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Korkuluk açılmış pozisyondayken emniyet kontağı KSERE-U doğru çalışır.</p>
      <p className={styles["circle"]}>Yukarı yönde inceleme seyri sınırlıdır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.6.0.7</p>
      <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
      <p className={styles["arrow"]}>Korkuluğu açılmış pozisyona getirin.</p>
      <p className={styles["arrow"]}>Kabin çatısına güvenli bir şekilde gidin.</p>
      <p className={styles["arrow"]}>Testi yapın.</p>
      <p>– Kabin çatısında inceleme kontrolünü açık hale getirin.</p>
      <p>– İnceleme panelinde DREC-U düğmesine limit şalteri KSERE-U kabini durduruncaya kadar kabini yukarıya doğru hareket ettirmek üzere basın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Kabin, limit şalteri KSERE-U tetiklemesinden sonra durur.</p>
      <p>Başarısız:</p>
      <p>– Kabin, limit şalteri KSERE-U tetiklemesinden sonra durmaz.</p>
      <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
      <p>– Limit şalteri KSERE-U ve karşılık gelen eğrinin doğru hizalı olduğundan emin olun.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– Kabin çatısındaki inceleme kontrolünde DREC-D düğmesine basın.</p>
      <p>– Kabini limit şalteri KSERE-U devre dışı kalıncaya kadar aşağıya hareket ettirin.</p>
      <p>– Kabini en yakın kat seviyesine hareket ettirin.</p>
      <p>– Kabin çatısından güvenle çıkın.</p>
      <p>– Korkuluğu katlanmış pozisyona getirin.</p>
      <p>– Emniyet devresinin kapalı olduğundan emin olun.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
    </div>

    <div className={styles["box"]}>
      <p>KSERE-U mesafesi örneği (katlanabilir korkuluk gösterilmemiştir)</p>
      <img src={şekil40} className={styles["w-200"]} />
    </div>

    
    <div className={styles["box"]}>
      <h4>6.0.6.a Seyir kablosu/kablolarının tutturulması ve yönlendirilmesi gerektiği gibi mi  </h4>
      <div>{radio("6.0.6.a", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.7.1.a Kuyu aydınlatması ilgili standarda göre mi  </h4>
      <div>{radio("3.7.1.a", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
          <p>Test ayarı</p>
          <p>Tüm kapılar kapalı.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kalıcı olarak kurulu elektrikli aydınlatma mevcut.</p>
      <p className={styles["circle"]}>Elektrikli aydınlatma makinanın güç kaynağından bağımsızdır.</p>
      <p className={styles["circle"]}>Her lambada bir koruyucu kapak vardır.</p>
      <p className={styles["circle"]}>Kuyudaki aydınlatma şiddeti kabin ve bileşenlerinin oluşturduğu gölgeler dışında kuyu boyunca herhangi bir kabin pozisyonunda ≥ 20 lüks.</p>
      <p className={styles["circle"]}>Kabin çatısının 1 m üzerinde aydınlatma şiddeti ≥ 50 lüks.</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.4.4 Kuyudaki ayırıcı bölme ilgili standarda göre monte edilmiş mi </h4>
      <div>{radio("3.4.4", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Korkuluğun iç kenarı ile komşu bir asansörün hareketli kısmı (kabin, karşı ağırlık) arasında {"<"} 0,50 m yatay mesafe bulunan, ortak kuyuda çok sayıda
      asansör.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Bölme, kuyunun tüm yüksekliği boyunca uzanmış.</p>
      <p className={styles["circle"]}>Bölmenin genişliği korunacak hareketli kısmın genişliğine ek olarak her iki tarafta ayrı ayrı ≥ 0,10 m.</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>8.3 Karşı Ağırlık </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>4.2.9.c Kılavuz patenler doğru kurulu mu </h4>
      <div>{radio("4.2.9.c", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Çalışma açıklığı montaj kılavuzuna göre.</p>
      <p className={styles["circle"]}>Gerekliyse acil durum kılavuzları kurulu.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.14.d Dönen makaralar korumalı mı ve STM'ler gerektiği şekilde kurulu mu  </h4>
      <div>{radio("3.4.14.d", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Mevcut dönen makaralar aşağıdakilere karşı korunmuş:</p>
      <p>– Gevşediğinde (STM tutucuları monte edilmiş) STM'lerin makaralardan çıkması</p>
      <p>– STM'ler ile makaralar arasında istenmeyen nesneler.</p>
      <p className={styles["circle"]}>STM'ler makaraların ortasında kurulmuş.</p>
      <p className={styles["circle"]}>Karşı ağırlık ile kabin arasındaki açıklık ≥ 50 mm.</p>
      <p className={styles["circle"]}>STM tutucular monte edilmiştir ve STM'lerle temas halinde değil.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.18 Dolgu blokları doğru şekilde sabitlenmiş mi </h4>
      <div>{radio("3.4.18", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.16.d Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı </h4>
      <div>{radio("4.1.16.d", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Çalışma yerinde kaynaklama yapılmasına sertifikasyonlu bir kaynakçı tarafından VE yerleşim çizimi, kaynak çizimleri ve/veya kaynak için çalışma talimatındaki spesifikasyonlara göre yapılırsa izin verilir.</p>
      <p className={styles["circle"]}>Kaynakçının sertifikasyonu KG'nin sorumluluğundadır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p className={styles["circle"]}>Karşı ağırlığın birkaç yapısal sabitlemesini rastgele kontrol edin.</p>
      <p className={styles["circle"]}>Pozitif bağlantısı olmayan karşı ağırlık için: Tüm cıvataların belirlenmiş torkla sıkıştırıldığını ve/veya sahada yapılan kaynakların belirtildiği gibi olduğunu kontrol edin.</p>
      <p className={styles["circle"]}>Sadece sahada yapılan kaynakların kontrol edilmesi yeterlidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tutturucu cıvatalar:</p>
      <p>– Tutturucu cıvataların hiçbiri eksik değil.</p>
      <p>– Doğru rondelalar kurulu.</p>
      <p>– Tutturucu cıvatalar doğru şekilde sıkılmış.</p>
      <p className={styles["circle"]}>Çalışma yerinde yapılan kaynaklar (varsa): Çalışma yerinde yapılan tüm kaynaklar sertifikasyonlu bir kaynakçı tarafından ve yerleşim çizimleri, kaynak çizimleri ve/veya kaynak için hazırlanan çalışma talimatındaki spesifikasyonlara göre yapılmış.</p>
    </div>


    <div className={styles["box"]}>
      <h4>3.3.6.a Belirtilen karşı ağırlık tamponu/tamponları ve tampon desteği/destekleri doğru pozisyonda mı, kurulu mu ve CE işaretli mi</h4>
      <div>{radio("3.3.6.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Karşı ağırlık üzerine karşı ağırlık tamponu monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Karşı ağırlık tamponlarının tipi ve sayısı, sistem yükü hesaplamasına bağlıdır ve yerleşim çiziminde belirtilmiştir.</p>
      <p className={styles["circle"]}>Güvenlik açıklıklarının hesaplanması için yerleşim çiziminde belirtilen HPH değeri kullanılmalıdır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_tampon_tipi", "Belirtilen tampon tipi")}</div>

    <div>{selectField("tampon_tipi", "Tampon tipi", 
          [ { _id: "1", name: "SA PS D0"},
            { _id: "2", name: "SA PS D1"},
            { _id: "3", name: "SA PS D2"},
            { _id: "4", name: "SA PS D3"},
            { _id: "5", name: "SA PS D5"},
            { _id: "6", name: "SA AC 300400L"},
            { _id: "7", name: "SA AC 300401L"},
            { _id: "8", name: "SA AC 300402L"},
            { _id: "9", name: "SA AC 300403L"},
            { _id: "10", name: "SA HDF YH72B"},
            { _id: "11", name: "SA HDF YH73A"},
            { _id: "12", name: "SA HDF YH74A"},
            { _id: "13", name: "SA HDF YH75A"},
            { _id: "14", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <p className={styles["subtitle"]}>Tip etiketine başvurun.</p>
      </div>

    <div>{inputLine("belirtilen_tampon_adedi_zpg", "Belirtilen tampon adedi ZPG (-)")}</div>

      <div>{selectField("tampon_adedi_zpg", "Tampon adedi ZPG (-)", 
          [ { _id: "1", name: "1"},
            { _id: "2", name: "2"},
            { _id: "3", name: "4"},
            { _id: "4", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Tip etiketindeki tampon verileri asansör verileriyle uyumlu.</p>
        <p className={styles["circle"]}>Tamponların tipi ve sayısı yerleşim çizimine göredir.</p>
        <p className={styles["circle"]}>Her tampon CE işaretlidir.</p>
        <p className={styles["circle"]}>Tampon tertibatı (destekler dahil) yerleşim çizimlerine göre konumlandırılmış ve tutturulmuş.</p>
        <p className={styles["circle"]}>İki veya daha fazla tampon için HGP farkı {"<"} 5 mm.</p>
      </div>


      <div className={styles["box"]}>
        <h3 className={styles["title"]}>8.4 Karşı ağırlık paraşütü</h3>
        <hr />
      </div>

      <div className={styles["box"]}>
        <h4>7.3.1.a Belirtilen karşı ağırlık paraşütü kurulu ve CE işaretli mi</h4>
        <div>{radio("7.3.1.a", { variant: "horizontal", inputArray: ["-","N/A", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Karşı ağırlık üzerinde regülatörsüz "mekanik emniyet sistemi" sipariş edilmiş ve monte edilmiş</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

      <div>{inputLine("anma_hizi_vkn2", "Anma hızı VKN (m/s)")}</div>
      <div>{inputLine("belirtilen_parasut_tipi", "Belirtilen paraşüt tipi")}</div>

      <div>{selectField("tampon_adedi_zpg2", "Paraşüt tipi", 
          [ { _id: "1", name: "SA RF 0002"},
            { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
      </div>
      <div>{selectField("kilavuz_ray_basinin_genisligi", "Kılavuz ray başının genişliği (BFK) (mm)", 
          [ { _id: "1", name: "10"},
            { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <p className={styles["subtitle"]}>Belirtilen: 10 mm / Kılavuz ray tipi: T75-B (T75x62x10)</p>
      </div>

      <div className={styles["box"]}>
        <img src={ray1} className={styles["w-100"]} />

        <div>{selectField("kilavuz_rayin_islenmis_yuzeyi", "Kılavuz rayın işlenmiş yüzeyi", 
          [ { _id: "1", name: "Makinada işlenmiş"},
            { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <p className={styles["subtitle"]}>Kılavuz ray tipi B: Makinada işlenmiş</p>
        </div>

        <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Tip etiketinde belirtilen karşı ağırlık paraşütü verileri asansör verileriyle uyumludur.</p>
          <p className={styles["circle"]}>Her paraşüt CE işaretlidir.</p>
          <p className={styles["circle"]}>Anma hızı VKN ≤ 1,00 m/s.</p>
        </div>

        <div className={styles["box"]}>
          <h4>7.3.4.a Karşı ağırlık paraşütü ve aktivasyon mekanizması montaj/devreye alma kılavuzuna göre monte edilmiş, tutturulmuş, ayarlanmış ve işlevsel mi</h4>
          <div>{radio("7.3.4.a", { variant: "horizontal", inputArray: ["-","N/A", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
          </div>
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Karşı ağırlık üzerinde regülatörsüz "mekanik emniyet sistemi" sipariş edilmiş ve monte edilmiş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.3.4 / m.7.3.4.a</p>
        <p>UYARI</p>
        <p>Kabin çatısında ezilme veya mahsur kalma riski. Beklenmeyen kabin hareketi ciddi yaralanmaya veya ölüme yol açabilir. Ellerinizi sıkıştırmayın.</p>
        <p className={styles["arrow"]}>Bu el kitabına başvurun:</p>
        <p>– EJ 604724 Paraşütler için SAIS Destek Bilgisi</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Karşı ağırlık dolgu blokları maksimum düzeyi (5) aşmıyor.</p>
        <p>– Ezilme tehlikesini gösteren bir etiket üst süspansiyona monte edilmiştir.</p>
        <p>– Kırmızı kayış şeridi (1) mevcut.</p>
        <p className={styles["arrow"]}>Paraşütün (4) doğru tutturulduğundan emin olun.</p>
        <p className={styles["arrow"]}>Paraşüt kolu (2) 70 mm dahilinde kolayca hareket ediyor.</p>
        <p className={styles["arrow"]}>Kabin paraşüt hizalanmasını kontrol edin.</p>
        <p>– Kılavuz ray ile kabin paraşüt kutusu arasındaki açıklık 1,3 ... 1,5 mm.</p>
        <p>– Kabin paraşüt kolu (2) kabin paraşütünü (4) doğru şekilde çalıştırıyor.</p>
        <p>– Sol ve sağ kabin paraşütlerin aynı anda çalıştığını kontrol edin.</p>
        <p className={styles["arrow"]}>KFG kontağını kontrol edin.</p>
        <p>– Seyir kablosu karşı ağırlık üzerinde doğru şekilde tutturulmuş ve yönlendirilmiş.</p>
        <p>– Kabin paraşüt kolu (2) KFG kontağını (3) doğru şekilde çalıştırıyor.</p>
        <p>– KFG kontağı (3):</p>
        <p className={styles["circle"]}>Doğru monte edilmiştir.</p>
        <p className={styles["circle"]}>Emniyet devresini açar.</p>
      </div>


      <div className={styles["box"]}>
        <p>1 Kırmızı kayış şeridi</p>
        <p>2 Paraşüt kolu</p>
        <p>3 Emniyet kontağı KFG</p>
        <p>4 Paraşüt</p>
        <p>5 Maksimum dolgu bloğu seviyesi</p>
        <img src={şekil41} className={styles["w-300"]} />
      </div>


      <div className={styles["box"]}>
        <h3 className={styles["title"]}>9 Kuyu dibi  </h3>
        <hr />
      </div>

      <div className={styles["box"]}>
        <p>Emniyet incelemesi için hazırlama</p>
        <p>Bu işlemi kabinden yapın:</p>
        <p className={styles["arrow"]}>Kabine girin. Alt kat kapısının doğru çalıştığından emin olun:</p>
        <p>Bu işlemi kuyu dibine girmeden yapın:</p>
        <p className={styles["arrow"]}>Kabini en alt kata hareket ettirin. HSG mesafesini ölçün.</p>
        <p className={styles["arrow"]}>Kabini tamponların üzerine yerleştirin. Kabinin statik aşırı seyrini (SKU) tahmin edin.</p>
        <p className={styles["arrow"]}>Kuyu dibinde emniyet boşluklarının yaklaşık boyutlarını hesaplayın.</p>
        <p className={styles["arrow"]}>Kuyu dibinde emniyet boşluklarının ve açık ayakta durma alanlarının yerini bulun.</p>
        <p className={styles["arrow"]}>Asansörün standart kuyu dibi ya da azaltılmış kuyu dibi (azalmış tampon hareketi vs.) olan asansör olup olmadığına bakın. Azaltılmış kuyu dibi için emniyet cihazı kuruluysa emniyet cihazının aktive olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Kuyu dibi zemininde tüm açıklıkların güvenli olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Kuyu dibine erişimin güvenli olduğundan emin olun (örneğin uygun bir kuyu dibi merdiveni mevcuttur).</p>
      </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>9.1 Kuyu dibi alanı </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>3.4.16 Acil durdurma şalteri/şalterleri (JHSG/JHSG1) kolay erişilebilir, işaretli ve işlevsel mi </h4>
      <div>{radio("3.4.16", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Çift girişli asansörlerde, kuyu dibine sadece bir taraftan (kuyu dibi merdiveninin olduğu taraf) erişilebilir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
    </div>

    <div className={styles["box"]}>
      <p>Acil durum durdurma şalteri/şalterleri pozisyonu, HSG ≤ 1,60 m ise</p>
      <img src={şekil42} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>Acil durum durdurma şalteri/şalterleri pozisyonu, HSG {">"} 1,60 m ise</p>
      <p>1) Kuyu dibinde inceleme kontrol üzerindeki acil durdurma şalteri ikinci acil durdurma şalteri olarak düşünülebilir.</p>
      <img src={şekil43} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>Acil stop butonunun/butonlarının pozisyonu, ayrı bir kuyu dibi erişim kapısı mevcutsa</p>
      <img src={şekil44} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kuyu dibinde acil durum durdurma şalteri/şalterleri:</p>
      <p>– Kapı(lar) kuyu dibinden açıldıktan sonra ve kuyu dibi zemininden erişilebilir.</p>
      <p>– Kuyu dibi erişim kapısı çerçevesinin iç kenarından ≤ 0,75 m yatay mesafede monte edilmiş.</p>
      <p>– Doğru yükseklikte monte edilmiş.</p>
      <p className={styles["circle"]}>Acil durdurma şalteri/şalterleri “STOP” işaretlidir.</p>
      <p className={styles["circle"]}>Acil durum butonuna basıldığında emniyet devresini açar ve kabini durdurur.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.1.2.b Kuyu dibinden girmesine izin verilen kişi sayısı ilgili standarda / yerleşim çizimine göre herhangi bir kuyu dibi giriş noktasında belirtilmiş mi?</h4>
      <div>{radio("3.1.2.b", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Uyarı işareti kalıcı olarak monte edilmiştir, açıkça görünür ve kolayca okunur.</p>
      <p className={styles["circle"]}>Uyarı işareti aşağıdakileri içerir:</p>
      <p>– Kuyu dibine girmesine izin verilen kişi sayısı.</p>
      <p>– Kuyu dibinde mevcut sığınma alanı için belirtilen duruş (ayakta, çömelerek veya yatarak).</p>
      <p className={styles["circle"]}>Kuyu dibine birden fazla kişinin girmesine izin veriliyorsa, tüm kişiler için belirtilen duruş (ayakta, çömelerek veya yatarak) aynı.</p>
    </div>

    <div className={styles["box"]}>
      <h4>2.15.1.b Çok sayıda asansör açıkça işaretli mi </h4>
      <div>{radio("2.15.1.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Çok sayıda MR veya MRL asansörler, örneğin:</p>
      <p className={styles["circle"]}>Aynı grupta çok sayıda asansör</p>
      <p className={styles["circle"]}>Aynı uygulama aralığında birden çok tekli asansör.</p>
      <p className={styles["circle"]}>Emniyetli inceleme ve bakım için açıkça tanımlanamayan çok sayıda asansör.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.8 Kuyu dibine erişim ilgili standarda göre mi </h4>
      <div>{radio("3.4.8", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Erişim için özel odalardan geçilmesi gerekiyorsa, yetkili kişilerin kalıcı erişimi ve ilgili talimatlar mevcut.</p>
      <p className={styles["circle"]}>Kalıcı olarak kurulu elektrikli aydınlatma mevcut.</p>
      <p className={styles["circle"]}>Kat seviyesinde aydınlatma şiddeti ≥ 50 lüks.</p>
      <p className={styles["circle"]}>Tahsis edilmiş bir kuyu dibi erişim kapısı monte edilmişse:</p>
      <p>– Kuyu dibi derinliği{">"} 2,50 m.</p>
      <p>– Erişim kapısının yüksekliği ≥ 2,00 m. Erişim kapısı genişliği ≥ 0,60 m.</p>
      <p>– Erişim kapısı kuyunun içine doğru açılmıyor.</p>
      <p>– Kuyu dibi erişim tarafında, erişim kapısına anahtarla çalışan bir kilit monte edilmiştir. Anahtarla çalışan kilit, anahtar olmadan tekrar kapatılıp tekrar kilitlenebilir.</p>
      <p>– Erişim kapısı kilitli olsa bile kuyu içinden anahtarsız açılabilir.</p>
      <p>– Tehlikeli bir bölgeye erişim sağlayan kapının kapalı pozisyonu elektriksel bir emniyet cihazıyla izleniyor. Erişim kapıları açıldığında emniyet devresi açılıyor.</p>
      <p>Not: Kabinin en alt kısmı kuyu dibi tabanının ≥ 2 m üzerindeyse elektriksel emniyet cihazı gerekmez.</p>
      <p className={styles["circle"]}>Kat kapısından kuyu içine kalıcı erişim mevcutsa:</p>
      <p>– Kuyu dibi derinliği ≤ 2,50 m.</p>
      <p>– Kuyu dibine kat kapısından kolayca erişilebiliyor (örneğin kuyu dibi merdiveniyle).</p>
      <p>–Yetkili personeller kuyu dibi zeminine güvenle inebiliyor ve dışarı çıkabiliyor.</p>
      <p>– Kalıcı erişim asansör ekipmanının geçtiği çalışma boşluğuna çıkıntı yapmıyor.</p>
      <p className={styles["circle"]}>Hareketli kuyu dibi merdiveni mevcutsa:</p>
      <p>– Kuyu dibi merdiven kontağı KLSG, emniyet devresini açar.</p>
      <p>– Merdiven kaymasını önlemek için kanca kurulmuş ve doğru şekilde ayarlanmıştır.</p>
      <p>– Kuyu dibi merdiveni:</p>
      <p className={styles["circle"]}>Yerleşim çizimine göre kurulmuş.</p>
      <p className={styles["circle"]}>Kuyu dibinde, kuyu dibinden çıkarılamayacak veya başka amaçlarla kullanılamayacak şekilde kalıcı olarak mevcut.</p>
      <p>– Saklama konumundayken, kat kapısı eşiğinin kenarı ile kuyu dibi merdiveni arasındaki mesafe ≤ 800 mm'dir.</p>
      <p>– Kullanımdayken, kuyu dibi merdiveninin üstü, kat kapısı eşiğinin ≥ 1100 mm üzerindedir.</p>
      <p className={styles["circle"]}>Sabit bir kuyu dibi merdiveni mevcutsa:</p>
      <p>– Kuyu dibi merdiveni kuyu duvarına yerleşim çizimine göre kalıcı olarak tutturulmuştur.</p>
      <p>– Kuyu dibi merdiveninin üstü kat kapısı eşiğinin ≥ 1100 mm üzerindedir.</p>
      <p>– Kat kapısı eşiğinin kenarı ile kuyu dibi merdiveni basamaklarının ortası arasındaki mesafe ≤ 600 mm'dir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Sabit kuyu dibi merdiveni- Kat kapısı eşiği üzerindeki yükseklik</p>
      <img src={şekil45} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <h4>3.7.3.b Kuyu aydınlatması kuyu dibine erişim sağlayan kapıdan tüm diğer kuyu aydınlatma şalterlerinden bağımsız olarak çalıştırılabiliyor mu</h4>
      <div>{radio("3.7.3.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kuyu ışık şalterinin konumu</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <img src={şekil46} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Kuyu ışığı şalteri monte edilmiştir:</p>
      <p className={styles["circle"]}>Kuyu dibi erişim kapısı çerçevesinin iç kenarından ≤ 0,75 m yatay mesafede.</p>
      <p className={styles["circle"]}>Erişim kat seviyesinin ≥ 1,00 m üstünde.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.19 Kuyu dibi çıkış cihazı monte edilmiş ve işlevsel mi </h4>
      <div>{radio("3.4.19", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Tahsis edilmiş kuyu dibi erişim kapısı olmayan asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Çift giriş için kuyu dibi çıkış cihazı sadece kuyu dibi erişim tarafında (kuyu dib merdiveni olan taraf) gereklidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Kuyu dibi çıkış cihazı etkin hale getirildiğinde en alt kat kapısının kilidi açılır.</p>
    </div>

    <div className={styles["box"]}>
      <h4>10.4.8.c Emniyet devresi kontakları ilgili standarda göre mi </h4>
      <div>{radio("10.4.8.c", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Asansörün kablolama şemasına başvurun.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tüm kontaklar doğru kurulu, mekanik olarak ayarlı ve işlevsel.</p>
      <p className={styles["circle"]}>Emniyet devresindeki tüm kontaklar revizyon ve kuyu dibi inceleme modunda test edilmiş.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.10.4.8.c</p>
      <p className={styles["arrow"]}>Monte edilmiş tüm emniyet şalterleri/kontaklarını kontrol edin, örneğin:</p>
      <p>– KF (kabinde paraşüt kontağı)</p>
      <p>– KF1 (kabinde ikinci paraşüt kontağı)</p>
      <p>– KSSSI (manyetik bant şaft bilgi (ACGSI) kontağı)</p>
      <p>– KP (kabin tamponunda kontak)</p>
      <p>– KPG (karşı ağırlık tamponunda kontak)</p>
      <p>– JHSG (kuyu dibinde durdurma şalteri)</p>
      <p>– JHSG1 (kuyu dibinde ikinci durdurma şalteri)</p>
      <p>– KLSG (kuyu dibi merdiveni kontağı)</p>
      <p>– KSSBV (kabin aşırı hız regülatörü gevşek halat kontağı)</p>
      <p>– KSSBVG (karşı ağırlık aşırı hız regülatörü gevşek halat kontağı)</p>
      <p>– CSS (dengeleme zincirinin gözetim kontağı).</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.2.3.b İnceleme kontrolü erişilebilir ve işlevsel mi  </h4>
      <div>{radio("4.2.3.b", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>İnceleme kontrolü kalıcı olarak monte edilmiştir ve sığınma alanından kolayca erişilebilir.</p>
      <p className={styles["circle"]}>İnceleme kontrolü bir bi-stabil şalterle etkinleştirilir.</p>
      <p className={styles["circle"]}>“STOP” işaretli bir acil durdurma şalteri monte edilmiştir.</p>
      <p className={styles["circle"]}>Kabin iki bağımsız basma düğmesiyle hareket ettirilir. Basma butonları “Yukarı”, “Aşağı” ve “Çalıştır” anlamındaki sembollerle tanımlanmıştır.</p>
      <p className={styles["circle"]}>Asansör inceleme hızı VKI ≤ 0,63 m/s. Kabin kuyu sonuna yaklaşırken VKI azaltılır.</p>
      <p className={styles["circle"]}>İnceleme kontrolü revizyon kontrolüne göre daima öncelik sahibidir.</p>
      <p className={styles["circle"]}>Normal seyir limitleri etkin.</p>
      <p className={styles["circle"]}>Asansör çalışması halen emniyet devresine bağımlı.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.1.7.b Acil durum alarm cihazı işlevsel mi  </h4>
      <div>{radio("4.1.7.b", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>


    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kalıcı olarak iki yönlü iletişim mevcut.</p>
      <p className={styles["circle"]}>İki yönlü iletişim başlatıldıktan sonra açık kalıyor.</p>
      <p className={styles["circle"]}>Acil durum alarm cihazı bağımsız güç alıyor.</p>
      <p className={styles["circle"]}>Acil durum alarm cihazı sığınma alanından/alanlarından çalıştırılabilir.</p>
      <p className={styles["circle"]}>Acil durum alarm cihazı doğru etiketlidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.4.1.7.b</p>
      <p className={styles["arrow"]}>Ana şalteri (JH) ve ışık şalterini (SIL) kapatın.</p>
      <p className={styles["arrow"]}>Acil durum alarm butonuna basın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Sesli alarm duyulur.</p>
      <p>– Kurtarma servisi ile bir bağlantı oluşturulur.</p>
      <p>– Kurtarma servisi kalıcı olarak kullanılabilir durumdadır.</p>
      <p className={styles["arrow"]}>Ana şalteri (JH) ve ışık şalterini (SIL) açın.</p>
    </div>

    <div className={styles["box"]}>
      <h4>2.2.3.c En az bir priz çıkışı kurulu ve işlevsel mi </h4>
      <div>{radio("2.2.3.c", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

     <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>Priz çıkışı ülke koduna göre doğru tipte veya bir dönüştürücü mevcut.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.1.3.a Karşı ağırlık tamponu ile tampon darbe plakası arasındaki mesafe (HGP) yerleşim çizimine göre mi  </h4>
      <div>{radio("3.1.3.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kabin en üst katta zemin seviyesinde</p>
    </div>

    <div className={styles["box"]}>
      <p>Ölçülen değer</p>
    </div>

    <div>{inputLine("belirtilen_hgp", "Belirtilen HGP (mm):")}</div>

    <div>{inputLine("hgp2", "HGP (mm) ")}
      <p className={styles["subtitle"]}>Belirtilen: Aşağıdaki tabloya başvurun.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>HGP belirtilen yerleşim çizimine göredir.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.2 Karşı ağırlık seperatörü ilgili standarda göre mi  </h4>
      <div>{radio("3.4.2", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Karşı ağırlık seperatörü serttir.</p>
      <p className={styles["circle"]}>Karşı ağırlık seperatörünün alt kenarı:</p>
      <p>– Kuyu dibi zemininin ≤ 0,30 m üzerindedir.</p>
      <p>– Tam sıkıştırılmış tamponlarda duran karşı ağırlığın en düşük noktasına uzanır.</p>
      <p className={styles["circle"]}>Kuyu dibi zeminine monte edilmiş tampon desteği olmadan karşı ağırlık üzerine monte edilmiş tamponlar için: Karşı ağırlık seperatörü alt ucu kuyu dibi zemininin ≤ 0,05 m üzerindedir.</p>
      <p className={styles["circle"]}>Karşı ağırlık seperatörünün üst ucu kuyu dibi zemininin ≥ 2,00 m üzerindedir.</p>
      <p className={styles["circle"]}>Karşı ağırlık seperatörünün genişliği karşı ağırlık genişliğine eşit veya daha büyüktür.</p>
      <p className={styles["circle"]}>Karşı ağırlık kılavuz rayları ile kuyu duvarı arasındaki mesafe {">"} 0,30 m ise karşı ağırlık seperatörü bu alanı koruyacak şekilde uzatılmış.</p>
      <p className={styles["circle"]}>Dengeleme zincirleri monte edilmiş ve karşı ağırlık seperatöründe açıklıklar mevcutsa: Açıklıkların kenarları iletilen fırçalarla doğru şekilde korunmuştur.</p>
    </div>

    <div className={styles["box"]}>
      <p>AP için Uluslararası Standartlardan Yerel Sapmalar</p>
      <p>Çin:</p>
      <p className={styles["circle"]}>Karşı ağırlık seperatörünün üst ucu kuyu dibi zemininin ≥ 2,50 m üzerindedir.</p>
    </div>


    <div className={styles["box"]}>
      <h4>4.2.7.d HGP etiketi karşı ağırlık seperatörü üzerine veya yakınına monte edilmiş ve ilgili standarda göre doldurulmuş mu?  </h4>
      <div>{radio("4.2.7.d", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Kuyu üst kısmındaki emniyet açıklıklarının karşılanıp karşılanamadığını görmek adına, izin verilen maksimum HGP mesafesini tanımlamak için bir uygunluk kontrolü yapın.</p>
      <p className={styles["circle"]}>Maksimum HGP mesafesi ile üst boşluktaki emniyet açıklıkları karşılanmazsa, HGP etiketine izin verilen maksimum HGP mesafesini bir kalıcı kalemle yazın.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>HGP etiketi kalıcı olarak monte edilmiştir, açıkça görünür ve kolayca okunur.</p>
      <p className={styles["circle"]}>HGP etiketi belirtilen yerleşim çizimine göre HGP mesafesini gösterir.</p>
      <p className={styles["circle"]}>Maksimum HGP mesafesinin üst boşluktaki emniyet açıklıklarını karşılanmadığı durum için, HGP etiketine izin verilen maksimum HGP mesafesi bir gazlı kalemle yazılmış.</p>
    </div>
    
    <div className={styles["box"]}>
      <h4>6.0.6.b Seyir kablosu/kablolarının tutturulması ve yönlendirilmesi gerektiği gibi mi </h4>
      <div>{radio("6.0.6.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.7.1.b Kuyu dibi aydınlatması ilgili standarda göre mi </h4>
      <div>{radio("3.7.1.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Tüm kapılar kapalı.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Kalıcı olarak kurulu elektrikli aydınlatma mevcut.</p>
      <p className={styles["circle"]}>Elektrikli aydınlatma makinanın güç kaynağından bağımsızdır.</p>
      <p className={styles["circle"]}>Her lambada bir koruyucu kapak vardır.</p>
      <p className={styles["circle"]}>Kuyu dibi tabanının 1 m üzerinde aydınlatma şiddeti ≥ 50 lüks.</p>
    </div>
    
    <div className={styles["box"]}>
      <h4>4.2.9.b Kılavuz patenler doğru kurulu mu </h4>
      <div>{radio("4.2.9.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Çalışma açıklığı montaj kılavuzuna göre.</p>
      <p className={styles["circle"]}>Gerekliyse acil durum kılavuzları kurulu.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.14.e Dönen makaralar korumalı mı ve STM'ler gerektiği şekilde kurulu mu  </h4>
      <div>{radio("3.4.14.e", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Mevcut dönen makaralar aşağıdakilere karşı korunmuş:</p>
      <p>– Personelin yaralanması (makara kapağı takılıdır).</p>
      <p>– Gevşekse (STM tutucuları monte edilmiş) STM'lerin makaralardan çıkması.</p>
      <p>– STM'ler ile makaralar arasında istenmeyen nesneler.</p>
      <p className={styles["circle"]}>STM'ler makaraların ortasında kurulmuş.</p>
      <p className={styles["circle"]}>STM tutucular monte edilmiştir ve STM'lerle temas halinde değil.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.1.16.e Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı </h4>
      <div>{radio("4.1.16.e", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Çalışma yerinde kaynaklama yapılmasına sertifikasyonlu bir kaynakçı tarafından VE yerleşim çizimi, kaynak çizimleri ve/veya kaynak için çalışma talimatındaki spesifikasyonlara göre yapılırsa izin verilir.</p>
      <p className={styles["circle"]}>Kaynakçının sertifikasyonu KG'nin sorumluluğundadır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p className={styles["circle"]}>Şunların yapısal sabitlemesini rastgele kontrol edin:</p>
      <p>– Kuyu dibi seti ve tampon destekleri.</p>
      <p>– Kabin yapısı, tahrik kirişi, yapısal düzelticiler, kabin paraşütleri, kılavuz paten muhafazaları ve seyir kablosu için asma noktası.</p>
      <p className={styles["circle"]}>Sadece sahada yapılan kaynakların kontrol edilmesi yeterlidir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tutturucu cıvatalar:</p>
      <p>– Tutturucu cıvataların hiçbiri eksik değil.</p>
      <p>– Doğru rondelalar kurulu.</p>
      <p>– Tutturucu cıvatalar doğru şekilde sıkılmış.</p>
      <p className={styles["circle"]}>Çalışma yerinde yapılan kaynaklar (varsa): Çalışma yerinde yapılan tüm kaynaklar sertifikasyonlu bir kaynakçı tarafından ve yerleşim çizimleri, kaynak çizimleri ve/veya kaynak için hazırlanan çalışma talimatındaki spesifikasyonlara göre yapılmış.</p>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.3.c İnceleme kontrolü kuyu dışından resetlenebiliyor mu ve resetleme işlemi bir uyarı sinyali ile doğrulanıyor mu  </h4>
      <div>{radio("4.2.3.c", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Azaltılmış kuyu dibi olmayan asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>İnceleme kontrol sadece emniyet devresi kapalı olduğunda resetlenebilir.</p>
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>9.2 Karşı ağırlık paraşütü</h3>
      <hr />
    </div>


    <div className={styles["box"]}>
      <h4>7.3.1 Belirtilen karşı ağırlık paraşütü kurulu, mühürlenmiş ve CE işaretli mi  </h4>
      <div>{radio("7.3.1", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Karşı ağırlık üzerinde regülatörlü "mekanik emniyet sistemi" sipariş edilmiş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_parasut_tipi", "Belirtilen paraşüt tipi")}</div>
    <div>{selectField("parasut_tipi", "Paraşüt tipi ", 
        [ { _id: "1", name: "SA WSB 01 (SA SGB 01)"},
          { _id: "2", name: "SA WSB 02 (SA SGB 02)"},
          { _id: "3", name: "SA WSB 05 (SA SGB 05)"},
          { _id: "4", name: "SA WCB 01 (SA CSGB-01)"},
          { _id: "5", name: "SA WCB 02 (SA CSGB-02)"},
          { _id: "6", name: "SA WCB 03 (SA CSGB-03)"},
          { _id: "7", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Tip etiketine başvurun.</p>
    </div>
    <div>{selectField("kilavuz_ray_basinin_genisligi2", "Kılavuz ray başının genişliği (BFK) (mm)", 
        [ { _id: "1", name: "9"},
          { _id: "2", name: "10"},
          { _id: "3", name: "16"},
          { _id: "4", name: "19"},
          { _id: "5", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Belirtilen: Aşağıdaki tabloya başvurun.</p>
    </div>

    <img src={ray2} className={styles["w-100"]} />

    <div>{selectField("kilavuz_rayin_islenmis_yuzeyi2", "Kılavuz rayın işlenmiş yüzeyi ", 
        [ { _id: "1", name: "Soğuk çekilmiş"},
          { _id: "2", name: "Makinada işlenmiş"},
          { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Kılavuz ray tipi A: Soğuk çekilmiş / Kılavuz ray tipi B: Makinede işlenmiş</p>
    </div>
    
    <div>{inputLine("belirtilen_ggu_aralıgı", "Belirtilen GGU aralığı (kg) ")}</div>
    <div>{inputLine("ggu_aralıgı", "GGU aralığı (kg)")}
      <p className={styles["subtitle"]}>Tip etiketine başvurun.</p>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Tip etiketinde belirtilen karşı ağırlık paraşütü verileri asansör verileriyle uyumludur.</p>
        <p className={styles["circle"]}>Her kabin paraşüt mühürlü ve CE işaretli.</p>
    </div>

    <div className={styles["box"]}>
      <h4>7.3.4 Karşı ağırlık paraşütü ve aktivasyon mekanizması montaj/devreye alma kılavuzuna göre monte edilmiş, tutturulmuş, ayarlanmış ve işlevsel mi</h4>
      <div>{radio("7.3.4", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Karşı ağırlık üzerinde regülatörlü "mekanik emniyet sistemi" sipariş edilmiş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>9.3 Karşı ağırlık aşırı hız regülatörü </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>7.4.2 Karşı ağırlık aşırı hız regülatörü için belirtilen halat tipi kurulu ve yağlanmamış durumda mı </h4>
      <div>{radio("7.4.2", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Karşı ağırlık üzerinde mekanik emniyet sistemi sipariş edilmiş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{selectField("halat_tipi", "Halat tipi ", 
        [ { _id: "1", name: "6 mm, sentetik fiberli kor (SFC) ve doğru halat kor renkli çelik tel halat"},
          { _id: "2", name: "6 mm tam çelik halat"},
          { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Belirtilen: 6 mm çelik tel halat</p>
    </div>

    
    <div className={styles["box"]}>
      <h5>Halat tipi ve halat üreticisinin tanımı</h5>
      <p className={styles["circle"]}> HQB ≤ 85 m olan SA GBP 201 için:</p>
      <p>– Halat çapı: 6 mm</p>
      <p>– Halat tipi: Sentetik fiberli kor (SFC) çelik tel halat</p>
      <p>– Halat üreticisi / Halat merkez rengi:</p>
      <p className={styles["circle"]}>BRUGG / Mavi</p>
      <p className={styles["circle"]}>Pfeifer DRAKO / Turuncu</p>
      <p className={styles["circle"]}>Pfeifer DRAKO / Kırmızı</p>
      <p className={styles["circle"]}>Usha Martin Limited / Yeşil ve turuncu</p>
      <p className={styles["circle"]}>Gustav Wolf / Yeşil</p>
      <p className={styles["circle"]}>Gustav Wolf / Üretici adını taşıyan plastik folyo şerit</p>
      <p className={styles["circle"]}>Tianjin GOLDSUN / Üretici adını taşıyan Latin (ve Çin) harfleri ile üreticinin adı basılmış plastik folyo şerit</p>
      <p className={styles["circle"]}>Spesifikasyona göre SA WOL 35 için:</p>
      <p>– Halat çapı: 6 mm</p>
      <p>– Halat tipi: Sentetik fiberli kor (SFC) çelik tel halat</p>
      <p>– Halat üreticisi / Halat merkez rengi:</p>
      <p className={styles["circle"]}>BRUGG / Mavi</p>
      <p className={styles["circle"]}>Pfeifer DRAKO / Turuncu</p>
      <p className={styles["circle"]}>Pfeifer DRAKO / Kırmızı</p>
      <p className={styles["circle"]}>Usha Martin Limited / Yeşil ve turuncu</p>
      <p className={styles["circle"]}>Gustav Wolf / Yeşil</p>
      <p className={styles["circle"]}>Gustav Wolf / Üretici adını taşıyan plastik folyo şerit</p>
      <p className={styles["circle"]}>Tianjin GOLDSUN / Üretici adını taşıyan Latin (ve Çin) harfleri ile üreticinin adı basılmış plastik folyo şerit</p>
      <p className={styles["circle"]}>Spesifikasyona göre SA WOL 35 için:</p>
      <p>– Halat çapı: 6 mm</p>
      <p>– Halat tipi: Tam çelik halat</p>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Doğru halat tipi kurulu.</p>
        <p className={styles["circle"]}>Nominal halat çapı belirtildiği gibidir.</p>
        <p className={styles["circle"]}>Aşırı hız regülatör halatı yağlanmamış.</p>
    </div>


    <div className={styles["box"]}>
      <h4>7.4.12 Karşı ağırlık aşırı hız regülatörü için belirtilen halat gergi cihazı kurulu ve işlevsel mi </h4>
      <div>{radio("7.4.12", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Karşı ağırlık üzerinde mekanik emniyet sistemi sipariş edilmiş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
      <p>MM TD 203 CWT (ray montajı gösterilmiştir)</p>
      <img src={şekil47} className={styles["w-200"]} />
    </div>
    
    <div className={styles["box"]}>
      <p>LSRTD Yatay pozisyondayken kuyu dibi zemini ve halat makarasının merkezi arasındaki mesafe</p>
      <p>A Gerdirme cihazı tipi</p>
      <p>B Ray montajı</p>
      <p>C Zemin montajı</p>
      <img src={tablo9} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>MM TW 251 CWT (ray montajı gösterilmiştir)</p>
      <img src={şekil48} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Doğru tip halat gerilim cihazı çizime göre kurulu.</p>
      <p className={styles["circle"]}>Gerilim cihazı tipi MM TD için:</p>
      <p>– Makara kolu doğru düzeyde veya biraz üzerinde.</p>
      <p>– Halat makarasının merkezi ve kuyu dibi zemini (LSRTD) arasındaki mesafe belirtildiği gibidir.</p>
      <p>– Gerilim ağırlığı doğru şekilde tutturulmuş.</p>
      <p>– Gerilim cihazı belirtilen çalışma aralığı içinde serbestçe hareket edebilir.</p>
      <p>– Gerilim cihazının aşağı yöndeki hareketi gevşek halat kontağının (KSSBVG) aktivasyonuna neden olur.</p>
      <p className={styles["circle"]}>Gerilim cihazı tipi MM TW 251 için:</p>
      <p>– Gerilim ağırlığı kızağı gerilim cihazı çerçevesinin içinde yukarıya doğru yaklaşık yarı yolda konumlandırılmıştır.</p>
      <p>– Gerilim ağırlığı doğru şekilde tutturulmuş.</p>
      <p>– Kaldırma cıvatası çıkarılmış ve gerilim cihazı alt kenedinde saklanmıştır.</p>
    </div>

    <div className={styles["box"]}>
      <h4>7.4.6 Karşı ağırlık aşırı hız regülatörünün mekanik tetikleme hızı (VCA2/VTS) gerektiği şekilde mi </h4>
      <div>{radio("7.4.6", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Karşı ağırlık üzerinde mekanik emniyet sistemi sipariş edilmiş ve monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>VCA2'yi geçerli bir aletle ölçün.</p>
      <p className={styles["circle"]}>KBVG kontağı etkinleştirilmişse, kabin kuyu dibi inceleme modunda hareket ettirilemez.</p>
      <p className={styles["circle"]}>Testten sonra, karşı ağırlık regülatör kolunun aşırı hız regülatör halatının halat bağlama kısmına doğru şekilde tutturulduğundan emin olun.</p>
      <p className={styles["circle"]}>Testten sonra aşağıdakilerden emin olun:</p>
      <p>– Halat klempleri doğru şekilde tutturulmuş ve karşı ağırlık regülatör kolunun hareketi sırasında karşı ağırlık yapısıyla çarpışmıyor.</p>
      <p>– Regülatör halatının alt kör sonlandırması, karşı ağırlık tamamen sıkıştırılmış tamponlara oturmuş olsa bile, halat gerdirme cihazı makarasıyla
      çarpışmıyor.</p>
    </div>

    <div className={styles["box"]}>
      <p>Ölçülen değer</p>
    </div>

    <div>{selectField("tetiklenme_hizi_vca", "Tetikleme hızı VCA2 (VTS) (m/s) )", 
        [ { _id: "1", name: "VKN 0,63: 0,72 ... 1,50"},
          { _id: "2", name: "VKN 0,80: 0,92 ... 1,32"},
          { _id: "3", name: "VKN 1,00: 1,15 ... 1,50"},
          { _id: "4", name: "VKN 1,50: 1,72 ... 2,04"},
          { _id: "5", name: "VKN 1,60: 1,84 ... 2,15"},
          { _id: "6", name: "VKN 1,75: 2,01 ... 2,33"},
          { _id: "7", name: "VKN 2,00: 2,30 ... 2,62"},
          { _id: "8", name: "VKN 2,50: 2,87 ... 3,22"},
          { _id: "9", name: "VKN 3,00: 3,45 ... 3,83"},
          { _id: "10", name: "VKN 3,50: 4,03 ... 4,45"},
          { _id: "11", name: "VKN 4,00: 4,60 ... 5,06"},
          { _id: "12", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.7.4.6</p>
      <p className={styles["arrow"]}>EJ 604723 SAIS Aşırı Hız Regülatörleri için Destek Bilgisi içinde belirtilen test işlemine uyun.</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>9.4 Dengeleme yöntemleri</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>5.2.1 Belirtilen dengeleme zinciri, uç bağlantıları ve kılavuzlar dahil doğru kurulu mu </h4>
      <div>{radio("5.2.1", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Dengeleme zinciri sipariş edilmiş ve kurulmuş</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_dengeleme_zincir_tipi", "Belirtilen dengeleme zinciri tipi")}</div>
    <div>{inputLine("belirtilen_dengeleme_zinciri_adedi", "Belirtilen dengeleme zinciri adedi ZUK (-)")}</div>

    <div>{selectField("dengeleme_zincir_tipi_miktari", "Dengeleme zinciri tipi / miktarı ZUK (-) ", 
        [ { _id: "1", name: "CB 110 / 2 (2 x 1.10 = 2.20 kg/m)"},
          { _id: "2", name: "CB 150 / 2 (2 x 1.50 = 3.00 kg/m)"},
          { _id: "3", name: "CB 220 / 2 (2 x 2.20 = 4.40 kg/m)"},
          { _id: "4", name: "WLC 110 / 2 (2 x 1.10 = 2.20 kg/m)"},
          { _id: "5", name: "WLC 150 / 2 (2 x 1.50 = 3.00 kg/m)"},
          { _id: "6", name: "WLC 220 / 2 (2 x 2.20 = 4.40 kg/m)"},
          { _id: "7", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>


    <div className={styles["box"]}>
      <p>A Dengeleme zinciri tipi<br />
      B Dengeleme zinciri tipini tanımlama (dengeleme zinciri üzerindeki damga)</p>
      <img src={tablo10} className={styles["w-150"]} />
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Dengeleme zincirlerinin tipi ve sayısı, spesifikasyona göredir.</p>
      <p className={styles["circle"]}>Belirtilen sonlandırma bağlantıları kabin tarafında ve karşı ağırlık tarafında montaj el kitabına göre kuruludur.</p>
      <p className={styles["circle"]}>Dengeleme zinciri kabine ve karşı ağırlığa doğru şekilde tutturulmuş, doğru kavis verilmiş ve kuyu dibinde doğru şekilde yönlendirilmiştir.</p>
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>9.5 Kabin tamponları ve karşı ağırlık tamponları</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>3.3.1 Belirtilen kabin tamponu/tamponları ve tampon desteği/destekleri doğru pozisyonda mı, kurulu mu ve CE işaretli mi</h4>
      <div>{radio("3.3.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Kabin tamponlarının tipi ve sayısı, sistem yükü hesaplamasına bağlıdır ve yerleşim çiziminde belirtilmiştir.</p>
      <p className={styles["circle"]}>Güvenlik açıklıklarının hesaplanması için yerleşim çiziminde belirtilen HPH değeri kullanılmalıdır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_tampon_tipi2", "Belirtilen tampon tipi")}</div>

    <div>{selectField("tampon_tipi2", "Tampon tipi ", 
        [ { _id: "1", name: "SA PS D0"},
          { _id: "2", name: "SA PS D1"},
          { _id: "3", name: "SA PS D2"},
          { _id: "4", name: "SA PS D3"},
          { _id: "5", name: "SA PS D5"},
          { _id: "6", name: "SA AC 300400L"},
          { _id: "7", name: "SA AC 300401L"},
          { _id: "8", name: "SA AC 300402L"},
          { _id: "9", name: "SA AC 300403L"},
          { _id: "1*", name: "SA OLE SEB 16.2"},
          { _id: "11", name: "SA OLE SEB 18.2"},
          { _id: "12", name: "SA OLE SEB 20.2"},
          { _id: "13", name: "SA OLE SEB 25.2"},
          { _id: "14", name: "SA OLE LSB 10.A"},
          { _id: "15", name: "SA OLE LSB 16.B"},
          { _id: "16", name: "SA OLE LSB 18.B"},
          { _id: "17", name: "SA OLE MLB 13.1"},
          { _id: "18", name: "SA OLE MLB 16.1"},
          { _id: "19", name: "SA OLE MLB 18.1"},
          { _id: "20", name: "SA OLE MLB 20.1"},
          { _id: "21", name: "SA OLE MLB 25.1"},
          { _id: "22", name: "SA OLE LB 16.003"},
          { _id: "23", name: "SA OLE LB 18.001"},
          { _id: "24", name: "SA OLE LB 20.001"},
          { _id: "25", name: "SA OLE LB 23.001"},
          { _id: "26", name: "SA OLE LB 25.003"},
          { _id: "27", name: "SA OLE LB 32.002"},
          { _id: "28", name: "SA HDF YH72B"},
          { _id: "29", name: "SA HDF YH73A"},
          { _id: "31", name: "SA HDF YH74A"},
          { _id: "31", name: "SA HDF YH75A"},
          { _id: "32", name: "SA HNO HYF 210C1"},
          { _id: "33", name: "SA HNO HYF 275E"},
          { _id: "34", name: "SA HNO HYF 425E"},
          { _id: "35", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Tip etiketine başvurun.</p>
    </div>

    <div>{inputLine("belirtilen_tampon_adedi", "Belirtilen tampon adedi ZPK (-)")}</div>

    <div>{selectField("dengeleme_zincir_tipi_miktari2", "Dengeleme zinciri tipi / miktarı ZUK (-) ", 
        [ { _id: "1", name: "1"},
          { _id: "2", name: "2"},
          { _id: "3", name: "4"},
          { _id: "4", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tip etiketindeki tampon verileri asansör verileriyle uyumlu.</p>
      <p className={styles["circle"]}>Tamponların tipi ve sayısı yerleşim çizimine göredir.</p>
      <p className={styles["circle"]}>Her tampon CE işaretlidir.</p>
      <p className={styles["circle"]}>Tampon tertibatı (destekler dahil) yerleşim çizimlerine göre konumlandırılmış ve tutturulmuş.</p>
      <p className={styles["circle"]}>Enerji dağılımı tamponları (yağ tamponları) için her tampon doğru miktarda yağla doldurulmuş.</p>
      <p className={styles["circle"]}>Enerji dağılımı tamponları (yağ tamponları) için kabin tampon kontağı KP doğru çalışıyor.</p>
      <p className={styles["circle"]}>İki veya daha fazla tampon varsa HKP yükseklik farkı {"<"} 5 mm.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.3.6.b Belirtilen karşı ağırlık tamponu/tamponları ve tampon desteği/destekleri doğru pozisyonda mı, kurulu mu ve CE işaretli mi</h4>
      <div>{radio("3.3.6.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Kuyu dibinde karşı ağırlık tamponu monte edilmiş</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>Karşı ağırlık tamponlarının tipi ve sayısı, sistem yükü hesaplamasına bağlıdır ve yerleşim çiziminde belirtilmiştir.</p>
      <p className={styles["circle"]}>Güvenlik açıklıklarının hesaplanması için yerleşim çiziminde belirtilen HPH değeri kullanılmalıdır.</p>
    </div>

    <div className={styles["box"]}>
      <p>Ölçüm verileri</p>
    </div>

    <div>{inputLine("belirtilen_tampon_tipi3", "Belirtilen tampon tipi")}</div>

    <div>{selectField("tampon_tipi3", "Tampon tipi ", 
        [ { _id: "1", name: "SA PS D0"},
          { _id: "2", name: "SA PS D1"},
          { _id: "3", name: "SA PS D2"},
          { _id: "4", name: "SA PS D3"},
          { _id: "5", name: "SA PS D5"},
          { _id: "6", name: "SA AC 300400L"},
          { _id: "7", name: "SA AC 300401L"},
          { _id: "8", name: "SA AC 300402L"},
          { _id: "9", name: "SA AC 300403L"},
          { _id: "1*", name: "SA OLE SEB 16.2"},
          { _id: "11", name: "SA OLE SEB 18.2"},
          { _id: "12", name: "SA OLE SEB 20.2"},
          { _id: "13", name: "SA OLE SEB 25.2"},
          { _id: "14", name: "SA OLE LSB 10.A"},
          { _id: "15", name: "SA OLE LSB 16.B"},
          { _id: "16", name: "SA OLE LSB 18.B"},
          { _id: "17", name: "SA OLE MLB 13.1"},
          { _id: "18", name: "SA OLE MLB 16.1"},
          { _id: "19", name: "SA OLE MLB 18.1"},
          { _id: "20", name: "SA OLE MLB 20.1"},
          { _id: "21", name: "SA OLE MLB 25.1"},
          { _id: "22", name: "SA OLE LB 16.003"},
          { _id: "23", name: "SA OLE LB 18.001"},
          { _id: "24", name: "SA OLE LB 20.001"},
          { _id: "25", name: "SA OLE LB 23.001"},
          { _id: "26", name: "SA OLE LB 25.003"},
          { _id: "27", name: "SA OLE LB 32.002"},
          { _id: "28", name: "SA HDF YH72B"},
          { _id: "29", name: "SA HDF YH73A"},
          { _id: "31", name: "SA HDF YH74A"},
          { _id: "31", name: "SA HDF YH75A"},
          { _id: "32", name: "SA HNO HYF 210C1"},
          { _id: "33", name: "SA HNO HYF 275E"},
          { _id: "34", name: "SA HNO HYF 425E"},
          { _id: "35", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Tip etiketine başvurun.</p>
    </div>

    <div>{inputLine("belirtilen_tampon_adedi2", "Belirtilen tampon adedi ZPK (-)")}</div>

    <div>{selectField("dengeleme_zincir_tipi_miktari3", "Dengeleme zinciri tipi / miktarı ZUK (-) ", 
        [ { _id: "1", name: "1"},
          { _id: "2", name: "2"},
          { _id: "3", name: "4"},
          { _id: "4", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Tip etiketindeki tampon verileri asansör verileriyle uyumlu.</p>
      <p className={styles["circle"]}>Tamponların tipi ve sayısı yerleşim çizimine göredir.</p>
      <p className={styles["circle"]}>Her tampon CE işaretlidir.</p>
      <p className={styles["circle"]}>Tampon tertibatı (destekler dahil) yerleşim çizimlerine göre konumlandırılmış ve tutturulmuş.</p>
      <p className={styles["circle"]}>Enerji dağılımı tamponları (yağ tamponları) için her tampon doğru miktarda yağla doldurulmuş.</p>
      <p className={styles["circle"]}>Enerji dağılımı tamponları (yağ tamponları) için kabin tampon kontağı KP doğru çalışıyor.</p>
      <p className={styles["circle"]}>İki veya daha fazla tampon varsa HKP yükseklik farkı {"<"} 5 mm.</p>
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>9.6 Kabin aşırı hız regülatörü </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>7.2.3 Kabin aşırı hız regülatörü için belirtilen halat tipi kurulu ve yağlanmamış durumda mı  </h4>
      <div>{radio("7.2.3", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{selectField("halat_tipi2", "Halat tipi", 
        [ { _id: "1", name: "6 mm, sentetik fiberli kor (SFC) ve doğru halat kor renkli çelik tel halat"},
          { _id: "2", name: "6 mm tam çelik halat"},
          { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Belirtilen: 6 mm çelik tel halat</p>
    </div>

    <div className={styles["box"]}>
      <h5>Halat tipi ve halat üreticisinin tanımı</h5>
      <p className={styles["circle"]}> HQB ≤ 85 m olan SA GBP 201 için:</p>
      <p>– Halat çapı: 6 mm</p>
      <p>– Halat tipi: Sentetik fiberli kor (SFC) çelik tel halat</p>
      <p>– Halat üreticisi / Halat merkez rengi:</p>
      <p className={styles["circle"]}>BRUGG / Mavi</p>
      <p className={styles["circle"]}>Pfeifer DRAKO / Turuncu</p>
      <p className={styles["circle"]}>Pfeifer DRAKO / Kırmızı</p>
      <p className={styles["circle"]}>Usha Martin Limited / Yeşil ve turuncu</p>
      <p className={styles["circle"]}>Gustav Wolf / Yeşil</p>
      <p className={styles["circle"]}>Gustav Wolf / Üretici adını taşıyan plastik folyo şerit</p>
      <p className={styles["circle"]}>Tianjin GOLDSUN / Üretici adını taşıyan Latin (ve Çin) harfleri ile üreticinin adı basılmış plastik folyo şerit</p>
      <p className={styles["circle"]}>Spesifikasyona göre SA WOL 35 için:</p>
      <p>– Halat çapı: 6 mm</p>
      <p>– Halat tipi: Sentetik fiberli kor (SFC) çelik tel halat</p>
      <p>– Halat üreticisi / Halat merkez rengi:</p>
      <p className={styles["circle"]}>BRUGG / Mavi</p>
      <p className={styles["circle"]}>Pfeifer DRAKO / Turuncu</p>
      <p className={styles["circle"]}>Pfeifer DRAKO / Kırmızı</p>
      <p className={styles["circle"]}>Usha Martin Limited / Yeşil ve turuncu</p>
      <p className={styles["circle"]}>Gustav Wolf / Yeşil</p>
      <p className={styles["circle"]}>Gustav Wolf / Üretici adını taşıyan plastik folyo şerit</p>
      <p className={styles["circle"]}>Tianjin GOLDSUN / Üretici adını taşıyan Latin (ve Çin) harfleri ile üreticinin adı basılmış plastik folyo şerit</p>
      <p className={styles["circle"]}>Spesifikasyona göre SA WOL 35 için:</p>
      <p>– Halat çapı: 6 mm</p>
      <p>– Halat tipi: Tam çelik halat</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Doğru halat tipi kurulu.</p>
      <p className={styles["circle"]}>Nominal halat çapı 6 mm.</p>
      <p className={styles["circle"]}>Aşırı hız regülatörü halatında sadece orijinal yağlama mevcut.</p>
      <p className={styles["circle"]}>Aşırı hız regülatörü halatı galvanizedir.</p>
    </div>

    <div className={styles["box"]}>
      <h4>7.2.2 Kabin aşırı hız regülatörü için belirtilen halat gerilim cihazı kurulu ve işlevsel mi  </h4>
      <div>{radio("7.2.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline /> ]})}
      </div>
      <p>[#2.2]</p>
    </div>

    <div className={styles["box"]}>
     <p>MM TD 201 Kabin (ray montajı gösterilmiştir)</p>
     <img src={ray3} className={styles["w-200"]}/>
    </div>

    <div className={styles["box"]}>
      <p>MM TD 201 Kabin - AP (ray montajı gösterilmiştir)</p>
      <p>1 Yaylı pim 6x20</p>
     <img src={ray4} className={styles["w-200"]}/>
    </div>

    <div className={styles["box"]}>
      <p>MM TD 201 Azaltılmış/alçak kuyu dibi için kabin (ray montajı gösterilmiştir)</p>
     <img src={ray5} className={styles["w-200"]}/>
    </div>

    <div className={styles["box"]}>
      <p>LSRTD Yatay pozisyondayken kuyu dibi zemini ve halat makarasının merkezi arasındaki mesafe</p>
      <p>A Gerdirme cihazı tipi</p>
      <p>B Ray montajı</p>
      <p>C Zemin montajı</p>
      <p>1) Beton ağırlık bloğu ile</p>
      <p>2) Çelik ağırlık bloğu ile</p>
      <p>3) Standart kuyu dibi</p>
      <p>4) Azaltılmış/alçak kuyu dibi</p>
     <img src={tablo11} className={styles["w-300"]}/>
    </div>

    <div className={styles["box"]}>
      <p>MM TW 251 Kabin (ray montajı gösterilmiştir)</p>
     <img src={ray6} className={styles["w-150"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Doğru tip halat gerilim cihazı çizime göre kurulu.</p>
      <p className={styles["circle"]}>Gerilim cihazı tipi MM TD için:</p>
      <p>– Makara kolu doğru düzeyde veya biraz üzerinde.</p>
      <p>– Halat makarasının merkezi ve kuyu dibi zemini (LSRTD) arasındaki mesafe belirtildiği gibidir.</p>
      <p>– Gerilim ağırlığı doğru şekilde tutturulmuş.</p>
      <p>– Gerilim cihazı belirtilen çalışma aralığı içinde serbestçe hareket edebilir.</p>
      <p>– Gerilim cihazının aşağı yöndeki hareketi gevşek halat kontağı KSSBV'nin aktivasyonuna neden olur.</p>
      <p>– MM TD 201-AP ise: Ray kenedi 6x20 bir yaylı pim ile kılavuz raya sabitlenir.</p>
      <p className={styles["circle"]}>Gerilim cihazı tipi MM TW 251 için:</p>
      <p>– Gerilim ağırlığı kızağı gerilim cihazı çerçevesinin içinde yukarıya doğru yaklaşık yarı yolda konumlandırılmıştır.</p>
      <p>– Gerilim ağırlığı doğru şekilde tutturulmuş.</p>
      <p>– Kaldırma cıvatası çıkarılmış ve gerilim cihazı alt kenedinde saklanmıştır.</p>
    </div>

    <div className={styles["box"]}>
      <h4>7.2.8 Kabin aşırı hız regülatörünün mekanik tetikleme hızı (VCA1) gerektiği gibi mi</h4>
      <div>{radio("7.2.8", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>KG belgeniz mevcut EU Tip İnceleme Sertifikasında belirtilen EN 81 standardından sapmaya izin VERMİYORSA veya bu koşullardan BİRİ karşılanıyorsa:</p>
      <p className={styles["circle"]}>GQ {">"} 1360 kg</p>
      <p className={styles["circle"]}>VKN {">"} 1.75 m/s</p>
      <p className={styles["circle"]}>HQ ≤ 3.50 m</p>
      <p className={styles["circle"]}>DR VAF den başka bir tahrik dönüştürücü kurulmuş</p>
      <p className={styles["circle"]}>SA GED 10 veya SA GED 20 den başka bir paraşüt monte edilmiş.</p>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p className={styles["circle"]}>VCA1'i geçerli bir aletle ölçün.</p>
      <p className={styles["circle"]}>KBV kontağı etkinleştirilmişse, kabin kuyu dibi inceleme modunda hareket ettirilemez.</p>
      <p className={styles["circle"]}>Testten sonra, kabin regülatör kolunun aşırı hız regülatör halatının halat bağlama kısmına doğru şekilde tutturulduğundan emin olun.</p>
      <p className={styles["circle"]}>Testten sonra aşağıdakilerden emin olun:</p>
      <p>– Halat klempleri doğru şekilde tutturulmuş ve kabin regülatör kolu hareketi sırasında kabin yapısıyla çarpışmıyor.</p>
      <p>– Regülatör halatının alt kör sonlandırması, kabin tamamen sıkıştırılmış tamponlara oturmuş olsa bile, halat gerdirme cihazı makarasıyla çarpışmıyor.</p>
  </div>

    <div className={styles["box"]}>
        <p>Ölçülen değer</p>
   </div>


    <div>{selectField("tetikleme_hizi_vca1", "Tetikleme hızı VCA1 (m/s)", 
        [ { _id: "1", name: "VKN 0,63: 0,72 ... 1,50"},
          { _id: "2", name: "VKN 0,80: 0,92 ... 1,32"},
          { _id: "3", name: "VKN 1,00: 1,15 ... 1,50"},
          { _id: "4", name: "VKN 1,50: 1,72 ... 2,04"},
          { _id: "5", name: "VKN 1,60: 1,84 ... 2,15"},
          { _id: "6", name: "VKN 1,75: 2,01 ... 2,33"},
          { _id: "7", name: "VKN 2,00: 2,30 ... 2,62"},
          { _id: "8", name: "VKN 2,50: 2,87 ... 3,22"},
          { _id: "9", name: "VKN 3,00: 3,45 ... 3,83"},
          { _id: "10", name: "VKN 3,50: 4,03 ... 4,45"},
          { _id: "11", name: "VKN 4,00: 4,60 ... 5,06"},
          { _id: "12", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>Aşırı hız regülatörü hasarsız.</p>
      <p className={styles["circle"]}>Mekanik tetikleme hızı VCA1 belirtildiği gibidir.</p>
    </div>

    <div className={styles["box"]}>
        <p>Test yöntemi m.7.2.8 - SA GBP 201 için</p>
        <p>UYARI</p>
        <p>Kuyu dibinde ezilme riski. Beklenmeyen kabin hareketi ciddi yaralanmaya veya ölüme yol açabilir.</p>
        <p className={styles["arrow"]}>KBV fişini kumanda panosundaki LDU.SCMAIN.KBV'den ayırın.</p>
        <p className={styles["arrow"]}>KBV test adaptörünü kontrol panosunda LDU.SCMAIN.KBV kısmına bağlayın.</p>
        <p className={styles["arrow"]}>Testi hazırlayın.</p>
        <p>– Kuyu dibine girin.</p>
        <p>– Aşırı hız regülatörü halatının halat kuplajına kolayca erişebilinceye kadar kabini aşağıya doğru hareket ettirmek için kuyu dibi inceleme panelinde DRESG-D kısmına basın.</p>
        <p className={styles["arrow"]}>Kuyu dibinde acil durdurma şalteri JHSG'ye basın.</p>
        <p className={styles["arrow"]}>Kabini serbest bırakın.</p>
        <p>UYARI</p>
        <p>Paraşüt kolunu sabitleyin. Regülatör halat kuplajını kabinden ayırın.</p>
        <p className={styles["arrow"]}>Aşırı hız regülatörü halatını aşırı hız regülatörünün atması için hızlandırın. İki yöntemden birini kullanın:</p>
        <p>– Takometre ve matkap kombinasyonu (HQ ≈ 4,75 m den daha kısa seyir mesafeleri için tercih edilen yöntem).</p>
        <p>– Takometre ve aşırı hız regülatör halatına bağlı test ağırlığı kombinasyonu.</p>
        <p className={styles["arrow"]}>Tetikleme hızını gerilim cihazı makarasında ölçün.</p>
        <p className={styles["arrow"]}>Aşırı hız regülatörü halatını aşırı hız regülatörünü servise almak için geri çekin.</p>
        <p className={styles["arrow"]}>Aşırı hız regülatör halatı kuplajını kabine bağlayın.</p>
        <p className={styles["arrow"]}>Alt kat kapısına güvenli bir şekilde erişebilinceye kadar kabini yukarı doğru hareket ettirmek için kuyu dibi inceleme panelinde DRESG-U kısmına basın.</p>
        <p className={styles["arrow"]}>Kuyu dibinden çıkın.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KBV test adaptörünü kumanda panosunda LDU.SCMAIN.KBV kısmından ayırın.</p>
        <p>– KBV fişini kumanda panosundaki LDU.SCMAIN.KBV kısmına takın.</p>
        <p>– KBV kontağını belirtilen SA GBP 201 reset işlemine göre resetleyin.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
     </div>

     <div className={styles["box"]}>
      <p>Regülatör halat kuplajını bırakılması</p>
      <img src={şekil49} className={styles["w-250"]} />
     </div>

     
     <div className={styles["box"]}>
        <h3 className={styles["title"]}>9.7 Kuyu dibi emniyet boşluğu</h3>
        <hr />
      </div>


    <div className={styles["box"]}>
      <h4>3.1.8 Kuyu dibindeki emniyet açıklıkları ilgili standart / yerleşim çizimine göre mi </h4>
      <div>{radio("3.1.8", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Azaltılmış kuyu dibi olmayan asansör</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kabin en alt katın X mesafesi kadar üstünde</p>
    </div>

    <img src={şekil50} className={styles["w-400"]} />

    <div>{inputLine("x_mm2", "X (mm)")}
      <h5 className={styles["subtitle"]}>Between 0 and 3000</h5>
      <p>LKU (kabinin alt kat üzerinden offseti)</p>
    </div>

    <div>{inputLine("hkp_x_mm", "HKP + X (mm)")}
      <h5 className={styles["subtitle"]}>Kabin tamponu ile tampon darbe plakası X offseti dahil arasında ölçülen mesafe/</h5>
    </div>

    <div className={styles["box"]}>
      <h5>HKP</h5>
      <p>Value: ?</p>
      <p>(HKP + X) - X / Kabin en alt seviyedeyken kabin tamponu ile tampon darbe plakası arasındaki gerçek mesafe</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>HKP, yerleşim çizimi 0/-5 mm uyarıncadır.</p>
    </div>

    <div>{inputLine("hph_mm", "HPH (mm)")}
      <h5 className={styles["subtitle"]}>Between 0 and 2000</h5>
      <p>HPHK kabin tampon stroku</p>
    </div>

    <div className={styles["box"]}>
      <h5>Toplam Y</h5>
      <p>Value: ?</p>
      <p>(HKP + X) + HPH</p>
    </div>

    <div>{inputLine("olculen_guvenlik_mesafesi_e", "Ölçülen güvenlik mesafesi E (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu dibi zeminine tutturulmuş en yüksek kısım ile kabin yapısının en alt kısmı arasındaki serbest dikey mesafe, ofset X dahil</h5>
    </div>

      <div className={styles["box"]}>
        <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi E-Y (mm)</h5>
        <p>Value: ?</p>
        <p>Kabul kriteri: E-Y ≥ 300 mm</p>
      </div>

      <div className={styles["box"]}>
        <p>E-Y (mm) - Kılavuz raylar etrafındaki emniyet mesafesinin istisnası</p>
        <p className={styles["circle"]}>EN 81-20:2014 5.2.5.8.2.a.2 150 mm yatay mesafe içinde 100 mm serbest dikey mesafe gerektirir.</p>
        <p className={styles["circle"]}>≥ 150 mm yatay mesafe için emniyet mesafesi E-Y, aşağıdaki grafikte belirtildiği gibidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>XH Kılavuz ray etrafında mesafe</p>
        <img src={şekil51} className={styles["w-400"]} />
      </div>

    <div>{inputLine("olculen_mesafe_a", "Ölçülen mesafe A (mm)")}
        <h5 className={styles["subtitle"]}>Between 0 and 500</h5>
        <p>Kabin etek sacı ile kuyu duvarı arasındaki mesafe</p>
    </div> 

    <div>{inputLine("olculen_guvenlik_mesafesi_f", "Ölçülen güvenlik mesafesi F (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu dibi zemini ile kabin etek sacı arasındaki, ofset (X) dahil serbest dikey mesafe (150 mm yatay mesafe dahilinde)</h5>
    </div>

      <div className={styles["box"]}>
        <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi F-Y (mm)</h5>
        <p>Value: ?</p>
        <p>Kabul kriteri: Mesafe A {">"} 150 mm ise: F-Y ≥ 500 mm / Mesafe A {">"} 35 ... 150 mm ise: F-Y ≥ 100 mm / Mesafe A ≤ 35 mm ise: F-Y ≥ 30 mm</p>
      </div>
      
      <div>{inputLine("olculen_guvenlik_mesafesi_g", "Ölçülen güvenlik mesafesi G (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu dibi zemini ile kabin yapısının en alt kısmı arasındaki serbest dikey mesafe, ofset X dahil</h5>
     </div>

     <div className={styles["box"]}>
        <h5 className={styles["circle"]}>Hesaplanan güvenlik mesafesi G-Y (mm)</h5>
        <p>Value: ?</p>
        <p>Kabul kriteri: G-Y ≥ 500 mm</p>
      </div>

      <div className={styles["box"]}>
        <p>F mesafesi için ek kabul kriterleri</p>
        <p className={styles["circle"]}>F mesafesi 30 ... {"<"} 100 mm ise, A mesafesi ≤ 35 mm.</p>
        <p className={styles["circle"]}>A mesafesi ≤ 35 mm ise:</p>
        <p>– En alt katın altındaki panel tüm genişliği boyunca kuyu dibi zeminine uzanır.</p>
        <p>– Panel eşikten kuyu dibi zeminine herhangi bir açıklık olmadan tek parçadır (ama HSG yönünde ayarlanabilen iki sac metal kısımdan yapılmıştır).</p>
        <p>– Kuyu dibi zemininin kabin etek sacı çıkıntısı dahilindeki kısmı (alt tarafta bükülü kenar dahil) ve ek olarak kuyunun ortasına doğru ≥ 30 mm kısım tehlikeye işaret etmek üzere sarı / siyah şeritlerle silinmez bir şekilde işaretlenmiştir.</p>
      </div>

      <div className={styles["box"]}>
        <p>En alt katın altındaki panel (örnek)</p>
        <img src={şekil52} className={styles["w-200"]} />
      </div>

      <div className={styles["box"]}>
        <h4>3.1.7 Kabin altındaki sığınma alanı ilgili standarda göre mi </h4>
        <div>{radio("3.1.7", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>
      <div className={styles["box"]}>
            <p>Test ayarı</p>
            <p className={styles["circle"]}>Azaltılmış kuyu dibi boşluğu olmayan asansör için: Kabin, tamamen sıkıştırılmış tamponlar üzerindedir.</p>
            <p className={styles["circle"]}>Azaltılmış kuyu dibi ile asansör için: Kabin, sıkıştırılmış TSD21 tamponları üzerindedir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

      <div className={styles["box"]}>
            <p>Mevcut sığınma alanı resmi - Dik duruş (1 kişi için mevcut sığınma alanı gösterilmiştir)</p>
            <p>Sığınma alanı boyutları:</p>
            <p className={styles["circle"]}>Yatay alan: ≥ 0,40 x 0,50 m</p>
            <p className={styles["circle"]}>Yükseklik ≥ 2,00 m.</p>
            <img src={photo1} className={styles["w-100"]} />
      </div>

      <div className={styles["box"]}>
            <p>Mevcut sığınma alanı resmi - Çömelerek duruş (1 kişi için mevcut sığınma alanı gösterilmiştir)</p>
            <p>Sığınma alanı boyutları:</p>
            <p className={styles["circle"]}>Yatay alan: ≥ 0,50 x 0,70 m</p>
            <p className={styles["circle"]}>Yükseklik: ≥ 1,00 m.</p>
            <img src={photo3} className={styles["w-100"]} />
      </div>

      <div className={styles["box"]}>
            <p>Mevcut sığınma alanı resmi - Yatarak duruş (1 kişi için mevcut sığınma alanı gösterilmiştir)</p>
            <p>Sığınma alanı boyutları:</p>
            <p className={styles["circle"]}>Yatay alan: ≥ 0,70 x 1,00 m</p>
            <p className={styles["circle"]}>Yükseklik: ≥ 0,50 m.</p>
            <img src={photo5} className={styles["w-100"]} />
      </div>

      <div className={styles["box"]}>
            <p>Kabul kriterleri</p>
            <p className={styles["circle"]}>En az bir sığınma alanı mevcut.</p>
            <p className={styles["circle"]}>Kuyu dibine birden fazla kişinin girmesine izin veriliyorsa, kişi başına bir sığınma alanı mevcut.</p>
            <p className={styles["circle"]}>Mevcut sığınma alanı/alanları kuyu dibi erişim kapısında gösterilen ekli resme göre.</p>
            <p className={styles["circle"]}>Birden fazla sığınma alanı mevcutsa sığınma alanları aynı tipte ve birbiri ile kesişmiyor.</p>
            <p className={styles["circle"]}>Gerekliyse her sığınma alanı, kuyu dibi zemininde yerleşim çiziminde belirtildiği gibi açıkça işaretlidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>AP için Uluslararası Standartlardan Yerel Sapmalar</p>
        <p>Çin:</p>
        <p className={styles["circle"]}>Sığınma alanı için belirtilen uyarı işaretleri yerleştirilmiştir (1 kişilik sığınma alanı gösterilmiştir).</p>
        <img src={photo4} className={styles["w-100"]} />
      </div>


      <div className={styles["box"]}>
        <h4>4.1.11 Kabin etek sacı gerektiği gibi ve kabin etek sacı ile kuyu dibi duvarı arasındaki mesafe ilgili standarda göre mi  </h4>
        <div>{radio("4.1.11", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
            <p>Uygulanabilirlik</p>
            <p>Standart (teleskopik olmayan) kabin etek sacı sipariş edilmiş ve monte edilmiştir</p>
      </div>

      <img src={şekil53} className={styles["w-300"]} />

      <div className={styles["box"]}>
            <p>Kabul kriterleri</p>
            <p className={styles["circle"]}>Her kabin kapısı eşiğinde bir etek sacı mevcuttur. Kabin etek sacı boyutları:</p>
            <p>– Yükseklik ≥ 750 mm</p>
            <p>– Genişlik ≥ BT.</p>
            <p className={styles["circle"]}>Kabin etek sacı, yatay düzleme açısı ≥ 60° olan sert ve düzgün bir kısım ile sonlanmış. Eğimin yatay ölçüsü ≥ 20 mm.</p>
            <p className={styles["circle"]}>Herhangi bir çıkıntı ≤ 5 mm. 2 mm üzerindeki projeksiyonlar yataya göre ≥ 75° açılı.</p>
            <p className={styles["circle"]}>Yüzey düz ve 500 mm2 alanda normal 300 N güç ile en fazla ≤ 35 mm elastik deformasyon ve ≤ 1 mm plastik deformasyon olacak kadar serttir.</p>
      </div>

      <div className={styles["box"]}>
        <h4>3.4.13 Kuyu dibi altındaki erişilebilir alan korunmakta mı  </h4>
        <div>{radio("3.4.13", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Kuyu dibi altında erişilebilir alan mevcut</p>
      </div>

      <div className={styles["box"]}>
            <p>Kabul kriterleri</p>
            <p className={styles["circle"]}>Kuyu dibi tabanı yerleşim çizimine göre ≥ 5000 N/m2 uygulanan yük için tanımlanmıştır.</p>
            <p className={styles["circle"]}>Karşı ağırlıkta paraşüt vardır.</p>
      </div>


      <div className={styles["box"]}>
        <h4>3.4.3 Kuyu dibindeki bölme ilgili standarda göre mi </h4>
        <div>{radio("3.4.3", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Ortak kuyuda çok sayıda asansör</p>
      </div>

      <div className={styles["box"]}>
            <p>Kabul kriterleri</p>
            <p className={styles["circle"]}>Farklı asansörlerin hareketli kısımları arasına bir bölme monte edilmiştir.</p>
            <p className={styles["circle"]}>Bölme serttir.</p>
            <p className={styles["circle"]}>Bölmenin alt ucu kuyu dibi zemininin ≤ 0,30 m üzerinde.</p>
            <p className={styles["circle"]}>Bölmenin üst ucu en alt kat zemininin ≥ 2,50 m üzerinde.</p>
            <p className={styles["circle"]}>Modernizasyon için: Bölmenin kuyu dibi zemininden kısmi yüksekliği ≥ 4,00 m.</p>
            <p className={styles["circle"]}>Bölme diğer kuyu dibine erişim gözetlenmiyorsa, bir kuyu dibinden diğer kuyu dibine geçişi engelleyecek genişlikte olmalıdır.</p>
      </div>


      <div className={styles["box"]}>
        <h3 className={styles["title"]}>9.8 Kabin paraşütü</h3>
        <hr />
      </div>

      <div className={styles["box"]}>
        <h4>7.1.1 Belirtilen kabin paraşütü kurulu, mühürlü ve CE işaretli mi</h4>
        <div>{radio("7.1.1", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

      <div>{inputLine("belirtilen_parasut_tipi2", "Belirtilen paraşüt tipi")}</div>

      <div>{selectField("parasut_tipi3", "Paraşüt tipi ", 
          [ { _id: "1", name: "SA G 01"},
            { _id: "2", name: "SA SGM 01"},
            { _id: "3", name: "SA GED 10"},
            { _id: "4", name: "SA GED 20"},
            { _id: "5", name: "SA GED 30"},
            { _id: "6", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <p className={styles["subtitle"]}>Tip etiketine başvurun.</p>
      </div>
      <div>{selectField("kilavuz_ray_basinin_genisligi3", "Kılavuz ray başının genişliği (BFK) (mm)", 
          [ { _id: "1", name: "9"},
            { _id: "2", name: "10"},
            { _id: "3", name: "16"},
            { _id: "4", name: "19"},
            { _id: "5", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <p className={styles["subtitle"]}>Belirtilen: Aşağıdaki tabloya başvurun.</p>
      </div>

      <img src={ray7} className={styles["w-150"]} />

      <div>{selectField("kilavuz_rayin_islenmis_yuzeyi3", "Kılavuz rayın işlenmiş yüzeyi ", 
        [ { _id: "1", name: "Soğuk çekilmiş"},
          { _id: "2", name: "Makinada işlenmiş"},
          { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Kılavuz ray tipi A: Soğuk çekilmiş / Kılavuz ray tipi B: Makinede işlenmiş</p>
    </div>
    
      <div>{inputLine("belirtilen_gku_aralıgı", "Belirtilen GKU aralığı (kg) ")}</div>
      <div>{inputLine("gku_aralıgı", "GKU aralığı (kg) ")}
        <p className={styles["subtitle"]}>Tip etiketine başvurun.</p>
      </div>

      <div className={styles["box"]}>
            <p>Kabul kriterleri</p>
            <p className={styles["circle"]}>Tip etiketinde belirtilen kabin paraşütü verileri asansör verileriyle uyumludur.</p>
            <p className={styles["circle"]}>Her kabin paraşüt mühürlü ve CE işaretli.</p>
      </div>

      <div className={styles["box"]}>
        <h4>7.1.4 Kabin paraşütü ve aktivasyon mekanizması montaj/devreye alma kılavuzuna göre monte edilmiş, sabitlenmiş, ayarlanmış ve işlevsel mi</h4>
        <div>{radio("7.1.4", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
            <p>Test yöntemi m.7.1.4 - SA GED serisi</p>
            <p className={styles["arrow"]}>Şu el kitaplarına başvurun:</p>
            <p>– EJ 604724 Paraşütler için SAIS Destek Bilgisi</p>
            <p>– K 43400128 EMBD Paraşüt GED Serisi.</p>
            <p className={styles["arrow"]}>Kabin paraşüt kolunu ve aşırı hız regülatörü halatını kontrol edin.</p>
            <p>– Kabin paraşüt kolu (7) halat kuplajına (6) doğru şekilde tutturulmuş.</p>
            <p>– Bağlantı bir pim (8) ile sabitlenmiş.</p>
            <p className={styles["arrow"]}>Kabin paraşütünün tutturulmasını kontrol edin.</p>
            <p>– Egzantrik (2), aktivasyon mekanizmasına (3) doğru şekilde tutturulmuştur.</p>
            <p>– Kabin paraşütü, destekleyici cıvata (4) yaylı emniyet pimleri ve dört tutturma cıvatası (1) ile muhafazaya (varsa) tutturulmuştur.</p>
            <p>– Kabin paraşütü mühürlüdür.</p>
            <p className={styles["arrow"]}>Kabin paraşüt hizalanmasını kontrol edin.</p>
            <p>– Çalışma açıklığı (s) her iki tarafta 2,0 mm.</p>
            <p>– Frenleme sırasında egzantrik (10) üzerindeki fren plakasının (9) ve fren pabucunun tüm fren temas alanı kılavuz rayın (11) çalışma yüzeyiyle temas halindedir.</p>
            <p>– Paraşüt kenarı ile kılavuz ray başı arasındaki X mesafesi -1 ... 3 mm.</p>
            <p>– Kabin paraşüt kutusunun yatay ve dikey hareketi mümkündür.</p>
            <p className={styles["arrow"]}>Aktivasyon mekanizmasını kontrol edin.</p>
            <p>– Aktivasyon mekanizması ve kabin paraşütleri kolayca hareket eder.</p>
            <p>– Sol ve sağ kabin paraşütün aynı anda çalıştığını kontrol edin.</p>
            <p>– Kol KF kontağını (5) doğru şekilde çalıştırır.</p>
            <p>– KF kontağı (3) emniyet devresini açar.</p>
            <p className={styles["arrow"]}>Tutma yayının rengini kontrol edin.</p>
            <p>– Tutma yayı kabin altında aktivasyon mekanizması tip etiketinde belirtilen renkle aynı renkte tanımlanmış.</p>
      </div>

      <div className={styles["box"]}>
        <p>1 Tutma yayı</p>
        <img src={şekil54} className={styles["w-150"]} />
        <p>1 Tutturucu cıvatalar</p>
        <p>2 Egzantrik</p>
        <p>3 Aktivasyon mekanizması</p>
        <p>4 Destekleyici cıvata</p>
        <p>5 KF kontağı</p>
        <p>6 Halat kuplajı</p>
        <p>7 Paraşüt kolu</p>
        <p>8 Pim</p>
        <p>9 Fren plakası</p>
        <p>10 Egzantrik üzerindeki fren pabucu</p>
        <p>11 Kılavuz ray</p>
        <p>X Paraşüt kenarı ile kılavuz ray başı arasındaki mesafe</p>
        <p>Kılavuz ray yüzeyi:</p>
        <p>A Soğuk çekilmiş</p>
        <p>B Makinada işlenmiş</p>
        <img src={şekil55} className={styles["w-250"]} />
      </div>

      <div className={styles["box"]}>
      <h3 className={styles["title"]}>10 Kuyu (yukarıya doğru seyir) </h3>
      <hr />
    </div>

      <div className={styles["box"]}>
            <p>Emniyet incelemesi için hazırlama</p>
            <p className={styles["arrow"]}>Kuyuda yukarı hareket ederken kuyu ekipmanına çarpmayın.</p>
      </div>
      

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>10.1 Kılavuz raylar ve kılavuz ray sabitleme  </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>3.8.1 Belirtilen kılavuz raylar kurulu mu  </h4>
      <div>{radio("3.8.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kılavuz ray tipini tanımlamak için kılavuz ray çalışma yüzeyi genişliğini ölçün (n ölçüsü).</p>
      </div>

    <img src={ray8} className={styles["w-150"]} />

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>


    <div>{inputLine("belirtilen_kabin_kilavuz_ray_tipi", "Belirtilen kabin kılavuz ray tipi ")}</div>

    <div>{selectField("kabin_kilavuz_ray_tipi3", "Kabin kılavuz ray tipi", 
        [ { _id: "1", name: "T70-1/A (T70x65x9) - n = yaklaşık 34 mm"},
          { _id: "2", name: "T70-1/B (T70x65x9) - n = yaklaşık 34 mm"},
          { _id: "3", name: "T75-3/B (T75x62x10) - n = yaklaşık 30 mm"},
          { _id: "4", name: "T82-A (T82x68x9) - n = yaklaşık 34 mm"},
          { _id: "5", name: "T89-B (T89x62x16) - n = yaklaşık 34 mm"},
          { _id: "6", name: "T89-1/B (T89x62x16) - n = yaklaşık 32 mm"},
          { _id: "7", name: "T127-1/B (T127x89x16) - n = yaklaşık 45 mm"},
          { _id: "8", name: "T127-2/B (T127x89x16) - n = yaklaşık 51 mm"},
          { _id: "9", name: "T140-1/B (T140x108x19) - n = yaklaşık 51 mm"},
          { _id: "10", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div>{inputLine("belirtilen_karsi_agirlik_ray_tipi", "Belirtilen karşı ağırlık ray tipi")}</div>

    <div>{selectField("karsi_agirlik_kilavuz_ray_tipi2_2", "Karşı ağırlık kılavuz ray tipi  ", 
        [ { _id: "1", name: "H50 (H50x50x30)"},
          { _id: "2", name: "H75-1 (H75x62x30)"},
          { _id: "3", name: "T70-1/A (T70x65x9) - n = yaklaşık 34 mm"},
          { _id: "4", name: "T70-1/B (T70x65x9) - n = yaklaşık 34 mm"},
          { _id: "5", name: "T75-3/B (T75x62x10) - n = yaklaşık 30 mm"},
          { _id: "6", name: "T82-A (T82x68x9) - n = yaklaşık 34 mm"},
          { _id: "7", name: "T89-B (T89x62x16) - n = yaklaşık 34 mm"},
          { _id: "8", name: "T89-1/B (T89x62x16) - n = yaklaşık 32 mm"},
          { _id: "9", name: "T127-1/B (T127x89x16) - n = yaklaşık 45 mm"},
          { _id: "10", name: "T127-2/B (T127x89x16) - n = yaklaşık 51 mm"},
          { _id: "11", name: "T140-1/B (T140x108x19) - n = yaklaşık 51 mm"},
          { _id: "12", name: "TK5A-D (T78x60x16.4)"},
          { _id: "13", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div className={styles["box"]}>
      <h4>3.8.2.a Kabin ve karşı ağırlık kılavuz raylarının sabitlemeleri arasındaki mesafeler yerleşim çiziminde belirtilene eşit veya daha az mı? </h4>
      <div>{radio("3.8.2.a", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>MRL asansör için</p>
    </div>

    <div className={styles["box"]}>
        <p>HFZ_T0 Kılavuz ray klipsinin üst Z kenedi ve kabin kılavuz rayın üstü arasındaki mesafe (kabin tarafı)</p>
        <p>HF_T0 Kılavuz ray klipsinin üst kenedi ve kabin kılavuz rayının üstü arasındaki mesafe (karşı ağırlık tarafı)</p>
        <img src={şekil56} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
        <p>Ürün verileri</p>
        <p>MRL asansör için</p>
    </div>

    <div>{inputLine("hsk_mm", "HSK (mm)")}</div>

    <div className={styles["box"]}>
      <p>Belirtilen mesafeler HFZ_T0 / HF_T0</p>
      <p>A Ürün hattı</p>
      <img src={tablo12} className={styles["w-250"]} />
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Ray sabitlemeleri arasındaki mesafeler yerleşim çiziminde belirtildiği gibidir.</p>
          <p className={styles["circle"]}>MRL asansörü için: Kılavuz ray klipsinin üst Z kenedi / üst kenet ve kabin kılavuz rayının üstü arasındaki mesafe belirtildiği gibidir.</p>
      </div>

    <div className={styles["box"]}>
      <h4>3.8.2.b Doğru tip ve sayıda kenetler kurulu mu ve bunlar doğru tip ve sayıda tutturucu cıvatalarıyla tutturulmuş mu  </h4>
      <div>{radio("3.8.2.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Bu kontrol kabin ve karşı ağırlık tarafındaki kenetler için geçerlidir.</p>
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Yerleşim çizimine göre doğru tip ve sayıdaki kenet belirtilen pozisyonda kuruludur.</p>
          <p className={styles["circle"]}>Tutturucu cıvatalar montaj talimatına göre doğru sayıda ve tipte kuruludur.</p>
          <p className={styles["circle"]}>Tutturucu cıvatalar doğru şekilde sıkılmış.</p>
      </div>


    <div className={styles["box"]}>
      <h4>3.8.5 Kılavuz rayların hizalanması (BKS/BGS) belirtilen limitler dahilinde mi </h4>
      <div>{radio("3.8.5", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>BGS'nin sadece karşı ağırlık kılavuz rayları L-kenetler ile monte edilmişse (Omega kenetsiz) ölçülmesi gerekir.</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_bks_mm", "Belirtilen BKS (mm)")}
        <h5 className={styles["subtitle"]}>Kabin kılavuz rayları arasındaki mesafe</h5>
    </div>

    <div>{inputLine("belirtilen_bgs_mm", "Belirtilen BGS (mm)")}
        <h5 className={styles["subtitle"]}>Kabin kılavuz rayları arasındaki mesafe</h5>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p>BKS/BGS 0/+ 2 mm tolerans dahilindedir (farklı kenetlerde ölçülmüş).</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.8.4 Ray birleşme yerleri düzgün, kılavuz raylar temizlenmiş ve yüzey korozyona karşı korunmuş mu </h4>
      <div>{radio("3.8.4", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Not</p>
      <p>Kabin paraşütün doğru çalışması için ray yüzeyinde hiç metal talaş, kir veya pas bulunmamalıdır.</p>
    </div>

      <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Ray birleşme yerleri iyi hizalanmış ve düzgündür.</p>
          <p className={styles["circle"]}>Kılavuz ray temizlenmelidir. Ray bıçağı yüzeyinin montaj ve çalıştırma kılavuzunda belirtildiği gibi koruması vardır.</p>
      </div>


    <div className={styles["box"]}>
      <h4>4.1.16.f Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı  </h4>
      <div>{radio("4.1.16.f", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
          <p>Not</p>
          <p className={styles["circle"]}>Çalışma yerinde kaynaklama yapılmasına sertifikasyonlu bir kaynakçı tarafından VE yerleşim çizimi, kaynak çizimleri ve/veya kaynak için çalışma talimatındaki spesifikasyonlara göre yapılırsa izin verilir.</p>
          <p className={styles["circle"]}>Kaynakçının sertifikasyonu KG'nin sorumluluğundadır.</p>
      </div>

      <div className={styles["box"]}>
          <p>Test ayarı</p>
          <p className={styles["circle"]}>Flanşlar, kılavuz ray kenetleri ve duvar kenetlerinin birkaç yapısal sabitlemeyi rastgele kontrol edin.</p>
          <p className={styles["circle"]}>Sadece sahada yapılan kaynakların kontrol edilmesi yeterlidir.</p>
      </div>

      <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Tutturucu cıvatalar:</p>
          <p>– Tutturucu cıvataların hiçbiri eksik değil.</p>
          <p>– Doğru rondelalar kurulu.</p>
          <p>– Tutturucu cıvatalar doğru şekilde sıkılmış.</p>
          <p className={styles["circle"]}>Çalışma yerinde yapılan kaynaklar (varsa): Çalışma yerinde yapılan tüm kaynaklar sertifikasyonlu bir kaynakçı tarafından ve yerleşim çizimleri, kaynak çizimleri ve/veya kaynak için hazırlanan çalışma talimatındaki spesifikasyonlara göre yapılmış.</p>
      </div>

    

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>10.2 Acil durum kapıları ve inceleme kapıları </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>3.4.6 Acil kapıları ilgili standarda göre mi  </h4>
      <div>{radio("3.4.6", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
          <p>Uygulanabilirlik</p>
          <p className={styles["circle"]}>Arka arkaya kat kapısı eşikleri arasındaki mesafe {">"} 11 m</p>
          <p className={styles["circle"]}>Ara acil durum kapıları monte edilmiş</p>
      </div>

      <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Acil durum kapısının boyutları:</p>
          <p>– Yükseklik: ≥ 1,80 m</p>
          <p>– Genişlik: ≥ 0,50 m.</p>
          <p className={styles["circle"]}>Acil durum kapıları kuyunun içine doğru açılmıyor.</p>
          <p className={styles["circle"]}>Kat tarafında acil durum kapısında anahtarla çalışan kilitler monte edilmiş. Anahtarla çalışan kilit, anahtar olmadan tekrar kapatılıp tekrar kilitlenebilir.</p>
          <p className={styles["circle"]}>Acil durum kapısı kilitli olsa bile kuyu içinden anahtarsız açılabilir.</p>
          <p className={styles["circle"]}>Kilit açıldığında emniyet devresini açıyor.</p>
          <p className={styles["circle"]}>Asansör kat kapıları hariç acil durum kapıları için: Emniyet işaretleri yerleştirilmiştir.</p>
          <p className={styles["circle"]}>Acil durum kapıları delikli değil ve mekanik güç açısından kat kapıları ile aynı gereklilikleri karşılıyor.</p>
          <p className={styles["circle"]}>Kat tarafında her acil durum kapısına "Asansör kuyusu - Tehlike/Yetkisiz kişilerin erişimi yasaktır" uyarı işareti konmuştur.</p>
      </div>


    <div className={styles["box"]}>
      <h4>3.4.7 İnceleme kapıları ilgili standarda göre mi  </h4>
      <div>{radio("3.4.7", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
          <p>Uygulanabilirlik</p>
          <p>İnceleme kapıları sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Aşağıdaki kriterlerden büyük kapılar acil durum kapıları ve erişim kapıları kabul edilir. Bu kapılar için diğer kurallar geçerlidir.</p>
      </div>

      <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>İnceleme kapısının boyutları şöyledir:</p>
          <p>– Yükseklik: ≤ 0,50 m</p>
          <p>– Genişlik: ≤ 0,50 m.</p>
          <p className={styles["circle"]}>İnceleme kapısı kuyunun içine doğru açılmıyor.</p>
          <p className={styles["circle"]}>Kat tarafında inceleme kapısında anahtarla çalışan kilitler monte edilmiş. Anahtarla çalışan kilit, anahtar olmadan tekrar kapatılıp tekrar kilitlenebilir.</p>
          <p className={styles["circle"]}>İnceleme kapısı açıldığında emniyet devresi açılıyor.</p>
          <p className={styles["circle"]}>Emniyet işaretleri kurulu.</p>
          <p className={styles["circle"]}>İnceleme kapısı delikli değil ve mekanik güç açısından kat kapıları ile aynı gereklilikleri karşılıyor.</p>
      </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>10.3 Kuyu </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>3.4.17 Kuyu, yerleşim çizimine göre mi  </h4>
      <div>{radio("3.4.17", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Kuyu duvarları, kuyu dibi ve tavan yerleşim çizimine göre.</p>
          <p className={styles["circle"]}>Yerleşim çiziminde tanımlanan dışında açıklık yok.</p>
      </div>


    <div className={styles["box"]}>
      <h4>3.4.20 Kuyuya yatay çıkıntılar ve bölen kirişler ilgili standarda göre eğimli </h4>
      <div>{radio("3.4.20", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    
    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Korkuluksuz kabin çatısı sipariş edilmiş ve monte edilmiş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
      </div>

      <div className={styles["box"]}>
        <p>Eğim örneği (kuyuya doğru olan yatay çıkıntılar gösterilmiştir)</p>
        <p>1 Kuyu duvarı/muhafazası</p>
        <p>2 Kuyu içine çıkıntı</p>
        <img src={şekil57} className={styles["w-150"]} />
      </div>

      <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p>Kuyuya doğru olan {">"} 0,15 m değerindeki çıkıntılar ile {">"} 0,15 m genişliğindeki ayırıcı kirişlere aşağıdaki kriterlerden biri uygulanmıştır:</p>
          <p className={styles["circle"]}>Yataya göre ≥ 45° eğimliler.</p>
          <p className={styles["circle"]}>Yataya göre ≥ 45° olarak eğimlendirilmiş koruyucu deflektörleri var.</p>
      </div>

    <div className={styles["box"]}>
      <h4>3.4.12 Kuyuda herhangi bir üçüncü parti ekipmanı bulunmuyor mu  </h4>
      <div>{radio("3.4.12", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Kuyu sadece asansör için kullanılır.</p>
          <p className={styles["circle"]}>Kuyu şunları içermez:</p>
          <p>– Asansör için kullanılanlar dışında kablolar, cihazlar vs.</p>
          <p>– Buharlı ısıtma veya yüksek basınçlı su ısıtma. Diğer ısıtma ekipmanı türlerine izin verilir.</p>
          <p>– Kontrol ve ayarlama cihazları.</p>
          <p className={styles["circle"]}>Kısmi muhafazalı kuyu için, üçüncü parti ekipman ile hareketli bileşenler arasındaki mesafe ≥ 1,5 m.</p>
      </div>

    <div className={styles["box"]}>
      <h4>3.1.6 Karşı ağırlığın daha ileri kılavuzlu seyri ilgili standarda / yerleşim çizimine göre mi  </h4>
      <div>{radio("3.1.6", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    
    <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin en alt katta zemin seviyesinde</p>
      </div>

    <div className={styles["box"]}>
      <p>Ölçüm noktaları (örnek)</p>
      <p>D1 Karşı ağırlığın daha ileri kılavuzlu seyrinin mesafesi</p>
      <p>D2 Karşı ağırlığın en yüksek kısmı ile STM sonlandırma bağlantısının en alçak kısmı arasındaki serbest dikey mesafe</p>
      <img src={şekil58} className={styles["w-200"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Ölçülen değer</p>
    </div>
    <div className={styles["box"]}>
      <p>SGS (karşı ağırlık zıplama mesafesi)</p>
    </div>

    <div className={styles["box"]}>
      <p>1) Standart asansör için (yavaşlama izleme cihazı olmayan asansör), aşağıdaki tabloya başvurun veya bu formülü kullanın:</p>
      <p>SGS = (0,035*VKN^2)*1000 (mm)</p>
      <img src={tablo13} className={styles["w-400"]}/>
    </div>

    <div className={styles["box"]}>
      <p>2) Yavaşlama izleme cihazı bulunan bir asansör için (örneğin ETSL), aşağıdaki tabloya başvurun.</p>
      <img src={tablo14} className={styles["w-150"]}/>
    </div>

    <div>{inputLine("sgs", "SGS (mm) ")}
        <span className={styles["subtitle"]}>Between 0 and 2000</span>
        <p>Karşı ağırlık zıplama mesafesi</p>
    </div>
    <div>{inputLine("hkp2", "HKP (mm) ")}
        <span className={styles["subtitle"]}>Between 0 and 2000</span>
        <p>Kabin tamponu ile tampon darbe plaka arasında ölçülen mesafe</p>
    </div>
    <div>{inputLine("hphk2", "HPHK (mm)")}
        <span className={styles["subtitle"]}>Between 0 and 2000</span>
        <p>Kabin tampon stroku</p>
    </div>

    <div>
      <h5>Toplam Z (mm) </h5>
      <p>Value: ?<br />
      SGS + HKP + HPHK</p>
    </div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>D1 - Z ≥ 100 mm (D2 - Z {">"} 0 mm ise uygun)</p>
      <p className={styles["circle"]}>D2 - Z {">"} 0 mm (çarpma yok).</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.3.1.6</p>
      <p>(STM'li asansör örneği gösterilmiştir)</p>
      <img src={şekil58} className={styles["w-300"]}/>
    </div>
    
    <div className={styles["box"]}>
      <h3 className={styles["title"]}>11 Kabin  </h3>
      <hr />
    </div>


    <div className={styles["box"]}>
      <h4>4.1.7.a Acil durum alarm cihazı ve acil durum aydınlatması işlevsel mi  </h4>
      <div>{radio("4.1.7.a", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

      <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Kalıcı olarak iki yönlü iletişim mevcut.</p>
          <p className={styles["circle"]}>İki yönlü iletişim başlatıldıktan sonra açık kalıyor.</p>
          <p className={styles["circle"]}>Acil durum alarm cihazı bağımsız güç alıyor.</p>
          <p className={styles["circle"]}>Acil alarm butonunda aydınlatma şiddeti ≥ 5 lüks.</p>
          <p className={styles["circle"]}>Acil durum alarm cihazı doğru etiketlidir.</p>
          <p className={styles["circle"]}>Kabin zemini ortasının 1 m üzerinde aydınlatma şiddeti ≥ 5 lüks.</p>
      </div>

      <div className={styles["box"]}>
          <p>Test yöntemi m.4.1.7.a</p>
          <p className={styles["arrow"]}>Ana şalteri (JH) ve ışık şalterini (SIL) kapatın.</p>
          <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
          <p>Geçildi:</p>
          <p>– Acil durum alarm butonu yanar.</p>
          <p>– Acil aydınlatma açılır.</p>
          <p className={styles["arrow"]}>Acil durum alarm butonuna basın.</p>
          <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
          <p>Geçildi:</p>
          <p>– Sesli alarm duyulur.</p>
          <p>– Kurtarma servisi ile bir bağlantı oluşturulur.</p>
          <p>– Kurtarma servisi kalıcı olarak kullanılabilir durumdadır.</p>
          <p className={styles["arrow"]}>Ana şalteri (JH) ve ışık şalterini (SIL) açın.</p>
      </div>
      

    <div className={styles["box"]}>
      <h4>4.1.8 Kabin içindeki aydınlatma şiddeti ilgili standarda göre mi </h4>
      <div>{radio("4.1.8", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

      <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Kabin işletim paneli (COP) seviyesinde aydınlatma şiddeti ≥ 100 lüks.</p>
          <p className={styles["circle"]}>Kabin zemini ortasının 1 m üzerinde aydınlatma şiddeti ≥ 100 lüks.</p>
      </div>

    <div className={styles["box"]}>
      <h4>4.1.14 Yeterli kabin havalandırması sağlanmış mı</h4>
      <div>{radio("4.1.14", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Kabinin üst ve alt kısmındaki havalandırma açıklıkları açık ve kaplamalar veya başka engellerle örtülmemiş.</p>
          <p className={styles["circle"]}>Kabin içinden, kabin duvarlarından 10 mm çapında düz ve sert bir çubuk geçirmek mümkün değil.</p>
      </div>

    <div className={styles["box"]}>
      <h4>4.1.1 Mevcut maksimum kabin alanı kabinin anma yüküne göre mi   </h4>
      <div>{radio("4.1.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
    </div>

    <div>{inputLine("belirtilen_gq", "Belirtilen GQ (kg)")}</div>

    <div className={styles["box"]}>
      <p>Maksimum mevcut kabin alanı (AKG)</p>
      <p>Ara GQ değerleri için maksimum uygulanabilir kabin alanını (AKG) interpolasyonla hesaplayın.</p>
      <img src={tablo15} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Maksimum uygulanabilir kabin alanı (AKG) belirtildiği gibidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>AP için Uluslararası Standartlardan Yerel Sapmalar</p>
        <p>Yolcu asansörü</p>
        <p>1 Avustralya</p>
        <p>2 Çin</p>
        <p>3 Singapur</p>
        <p>4 Tayvan</p>
        <img src={tablo16} className={styles["w-300"]} />
      </div>


    <div className={styles["box"]}>
      <h4>4.1.6 Kabin bilgi etiketi CIL ilgili standarda göre mi </h4>
      <div>{radio("4.1.16", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p>Asansör Direktifi 2014/33/EU gerekliliklerine ek olarak CIL unsurları yerel gerekliliklere göre gerekli olabilir.</p>
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p>Kabin bilgi etiketinde (CIL) aşağıdaki bilgiler gösterilir:</p>
          <p className={styles["circle"]}>2014/33/EU adli bölgelerine bağlı KG'ler için:</p>
          <p>– Montaj yılı</p>
          <p>– Asansörün seri numarası</p>
          <p>– CE işareti ve onaylı kurum tanımlama numarası</p>
          <p>– Montör adı ve adresi</p>
          <p>– Anma yükü 1)</p>
          <p>– Maksimum yolcu sayısı 1).</p>
          <p className={styles["circle"]}>Diğer KG'ler için:</p>
          <p>– Asansörün seri numarası</p>
          <p>– Anma yükü 1)</p>
          <p>– Maksimum yolcu sayısı 1).</p>
          <p>1) Bu formatlardan biri ile gösterilmiş:</p>
          <p className={styles["circle"]}>Harfler ve rakamlar "xxx kg yyy KİŞİ":</p>
          <p>– Büyük harfler ve rakamların yüksekliği: ≥ 10 mm</p>
          <p>– Küçük harflerin yüksekliği: ≥ 7 mm.</p>
          <p className={styles["circle"]}>Resim:</p>
          <p>– Yükseklik: ≥ 10 mm.</p>
      </div>
      


    <div className={styles["box"]}>
      <h4>5.3.2 Son kabin dekorasyonu kurulu ve sağlam bir şekilde tutturulmuş mu </h4>
      <div>{radio("5.3.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p>Bina asansörleri olarak kullanılan asansörler için son kabin dekorasyonu henüz monte edilmemiş olabilir. Asansörün kamu hizmetine sokulmasından önce son kabin dekorasyonu ve ilgili son kabul testlerinin tekrarlanması gerekir.</p>
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
    </div>

    <div className={styles["box"]}>
      <h4>Bu kabul kriterlerinden birini seçin: </h4>
      <div>{radio("kabin_dekorasyonu_kriter_sec", { variant: "circle", inputArray: 
        ["Kabin dekorasyonu son durumdadır.",
         "Kabin dekorasyonu ön durumdadır. Asansörün inşaat asansörü olarak kullanılması amaçlanmış."] })}</div>
    </div>

    <p className={styles["arrow"]}>Kabin dekorasyonu ön durumdaysa: Son kabin dekorasyonu için tekrar inceleme şarttır. Tekrar incelemeyi açık madde listesine (OIL) kaydedin.</p>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>12 Kabul testleri</h3>
      <hr />
    </div>

      <p>Bu bölümde tanımlanan test yöntemleri kumanda panosunun üst kat kapısında monte edildiği asansörleri temel alır. Farklı kumanda panosu konumları olan diğer asansör yerleşimleri için test yöntemleri farklılık gösterebilir.</p>
      <p className={styles["arrow"]}>Yük ölçme sisteminin devreye alındığından emin olun.</p>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>12.1 Dengeli yük testleri </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>5.3.3 Asansör sistemi gerektiği şekilde dengeli mi</h4>
      <div>{radio("5.3.3", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kuyu ortasında dengeleme kontrol edilmiş</p>
    </div>

    <div className={styles["box"]}>
        <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_yuk_dengeleme_kg", "Belirtilen yük dengeleme KG (% GQ)", {dontUseSymbol:true})}</div>
    <div className={styles["box"]}>
        <p>Ölçülen değer</p>
    </div>
    <div>{inputLine("ortalama_akim_asagı", "Ortalama akım aşağı (A)")}</div>
    <div>{inputLine("ortalama_akim_yukari", "Ortalama akım yukarı (A)")}</div>
    <div>{inputLine("yuk_dengeleme_kg2", "Yük dengeleme KG (% GQ) ")}
      <p className={styles["subtitle"]}>KG = (Fiili_yük * [%]100) / Anma_yükü</p>
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>Normal yük dengeleme faktörü KG %50 GQ'dur.</p>
          <p className={styles["circle"]}>Hesaplanan yük dengeleme KG yerleşim çiziminde tanımlanan teorik yük dengeleme KG ile uyumludur.</p>
          <p className={styles["circle"]}>KG = %50 GQ için:</p>
          <p>– Yük dengeleme toleransı "bir eksik karşı ağırlık dolgu bloğu" kadar.</p>
          <p>– Yukarı seyir sırasında akım, aşağı seyir sırasında akıma eşit veya daha fazla.</p>
          <p className={styles["circle"]}>Yerleşim çiziminde KG %40 ... 49 GQ belirtilmişse (istisnai durum):</p>
          <p>– Yük dengeleme toleransı "bir fazla karşı ağırlık dolgu bloğu" kadar.</p>
          <p>– Yukarı seyir sırasında akım, aşağı seyir sırasında akıma eşit veya daha az.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.5.3.3 otomatik</p>
      <p className={styles["arrow"]}>SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
      <p className={styles["arrow"]}>SMLCD: CwBalanceMidpt → Ok? (Tamam?) → Floor (Kat) = ..... (enter a car call to the loading floor) (yükleme katına bir kabin çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (Tamam?).</p>
      <p className={styles["arrow"]}>SMLCD ‘LoadFloorReach’ (Yükleme Katına Erişim) mesajını gösterir. Kabin yükleme katına seyir yapar.</p>
      <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
      <p>– Kabine KG (yük dengeleme) yükleyin.</p>
      <p>– Yükü kabinde eşit dağıtın.</p>
      <p className={styles["arrow"]}>Testi aktifleştirin.</p>
      <p>– SMLCD: Execute Test (Testi Yapın) → Ok? (Tamam) → Prepare Trip (Hazırlık Seyri).</p>
      <p>– Kabin en alt kata seyreder.</p>
      <p className={styles["arrow"]}>Kabin en üst kata seyreder ve kapıyı kapalı tutar. SMLCD yukarı seyir sırasında akımı gösterir.</p>
      <p className={styles["arrow"]}>Kabin en alt kata seyreder ve kapıyı kapalı tutar. SMLCD aşağı seyir sırasında akımı gösterir.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– KG = %50 GQ için: Yukarı seyir sırasındaki akım, aşağı seyir sırasındaki akıma eşit veya daha fazla.</p>
      <p>– Yerleşim çiziminde KG = %40 ... 49 GQ belirtilmişse (istisnai durum): Yukarı seyir sırasındaki akım, aşağı seyir sırasındaki akıma eşit veya daha az.</p>
      <p>– SMLCD şunu gösterir: 'Done' (Yapıldı).</p>
      <p>Başarısız:</p>
      <p>–Yukarı seyir ve aşağı seyir sırasında akım gerektiği gibi değildir.</p>
      <p className={styles["arrow"]}>Test başarısız olduysa, asansör sistemini dengeleyin.</p>
      <p>–Yukarı seyir ve aşağı seyir sırasında akım gerektiği gibi oluncaya kadar kabine yük ekleyin veya çıkarın.</p>
      <p>– Yük dengelemeyi hesaplayın. KG = (Fiili_yük * [%]100) / Anma_yükü.</p>
      <p>– Yük dengeleme KG'ye erişmek için karşı ağırlığa ağırlık yükleyin veya çıkarın. Dolgu bloklarını sabitleyin.</p>
      <p>– Testi tekrar yapın.</p>
      <p>Örnek:</p>
      <p>– Anma yükü: 1000 kg / Fiili yük: Yukarı ve aşağı yönde eşit akım için 600 kg</p>
      <p>– Kabin ve karşı ağırlık üzerinden 100 kg çıkarın.</p>
      <p>– Sonuç: Yük dengeleme KG = 500/1000 = %50.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– KFM modunu kapatın.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.5.3.3 manuel</p>
      <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
      <p>– Kabine KG (yük dengeleme) yükleyin.</p>
      <p>– Yükü kabinde eşit dağıtın.</p>
      <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
      <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
      <p className={styles["arrow"]}>Testi yapın.</p>
      <p>– SMLCD: Status (Durum) → Drive AMPS (Tahrik Akımı).</p>
      <p>– Kabini en üst katta konumlandırın.</p>
      <p>– Kabini en alt kata gönderin.</p>
      <p>– Kabin kuyunun ortasında iken akımı okuyun.</p>
      <p>– Kabini en üst kata gönderin.</p>
      <p>– Kabin kuyunun ortasında iken akımı okuyun.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Hesaplanan yük dengeleme KG yerleşim çiziminde tanımlanan teorik yük dengeleme KG ile uyumludur.</p>
      <p>– KG = %50 GQ için: Yukarı seyir sırasındaki akım, aşağı seyir sırasındaki akıma eşit veya daha fazla.</p>
      <p>– KG = %40 ... 49 GQ için: Yukarı seyir sırasındaki akım, aşağı seyir sırasındaki akıma eşit veya daha az.</p>
      <p>Başarısız:</p>
      <p>– Hesaplanan yük dengeleme KG yerleşim çiziminde tanımlanan teorik yük dengeleme KG ile uyumlu değildir.</p>
      <p className={styles["arrow"]}>Test başarısız olduysa, asansör sistemini dengeleyin.</p>
      <p>– Yukarı seyir ve aşağı seyir sırasında akım gerektiği gibi oluncaya kadar kabine yük ekleyin veya çıkarın.</p>
      <p>– Yük dengelemeyi hesaplayın. KG = (Fiili_yük * [%]100) / Anma_yükü.</p>
      <p>– Yük dengeleme KG'ye erişmek için karşı ağırlığa ağırlık yükleyin veya çıkarın. Dolgu bloklarını sabitleyin.</p>
      <p>– Testi tekrar yapın.</p>
      <p>Örnek:</p>
      <p>– Anma yükü: 1000 kg / Fiili yük: Yukarı ve aşağı yönde eşit akım için 600 kg</p>
      <p>– Kabin ve karşı ağırlık üzerinden 100 kg çıkarın.</p>
      <p>– Sonuç: Yük dengeleme KG = 500/1000 = %50.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– KFM modunu kapatın.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
    </div>
      

    <div className={styles["box"]}>
      <h4>8.2.1 Ölçülen hız tasarım hızına denk geliyor mu </h4>
      <div>{radio("8.2.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kabin yükü: Dengeli</p>
      <p>Hız için test aralığı: Seyir orta noktası</p>
      <p>Kabin seyir yönü: UP/DOWN</p>
    </div>

    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div>{inputLine("belirtilen_anma_hizi", "Belirtilen anma hızı (VKN) (m/s)  ", {dontUseSymbol:true})}</div>

    <div>{selectField("anma_hizi", "Anma hızı (VKN) (m/s)  ", 
        [ { _id: "1", name: "0,63"},
          { _id: "2", name: "0,80"},
          { _id: "3", name: "1,00"},
          { _id: "4", name: "1,50"},
          { _id: "5", name: "1,60"},
          { _id: "6", name: "1,75"},
          { _id: "7", name: "2,00"},
          { _id: "8", name: "2,50"},
          { _id: "9", name: "3,00"},
          { _id: "10", name: "3,50"},
          { _id: "11", name: "4,00"},
          { _id: "12", name: "Belirtilen gibi değil (bulguları kaydedin)"}
        ])}
    </div>

    <div>{selectField("inceleme_hizi", "İnceleme hızı (VKI) (m/s) ", 
        [ { _id: "1", name: "≤ 0,30"},
          { _id: "2", name: "≤ 0,63"},
          { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"}
        ])}
        <p className={styles["subtitle"]}>Belirtilen: ≤ 0,63 m/s, azaltılmış kuyu dibi ve/veya azaltılmış/alçak üst boşluklu asansörler için ise ≤ 0,30 m/s</p>
    </div>
    <div>{selectField("revizyon_hizi", "Revizyon hızı (VKR) (m/s)  ", 
        [ { _id: "1", name: "≤ 0,30"},
          { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"}
        ])}
        <p className={styles["subtitle"]}>Belirtilen: ≤ 0,30 m/s</p>
    </div>

    <div className={styles["box"]}>
          <p>Kabul kriterleri</p>
          <p className={styles["circle"]}>SMLCD üzerinde görüntülenen maksimum hız ≤ %105 VKN.</p>
          <p className={styles["circle"]}>İnceleme hızı ve revizyon hızı ayarları belirtildiği şekildedir.</p>
    </div>


    <div className={styles["box"]}>
      <p>Test yöntemi m.8.2.1</p>
      <p className={styles["arrow"]}>Kabini en alt katta konumlandırın.</p>
      <p className={styles["arrow"]}>Testi yapın.</p>
      <p>– SMLCD: Asansör Durumu.</p>
      <p>– SMLCD üzerinde aynı anda ‘Esc’ ve ‘Enter’ öğelerine basın.</p>
      <p>– Kabini en üst kata gönderin.</p>
      <p>– Seyrin orta noktasında SMLCD üzerinde gösterilen maksimum VKN hızını kaydedin.</p>
      <p>– Kabini en alt kata gönderin.</p>
      <p>– Seyrin orta noktasında SMLCD üzerinde gösterilen maksimum VKN hızını kaydedin.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Her iki seyir yönünde SMLCD üzerinde görüntülenen maksimum VKN hızı ≤ %105 VKN şeklindedir.</p>
      <p className={styles["arrow"]}>İnceleme hızı VKI'yı kontrol edin.</p>
      <p>– SMLCD: Parameter (Parametre) → Speed Accel (Hız Aksel) → V-Insp (V İnceleme)</p>
      <p>– SMLCD üzerinde gösterilen inceleme hızı VKI'nın belirtilen şekilde olduğundan emin olun.</p>
      <p className={styles["arrow"]}>Revizyon hızı VKR'yi kontrol edin.</p>
      <p>– SMLCD: Parameter (Parametre) → Speed Accel (Hız Aksel) → V-Recall (V Revizyon).</p>
      <p>– SMLCD üzerinde gösterilen revizyon hızı VKR'nin belirtilen şekilde olduğundan emin olun.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.15 Son limit kontakları (KNE) doğru konumlandırılmış ve işlevsel mi </h4>
      <div>{radio("3.4.15", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    
    <div className={styles["box"]}>
        <p>Not</p>
        <p>KNE kontağını tetikledikten sonra kabin/karşı ağırlık frenleme süresi gecikmesi ve sınırlı HKP/HGP mesafeleri nedeniyle tampona/tamponlara temas edebilir. Bunun tampon kontağından önce KNE kontağının doğru çalışmasına etkisi yoktur.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: Dengeli</p>
        <p>Seyir hızı: VTest</p>
        <p>Kabin seyir yönü: UP/DOWN</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <div>{inputLine("tetikleme_seviyesi_mesafesi", "Üst KNE - Son kat seviyesi ile KNE'nin tetiklenme seviyesi arasındaki mesafe (mm)  ")}
    <h5 className={styles["subtitle"]}>{"Belirtilen: < HGP (SAIS kontrolü 3.1.3.a kısmına başvurun)"}</h5>
    </div>
    <div>{inputLine("tetik_noktası_arasindaki_mesafe", "Alt KNE - En alt kat seviyesi ile tetik noktası KNE arasındaki mesafe (mm) ")}
    <h5 className={styles["subtitle"]}>{"Belirtilen: < HKP (SAIS kontrolü 3.1.8 kısmına başvurun)"}</h5>
    </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>KNE kontağının konumu doğrudur ve asansörün normal kullanımı üzerine etkisi yoktur.</p>
        <p className={styles["circle"]}>KNE kontağı tampon kontağından önce atar ve emniyet devresini açar. KNE kontağı tampon sıkışması sırasında aktif kalır.</p>
      </div>


      <div className={styles["box"]}>
        <p>Test yöntemi m.3.4.15</p>
        <p className={styles["arrow"]}>Kabinin seviyeleme doğruluğunun doğru olduğundan emin olun. Gerekirse kat ayarlama işlemine göre ayarlayın.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine KG (yük dengeleme) yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>Kuyu bilgi sistemi AC GSI KNE kontağına ek olarak mekanik KNE kontağı (isteğe bağlı) olan asansör için:</p>
        <p>– Kabin çatısına gidin.</p>
        <p>– SCCAR.SISK test fişini SISK konektörüne yerleştirin (aşağıdaki grafiğe bakınız). Bu işlem kuyu bilgi sistemi AC GSI üst ve alt KNE kontağına köprü yaptırır.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p>Üst KNE kontağı</p>
        <p className={styles["arrow"]}>Kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance test (Kabul testi) → KNE test (KNE testi).</p>
        <p>Kabin yavaşça KNE kontağına doğru hareket eder ve KNE kontağı emniyet devresini açar açmaz durur.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD üzerinde, T3B kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– KNE kontağı, karşı ağırlık kendi tamponuna/tamponlarına dokunmadan aktif hale gelir.</p>
        <p>– SMLCD şunu gösterir:</p>
        <p className={styles["circle"]}>'Done' (Yapıldı).</p>
        <p className={styles["circle"]}>KNE mesafesi (Gösterilmediyse manuel olarak ölçün).</p>
        <p>Başarısız:</p>
        <p>– Kabin maksimum seyir mesafesine KNE kontağını attırmadan ulaşır.</p>
        <p>– KNE kontağı emniyet devresini açmadan, karşı ağırlık kendi tamponuna/tamponlarına temas eder.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir. SMLCD, KNE mesafesini göstermez.</p>
        <p className={styles["arrow"]}>KNE mesafesinin manuel olarak ölçülmesi gerekirse:</p>
        <p>– Ana şalter JH kapatın ve kilitleyin.</p>
        <p>– Üst katta KNE mesafesini manuel olarak ölçün.</p>
        <p>– Ana şalter JH kilidini açın ve kendisini açın.</p>
        <p className={styles["arrow"]}>Kabini revizyon kontrolü ile KNE bölgesinden dışarı hareket ettirin.</p>
        <p>Alt KNE kontağı</p>
        <p className={styles["arrow"]}>Kabini en alt katta konumlandırın.</p>
        <p className={styles["arrow"]}>Kabinin seviyeleme doğruluğunun doğru olduğundan emin olun. Gerekirse kat ayarlama işlemine göre ayarlayın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance test (Kabul testi) → KNE test (KNE testi).</p>
        <p>Kabin yavaşça KNE kontağına doğru hareket eder ve KNE kontağı emniyet devresini açar açmaz durur.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD üzerinde, T3B kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– KNE kontağı, kabin kendi tamponuna/tamponlarına dokunmadan aktif hale gelir.</p>
        <p>– SMLCD şunu gösterir:</p>
        <p className={styles["circle"]}>'Done' (Yapıldı).</p>
        <p className={styles["circle"]}>KNE mesafesi (Gösterilmediyse manuel olarak ölçün).</p>
        <p>Başarısız:</p>
        <p className={styles["arrow"]}>Kabinin seviyeleme doğruluğunun doğru olduğundan emin olun. Gerekirse kat ayarlama işlemine göre ayarlayın.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine KG (yük dengeleme) yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>Kuyu bilgi sistemi AC GSI KNE kontağına ek olarak mekanik KNE kontağı (isteğe bağlı) olan asansör için:</p>
        <p>– Kabin çatısına gidin.</p>
        <p>– SCCAR.SISK test fişini SISK konektörüne yerleştirin (aşağıdaki grafiğe bakınız). Bu işlem kuyu bilgi sistemi AC GSI üst ve alt KNE kontağına köprü yaptırır.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p>Üst KNE kontağı</p>
        <p className={styles["arrow"]}>Kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance test (Kabul testi) → KNE test (KNE testi).</p>
        <p>Kabin yavaşça KNE kontağına doğru hareket eder ve KNE kontağı emniyet devresini açar açmaz durur.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD üzerinde, T3B kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– KNE kontağı, karşı ağırlık kendi tamponuna/tamponlarına dokunmadan aktif hale gelir.</p>
        <p>– SMLCD şunu gösterir:</p>
        <p className={styles["circle"]}>'Done' (Yapıldı).</p>
        <p className={styles["circle"]}>KNE mesafesi (Gösterilmediyse manuel olarak ölçün).</p>
        <p>Başarısız:</p>
        <p>– Kabin maksimum seyir mesafesine KNE kontağını attırmadan ulaşır.</p>
        <p>– KNE kontağı emniyet devresini açmadan, karşı ağırlık kendi tamponuna/tamponlarına temas eder.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir. SMLCD, KNE mesafesini göstermez.</p>
        <p className={styles["arrow"]}>KNE mesafesinin manuel olarak ölçülmesi gerekirse:</p>
        <p>– Ana şalter JH kapatın ve kilitleyin.</p>
        <p>– Üst katta KNE mesafesini manuel olarak ölçün.</p>
        <p>– Ana şalter JH kilidini açın ve kendisini açın.</p>
        <p className={styles["arrow"]}>Kabini revizyon kontrolü ile KNE bölgesinden dışarı hareket ettirin.</p>
        <p>Alt KNE kontağı</p>
        <p className={styles["arrow"]}>Kabini en alt katta konumlandırın.</p>
        <p className={styles["arrow"]}>Kabinin seviyeleme doğruluğunun doğru olduğundan emin olun. Gerekirse kat ayarlama işlemine göre ayarlayın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance test (Kabul testi) → KNE test (KNE testi).</p>
        <p>Kabin yavaşça KNE kontağına doğru hareket eder ve KNE kontağı emniyet devresini açar açmaz durur.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD üzerinde, T3B kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– KNE kontağı, kabin kendi tamponuna/tamponlarına dokunmadan aktif hale gelir.</p>
        <p>– SMLCD şunu gösterir:</p>
        <p className={styles["circle"]}>'Done' (Yapıldı).</p>
        <p className={styles["circle"]}>KNE mesafesi (Gösterilmediyse manuel olarak ölçün).</p>
        <p>Başarısız:</p>
        <p>– Kabin maksimum seyir mesafesine KNE kontağını attırmadan ulaşır.</p>
        <p>– KNE kontağı emniyet devresini açmadan, kabin kendi tamponuna/tamponlarına temas eder.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir. SMLCD, KNE mesafesini göstermez.</p>
        <p className={styles["arrow"]}>KNE mesafesinin manuel olarak ölçülmesi gerekirse:</p>
        <p>– Ana şalter JH kapatın ve kilitleyin.</p>
        <p>– Alt katta KNE mesafesini manuel olarak ölçün.</p>
        <p>– Ana şalter JH kilidini açın ve kendisini açın.</p>
        <p className={styles["arrow"]}>Kabini revizyon kontrolü ile KNE bölgesinden dışarı hareket ettirin.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Monte edilmişse kabin çatısında SCCAR.SISK test fişini çıkarın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Mekanik KNE kontaklı asanasör - SCCAR.SISK test fişi bağlantı noktası</p>
        <img src={şekil60} className={styles["w-300"]} />
      </div>


    <div className={styles["box"]}>
      <h4>7.2.15.b SA WOL 35 için, kabin aşırı hız regülatörünün sürtünme gücü gerektiği şekilde mi</h4>
      <div>{radio("7.2.15.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Kabin aşırı hız regülatörü tipi SA WOL 35 sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: Dengeli</p>
        <p>Seyir hızı: VKR (revizyon hızı)</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
      </div>

      
      <div className={styles["box"]}>
        <p>Test yöntemi m.7.2.15 / m.7.2.15.b</p>
        <p>Test yöntemi m.7.2.15 / m.7.2.15.b</p>
        <p>Şu kabin aşırı hız regülatörü tipleri için:</p>
        <p className={styles["circle"]}>SA WOL 35</p>
        <p className={styles["circle"]}>SA GB 32</p>
        <p className={styles["arrow"]}>Kabini kabin altına erişim olacak şekilde konumlandırın.</p>
        <p className={styles["arrow"]}>Kabin aktivasyon mekanizmasının ayarlı tutma gücü FCH'yi doğrulayın.</p>
        <p className={styles["arrow"]}>Tip etiketi tanımlaması için kabin aşırı hız regülatörüne erişin.</p>
        <p className={styles["arrow"]}>Kabin aşırı hız regülatörünün ayarlı sürtünme gücü FC'yi (FFren) doğrulayın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Aşırı hız regülatör halatında sürtünme gücü FC, kabin regülatör kolunda gerekli çekme gücü FCH'den en az iki kat yüksektir (FC ≥ 2 x FCH).</p>
        <p>Başarısız:</p>
        <p>– Aşırı hız regülatör halatında sürtünme gücü FC kabin regülatör kolunda gerekli çekme gücü FCH'nin iki katından düşüktür (FC {"<"} 2 x FCH).</p>
        <p className={styles["arrow"]}>Kabini en alt katın bir kat üstünde konumlandırın.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Karşı ağırlık paraşütlü asansör için: Elektrikli uzaktan kumandayla (ERC) monte edilmiş aşırı hız regülatörü için AS.CARBV test fişini BVSEL konektörüne yerleştirin. Bu işlem kabin aşırı hız regülatörünün elektrikli uzaktan kumanda ERC kısmını bağlar.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Test (Test) → Acceptance Test (Kabul Testi) → SafetyGearCarPer → SafetyGearCarPer OK? (Tamam?)→ SafetyGearCarPer.</p>
        <p>– Kabini revizyon kontrolüyle aşağıya hareket ettirin. Revizyon düğmesi DRH-D'ye kabin paraşütü geçinceye kadar basın.</p>
        <p>– SMLCD revizyon hızı VKR gösterdiğinde veya kontrol sinyali duyulduğunda hemen DBV düğmesine basın.</p>
        <p>– MR asansör için: Elektrikli uzaktan kumanda (ERC) olmadan kurulan aşırı hız regülatörü için aşırı hız regülatörünü manuel olarak ≤ 3 saniye içinde geçirin.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin paraşütü çalışır.</p>
        <p>Başarısız:</p>
        <p>– Kabin paraşütü çalışmaz.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Kabin paraşütünün kılavuz ray üzerine en azından kısmen geçtiğinden emin olun.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Kabini kabin aşırı hız regülatörü ve kabin paraşütü aktif durumdan çıkıncaya kadar yukarıya hareket ettirin.</p>
        <p>– Kuruluysa test fişi AS.CARBV kısmını BVSEL kısmından çıkarın.</p>
        <p>– Kabin aşırı hız regülatörü (KBV) ve kabin paraşütü (KF/KF1) üzerindeki emniyet kontaklarını resetleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>7.4.11.a SA GBP 201 için karşı ağırlık aşırı hız regülatöründe sürtünme gücü gerektiği şekilde mi</h4>
      <div>{radio("7.4.11.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Karşı ağırlık aşırı hız regülatörü tipi SA GBP 201 sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: Dengeli</p>
        <p>Seyir hızı: VKR (revizyon hızı)</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Aşırı hız regülatör halatında sürtünme gücü FC karşı ağırlık regülatör kolunda gerekli çekme gücünden (FCH) daha yüksek.</p>
        <p className={styles["circle"]}>Karşı ağırlık paraşütü çalışır.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.4.11.a</p>
        <p>Şu karşı ağırlık aşırı hız regülatörü tipi için:</p>
        <p className={styles["circle"]}>SA GBP 201</p>
        <p className={styles["arrow"]}>Kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>Gerdirme cihazında:</p>
        <p>– Cıvatayı gevşetin.</p>
        <p>– Bir gerdirme ağırlığı bloğunu çıkarın (yaklaşık 0,5 FCU).</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Elektrikli uzaktan kumandayla (ERC) monte edilmiş aşırı hız regülatörü için AS.CWTBV test fişini BVSEL konektörüne yerleştirin. Bu işlem karşı ağırlık aşırı hız regülatörünün elektrikli uzaktan kumanda ERC kısmını bağlar.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Test (Test) → Acceptance Test (Kabul Testi) → SafetyGearCWTPer → SafetyGearCWTPer OK? (Tamam?) → SafetyGearCWTPer.</p>
        <p>– Kabini revizyon kontrolüyle yukarıya hareket ettirin. Karşı ağırlık paraşütü geçinceye kadar, revizyon düğmesi DRH-U'ya basın.</p>
        <p>– SMLCD revizyon hızı VKR gösterdiğinde veya kontrol sinyali duyulduğunda hemen DBV düğmesine basın.</p>
        <p>– MR asansör için: Elektrikli uzaktan kumanda (ERC) olmadan kurulan aşırı hız regülatörü için aşırı hız regülatörünü manuel olarak ≤ 3 saniye içinde geçirin.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Karşı ağırlık paraşütü çalışır.</p>
        <p>Başarısız:</p>
        <p>– Karşı ağırlık paraşütü çalışmaz.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Karşı ağırlık paraşütünün kılavuz ray üzerine en azından kısmen geçtiğinden emin olun.</p>
        <p className={styles["arrow"]}>Gerdirme cihazında gerdirme ağırlığı bloğunu takın. Cıvatayı sıkın.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Kabini karşı ağırlık aşırı hız regülatörü ve karşı ağırlık paraşütü aktif durumdan çıkıncaya kadar aşağıya hareket ettirin.</p>
        <p>– Kuruluysa test fişi AS.CWTBV kısmını BVSEL kısmından çıkarın.</p>
        <p>– Karşı ağırlık aşırı hız regülatöründe (KBVG) emniyet kontaklarını resetleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>
      
      <div className={styles["box"]}>
        <p>Gerdirme ağırlığı bloğunun çıkarılması</p>
        <img src={şekil61} className={styles["w-200"]} />
      </div>


    <div className={styles["box"]}>
      <h4>7.4.11.b SA WOL 35 için, karşı ağırlık aşırı hız regülatöründe sürtünme gücü gerektiği gibi mi </h4>
      <div>{radio("7.4.11.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Karşı ağırlık aşırı hız regülatörü tipi SA WOL 35 sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: Dengeli</p>
        <p>Seyir hızı: VKR (revizyon hızı)</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Aşırı hız regülatör halatında sürtünme gücü FC karşı ağırlık regülatör kolunda gerekli çekme gücü FCH'den en az iki kat yüksektir (FC ≥ 2 x FCH).</p>
        <p className={styles["circle"]}>Karşı ağırlık paraşütü çalışır.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.4.11 / m.7.4.11.b</p>
        <p>Şu karşı ağırlık aşırı hız regülatörü tipleri için:</p>
        <p className={styles["circle"]}>SA WOL 35</p>
        <p className={styles["circle"]}>SA GB 32</p>
        <p className={styles["arrow"]}>Kabini karşı ağırlığın altına erişim olacak şekilde konumlandırın.</p>
        <p className={styles["arrow"]}>Karşı ağırlık aktivasyon mekanizmasının ayarlı tutma gücü FCH'yi doğrulayın.</p>
        <p className={styles["arrow"]}>Tip etiketi tanımlaması için karşı ağırlık aşırı hız regülatörüne erişin.</p>
        <p className={styles["arrow"]}>Karşı ağırlık aşırı hız regülatörünün ayarlı sürtünme gücü FC'yi (FFren) doğrulayın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Aşırı hız regülatör halatında sürtünme gücü FC karşı ağırlık regülatör kolunda gerekli çekme gücünden FCH'den en az iki kat yüksektir (FC ≥ 2 x FCH).</p>
        <p>Başarısız:</p>
        <p>– Aşırı hız regülatör halatında sürtünme gücü FC, karşı ağırlık regülatör kolunda gerekli çekme gücü FCH'nin iki katından düşüktür (FC {"<"} 2 x FCH).</p>
        <p className={styles["arrow"]}>Kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Elektrikli uzaktan kumandayla (ERC) monte edilmiş aşırı hız regülatörü için AS.CWTBV test fişini BVSEL konektörüne yerleştirin. Bu işlem karşı ağırlık aşırı hız regülatörünün elektrikli uzaktan kumanda ERC kısmını bağlar.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Test (Test) → Acceptance Test (Kabul Testi) → SafetyGearCWTPer → SafetyGearCWTPer OK? (Tamam?) → SafetyGearCWTPer.</p>
        <p>– Kabini revizyon kontrolüyle yukarıya hareket ettirin. Karşı ağırlık paraşütü geçinceye kadar, revizyon düğmesi DRH-U'ya basın.</p>
        <p>– SMLCD revizyon hızı VKR gösterdiğinde veya kontrol sinyali duyulduğunda hemen DBV düğmesine basın.</p>
        <p>– MR asansör için: Elektrikli uzaktan kumanda (ERC) olmadan kurulan aşırı hız regülatörü için aşırı hız regülatörünü manuel olarak ≤ 3 saniye içinde geçirin.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Karşı ağırlık paraşütü çalışır.</p>
        <p>Başarısız:</p>
        <p>– Karşı ağırlık paraşütü çalışmaz.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Karşı ağırlık paraşütünün kılavuz ray üzerine en azından kısmen geçtiğinden emin olun.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Kabini karşı ağırlık aşırı hız regülatörü ve karşı ağırlık paraşütü aktif durumdan çıkıncaya kadar aşağıya hareket ettirin.</p>
        <p>– Kuruluysa test fişi AS.CWTBV kısmını BVSEL kısmından çıkarın.</p>
        <p>– Karşı ağırlık aşırı hız regülatöründe (KBVG) emniyet kontaklarını resetleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

    <div className={styles["box"]}>
      <h4>7.5.4 Yukarı yöne giden kabin aşırı hız koruma cihazı (makina freni) doğru çalışıyor mu </h4>
      <div>{radio("7.5.4", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>KG belgesi mevcut EU Tip İnceleme Sertifikasında belirtilen EN 81 standardından sapmaya izin VERMEZ</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: Dengeli</p>
        <p>Seyir hızı: {">"} VKN</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Kabin durur.</p>
        <p className={styles["circle"]}>SMLCD, {">"} VKN değerinde bir hız gösterir.</p>
        <p className={styles["circle"]}>Yetersiz aşırı hızlı kısa HQ için: Emniyet kontağı (KBV) yukarı yönde mekanik ve elektriksel olarak doğru çalışıyor.</p>
      </div>
      
      <div className={styles["box"]}>
        <p>Test yöntemi m.7.5.4</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine KG (yük dengeleme) yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Kabini en alt katta konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → Overspeed1 t33 → OK? (Tamam?) → Floor (Kat) = ..... (enter a car call to the top floor) (en üst kata bir kabin çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (Tamam?).</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin durur.</p>
        <p>– SMLCD üzerinde, T3A kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– KBV kontağı aktivedir.</p>
        <p>– SMLCD ‘Done .... m/s’ (Yapıldı ... m/s) gösterir.</p>
        <p>Başarısız:</p>
        <p>– Kabin durmaz.</p>
        <p>– KBV kontağı aktifleşmez.</p>
        <p>– SMLCD ‘Failed’ (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Bir test başarısızsa test sırasında aşırı hıza ulaşılıp ulaşılamadığını kontrol edin.</p>
        <p className={styles["arrow"]}>Yetersiz aşırı hız nedeniyle test başarısız olduysa (asansörün HQ öğesi fazla kısa): Aşırı hıza ulaşmak için hız arttırma değerlerini arttırın. Sonra testi tekrar yapın.</p>
        <p>– SMLCD: Parameter (Parametre) → Speed Accel. (Hız Aksel.)</p>
        <p>– Şu parametreleri arttırın:</p>
        <p className={styles["circle"]}>J1: 0,8 m/s³'ten maksimum değere (1,6 m/s³)</p>
        <p className={styles["circle"]}>A2: 0,8 m/s²'den maksimum değere (1,6 m/s²)</p>
        <p className={styles["circle"]}>J3: 0,8 m/s³'ten maksimum değere (1,6 m/s³).</p>
        <p>– Testi tekrar yapın.</p>
        <p>– Test geçildiyse, parametreleri tekrar orijinal değerlerine ayarlayın.</p>
        <p className={styles["arrow"]}>Kabin aşırı hız regülatörü (KBV) üzerindeki emniyet kontağını resetleyin.</p>
        <p className={styles["arrow"]}>Yetersiz aşırı hız nedeniyle test başarısız olduysa (aşırı kısa HQ): Emniyet kontağının (KBV) yukarı yönde çalıştığını mekanik ve elektriksel olarak tekrar kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– KBV kontağı emniyet devresini açar.</p>
        <p>Başarısız:</p>
        <p>– KBV kontağı aktifleşmez.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>
      


    <div className={styles["box"]}>
      <h4>5.3.4.a Kabin yer çekimiyle yukarı hareket ediyor mu ve/veya bir tahliye cihazı doğru monte edilmiş mi </h4>
      <div>{radio("5.3.4.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>KG belgesi mevcut EU Tip İnceleme Sertifikasında belirtilen EN 81 standardından sapmaya izin VERMEZ</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Her ürün hattının tahliye için spesifik bir talimat el kitabı vardır. Emniyet talimatı dahil olmak üzere bu belirli talimat el kitabına başvurun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: KG (yük dengeleme) eksi % 10</p>
        <p>Kabin konumu: HQ/2</p>
        <p>Kabin seyir yönü: YUKARI</p>
        <p>Makina freni durumu: Açık</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

    <div>{inputLine("belirtilen_yuk_dengelemesi", "Belirtilen yük dengeleme KG (% GQ)")}</div>
    <div>{inputLine("belirtilen_anma_yuku", "Belirtilen anma yükü GQ (kg) ")}</div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
      </div>

    <div>
        <h5>Bu kabul kriterlerinden birini seçin: </h5>
        <div>{radio("kabul_kriterleri5", { variant: "circle", inputArray: 
          ["Kabin yerçekimi ile yukarıya doğru hareket eder. SMLCD ‘UP’ (YUKARI) gösterir.",
           "Bir tahliye cihazı doğru şekilde monte edilmiştir.",
           "Belirtilen gibi değil (bulguları kaydedin).",
          ] })}
          <h5 className={styles["subtitle"]}>Not: Kabin yer çekimi ile yukarı hareket etse bile sistem hesaplamasına göre tahliye cihazı gerekebilir.</h5>
        </div>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.5.3.4.a</p>
      <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
      <p>– Kabine KG (Yük dengeleme) değerinin %10 daha azını yükleyin.</p>
      <p>– Yükü kabinde eşit dağıtın.</p>
      <p className={styles["arrow"]}>Kabini kapı bölgesi dışında kuyunun ortasında konumlandırın.</p>
      <p className={styles["arrow"]}>Ana şalter JH'yi kapatın.</p>
      <p className={styles["arrow"]}>SMLCD: YUKARI ve AŞAĞI düğmelerine aynı anda basın.</p>
      <p className={styles["arrow"]}>LUET LED'in açık olduğundan emin olun.</p>
      <p className={styles["arrow"]}>PEBO'lu asansör için:</p>
      <p>– Kabinin kapı bölgesi dışında olduğundan emin olun.</p>
      <p>– Manuel tahliye şalteri JEM/JRH'yi açın.</p>
      <p>– Üç saniye boyunca DEM manuel tahliye düğmesine basın.</p>
      <p className={styles["arrow"]}>Manuel fren bırakma kollu asansör için:</p>
      <p>UYARI</p>
      <p>Kabin yukarı yönde hareket ettiğinde manuel fren açma kolunu hemen bırakın ve makine frenini kapatın.</p>
      <p>– Manuel fren açma kolunu makine içine yerleştirin.</p>
      <p>– Manuel fren açma kolunu çekin ve makine frenini çok kısa bir süre açık tutun. Tahrik kasnağının hızını izleyin ve kontrol edin.</p>
      <p>– Makine frenini kapatın.</p>
      <p>– Manuel fren açma kolunu çıkarın.</p>
      <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Kabin yerçekimi ile yukarıya doğru hareket eder.</p>
      <p>– SMLCD ‘UP’ (YUKARI) gösterir.</p>
      <p>– Kabin kapı bölgesine eriştiğinde, LUET LED yanar.</p>
      <p>Not Kabin yerçekimi ile yukarı hareket etse bile sistem hesaplamasına göre tahliye cihazı gerekebilir.</p>
      <p>Başarısız:</p>
      <p>– Kabin yerçekimi ile yukarıya doğru hareket etmez.</p>
      <p>– SMLCD ‘DOWN’ (AŞAĞI) gösterir.</p>
      <p className={styles["arrow"]}>Yer çekimi testi başarısız olursa veya sistem hesaplamasına göre tahliye cihazı gerekirse:</p>
      <p>– Tahliye cihazının yerleşim çizimine göre doğru pozisyona monte edildiğinden emin olun.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– PEBO'lu asansör için: Manuel tahliye şalteri JEM/JRH'yi kapatın.</p>
      <p>– Manuel fren bırakma kolu olan asansör için manuel fren bırakma kolunun çıkarıldığından emin olun.</p>
      <p>– Ana şalter JH'yi açın.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>

    </div>

    <div className={styles["box"]}>
      <h4>5.3.4.b Kabin yer çekimiyle aşağı hareket ediyor mu ve/veya bir tahliye cihazı doğru monte edilmiş mi </h4>
      <div>{radio("5.3.4.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p className={styles["circle"]}>Her ürün grubunun tahliye için spesifik bir talimat el kitabı vardır. Emniyet talimatı dahil olmak üzere bu belirli talimat el kitabına başvurun.</p>
        <p className={styles["circle"]}>Mevcut EC/EU Tip İnceleme Sertifikasını uygulayan KG'ler için testi sadece aşağı yönde yapmak yeterlidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: KG nin (yük dengeleme) % 10 fazlası</p>
        <p>Kabin konumu: HQ/2</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
        <p>Makina freni durumu: Açık</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

    <div>{inputLine("belirtilen_yuk_dengeleme2", "Belirtilen yük dengeleme KG (% GQ)", {dontUseSymbol:true})}</div>
    <div>{inputLine("belirtilen_anma_yuku2", "Belirtilen anma yükü GQ (kg)  ", {dontUseSymbol:true})}</div>

    <div className={styles["box"]}>
      <p>Kabul kriterleri</p>
    </div>

    <div>
        <h5>Bu kabul kriterlerinden birini seçin: </h5>
        <div>{radio("kabul_kriterleri6", { variant: "circle", inputArray: 
          ["Kabin yerçekimi ile aşağıya doğru hareket eder. SMLCD ‘DOWN’ (AŞAĞI) gösterir.",
           "Bir tahliye cihazı doğru şekilde monte edilmiştir.",
           "Belirtilen gibi değil (bulguları kaydedin).",
          ] })}
          <h5 className={styles["subtitle"]}>Not: Kabin yer çekimi ile aşağı hareket etse bile sistem hesaplamasına göre tahliye cihazı gerekebilir.</h5>
        </div>
    </div>


    <div className={styles["box"]}>
      <p>Test yöntemi m.5.3.4.b</p>
      <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
      <p>– Kabine KG'nin (Yük dengeleme) %10 fazlasını yükleyin.</p>
      <p>– Yükü kabinde eşit dağıtın.</p>
      <p className={styles["arrow"]}>Kabini kapı bölgesi dışında kuyunun ortasında konumlandırın.</p>
      <p className={styles["arrow"]}>Ana şalter JH'yi kapatın.</p>
      <p className={styles["arrow"]}>SMLCD: YUKARI ve AŞAĞI düğmelerine aynı anda basın.</p>
      <p className={styles["arrow"]}>LUET LED'in açık olduğundan emin olun.</p>
      <p className={styles["arrow"]}>PEBO'lu asansör için:</p>
      <p>– Kabinin kapı bölgesi dışında olduğundan emin olun.</p>
      <p>– Manuel tahliye şalteri JEM/JRH'yi açın.</p>
      <p>– Üç saniye boyunca DEM manuel tahliye düğmesine basın.</p>
      <p className={styles["arrow"]}>Manuel fren bırakma kollu asansör için:</p>
      <p>UYARI</p>
      <p>Kabin aşağı yönde hareket ettiğinde manuel fren açma kolunu hemen bırakın ve makine frenini kapatın.</p>
      <p>– Manuel fren açma kolunu makine içine yerleştirin.</p>
      <p>– Manuel fren açma kolunu çekin ve makine frenini çok kısa bir süre açık tutun. Tahrik kasnağının hızını izleyin ve kontrol edin.</p>
      <p>– Makine frenini kapatın.</p>
      <p>– Manuel fren açma kolunu çıkarın.</p>
      <p>► Sonuçları kontrol edin.</p>
      <p>Geçildi:</p>
      <p>– Kabin yerçekimi ile aşağıya doğru hareket eder.</p>
      <p>– SMLCD ‘DOWN’ (AŞAĞI) gösterir.</p>
      <p>– Kabin kapı bölgesine eriştiğinde, LUET LED yanar.</p>
      <p>Not:Kabin yerçekimi ile aşağı hareket etse bile sistem hesaplamasına göre tahliye cihazı gerekebilir.</p>
      <p>Başarısız:</p>
      <p>– Kabin yerçekimi ile aşağıya doğru hareket etmez.</p>
      <p>– SMLCD ‘UP’ (YUKARI) gösterir.</p>
      <p className={styles["arrow"]}>Yer çekimi testi başarısız olursa veya sistem hesaplamasına göre tahliye cihazı gerekirse:</p>
      <p>– Tahliye cihazının yerleşim çizimine göre doğru pozisyona monte edildiğinden emin olun.</p>
      <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
      <p>– PEBO'lu asansör için: Manuel tahliye şalteri JEM/JRH'yi kapatın.</p>
      <p>– Manuel fren bırakma kolu olan asansör için manuel fren bırakma kolunun çıkarıldığından emin olun.</p>
      <p>– Ana şalter JH'yi açın.</p>
      <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>12.2 Tam yük testleri (%100 GQ) </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>5.3.5 Fren dinamik tek fren testini geçiyor mu </h4>
      <img src={stop} className={styles["stop-image"]} />
      <div>{radio("5.3.5", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p className={styles["subtitle"]}>Her makinanın fren sistemi için belirli bir talimat el kitabı var. Belirli talimat el kitabı ve emniyet talimatlarını okuyun. Kabul kriterlerini karşılamazsa
      SAIS incelemesini durdurun</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kabin yükü: %100 GQ</p>
      <p>Seyir hızı: VKN</p>
      <p>Kabin seyir yönü: AŞAĞI</p>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Her tek fren testi için:</p>
        <p className={styles["circle"]}>Kabin durur.</p>
        <p className={styles["circle"]}>SMLCD 300 ... 9810 mm/s^2 aralığında olan ortalama bir fren yavaşlama AKN değeri gösterir.</p>
      </div>

      <div>
        <h5>Makina tipi / makina fren tipi</h5>
        <div>{radio("makina_tipi_makina_fren_tipi", { variant: "circle", inputArray: 
          ["DR FMB 130 / Leroy Somer FCRD90 veya FCRD112",
           "DR PMB 125 / Leroy Somer FCRD90",
           "DR PMB 135 Rel. 02 / Leroy Somer FCRD112",
           "DR PMB 135 Rel. 01 / Kendrion 78 11029Bxx",
           "DR PML 145 / 78 11019Bxx veya 78 11033Bxx",
           "DR PML 145 / RSQ 250",
           "DR PML 155 / 78 11033Bxx veya 78 11040Bxx",
           "DR PML 155 / RSQ 300 veya RSQ 500",
           ] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.5.3.5</p>
        <p>Şu fren sistemleri için:</p>
        <p className={styles["circle"]}>DR FMB 130 / Leroy Somer FCRD90 veya FCRD112</p>
        <p className={styles["circle"]}>DR PMB 125 / Leroy Somer FCRD90</p>
        <p className={styles["circle"]}>DR PMB 135 Rel. 02 / Leroy Somer FCRD112</p>
        <p className={styles["circle"]}>DR PMB 135 Rel. 01 / Kendrion 78 11029Bxx</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %100 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>Kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Kısa HQ nedeniyle testte başarısız olabilecek asansör için: VKN'yi azaltın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → Next smaller standard rated speed VKN m/s (Sonraki daha küçük standart anma hızı VKN m/s (minimum 0,63 m/s)).</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SCPOW PCBA üzerindeki fren tipi şalterinin belirtilen pozisyona ayarlandığından emin olun. (Bakınız SAIS kontrolü 2.8.2).</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → Brake Test (Fren Testi) t14 → OK? (Tamam?) → Brake Channel (Fren Kanalı) = Channel 1 (Kanal 1) → OK? (Tamam?) → Floor (Kat) = ..... (enter a car call to the bottom floor) (en alt kata bir kabin çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (Tamam?).</p>
        <p>Kabin VKN’ye ulaştığında asansör otomatik acil durdurma yapar.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin durur.</p>
        <p>– SMLCD, 300 ... 9810 mm/s^2 aralığında olan ortalama bir fren yavaşlama değeri gösterir.</p>
        <p>– SMLCD şunu gösterir: 'Done' (Yapıldı).</p>
        <p>Başarısız:</p>
        <p>– SMLCD, {"<"} 300 mm/s^2 veya {">"} 9810 mm/s^2 olan ortalama bir fren yavaşlaması gösterir.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Testi tekrar yapın.</p>
        <p>– Testi ikinci fren için tekrar yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → Brake Test (Fren Testi) t14 → OK? (Tamam?) → Brake Channel (Fren Kanalı) = Channel 2 (Kanal 2) → OK? (Tamam?) → Floor (Kat) = ..... (enter a car call to the bottom floor) (en alt kata bir kabin çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (Tamam?).</p>
        <p>Kabin VKN’ye ulaştığında asansör otomatik acil durdurma yapar.</p>
        <p className={styles["arrow"]}>VKN kısa HQ nedeniyle düşürülmüşse: VKN değerini orijinal değerine ayarlayın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → VKN m/s.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

      <div className={styles["box"]}>
       <p>Test yöntemi m.5.3.5</p>
        <p>Şu fren sistemleri için:</p>
        <p className={styles["circle"]}>DR FMR/PMR 160 / 78 11029Bxx</p>
        <p className={styles["circle"]}>DR FMR/PMR 200 / 78 11033Bxx</p>
        <p className={styles["circle"]}>DR FMR/PMR 200 / 78 11040Bxx</p>
        <p className={styles["circle"]}>DR PMR 160 / RSQ 250</p>
        <p className={styles["circle"]}>DR PMR 200 / RSQ 300 veya RSQ 500</p>
        <p className={styles["circle"]}>DR PML 145 / 78 11019Bxx veya 78 11033Bxx</p>
        <p className={styles["circle"]}>DR PML 145 / RSQ 250</p>
        <p className={styles["circle"]}>DR PML 155 / 78 11033Bxx veya 78 11040Bxx</p>
        <p className={styles["circle"]}>DR PML 155 / RSQ 300 veya RSQ 500</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %100 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>Kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Kısa HQ nedeniyle testte başarısız olabilecek asansör için: VKN'yi azaltın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → Next smaller standard rated speed VKN m/s (Sonraki daha küçük standart anma hızı VKN m/s (minimum 0,63 m/s)).</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SCPOW PCBA üzerinde fren tipi şalterinin ‘VD’ (avara kasnağı diyodu etkin) olarak ayarlandığından emin olun.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → Brake Test (Fren Testi) t14 → OK? (Tamam?) → Brake Channel (Fren Kanalı) = Channel 1 (Kanal 1) → OK? (Tamam?) → Floor (Kat) = ..... (enter a car call to the bottom floor) (en alt kata bir kabin çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (Tamam?).</p>
        <p>Kabin VKN’ye ulaştığında asansör otomatik acil durdurma yapar.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin durur.</p>
        <p>– SMLCD 300 ... 9810 mm/s<sup>2</sup> aralığında olan ortalama bir fren yavaşlaması gösterir.</p>
        <p>– SMLCD şunu gösterir: 'Done' (Yapıldı).</p>
        <p>Başarısız:</p>
        <p>– SMLCD {"<"} 300 mm/s<sup>2</sup> veya {">"}9810 mm/s<sup>2</sup> olan ortalama bir fren yavaşlaması gösterir.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Testi tekrar yapın.</p>
        <p>– Testi ikinci fren için tekrar yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → Brake Test (Fren Testi) t14 → OK? (Tamam?) → Brake Channel (Fren Kanalı) = Channel 2 (Kanal 2) → OK? (Tamam?) → Floor (Kat) = ..... (enter a car call to the bottom floor) (en alt kata bir kabin çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (Tamam?).</p>
        <p>Kabin VKN’ye ulaştığında asansör otomatik acil durdurma yapar.</p>
        <p className={styles["arrow"]}>VKN kısa HQ nedeniyle düşürülmüşse: VKN değerini orijinal değerine ayarlayın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → VKN m/s.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>3.3.2 Kabin tampon(lar) üzerinde durduğunda karşı ağırlık yükseltilemez mi </h4>
      <div>{radio("3.3.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p>Test ayrıca enerji birikimi tamponları için EN 81-20:2014 5.8.2.1 ve 6.3.7.a gerekliliklerini karşılar.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test ayarı</p>
      <p>Kabin yükü: %100 GQ</p>
      <p>Seyir hızı: VKR (revizyon hızı)</p>
      <p>Kabin seyir yönü: AŞAĞI</p>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Kabin tampon(lar) üzerinde durduğunda karşı ağırlık yükseltilemez.</p>
        <p className={styles["circle"]}>Asansör çalıştırmayı olumsuz etkileyebilecek herhangi bir hasar oluşmamıştır.</p>
        <p className={styles["circle"]}>Kabin ve kabin tamponu/tamponları hasarsız.</p>
      </div>


      <div className={styles["box"]}>
        <p>Test yöntemi m.3.3.2</p>
        <p className={styles["arrow"]}>► KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %100 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>AC GSI 3 (ETSL) ile asansör için: ETSL devre dışı bırakın.</p>
        <p>– Kablolama şemasına başvurun.</p>
        <p>– Emniyet devresinde ETSL kontağını devre dışı bırakmak için test fişi SCCAR.ETSL kullanın.</p>
        <p className={styles["arrow"]}>Kabini en alt katta konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>UYARI</p>
        <p>Kabin tampona/tamponlara temas ederse ve karşı ağırlığın yukarı hareketi durmazsa, revizyon düğmesi DRH-D'ye basmayı hemen durdurun.</p>
        <p>– Revizyon kontrolünü açın.</p>
        <p>– SMLCD: Test (Test) → Acceptance test (Kabul testi) → Traction t19 (Çekiş t19) → OK? (Tamam?).</p>
        <p>– Kabin tampona/tamponlara temas edinceye ve bir acil durum durması oluşuncaya kadar DRH-D revizyon düğmesine basın.</p>
        <p>– DRH-D revizyon düğmesine tekrar basın. Testi tekrar yapın.</p>
        <p>– Enerji dağıtımı tamponlarıyla (yağ tamponları) asansör için: Revizyon düğmesi DRH-D'ye birkaç kez basılması gerekebilir ve SMLCD üzerindeki test menüsüne tekrar girilmesi gerekebilir. Sınırlı test hızı ve kısa test süresi yağ tamponlarını ilk test girişiminden sonra her zaman tamamen sıkıştırmaz.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Karşı ağırlığın yukarı hareketi durur.</p>
        <p>Başarısız:</p>
        <p>– Karşı ağırlığın yukarı hareketi durmaz.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Kabin ve kabin tamponu/tamponları üzerinde görünür hasar olmadığından emin olun.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Kabini revizyon kontrolüyle kapı bölgesine yukarıya hareket ettirin.</p>
        <p>– AC GSI 3 (ETSL) ile asansör için: Test fişi SCCAR.ETSL çıkarın.</p>
        <p>– Revizyon kontrolünü kapatın.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>3.3.4 Enerji dağılımı tamponları (yağ tamponları) için kabin, tampon testinden sonra hasarsız mı?  </h4>
      <div>{radio("3.3.4", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Enerji dağıtım tamponları (yağ tamponları) sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: %100 GQ</p>
        <p>Seyir hızı:</p>
        <p className={styles["circle"]}>VKN {"<"} 2,5 m/s için: VKN</p>
        <p className={styles["circle"]}>ETSL olmadan VKN 2,50 ... 4,00 m/s için: VKN</p>
        <p className={styles["circle"]}>ETSL ile VKN ≥ 2,50 m/s için:</p>
        <p>- VKN 2,50 ... 3,50 m/s: VPAT 2,50 m/s</p>
        <p>- VKN 4,00 m/s: VPAT 2,83 m/s</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>VKN veya VPAT (tamponlar için maksimum kabul edilebilir çarpma hızı) hızında tampona/tamponlara temas ettirildiğinde kabinde hasar oluşmaz.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.3.3.4</p>
        <p className={styles["arrow"]}>Bu el kitabına başvurun:</p>
        <p>– EJ 604722 Tamponlar için SAIS destek bilgisi.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Kuruluysa karşı ağırlık paraşütünü, paraşütün devreye giremeyeceği şekilde bloke edin. Şu belgelere başvurun:</p>
        <p className={styles["circle"]}>SA WCB 0X'ten (SA CSGB-0X) farklı paraşüt tipi için: J 41373569 CWT/kabin ile SAIS kabul testi talimatı - Paraşüt blokajı</p>
        <p>– Paraşüt tipi SA WCB 0X (SA CSGB-0x) için: J 59503719 MM WCB 60x SAIS kabul testi prosedürü.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %100 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>KNE ve monte edilmişse ETSL'yi devre dışı bırakın.</p>
        <p>– Kablolama şemasına başvurun.</p>
        <p>– Emniyet devresinde KNE kontağını devre dışı bırakmak için test fişi SCCAR.SISK kullanın.</p>
        <p>– AC GSI 3 (ETSL) olan asansör için: Emniyet devresinde ETSL kontağını devre dışı bırakmak için test fişi SCCAR.ETSL kullanın.</p>
        <p className={styles["arrow"]}>Kabini tampon test hızına erişecek kadar yükseğe konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance test (Kabul testi) → Car buffer test (Kabin tampon testi).</p>
        <p>– Test hızını m/s olarak SMLCD → OK? (Tamam?) kısmına girin.</p>
        <p className={styles["circle"]}>SMLCD 'Trip too short' (Seyir fazla kısa) mesajını gösterirse seyir mesafesi tampon test hızına ulaşmak için fazla kısadır.</p>
        <p className={styles["circle"]}>Kabini daha yüksek bir pozisyona yerleştirin. Testi tekrar başlatın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD üzerinde, T3A kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– KP kontağı aktive oldu ve bir acil durdurma tetikledi.</p>
        <p>– SMLCD şunu gösterir: 'Done' (Yapıldı).</p>
        <p>Başarısız:</p>
        <p>– SMLCD üzerinde, T3A açıktır (siyah zeminde beyaz karakterler) ve açık emniyet devresi olmadığını gösterir. Bu durum KP kontağının açılmadığı anlamına gelir.</p>
        <p>– KSS/KSS1 kontağı/kontakları olan asansör için: Acil bir durdurma gerçekleşir. Sadece KSS/KSS1 kontağı/kontakları açıktır.</p>
        <p>– SMLCD üzerinde, T2 kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin:</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
        <p className={styles["arrow"]}>Revizyon kontrolünü aktive edin. Kabini kapı bölgesine yukarı hareket ettirin.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Kabin ve kabin tamponu/tamponları üzerinde görünür hasar olmadığından emin olun.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Test fişi SCCAR.SISK çıkarın.</p>
        <p>– AC GSI 3 (ETSL) ile asansör için: Test fişi SCCAR.ETSL çıkarın.</p>
        <p>– Kuruluysa, karşı ağırlık paraşütünün engelini kaldırın.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

      

    <div className={styles["box"]}>
      <h4>7.6.1.b Asansör aşağı yönde istenmeden kabin hareketi için testi geçiyor mu </h4>
      <div>{radio("7.6.1.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>KG belgesi mevcut EU Tip İnceleme Sertifikasında belirtilen EN 81 standardından sapmaya izin VERMİYOR VE tekrar seviyeleme / kapı ön açılması sipariş edilmiş ve kurulmuştur</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: %100 GQ</p>
        <p>Seyir hızı: 0 {"<"} VSeyir {"<"} 0,50 m/s</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <div>{inputLine("durma_mesafesi", "Durma mesafesi SBZ_UCM_down")}
      <span className={styles["subtitle"]}>Belirtilen: ≤ 950 mm</span>
    </div>

    <img src={şekil62} className={styles["w-300"]} />

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Durma mesafesi istenmeyen kabin hareketinin saptandığı kattan ≤ 950 mm mesafede.</p>
      </div>

      <div className={styles["box"]}>
            <p>Test yöntemi m.7.6.1.b</p>
            <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
            <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
            <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
            <p>– Kabine %100 GQ yükleyin.</p>
            <p>– Yükü kabinde eşit dağıtın.</p>
            <p className={styles["arrow"]}>Kabini en alt katın bir kat üstünde konumlandırın.</p>
            <p className={styles["arrow"]}>Testi yapın.</p>
            <p>– Açık kat kapısı simülasyonu için SCMAIN kartında SCMAIN.KV konektörünü ayırın.</p>
            <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → UnintCarMovmnt (İstenmeyen Kabin Hareketi) → OK? (Tamam?) → Door State (Kapı Durumu) = Door Closed (Kapı Kapalı) → OK? (Tamam?) → UnintCarMovmnt Door Closed (İstenmeyen Kabin Hareketi Kapı Kapalı) → UnintCarMovmnt Running (İstenmeyen Kabin Hareketi Çalışıyor).</p>
            <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
            <p>Geçildi:</p>
            <p>– SMLCD kabinin hareket ettiği mesafeyi ve ‘UnintCarMovmnt’ (İstenmeyen Kabin Hareketi) ve ‘Done’ (Yapıldı) mesajlarını gösterir.</p>
            <p>– Durma mesafesi belirtildiği gibidir.</p>
            <p>Başarısız:</p>
            <p>– SMLCD ‘UnintCarMovmnt’ (İstenmeyen Kabin Hareketi) ve 'Failed' (Başarısız) mesajlarını gösterir.</p>
            <p>– Durma mesafesi belirtildiği gibi değildir.</p>
            <p className={styles["arrow"]}>SCMAIN kartında SCMAIN.KV konektörünü takın.</p>
            <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin.</p>
            <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
            <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
            <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
            <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
            <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
            <p>– KFM modunu kapatın.</p>
            <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>7.6.12.a Elektrikli dinamik frenleme işlevi mevcut mu ve test aşağı yönde doğru çalışıyor mu? </h4>
      <div>{radio("7.6.12.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Çin (CN) TSG T7007-2022 uyarınca</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Bu testi yapmadan önce, aşağıdaki testlerden birinin son 24 saat içinde başarıyla yapıldığından emin olun:</p>
        <p className={styles["circle"]}>Otomatik fren torku izleme (BTM)</p>
        <p className={styles["circle"]}>Otomatik statik tek fren testi (ASBT).</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: %100 GQ</p>
        <p>Seyir hızı: VTest</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Elektriksel dinamik frenleme işlevi kontrol yazılımında mevcuttur.</p>
        <p className={styles["circle"]}>Test doğru çalışıyor.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.12.a</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %100 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Kabini en alt katın bir kat üstünde konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → EDBTest → OK? (Tamam?) → Start test trip (Test seyri başlat) → OK? (Tamam?).</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD ‘Done’ (Yapıldı) ve ‘MaxSpd’ (Maks Hız) ..... m/s gösterir.</p>
        <p>– Seyir hızı ≤ 0,30 m/s.</p>
        <p>Başarısız:</p>
        <p>– SMLCD ‘Failed’ (Başarısız) ve 'Speed too high' (Hız çok yüksek) gösterir.</p>
        <p>– Seyir hızı {">"} 0,30 m/s.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

    <div className={styles["box"]}>
      <h4>8.1.2 Ana şebeke akımı ve voltajlar belirtilen limit içinde mi </h4>
      <div>{radio("8.1.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Üç fazın her birinin ana şebeke akımı ölçülmelidir.</p>
        <p className={styles["circle"]}>Ölçülen en yüksek değeri kaydedin.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: %100 GQ</p>
        <p>Seyir hızı: VKN</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <div>{inputLine("ana_salterin_belirtilen_anma_akimi_jh", "Ana şalterin belirtilen anma akımı JH (A)")}
      <p className={styles["subtitle"]}>Koruma işlevi olmayan ana şalter (JH) için bina tarafındaki SIH'nin anma akımını kullanın.</p>
    </div>
    <div>{inputLine("sabit_hiz_inn_sirasinda_max_mevcut_akim", "Sabit hız INN (A) sırasında maksimum mevcut akım")}</div>
    <div>{inputLine("belirtilen_ana_sebeke_voltajı", "Belirtilen ana şebeke voltajı [V]")}</div>


    <div>{inputLine("ana_sebeke_voltaji_l1_l2", "Ana şebeke voltajı (L1-L2) (V)")}</div>
    <div>{inputLine("ana_sebeke_voltaji_l2_l3", "Ana şebeke voltajı (L2-L3) (V)")}</div>
    <div>{inputLine("ana_sebeke_voltaji_l1_l3", "Ana şebeke voltajı (L1-L3) (V)")}</div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Koruma işlevli ana şalter (JH) için: Aşağıdaki üç fazın her biri için ölçülen ana şebeke akımı değeri ana şebeke şalteri (JH) anma akımı değerine eşit veya altındadır.</p>
        <p className={styles["circle"]}>Koruma işlevsiz ana şebeke şalteri (JH) için: Aşağıdaki üç fazın her biri için ölçülen ana şebeke akımı değeri SIH anma akımı değerine eşit veya altındadır.</p>
        <p className={styles["circle"]}>Üç fazın (L1-L2 / L2-L3 / L1-L3) her biri için ölçülen voltaj +/-%10 tolerans içindedir.</p>
      </div>

    <div className={styles["box"]}>
      <h4>7.1.8.a Kaymalı paraşüt kabini aşağı yönde %100 GQ / VCA1 ile durduruyor mu</h4>
      <div>{radio("7.1.8.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>EU Tip İnceleme Sertifikası EN 81 gerekliliklerinden bir sapmaya izin verir ve bu koşulların TÜMÜ karşılanır:</p>
        <p className={styles["circle"]}>GQ ≤ 1360 kg</p>
        <p className={styles["circle"]}>VKN ≤ 1,75 m/s</p>
        <p className={styles["circle"]}>HQ {">"} 3,50 m</p>
        <p className={styles["circle"]}>DR VAF monte edilmiştir</p>
        <p className={styles["circle"]}>SA GED 10 veya SA GED 20 monte edilmiştir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: %100 GQ</p>
        <p>Seyir hızı: VCA1</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
        <p>Makina freni durumu: Açık</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>


    <div>{selectField("olculen_gerçek_tetikleme_hizi", "Ölçülen gerçek tetikleme hızı (VCA1_SMLCD) (m/s)", 
        [ { _id: "1", name: "VKN 0,63: 0,73 ... 1,35"},
          { _id: "2", name: "VKN 1,00: 1,15 ... 1,75"},
          { _id: "3", name: "VKN 1,50: 1,72 ... 2,29"},
          { _id: "4", name: "VKN 1,60: 1,84 ... 2,40"},
          { _id: "5", name: "VKN 1,75: 2,01 ... 2,56"},
          { _id: "6", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
    </div>

    <div>{inputLine("smlcd_gosterilen_tetikleme_hizi", "SMLCD'de gösterilen tetikleme hızı (m/s)")}</div>
    <div>{inputLine("ortalama_fren_izi_degeri_slr", "Ortalama fren izi değeri SLR (mm)")}
      <p className={styles["subtitle"]}>Belirtilen: Aşağıdaki tabloya başvurun.</p>
    </div>

    <div className={styles["box"]}>
      <h4>Asansör sistemi</h4>
      <div>{radio("asansor_sistemi3", { variant: "circle", inputArray: 
        ["ES1",
         "ES5.0",
         "ES5"] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi panosu - ES1</p>
      <p>Ayrıntılar için bakınız J 41378670 SA GED Serisi %100 GQ Frenleme izi panosu.</p>
      <p>1) Minimum SLR değeri tanımlanamaz. SLR'nin maksimum değeri geçmediğinden emin olun.</p>
      <img src={tablo17} className={styles["w-350"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi tablosu - ES5.0</p>
      <p>Ayrıntılar için bakınız J 41378670 SA GED Serisi %100 GQ Frenleme izi panosu.</p>
      <img src={tablo18} className={styles["w-400"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA GED 10 / SA GED 20 frenleme izi tablosu - ES5</p>
      <p>Ayrıntılar için bakınız J 41378670 SA GED Serisi %100 GQ Frenleme izi panosu.</p>
      <img src={tablo19} className={styles["w-400"]} />
    </div>

    <div className={styles["box"]}>
      <h4>Paraşüt ayarı</h4>
      <div>{radio("parasut_ayari", { variant: "circle", inputArray: 
        ["Paraşüt ayarı iletildiği şekilde.",
         "Paraşüt ayarı sahada değiştirilmiştir. Her iki tip etiketinde 'Ayar sahada değiştirildi' kontrol kutusu işaretlenmiştir.",
         "Belirtilen gibi değil (bulguları kaydedin)."] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>Asansör sistemi</h4>
      <div>{radio("asansor_sistemi4", { variant: "circle", inputArray: 
        ["Evet",
         "Hayır",
        ] })}
        <p className={styles["subtitle"]}>Paraşütü serbest bırakmak için kabinden ağırlık kaldırmanız gerekiyorsa, HAYIR'ı seçin.</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Mekanik tetikleme hızı VCA1_SMLCD belirtilen aralık içindedir.</p>
        <p className={styles["circle"]}>Aşırı hız regülatörü hasarsızdır.</p>
        <p className={styles["circle"]}>Ölçülen frenleme izleri belirtilen aralık içindedir.</p>
        <p className={styles["circle"]}>Emniyet kontağı/kontakları doğru çalışıyor.</p>
        <p className={styles["circle"]}>Kabin paraşütü normal konumuna getiriliyor. Asansörün normal kullanımını olumsuz etkileyecek bir bozulma olmamıştır.</p>
        <p className={styles["circle"]}>Kabin paraşüt mühürlüdür.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.1.8.a</p>
        <p className={styles["arrow"]}>Bu el kitabına başvurun:</p>
        <p>– EJ 604724 Paraşütler için SAIS destek bilgisi.</p>

        <p className={styles["arrow"]}>Kuruluysa karşı ağırlık paraşütünü, paraşütün devreye giremeyeceği şekilde bloke edin. Şu belgelere başvurun:</p>
        <p className={styles["circle"]}>SA WCB 0X'ten (SA CSGB-0X) farklı paraşüt tipi için: J 41373569 CWT/kabin ile SAIS kabul testi talimatı - Paraşüt blokajı</p>
        <p>– Paraşüt tipi SA WCB 0X (SA CSGB-0x) için: J 59503719 MM WCB 60x SAIS kabul testi prosedürü.</p>
        <p className={styles["arrow"]}>Ayarlanabilir kılavuz ray tabanı olan asansörler için ayarlama vidası ile kılavuz ray arasındaki açıklığı kapatın.</p>

        <p className={styles["arrow"]}>Gerdirme cihazında:</p>
        <p>– Cıvatayı gevşetin.</p>
        <p>– Bir gerdirme ağırlığı bloğunu çıkarın (yaklaşık 0,5 FCU).</p>

        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>

        <p className={styles["arrow"]}>Yük ölçmeyi devre dışı bırakın.</p>
        <p>– SMLCD: Commands (Komutlar) → LM Disable (LM Devre Dışı) → Disable (Devre Dışı) → OK? (Tamam?).</p>
        <p>Not: Yük ölçümü iki saatten sonra otomatik olarak etkinleştirilecektir.</p>

        <p className={styles["arrow"]}>Emniyet kontaklarını devre dışı bırakmak için test fişlerini kullanın.</p>
        <p>– SCMAIN PCBA üzerinde KSS ve KSS1 kontaklarını devre dışı bırakmak için test fişleri SCMAIN.KSS ve SCMAIN.KSS1'i kullanın.</p>

        <p className={styles["arrow"]}>Kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %100 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>

        <p className={styles["arrow"]}>Kabin paraşütü ve aktivasyon mekanizmasının ayarlanmış olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → SafeGearCar → OK? (Tamam?) → 100GQ VCA1 → OK? (Tamam?) → Turn ON RH Panel (RH Panelini AÇIN).</p>
        <p>– Revizyon kontrolü üzerinde JRH'yi açın.</p>
        <p>– SMLCD: DRH-D Basın ve Basılı Tutun.</p>
        <p>– Revizyon kontrol üzerinde, revizyon düğmesi DRH-D'ye basın.</p>
        <p>– SMLCD: Start Trip Down (Aşağı Seyir Başlat) → OK? (Tamam?). Kabin hızlanmaya başlar.</p>
        <p>– Kabin VKN'ye ulaştığında (sesli sinyalle belirtilir) ve kabin bir kapı bölgesine yakın olduğunda DBV düğmesine basın.</p>
        <p>UYARI</p>
        <p>– Şüphe veya belirsizlik durumunda seyir sırasında kabini durdurmak için DRH-D kısmını serbest bırakın.</p>
        <p>– DBV'ye zamanında bastığınızdan emin olun.</p>
        <p>UYARI</p>
        <p>– Paraşüt devreye alındığında, revizyon düğmesi DRH-D'yi serbest bırakın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Paraşüt çalışır.</p>
        <p>– SMLCD ‘Done’ (Yapıldı) ve ‘MaxSpd’ (Maks Hız) ..... m/s mesajlarını gösterir.</p>
        <p>Başarısız:</p>
        <p>– Paraşüt, kabini durdurmaz.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin:</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
        <p className={styles["arrow"]}>Kabin pozisyonunu (duvarda veya kılavuz rayda) işaretleyin. Bu işlem daha sonra fren izlerini bulmaya yardımcı olur.</p>

        <p className={styles["arrow"]}>Paraşütü serbest bırakın.</p>
        <p>– SCMAIN PCBA üzerindeki KSS ve KSS1 kontaklarının halen köprülenmiş olduğundan emin olun.</p>
        <p>– Paraşütü revizyon kontrol (DRH-U) ile serbest bırakın.</p>
        <p>– Kabin revizyon kontrolü ile hareket ettirilemezse kabini hareket ettirmek için bir yüksek tork seyri kullanın:</p>
        <p className={styles["circle"]}>SMLCD: Commands (Komutlar) → Special trip (Özel seyir) → High Torque Trip (Yüksek Tork Seyri) → OK? (Tamam?).</p>
        <p className={styles["circle"]}>Paraşütü revizyon kontrol (DRH-U) ile serbest bırakın.</p>
        <p>Not: Revizyon kontrol üzerindeki DRH-U düğmesini bıraktığınızda yüksek tork seyir komutu otomatik olarak devre dışı bırakılır.</p>
        <p className={styles["circle"]}>SMLCD komutunu paraşüt serbest kalıncaya kadar birkaç kez tekrarlayın.</p>
        <p>– Yüksek torklu seyirle paraşütü serbest bırakmak mümkün değilse:</p>
        <p className={styles["circle"]}>Kabinden ağırlığı kaldırın.</p>
        <p className={styles["circle"]}>Paraşüt için serbest bırakma işlemini tekrar yapın.</p>
        <p>– SCMAIN PCBA'dan SCMAIN.KSS ve SCMAIN.KSS1 test fişlerini çıkarın.</p>
        <p>– SMLCD üzerinde T2'nin açık olduğundan emin olun (siyah zemin üzerine beyaz karakter). Bu emniyet devresinin kapalı olduğunu gösterir.</p>

        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Paraşüt kontağı KF/KF1'in devreye girip girmediğini kontrol edin.</p>
        <p>– Kabin ve kabin paraşütü üzerinde görünür hasar olmadığından emin olun.</p>

        <p className={styles["arrow"]}>Kabini revizyon kontrolüyle hareket ettirin.</p>
        <p>– Kabin çatısına girmeyin.</p>
        <p>– Revizyon kontrolüyle, kabin paraşütünün serbest olduğundan emin olmak için kabini yukarı (DRH-U) ve aşağı (DRH-D) yönde hareket ettirin.</p>

        <p className={styles["arrow"]}>Fren izlerini ölçün.</p>
        <p>– Kabin çatısına gidin.</p>
        <p>– Kılavuz raylar üzerindeki fren izlerini EJ 604724 içinde belirtildiği gibi ölçün ve kaydedin.</p>
        <p>– Fren izleri fazla uzun veya fazla kısaysa paraşüt ayarlarını EJ 604724 içinde belirtildiği gibi düzeltin.</p>

        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Kabin aşırı hız regülatörü (KBV) ve kabin paraşütü (KF/KF1) üzerindeki emniyet kontaklarını resetleyin.</p>
        <p>– KBV, KSS, KSS1 ve KF/KF1 kontaklarının doğru çalıştığından emin olun.</p>
        <p>– Ayarlanabilir kılavuz ray tabanı olan asansörler için ayarlama vidası ile kılavuz ray arasındaki açıklığı nominal değere ayarlayın.</p>
        <p>– Kuruluysa, karşı ağırlık paraşütünün engelini kaldırın.</p>
        <p>– Yük ölçmeyi aktive edin.</p>
        <p className={styles["circle"]}>SMLCD: Commands (Komutlar) → LM Disable (LM Devre Dışı) → Enable (Etkin) → OK (TAMAM)?.</p>
        <p>– Kılavuz raylardaki fren izlerini giderin.</p>

        <p className={styles["arrow"]}>Paraşüt üzerinde mühürleri kontrol edin.</p>
        <p>– Her paraşütün mührünün hasarsız olduğundan emin olun.</p>
        <p>– Gerekirse her paraşütü mühürleyin.</p>

        <p className={styles["arrow"]}>Gerdirme cihazında gerdirme ağırlığı bloğunu takın. Cıvatayı sıkın.</p>

        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Gerdirme ağırlığı bloğunun çıkarılması</p>
        <p>1 Gergi ağırlık bloğu</p>
        <img src={şekil63} className={styles["w-300"]} />
      </div>

      <div className={styles["box"]}>
        <p>SLR Frenleme işaretleri</p>
        <img src={şekil64} className={styles["w-300"]} />
      </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>12.3 Aşırı yük testleri (GQ {">"} %100)</h3>
      <hr />
    </div>


    <div className={styles["box"]}>
      <h4>5.3.6 Fren %125 yüklü kabini acil şartlarda aşağı yönde durduruyor mu  </h4>
      <div>{radio("5.3.6", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>KG belgesi mevcut EU Tip İnceleme Sertifikasında belirtilen EN 81 standardından sapmaya izin VERMEZ</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Her makinanın fren sistemi için belirli bir talimat el kitabı var. Belirli talimat el kitabı ve emniyet talimatlarını okuyun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: %125 GQ</p>
        <p>Seyir hızı: VKN</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Kabin durur.</p>
        <p className={styles["circle"]}>SMLCD 300 ... 9810 mm/s^2 aralığında olan ortalama bir fren yavaşlama AKN değeri gösterir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.5.3.6</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>

        <p className={styles["arrow"]}>Kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Kısa HQ nedeniyle testte başarısız olabilecek asansör için: VKN'yi azaltın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → Next smaller standard rated speed VKN m/s (Sonraki daha küçük standart anma hızı VKN m/s (minimum 0,63 m/s)).</p>
        <p className={styles["arrow"]}>Yük ölçmeyi devre dışı bırakın.</p>
        <p>– SMLCD: Commands (Komutlar) → LM Disable (LM Devre Dışı) → Disable (Devre Dışı) → OK? (Tamam?).</p>
        <p>Not: Yük ölçümü iki saatten sonra otomatik olarak etkinleştirilecektir.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %125 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → Brake Test (Fren Testi) t14 → OK? (Tamam?) → Brake Channel (Fren Kanalı) = Both Channels (Her İki Kanal) → OK? (Tamam?) → Floor (Kat) = ...... (enter a car call to the bottom floor) (en alt kata bir kabin çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) ...... → Car Call Side (Kabin Çağrı Tarafı) ...... OK? (Tamam?).</p>
        <p>– Kabin VKN’ye ulaştığında asansör otomatik acil durdurma yapar.</p>

        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin durur.</p>
        <p>– SMLCD, 300 ... 9810 mm/s^2 aralığında olan ortalama bir fren yavaşlama değeri gösterir.</p>
        <p>– SMLCD şunu gösterir: 'Done' (Yapıldı).</p>
        <p>Başarısız:</p>
        <p>– SMLCD, {"<"} 300 mm/s^2 veya {">"} 9810 mm/s^2 olan ortalama bir fren yavaşlaması gösterir.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>

        <p className={styles["arrow"]}>Yük ölçmeyi aktive edin.</p>
        <p>– SMLCD: Commands (Komutlar) → LM Disable (LM Devre Dışı) → Enable (Etkin) → OK? (Tamam?).</p>

        <p className={styles["arrow"]}>VKN kısa HQ nedeniyle düşürülmüşse: VKN değerini orijinal değerine ayarlayın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → VKN m/s.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>



    <div className={styles["box"]}>
      <h4>7.1.8 Kaymalı paraşüt, kabini aşağı yönde %125 GQ / VKN ile durduruyor mu </h4>
      <div>{radio("7.1.8", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>KG belgeniz mevcut EU Tip İnceleme Sertifikasında belirtilen EN 81 standardından sapmaya izin VERMİYORSA veya bu koşullardan BİRİ karşılanıyorsa:</p>
        <p className={styles["circle"]}>GQ {">"} 1360 kg</p>
        <p className={styles["circle"]}>VKN {">"} 1.75 m/s</p>
        <p className={styles["circle"]}>HQ ≤ 3.50 m</p>
        <p className={styles["circle"]}>DR VAF den başka bir tahrik dönüştürücü kurulmuş</p>
        <p className={styles["circle"]}>SA GED 10 veya SA GED 20 den başka bir paraşüt monte edilmiş.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: %125 GQ</p>
        <p>Seyir hızı: ≤ VKN</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
        <p>Makina freni durumu: Açık</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <div>{inputLine("ortalama_fren_izi_slr_sls", "Ortalama fren izi SLR/SLS (mm)")}</div>

    <div className={styles["box"]}>
      <h4>Asansör sistemi</h4>
      <div>{radio("asansor_sistemi5", { variant: "circle", inputArray: 
        ["ES1",
         "ES5.0",
         "ES5",
        ] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi panosu - ES1</p>
      <p>1) Minimum SLR değeri tanımlanamaz. SLR'nin maksimum değeri geçmediğinden emin olun.</p>
      <img src={tablo20} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi tablosu - ES5.0</p>
      <p>Ayrıntılar için bakınız J 59503469 SA GED Serisi %125 GQ Frenleme izi tablosu.</p>
      <img src={tablo21} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi panosu - ES5</p>
      <p>Ayrıntılar için bakınız J 59503469 SA GED Serisi %125 GQ Frenleme izi tablosu.</p>
      <img src={tablo22} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA SGM 01 frenleme izi panosu - ES5</p>
      <p>Ayrıntılar için bakınız J 59503495 SA SGM 01 125% GQ / VKN Frenleme izi tablosu.</p>
      <img src={tablo23} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA G 01 frenleme izi panosu - ES5</p>
      <p>Ayrıntılar için bakınız EJ 604724 paraşütler için SAIS destek bilgisi.</p>
      <img src={tablo24} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <h4>SA GED - Paraşüt ayarı</h4>
      <div>{radio("sa_ged_parasut_ayari", { variant: "circle", inputArray: 
        ["Paraşüt ayarı iletildiği şekilde.",
         "Paraşüt ayarı sahada değiştirilmiştir. Her iki tip etiketinde 'Ayar sahada değiştirildi' kontrol kutusu işaretlenmiştir.",
         "Belirtilen gibi değil (bulguları kaydedin).",
        ] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>Asansör sistemi</h4>
      <div>{radio("asansor_sistemi6", { variant: "circle", inputArray: 
        ["Evet",
         "Hayır",
        ] })}
        <p className={styles["subtitle"]}>Paraşütü serbest bırakmak için kabinden ağırlık kaldırmanız gerekiyorsa, HAYIR'ı seçin.</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Ölçülen frenleme izleri belirtilen aralık içindedir.</p>
        <p className={styles["circle"]}>Emniyet kontağı/kontakları doğru çalışıyor.</p>
        <p className={styles["circle"]}>Kabin paraşütü normal konumuna getiriliyor. Asansörün normal kullanımını olumsuz etkileyecek bir bozulma olmamıştır.</p>
        <p className={styles["circle"]}>Kabin paraşüt mühürlüdür.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.1.8.b</p>
        <p className={styles["arrow"]}>Bu el kitabına başvurun:</p>
        <p>– EJ 604724 Paraşütler için SAIS destek bilgisi.</p>
        <p className={styles["arrow"]}>Kuruluysa karşı ağırlık paraşütünü, paraşütün devreye giremeyeceği şekilde bloke edin. Şu belgelere başvurun:</p>
        <p className={styles["circle"]}>SA WCB 0X'ten (SA CSGB-0X) farklı paraşüt tipi için: J 41373569 CWT/kabin ile SAIS kabul testi talimatı - Paraşüt blokajı</p>
        <p>– Paraşüt tipi SA WCB 0X (SA CSGB-0x) için: J 59503719 MM WCB 60x SAIS kabul testi prosedürü.</p>
        <p className={styles["arrow"]}>Ayarlanabilir kılavuz ray tabanı olan asansörler için ayarlama vidası ile kılavuz ray arasındaki açıklığı kapatın.</p>
        <p className={styles["arrow"]}>Kabin paraşütü ve aktivasyon mekanizmasının ayarlanmış olduğundan emin olun.</p>
        <p className={styles["arrow"]}>İki ağırlık bloklu gerilim cihazı tipleri için: Gerilim cihazından iki ağırlık bloğundan birini çıkarın.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Yük ölçmeyi devre dışı bırakın.</p>
        <p>– SMLCD: Commands (Komutlar) → LM Disable (LM Devre Dışı) → Disable (Devre Dışı) → OK? (Tamam?).</p>
        <p>Not: Yük ölçümü iki saatten sonra otomatik olarak etkinleştirilecektir.</p>
        <p className={styles["arrow"]}>Emniyet kontaklarını devre dışı bırakmak için test fişlerini kullanın.</p>
        <p>– SCMAIN PCBA üzerinde KSS ve KSS1 kontaklarını devre dışı bırakmak için test fişleri SCMAIN.KSS ve SCMAIN.KSS1'i kullanın.</p>
        <p className={styles["arrow"]}>Karşı ağırlık paraşütlü asansör için: Elektrikli uzaktan kumandayla (ERC) monte edilmiş aşırı hız regülatörü için AS.CARBV test fişini BVSEL konektörüne yerleştirin. Bu işlem kabin aşırı hız regülatörünün elektrikli uzaktan kumanda ERC kısmını bağlar.</p>
        <p className={styles["arrow"]}>Kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %125 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>Kısa HQ nedeniyle testte başarısız olabilecek asansör için: VKN'yi azaltın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → Next smaller standard rated speed VKN m/s (Sonraki daha küçük standart anma hızı VKN m/s (minimum 0,63 m/s)).</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → SafetyGearCar → OK? (Tamam?) → 125GQ VKN → OK? (Tamam?) → Turn ON RH Panel (RH Panelini AÇIN).</p>
        <p>– Revizyon kontrolü üzerinde JRH'yi açın.</p>
        <p>– SMLCD: DRH-D Basın ve Basılı Tutun.</p>
        <p>– Revizyon kontrol üzerinde, revizyon düğmesi DRH-D'ye basın.</p>
        <p>– SMLCD: Start Trip Down (Aşağı Seyir Başlat) → OK? (Tamam?). Kabin hızlanmaya başlar.</p>
        <p>– Kabin VKN'ye ulaştığında (sesli sinyalle belirtilir) ve kabin bir kapı bölgesine yakın olduğunda DBV düğmesine basın.</p>
        <p>– MR asansör için: Elektrikli uzaktan kumanda (ERC) olmadan kurulan aşırı hız regülatörü için aşırı hız regülatörünü manuel olarak ≤ 3 saniye içinde geçirin.</p>
        <p>UYARI</p>
        <p>– Şüphe veya belirsizlik durumunda seyir sırasında kabini durdurmak için DRH-D kısmını serbest bırakın.</p>
        <p>– DBV'ye zamanında bastığınızdan emin olun.</p>
        <p>UYARI</p>
        <p>– Paraşüt devreye alındığında, revizyon düğmesi DRH-D'yi serbest bırakın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Paraşüt çalışır.</p>
        <p>– SMLCD ‘Done’ (Yapıldı) ve ‘MaxSpd’ (Maks Hız) ..... m/s mesajlarını gösterir.</p>
        <p>Başarısız:</p>
        <p>– Paraşüt, kabini durdurmaz.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin:</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>

        <p className={styles["arrow"]}>Kabin pozisyonunu (duvarda veya kılavuz rayda) işaretleyin. Bu işlem daha sonra fren izlerini bulmaya yardımcı olur.</p>
        <p className={styles["arrow"]}>Paraşütü serbest bırakın.</p>
        <p>– SCMAIN PCBA üzerindeki KSS ve KSS1 kontaklarının halen köprülenmiş olduğundan emin olun.</p>
        <p>– Paraşütü revizyon kontrol (DRH-U) ile serbest bırakın.</p>
        <p>– Kabin revizyon kontrolü ile hareket ettirilemezse kabini hareket ettirmek için bir yüksek tork seyri kullanın:</p>
        <p className={styles["circle"]}>SMLCD: Commands (Komutlar) → Special trip (Özel seyir) → High Torque Trip (Yüksek Tork Seyri) → OK? (Tamam?).</p>
        <p className={styles["circle"]}>Paraşütü revizyon kontrol (DRH-U) ile serbest bırakın.</p>
        <p>Not: Revizyon kontrol üzerindeki DRH-U düğmesini bıraktığınızda yüksek tork seyir komutu otomatik olarak devre dışı bırakılır.</p>
        <p className={styles["circle"]}>SMLCD komutunu paraşüt serbest kalıncaya kadar birkaç kez tekrarlayın.</p>
        <p>– Yüksek torklu seyirle paraşütü serbest bırakmak mümkün değilse:</p>
        <p className={styles["circle"]}>Kabinden ağırlığı kaldırın.</p>
        <p className={styles["circle"]}>Paraşüt için serbest bırakma işlemini tekrar yapın.</p>
        <p>– SCMAIN PCBA'dan SCMAIN.KSS ve SCMAIN.KSS1 test fişlerini çıkarın.</p>
        <p>– SMLCD üzerinde T2'nin açık olduğundan emin olun (siyah zemin üzerine beyaz karakter). Bu emniyet devresinin kapalı olduğunu gösterir.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Paraşüt kontağı KF/KF1'in devreye girip girmediğini kontrol edin.</p>
        <p>– Kabin ve kabin paraşütü üzerinde görünür hasar olmadığından emin olun.</p>
        <p className={styles["arrow"]}>Kabini revizyon kontrolüyle hareket ettirin.</p>
        <p>– Kabin çatısına girmeyin.</p>
        <p>– Revizyon kontrolüyle, kabin paraşütünün serbest olduğundan emin olmak için kabini yukarı (DRH-U) ve aşağı (DRH-D) yönde hareket ettirin.</p>
        <p className={styles["arrow"]}>Kabinden {">"} %25 GQ çıkarın.</p>
        <p className={styles["arrow"]}>Fren izlerini ölçün.</p>
        <p>– Kabin çatısına gidin.</p>
        <p>– Kılavuz raylar üzerindeki fren izlerini EJ 604724 içinde belirtildiği gibi ölçün ve kaydedin.</p>
        <p>– Fren izleri fazla uzun veya fazla kısaysa paraşüt ayarlarını EJ 604724 içinde belirtildiği gibi düzeltin.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Kabin aşırı hız regülatörü (KBV) ve kabin paraşütü (KF/KF1) üzerindeki emniyet kontaklarını resetleyin.</p>
        <p>– KBV, KSS, KSS1 ve KF/KF1 kontaklarının doğru çalıştığından emin olun.</p>
        <p>– Ayarlanabilir kılavuz ray tabanı olan asansörler için ayarlama vidası ile kılavuz ray arasındaki açıklığı nominal değere ayarlayın.</p>
        <p>– Kuruluysa, karşı ağırlık paraşütünün engelini kaldırın.</p>
        <p>– Kuruluysa test fişi AS.CARBV kısmını BVSEL kısmından çıkarın.</p>
        <p>– Yük ölçmeyi aktive edin.</p>
        <p className={styles["circle"]}>SMLCD: Commands (Komutlar) → LM Disable (LM Devre Dışı) → Enable (Etkin) → OK (TAMAM)?.</p>
        <p>– Kılavuz raylardaki fren izlerini giderin.</p>
        <p className={styles["arrow"]}>Paraşüt üzerinde mühürleri kontrol edin.</p>
        <p>– Her paraşütün mührünün hasarsız olduğundan emin olun.</p>
        <p>– Gerekirse her paraşütü mühürleyin.</p>
        <p className={styles["arrow"]}>VKN kısa HQ nedeniyle düşürülmüşse: VKN değerini orijinal değerine ayarlayın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → VKN m/s.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


      <div className={styles["box"]}>
        <p>Gerdirme ağırlığı bloğunun çıkarılması</p>
        <p>1 Gergi ağırlık bloğu</p>
        <img src={şekil65} className={styles["w-300"]} />
      </div>
      <div className={styles["box"]}>
        <p>SLR Frenleme işaretleri</p>
        <img src={şekil66} className={styles["w-300"]} />
      </div>
      

    <div className={styles["box"]}>
      <h4>4.1.10 Kabin aşırı yükü ilgili standarda göre izleniyor mu  </h4>
      <div>{radio("4.1.10", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>


    <div className={styles["box"]}>
        <p>Not</p>
        <p>Yük ölçme cihazının doğru şekilde devreye alındığından emin olun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Aşırı yük durumu şu şekilde saptanır:</p>
        <p>– GQ ≤ 750 kg: Fiili yük {">"} %100 GQ ... (%100 GQ + 75 kg)</p>
        <p>– GQ {">"} 750 kg: Fiili yük {">"} % 100 ... % 110 GQ.</p>
        <p className={styles["circle"]}>Kabin aşırı yükü seyri ve yeniden seviyelemeyi engeller.</p>
        <p className={styles["circle"]}>Görsel ve sesli aşırı yük göstergesi mevcuttur.</p>
        <p className={styles["circle"]}>Otomatik kapılar tümüyle açılır, manuel kapılar kilitlenmez.</p>
        <p className={styles["circle"]}>Kabin veya kat çağrısı girildiğinde kabin hareket etmez.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.4.1.10</p>
        <p className={styles["arrow"]}>Yük ölçüm cihazının doğru ayarlanmış ve sıkılmış olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Yük ölçüm cihazı henüz yükle kalibre edilmemişse devreye alma el kitabında belirtildiği gibi yük ölçüm cihazını kalibre edin.</p>
        <p className={styles["arrow"]}>Kabine yük yükleyin.</p>
        <p>– Kabine %100 GQ yükleyin.</p>
        <p>– Yükü kabinde eşit dağıtın.</p>
        <p className={styles["arrow"]}>Kabinde zil sesi duyuluncaya ve COP üzerindeki görünür aşırı yük sinyali (L-X) açılıncaya kadar ek yük ekleyin.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kapılar açık kalır.</p>
        <p>– Tekrar seviyeleme devre dışı kalır.</p>
        <p className={styles["arrow"]}>Bir kabin çağrısı veya kat çağrısı girin.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin hareket etmez.</p>
        <p>– SMLCD ‘L-X’ mesajını gösterir.</p>
      </div>


    <div className={styles["box"]}>
      <h4>8.3.2 En alt katta yük boşaltma sırasında kabinin seviyeleme doğruluğu ± 20 mm dahilinde mi  </h4>
      <div>{radio("8.3.2", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>KG belgesi mevcut EU Tip İnceleme Sertifikasında belirtilen EN 81 standardından sapmaya izin VERMEZ</p>
      </div>
      
      <div className={styles["box"]}>
        <p>Not</p>
        <p>Test yükünün boşaltılması sırasında kabin offset ve tekrar seviyelemesini izleyin.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: %100 GQ</p>
        <p>Kabin konumu: En alt kat zemini</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Asansör eğer boşaltma sırasında seviye farkı {">"} 20 mm ise kabini tekrar seviyeler.</p>
      </div>

      <div className={styles["box"]}>
        <p>ES5 için: Yük ölçüm sistemini (LMS) kontrol edin.</p>
        <p className={styles["arrow"]}>Kabinden yükü çıkarın.</p>
        <p className={styles["arrow"]}>SMLCD'de gösterilen yükün ≤ ± % 5 GQ olduğundan emin olun.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Rated Load (Anma Yükü).</p>
        <p className={styles["arrow"]}>SMLCD'de gösterilen yük {">"} %5 GQ ise, yük ölçüm sistemini (LMS) tekrar devreye alın.</p>
      </div>

    
    <div className={styles["box"]}>
      <h3 className={styles["title"]}>12.4 Sıfır yük testleri (%0 GQ)</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>5.3.7 Fren, boş kabini acil şartlarda yukarı yönde durduruyor mu  </h4>
      <div>{radio("5.3.7", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p>Her makinanın fren sistemi için belirli bir talimat el kitabı var. Belirli talimat el kitabı ve emniyet talimatlarını okuyun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: VKN</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Kabin yavaşlar ve durur.</p>
        <p className={styles["circle"]}>SMLCD, periyodik inceleme sırasında referans değer olarak kullanılan ortalama fren yavaşlama AKN değerini gösterir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.5.3.7</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en alt katta konumlandırın.</p>
        <p className={styles["arrow"]}>Kısa HQ nedeniyle testte başarısız olabilecek asansör için: VKN'yi azaltın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → Next smaller standard rated speed VKN m/s
        (Sonraki daha küçük standart anma hızı VKN m/s (minimum 0,63 m/s)).</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → Brake Test (Fren Testi) t14 → OK? (Tamam?) → Brake Channel (Fren Kanalı) = Both
        Channels (Her İki Kanal) → OK? (Tamam?) → Floor (Kat) = ..... (en üst kata bir kabin çağrısı girin) → Entry Side
        (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (Tamam?).</p>
        <p>– Kabin VKN’ye ulaştığında asansör otomatik acil durdurma yapar.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin yavaşlar ve durur.</p>
        <p>– SMLCD ortalama fren yavaşlaması AKN gösterir.</p>
        <p>– SMLCD şunu gösterir: 'Done' (Yapıldı).</p>
        <p>Başarısız:</p>
        <p>– Kabin durmaz.</p>
        <p>– SMLCD ‘Failed’ (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>VKN kısa HQ nedeniyle düşürülmüşse: VKN değerini orijinal değerine ayarlayın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → VKN m/s.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>7.6.1.a Asansör yukarı yönde istenmeyen kabin hareketi için testi geçiyor mu </h4>
      <div>{radio("7.6.1.a", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>


    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Tekrar seviyeleme / kapı ön açılması sipariş edilmiş ve kurulmuştur</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p className={styles["circle"]}>Tip İnceleme Sertifikası, testi boş kabinle sadece yukarı yönde yapmanın yeterli olduğunu belirtir.</p>
        <p className={styles["circle"]}>AC GSI 100 / AC GSI 101 olan asansör (UET olmadan) için, SAIS kontrolü gerekmez.</p>
      </div>
      
      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: 0 {"<"} VSeyir {"<"} 0,50 m/s </p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>


    <div>{inputLine("durma_mesafesi_zbz_ucm_up", "Durma mesafesi SBZ_UCM_up (mm) ")}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 950 mm</h5>
    </div>

    <img src={şekil67} className={styles["w-250"]} />

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Durma mesafesi istenmeyen kabin hareketinin saptandığı kattan ≤ 950 mm mesafede.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.1.a</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– Açık kat kapısı simülasyonu için SCMAIN kartında SCMAIN.KV konektörünü ayırın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → UnintCarMovmnt (İstenmeyen Kabin Hareketi) → OK? (Tamam?) → Door State (Kapı Durumu) = Door Closed (Kapı Kapalı) → OK? (Tamam?) → UnintCarMovmnt Door Closed (İstenmeyen Kabin Hareketi Kapı Kapalı) → UnintCarMovmnt Running (İstenmeyen Kabin Hareketi Çalışıyor).</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD kabinin hareket ettiği mesafeyi ve ‘UnintCarMovmnt’ (İstenmeyen Kabin Hareketi) ve ‘Done’ (Yapıldı) mesajlarını gösterir.</p>
        <p>– Durma mesafesi belirtildiği gibidir.</p>
        <p>Başarısız:</p>
        <p>– SMLCD ‘UnintCarMovmnt’ (İstenmeyen Kabin Hareketi) ve 'Failed' (Başarısız) mesajlarını gösterir.</p>
        <p>– Durma mesafesi belirtildiği gibi değildir.</p>
        <p className={styles["arrow"]}>SCMAIN kartında SCMAIN.KV konektörünü takın.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

    <div className={styles["box"]}>
      <h4>7.6.1.c Asansör test hızıyla yukarı yönde istenmeyen kabin hareketine yönelik testi geçiyor mu </h4>
      <div>{radio("7.6.1.c", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
      <p>[#2.2]</p>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>TSG T7001:2009+A2:2017 uyarınca Çin (SCN)</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Ayrıntı için bkz.:</p>
        <p className={styles["circle"]}>J 45345706 UCM Saha testi gereklilikleri ve yöntemleri – CO SC 1</p>
        <p className={styles["circle"]}>EC 45346258 CTE Sertifikası, UCMP için.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: 0,35 m/s</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>
      

    <div>{inputLine("frenleme_mesafesi", "Frenleme mesafesi (mm) ")}
      <h5 className={styles["subtitle"]}>Belirtilen: Aşağıdaki tabloya başvurun.</h5>
    </div>

    <div className={styles["box"]}>
      <p>A Makina tipi</p>
      <p>B Makina fren tipi</p>
      <p>C Maksimum frenleme mesafesi</p>
      <p>1) 2 set</p>
      <p>2) 3 set</p>
      <p>3) Bekleniyor</p>
      <img src={tablo25} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Frenleme mesafesi belirtildiği gibidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.1.c</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın iki kat altında konumlandırın.</p>
        <p>– İki katlı asansörler için: Boş kabini en alt katta konumlandırın.</p>
        <p className={styles["arrow"]}>VKN azaltın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → 0,35 m/s.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Test → Acceptance test (Kabul testi) → UnintMovBrake.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin yukarı yönde hareket eder.</p>
        <p>– Kabin sonraki kapı bölgesine ulaştığında durur.</p>
        <p>– LUET LED'i yanar.</p>
        <p>– SMLCD, kat kapısı eşiği ile kabin kapısı eşiği arasındaki mesafeyi gösterir (değer referans olarak kullanılabilir).</p>
        <p>Başarısız:</p>
        <p>– Kabin sonraki kapı bölgesine ulaştığında durmaz.</p>
        <p className={styles["arrow"]}>Ana şalter JH'yi kapatın.</p>
        <p className={styles["arrow"]}>Kabinin durduğu kata gidin. Kapıyı açın.</p>
        <p className={styles["arrow"]}>Kat kapısı eşiği ile kabin kapısı eşiği arasındaki X mesafesini ölçün.</p>
        <p className={styles["arrow"]}>Y frenleme mesafesini hesaplayın.</p>
        <p>– Kabin kapısı eşiği kat kapısı eşiği üzerindeyse: Y = 120 + X (mm).</p>
        <p>– Kabin kapısı eşiği kat kapısı eşiği altındaysa: Y = 120 - X (mm).</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Frenleme mesafesi belirtildiği gibidir.</p>
        <p>Başarısız:</p>
        <p>– Frenleme mesafesi belirtildiği gibi değildir.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Ana şalter JH'yi açın.</p>
        <p>– VKN'yi orijinal değerine ayarlayın.</p>
        <p className={styles["circle"]}>SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → VKN m/s.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– SMLCD: Commands (Komutlar) → Clr Blocking (Blokajı Gider) → OK? (Tamam?).</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>



    <div className={styles["box"]}>
      <h4>3.3.7 Karşı ağırlık tampon(lar) üzerinde durduğunda kabin yükseltilemez mi </h4>
      <div>{radio("3.3.7", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p>Test ayrıca enerji birikimi tamponları için EN 81-20:2014/EN 81-20:2020 5.8.2.1 ve 6.3.7.a gerekliliklerini karşılar.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: VKR (revizyon hızı)</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Karşı ağırlık tampon(lar) üzerinde durduğunda kabin yükseltilemez.</p>
        <p className={styles["circle"]}>Asansör çalıştırmayı olumsuz etkileyebilecek herhangi bir hasar oluşmamıştır.</p>
        <p className={styles["circle"]}>Karşı ağırlık ve karşı ağırlık tamponu/tamponları hasarsız.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.3.3.7</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>AC GSI 3 (ETSL) ile asansör için: ETSL devre dışı bırakın.</p>
        <p>– Kablolama şemasına başvurun.</p>
        <p>– Emniyet devresinde ETSL kontağını devre dışı bırakmak için test fişi SCCAR.ETSL kullanın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>UYARI</p>
        <p>Karşı ağırlık tampona/tamponlara temas ederse ve kabinin yukarı hareketi durmazsa, revizyon düğmesi DRH-U'ya basmayı hemen durdurun.</p>
        <p>– Revizyon kontrolünü açın.</p>
        <p>– SMLCD: Test (Test) → Acceptance test (Kabul testi) → Traction t19 (Çekiş t19) → OK? (Tamam?).</p>
        <p>– Karşı ağırlık tampona/tamponlara temas edinceye ve bir acil durma durumu oluşuncaya kadar revizyon düğmesi DRH-U'ya basın.</p>
        <p>– DRH-U revizyon düğmesine tekrar basın. Testi tekrar yapın.</p>
        <p>– Enerji dağıtım tamponları (yağ tamponları) olan asansör için: Revizyon düğmesi DRH-U'ya birkaç kez basılması gerekebilir ve SMLCD üzerindeki test menüsüne tekrar girilmesi gerekebilir. Sınırlı test hızı ve kısa test süresi yağ tamponlarını ilk test girişiminden sonra her zaman tamamen sıkıştırmaz.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabinin yukarı hareketi durur.</p>
        <p>Başarısız:</p>
        <p>– Kabinin yukarı hareketi durmaz.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Karşı ağırlık ve karşı ağırlık tamponu/tamponları üzerinde görünür hasar olmadığından emin olun.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Kabini revizyon kontrolüyle kapı bölgesine aşağıya hareket ettirin.</p>
        <p>– AC GSI 3 (ETSL) ile asansör için: Test fişi SCCAR.ETSL çıkarın.</p>
        <p>– Revizyon kontrolünü kapatın.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>3.3.9 Enerji dağılımı tamponları (yağ tamponları) için karşı ağırlık, tampon testinden sonra hasarsız mı?  </h4>
      <div>{radio("3.3.9", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>


    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Enerji dağıtım tamponları (yağ tamponları) sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı:</p>
        <p className={styles["circle"]}>VKN {"<"} 2,5 m/s için: VKN</p>
        <p className={styles["circle"]}>ETSL olmadan VKN 2,50 ... 4,00 m/s için: VKN</p>
        <p className={styles["circle"]}>ETSL ile VKN ≥ 2,50 m/s için:</p>
        <p>- VKN 2,50 ... 3,50 m/s: VPAT 2,50 m/s</p>
        <p>- VKN 4,00 m/s: VPAT 2,83 m/s</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>VKN veya VPAT (tamponlar için maksimum kabul edilebilir çarpma hızı) hızında tampona/tamponlara temas ettirildiğinde karşı ağırlıkta hasar oluşmaz</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.3.3.9</p>
        <p className={styles["arrow"]}>Bu el kitabına başvurun:</p>
        <p>– EJ 604722 Tamponlar için SAIS Destek Bilgisi.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Kabin paraşütünü, paraşütün devreye giremeyeceği şekilde J 41373569'da belirtildiği gibi bloke edin.</p>
        <p className={styles["arrow"]}>KNE ve monte edilmişse ETSL'yi devre dışı bırakın.</p>
        <p>– Kablolama şemasına başvurun.</p>
        <p>– Emniyet devresinde KNE kontağını devre dışı bırakmak için test fişi SCCAR.SISK kullanın.</p>
        <p>– AC GSI 3 (ETSL) olan asansör için: Emniyet devresinde ETSL kontağını devre dışı bırakmak için test fişi SCCAR.ETSL kullanın.</p>
        <p className={styles["arrow"]}>Boş kabini tampon test hızına erişecek kadar alçak konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance test (Kabul testi) → CwgtBufferTest (Karşı Ağırlık Tampon Testi).</p>
        <p>– Test hızını m/s olarak SMLCD → OK? (Tamam?) kısmına girin.</p>
        <p className={styles["circle"]}>SMLCD 'Trip too short' (Seyir fazla kısa) mesajını gösterirse seyir mesafesi tampon test hızına ulaşmak için fazla kısadır.</p>
        <p className={styles["circle"]}>Kabini daha alçak bir pozisyona yerleştirin. Testi tekrar başlatın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD üzerinde, T3A kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– KPG kontağı aktive oldu ve bir acil durdurma tetikledi.</p>
        <p>– SMLCD şunu gösterir: 'Done' (Yapıldı).</p>
        <p>Başarısız:</p>
        <p>– SMLCD üzerinde, T3A açıktır (siyah zeminde beyaz karakterler) ve açık emniyet devresi olmadığını gösterir. Bu durum KPG kontağının açılmadığı anlamına gelir.</p>
        <p>– KSS/KSS1 kontağı/kontakları olan asansör için: Acil bir durdurma gerçekleşir. Sadece KSS/KSS1 kontağı/kontakları açıktır.</p>
        <p>– SMLCD üzerinde, T2 kapalıdır (beyaz zeminde siyah karakterler) ve açık bir emniyet devresini gösterir.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
        <p className={styles["arrow"]}>Revizyon kontrolünü aktive edin. Kabini kapı bölgesine aşağıya hareket ettirin.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Karşı ağırlık ve karşı ağırlık tamponu/tamponları üzerinde görünür hasar olmadığından emin olun.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Test fişi SCCAR.SISK çıkarın.</p>
        <p>– AC GSI 3 (ETSL) ile asansör için: Test fişi SCCAR.ETSL çıkarın.</p>
        <p>– Kabin paraşütünün engelini kaldırın.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>7.3.7 Ani kavramalı paraşüt karşı ağırlığı aşağı yönde durduruyor mu </h4>
      <div>{radio("7.3.7", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Ani kavramalı karşı ağırlık paraşütü sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: VKI (inceleme hızı)</p>
        <p>Kabin seyir yönü: YUKARI</p>
        <p>Makina freni durumu: Açık</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Paraşüt doğru geçiyor ve karşı ağırlık duruyor.</p>
        <p className={styles["circle"]}>Emniyet kontağı KFG monte edilmişse doğru çalışıyor.</p>
        <p className={styles["circle"]}>Karşı ağırlık paraşütü normal konumuna getiriliyor. Asansörün normal kullanımını olumsuz etkileyecek bir bozulma olmamıştır.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.3.7</p>
        <p>UYARI</p>
        <p>Kabin çatısında ezilme veya mahsur kalma riski. Beklenmeyen kabin hareketi ciddi yaralanmaya veya ölüme yol açabilir. Ellerinizi sıkıştırmayın.</p>
        <p className={styles["arrow"]}>Bu testi yapmak için iki kişi gereklidir.</p>
        <p className={styles["arrow"]}>Sesli iletişimin garantili olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Aşağıdakilerden emin olun:</p>
        <p>– Kabin çatısı üzerinde acil alarm cihazı doğru çalışır.</p>
        <p>– Acil servisle iletişim veya kuyu dışından üçüncü bir kişinin yardımı sağlanmış.</p>
        <p className={styles["arrow"]}>Karşı ağırlık paraşütlerinin ayarlandığından emin olun. SAIS kontrolü 7.3.4'e başvurun.</p>
        <p className={styles["arrow"]}>Kabin çatısına girmek için ‘Kabin Çatısına Girme' işlemini kullanın.</p>
        <p className={styles["arrow"]}>Karşı ağırlık paraşütüne kolay erişim için inceleme seyri kullanıp kabini konumlandırın.</p>
        <p className={styles["arrow"]}>Paraşüt kontağı KFG'yi devre dışı bırakın.</p>
        <p>– Her iki vidayı gevşetin ve vidalardan birini paraşüt kontağı KFG'den çıkarın.</p>
        <p>– Paraşüt kontağı KFG'yi kol tarafından aktive edilmeyecek şekilde uzağa çevirin.</p>
        <p className={styles["arrow"]}>Karşı ağırlık paraşütlerini geçirin.</p>
        <p>– Kırmızı kayış şeridini kolu hareket ettirmek ve karşı ağırlık paraşütünü geçirmek için çekin.</p>
        <p>– Kırmızı kayış şeridini çekerken inceleme panelinde DREC-U düğmesine basın.</p>
        <p>– Kızağın inmesi durur durmaz, DREC-U düğmesini ve kırmızı kayış şeridini bırakın.</p>
        <p>– STOP düğmesine basın.</p>
        <p>– Sol ve sağ karşı ağırlık paraşütünün aynı anda geçtiğinden emin olun.</p>
        <p>– Kolun en alt konumuna inmiş olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Karşı ağırlık paraşütlerini serbest bırakın.</p>
        <p>– STOP düğmesini serbest bırakın.</p>
        <p>– İnceleme panelinde karşı ağırlık paraşütlerini serbest bırakmak için DREC-D düğmesine basın.</p>
        <p className={styles["arrow"]}>Her iki kılavuz raydaki frenleme işaretlerinin benzer yükseklik ve uzunlukta olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Asansör çalışmasını olumsuz etkileyebilecek herhangi bir görünür hasar oluşmadığından emin olun.</p>
        <p className={styles["arrow"]}>Paraşüt kontağı KFG'yi normal pozisyonuna geri çevirin.</p>
        <p className={styles["arrow"]}>Paraşüt kontağı KFG'yi kontrol edin.</p>
        <p>– Kırmızı kayış şeridini çekin.</p>
        <p>– Kolun paraşüt kontağı KFG'yi doğru şekilde çalıştırdığından emin olun.</p>
        <p>– Paraşüt kontağı KFG'nin emniyet devresini açtığından emin olun.</p>
        <p>– Kırmızı kayış şeridi ve kolu serbest bırakın.</p>
        <p>– Paraşüt kontağı KFG'yi resetleyin.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>7.3.8 Kaymalı paraşüt karşı ağırlığı aşağı yönde durduruyor mu </h4>
      <div>{radio("7.3.8", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Kaymalı karşı ağırlık paraşütü sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: VKN</p>
        <p>Kabin seyir yönü: YUKARI</p>
        <p>Makina freni durumu: Açık</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

      <div>{inputLine("ortalama_fren_izi_slr_sls2", "Ortalama fren izi SLR/SLS (mm) ")}
        <h5 className={styles["subtitle"]}>Her paraşüt geçişini kumanda panosunun içine yapıştırılmış paraşüt geçişi etiketine kaydedin. Geçiş etiketi için J 59502634 Talimatı - Geçiş etiketi için SA WSB 01/02/05 / J 59503369 Talimatı - SA WCB 0X uyarınca etiketi doldurun.</h5>
      </div>


      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Fren izleri EJ 604724 içindeki fren izi panosunda belirtildiği gibidir.</p>
        <p className={styles["circle"]}>Emniyet kontağı/kontakları doğru çalışıyor.</p>
        <p className={styles["circle"]}>Karşı ağırlık paraşütü normal konumuna getiriliyor. Asansörün normal kullanımını olumsuz etkileyecek bir bozulma olmamıştır.</p>
        <p className={styles["circle"]}>Kabin paraşüt mühürlüdür.</p>
      </div>

      
      <div className={styles["box"]}>
        <p>Test yöntemi m.7.3.8</p>
        <p className={styles["arrow"]}>Şu el kitaplarına başvurun:</p>
        <p>– EJ 604724 Paraşütler için SAIS destek bilgisi</p>
        <p>– J 59502634 Geçiş etiketi talimatı - SA WSB 01/02/05</p>
        <p>– J 59503369 Geçiş etiketi talimatı - SA WCB 0X.</p>
        <p className={styles["arrow"]}>Kabin paraşütünü, kabin paraşütünün devreye giremeyeceği şekilde J 41373569'da belirtildiği gibi bloke edin.</p>
        <p className={styles["arrow"]}>Ayarlanabilir kılavuz ray tabanı olan asansörler için ayarlama vidası ile kılavuz ray arasındaki açıklığı kapatın.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Yük ölçmeyi devre dışı bırakın.</p>
        <p>– SMLCD: Commands (Komutlar) → LM Disable (LM Devre Dışı) → Disable (Devre Dışı) → OK? (Tamam?).</p>
        <p>Not: Yük ölçümü iki saatten sonra otomatik olarak etkinleştirilecektir.</p>
        <p className={styles["arrow"]}>Boş kabini en alt katta konumlandırın.</p>
        <p className={styles["arrow"]}>SCMAIN PCBA üzerinde KSS ve KSS1 kontaklarını devre dışı bırakmak için test fişleri SCMAIN.KSS ve SCMAIN.KSS1'i kullanın.</p>
        <p className={styles["arrow"]}>Elektrikli uzaktan kumandayla (ERC) monte edilmiş aşırı hız regülatörü için AS.CWTBV test fişini BVSEL konektörüne yerleştirin. Bu işlem karşı ağırlık aşırı hız regülatörünün elektrikli uzaktan kumanda ERC kısmını bağlar.</p>
        <p className={styles["arrow"]}>Kısa HQ nedeniyle testte başarısız olabilecek asansör için: VKN'yi azaltın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → Next smaller standard rated speed VKN m/s (Sonraki daha küçük standart anma hızı VKN m/s (minimum 0,63 m/s)).</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → SafetyGearCWT → OK? (Tamam?) → Turn ON RH Panel (RH Panelini AÇIN).</p>
        <p>– Revizyon kontrolü üzerinde JRH'yi açın.</p>
        <p>– SMLCD: DRH-U Basın ve Basılı Tutun.</p>
        <p>– Revizyon kontrolü üzerinde, revizyon düğmesi DRH-U'ya basın.</p>
        <p>– SMLCD: Start Trip Up (Yukarı Seyir Başlat) → OK? (Tamam?).</p>
        <p>– Kabin sesli bir sinyalle belirtildiği şekilde VKN'ye ulaştığında DBV düğmesine basın.</p>
        <p>– MR asansör için: Elektrikli uzaktan kumanda (ERC) olmadan kurulu aşırı hız regülatörü için aşırı hız regülatörünü kabin VKN'ye ulaştığında ≤ 3 saniye içinde manuel olarak geçirin.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Paraşüt çalışır.</p>
        <p>– SMLCD ‘Done’ (Yapıldı) ve ‘MaxSpd’ (Maks Hız) ..... m/s mesajlarını gösterir.</p>
        <p>Başarısız:</p>
        <p>– Paraşüt, karşı ağırlığı durdurmaz.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
        <p className={styles["arrow"]}>Karşı ağırlık pozisyonunu (duvarda veya kılavuz rayda) işaretleyin. Bu işlem daha sonra fren izlerini bulmaya yardımcı olur.</p>
        <p className={styles["arrow"]}>Paraşütü serbest bırakın.</p>
        <p>– SCMAIN PCBA üzerindeki KSS ve KSS1 kontaklarının halen köprülenmiş olduğundan emin olun.</p>
        <p>– Paraşütü revizyon kontrol (DRH-D) ile serbest bırakın.</p>
        <p>– Kabin revizyon kontrolü ile hareket ettirilemezse kabini hareket ettirmek için bir yüksek tork seyri kullanın:</p>
        <p className={styles["circle"]}>SMLCD: Commands (Komutlar) → Special trip (Özel seyir) → High Torque Trip (Yüksek Tork Seyri) → OK? (Tamam?).</p>
        <p className={styles["circle"]}>Paraşütü revizyon kontrol (DRH-D) ile serbest bırakın.</p>
        <p>Not: Revizyon kontrol üzerindeki DRH-D düğmesini bıraktığınızda yüksek tork seyir komutu otomatik olarak devre dışı bırakılır.</p>
        <p className={styles["circle"]}>SMLCD komutunu paraşüt serbest kalıncaya kadar tekrarlayın.</p>
        <p>– SCMAIN PCBA'dan SCMAIN.KSS ve SCMAIN.KSS1 test fişlerini çıkarın.</p>
        <p>– SMLCD üzerinde T2'nin açık olduğundan emin olun (siyah zemin üzerine beyaz karakter). Bu emniyet devresinin kapalı olduğunu gösterir.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Karşı ağırlık ve karşı ağırlık paraşütü üzerinde görünür hasar olmadığından emin olun.</p>
        <p className={styles["arrow"]}>Kabini revizyon kontrolüyle hareket ettirin.</p>
        <p>– Kabin çatısına girmeyin.</p>
        <p>– Revizyon kontrolüyle, karşı ağırlık paraşütünün serbest olduğundan emin olmak için kabini aşağı (DRH-D) ve yukarı (DRH-U) yönde hareket ettirin.</p>
        <p className={styles["arrow"]}>Fren izlerini ölçün.</p>
        <p>– Kabin çatısına gidin.</p>
        <p>– Kılavuz raylar üzerindeki fren izlerini EJ 604724 ve J 59502634 içinde belirtildiği gibi ölçün ve kaydedin.</p>
        <p>– Fren izleri fazla uzun veya fazla kısaysa paraşüt ayarlarını EJ 604724 içinde belirtildiği gibi düzeltin.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Karşı ağırlık aşırı hız regülatöründe (KBVG) emniyet kontaklarını resetleyin.</p>
        <p>– KBVG, KSS ve KSS1 kontaklarının doğru çalıştığından emin olun.</p>
        <p>– Ayarlanabilir kılavuz ray tabanı olan asansörler için ayarlama vidası ile kılavuz ray arasındaki açıklığı nominal değere ayarlayın.</p>
        <p>– Kabin paraşütünün engelini kaldırın.</p>
        <p>– Kuruluysa test fişi AS.CWTBV kısmını BVSEL kısmından çıkarın.</p>
        <p>– Yük ölçmeyi aktive edin.</p>
        <p className={styles["circle"]}>SMLCD: Commands (Komutlar) → LM Disable (LM Devre Dışı) → Enable (Etkin) → OK (TAMAM)?.</p>
        <p>– Kılavuz raylardaki fren izlerini giderin.</p>
        <p className={styles["arrow"]}>Paraşüt üzerinde mühürleri kontrol edin.</p>
        <p>– Her paraşütün mührünün hasarsız olduğundan emin olun.</p>
        <p>– Gerekirse her paraşütü mühürleyin.</p>
        <p className={styles["arrow"]}>VKN kısa HQ nedeniyle düşürülmüşse: VKN değerini orijinal değerine ayarlayın.</p>
        <p>– SMLCD: Parameter (Parametre) → Drive Settings (Tahrik Ayarları) → Nominal Speed (Nominal Hız) → VKN m/s.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>
    

    <div className={styles["box"]}>
      <h4>9.4.1 Motor çalışma süresi sınırlayıcı doğru çalışıyor mu   </h4>
      <div>{radio("9.4.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: VTest</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Kabin test modunda durur.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.9.4.1</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → TripTime (Seyir Süresi) t37 = 20 (s) (enter 3 ... 5 sec) (3 ... 5 sn girin) → OK? (Tamam?) → Floor (Kat) = .... (enter a car call to the bottom floor) (en alt kata bir kabin çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (TAMAM?) →.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin durur.</p>
        <p>– SMLCD şunu gösterir: 'Done' (Yapıldı).</p>
        <p>Başarısız:</p>
        <p>– Kabin durmadan önce seyir süresi fazla uzun.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
        <p className={styles["arrow"]}>Seyir süresini orijinal ayarına ayarlayın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → TripTime (Seyir Süresi) t37 = 20 (s).</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>3.1.1 Elektriksel yavaşlama izleme cihazı her iki yönde doğru çalışıyor mu </h4>
      <div>{radio("3.1.1", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>VKN {">"} 2,5 m/s ve elektriksel yavaşlama izleme cihazı ve azaltılmış tampon hareketi</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: VKN</p>
        <p>Kabin seyir yönü: AŞAĞI/YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Elektriksel yavaşlama izleme cihazı AC GSI 3 kuyu uçlarında hız fazla yüksek olduğunda acil bir durdurma tetikliyor.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.3.1.1</p>
        <p className={styles["arrow"]}>Doğru kuyu bilgi sisteminin (ETSL işleviyle AC GSI 3) kurulu olduğundan emin olun.</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini VKN değerine ulaşacak kadar yüksek konumlandırın.</p>
        <p className={styles["arrow"]}>Testi aşağı yönde yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → DownDirETSL (Aşağı Yönde ETSL) → Test Speed (Test Hızı) = .... (adjust the test speed to VKN) (test hızını VKN'ye ayarlayın) → OK? (Tamam?) →.</p>
        <p>Not: SMLCD 'Trip too short' (Seyir fazla kısa) mesajını gösterirse seyir mesafesi VKN'ye ulaşmak için çok kısadır. Kabini daha yüksek bir pozisyona yerleştirin. Sonra testi tekrar yapın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Emniyet devresi T3B kabin en alt kata varmadan önce açıldığı için ETSL acil bir durdurma tetikler. Hata ‘ER0132’ hatası kaydedilir.</p>
        <p>– SMLCD ‘Done’ (Yapıldı) mesajını gösterir.</p>
        <p>Başarısız:</p>
        <p>– KNE kontağı açıldığ için acil bir durdurma gerçekleşir. SMLCD ‘Safety circuit open’ (Emniyet devresi açık) mesajını gösterir.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>AC GSI 3 sistemi eski haline gelinceye kadar 10 saniye bekleyin.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
        <p className={styles["arrow"]}>Revizyon kontrolünü aktive edin. Kabini kapı bölgesine geri hareket ettirin.</p>
        <p className={styles["arrow"]}>Boş kabini VKN değerine ulaşacak kadar alt katlarda konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yukarı yönde yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → UpDirETSL (Yukarı Yönde ETSL) → Test Speed (Test Hızı) = .... (adjust the test speed to VKN) (test hızını VKN'ye ayarlayın) → OK? (Tamam?) →.</p>
        <p>Not: SMLCD 'Trip too short' (Seyir fazla kısa) mesajını gösterirse seyir mesafesi VKN'ye ulaşmak için çok kısadır. Kabini daha alçak bir pozisyona yerleştirin. Sonra testi tekrar yapın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Emniyet devresi T3B kabin en üst kata varmadan önce açıldığı için ETSL acil bir durdurma tetikler. Hata ‘ER0132’ hatası kaydedilir.</p>
        <p>– SMLCD ‘Done’ (Yapıldı) mesajını gösterir.</p>
        <p>Başarısız:</p>
        <p>– KNE kontağı açıldığ için acil bir durdurma gerçekleşir. SMLCD ‘Safety circuit open’ (Emniyet devresi açık) mesajını gösterir.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>AC GSI 3 sistemi eski haline gelinceye kadar 10 saniye bekleyin.</p>
        <p className={styles["arrow"]}>Kontrol sisteminin hatasını resetleyin.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi açın.</p>
        <p>– Acil durum durdurma şalteri JHM'ye basın.</p>
        <p>– Acil durum durdurma şalteri JHM'yi serbest bırakın.</p>
        <p>– Revizyon kontrolü JEM/JRH'yi kapatın.</p>
        <p className={styles["arrow"]}>Revizyon kontrolünü aktive edin. Kabini kapı bölgesine geri hareket ettirin.</p>
        <p className={styles["arrow"]}>Bir görsel inceleme yapın.</p>
        <p>– Kabin, kabin tamponu/tamponları, karşı ağırlık ve karşı ağırlık tamponu/tamponları üzerinde görünür hasar olmadığından emin olun.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>10.4.9 Tek kontaktör çözümü elektriksel izlemesi doğru çalışıyor mu  </h4>
      <div>{radio("10.4.9", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Frekans dönüştürücü DR VAB xx veya DR VAP xx sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: VTest</p>
        <p>Kabin seyir yönü: AŞAĞI</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.10.4.9</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katta konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → EN81 Test t6 → OK? (Tamam?) → Floor (Kat) = .... (en üst katın bir kat altına bir kat çağrısı girin) → Entry Side (Giriş Tarafı) = Side (Taraf) .... → Car Call Side (Kabin Çağrı Tarafı) .... OK? (TAMAM?) →.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin gereken kata varır.</p>
        <p>– Kabin kata geldiğinde:</p>
        <p className={styles["circle"]}>SMLCD ‘Done’ (Yapıldı) mesajını gösterir.</p>
        <p className={styles["circle"]}>SLMCD menüsünde “Status” (Durum) FATL hataları ‘ER0011 / ER0714’ gösterilmiştir.</p>
        <p>– Test modu aktifken başka seyir yapılamaz.</p>
        <p>Başarısız:</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p className={styles["arrow"]}>Hatayı resetleyin.</p>
        <p>– Ana şalter JH'yi kapatın.</p>
        <p>– Ana şalter JH'yi açın.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>



    <div className={styles["box"]}>
      <h4>10.4.10 Çıkış kontaktör kutusu (OCB) doğru monte edilmiş ve işlevsel mi </h4>
      <div>{radio("10.4.10", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Frekans dönüştürücü DR VAF xx, bir çıkış kontaktör kutusu (OCB) gerektiren ülkelerde sipariş edilmiş ve kurulmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Çıkış kontaktör kutusu (OCB) montaj el kitabına göre kurulmuştur.</p>
        <p className={styles["circle"]}>Frekans dönüştürücüden makinaya giden motor kablosu, çıkış kontaktör kutusu (OCB) içinden yönlendirilir.</p>
        <p className={styles["circle"]}>Seyir kabin çatısında inceleme kontrolü ile tamamlandığında çıkış kontaktör kutusu (OCB):</p>
        <p>– Seyir başlangıcında açılır.</p>
        <p>– Seyir sonunda kapanır.</p>
      </div>


    <div className={styles["box"]}>
      <h4>7.6.5.a Otomatik fren torku izleme işlevi var mı ve test doğru çalışıyor mu </h4>
      <div>{radio("7.6.5.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Bölgeler:</p>
      <p className={styles["circle"]}>EU</p>
      <p className={styles["circle"]}>AP (CN hariç)</p>
      <p className={styles["circle"]}>LA</p>
      <p className={styles["circle"]}>IN</p>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p>Kabini emniyetli park konumundan serbest bırakmak için belirtilen çalıştırma talimatına uyun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: %0 VKN</p>
        <p>Kabin seyir yönü: STATİK</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Otomatik fren torku izleme işlevi kontrol yazılımında mevcuttur.</p>
        <p className={styles["circle"]}>Test doğru çalışıyor.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.5.a</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Brake Tests (Fren Testleri) → Brake Torque Test (Fren Tork Testi) → OK? (Tamam?).</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin yukarı yönde hareket etmez.</p>
        <p>– SMLCD 'Passed' (Geçildi) mesajını gösterir.</p>
        <p>Başarısız:</p>
        <p>– SMLCD ‘Failed’ (Başarısız) mesajını gösterir.</p>
        <p>– Kabin yukarı yönde hareket eder ve en üst katta emniyetli park yapar.</p>
        <p className={styles["arrow"]}>Test başarısız olduysa kabini J 41712120 emniyetli park etkinleştirme sonrasında</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>
      

    <div className={styles["box"]}>
      <h4>7.6.5.b Otomatik statik tek fren testi (ASBT) işlevi var mı ve test doğru çalışıyor mu </h4>
      <div>{radio("7.6.5.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Çin (CN) GB/T 7588.1-2020 uyarınca</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Kabini emniyetli park konumundan serbest bırakmak için belirtilen çalıştırma talimatına uyun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: %0 VKN</p>
        <p>Kabin seyir yönü: STATİK</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Otomatik statik tek fren testi (ASBT) işlevi kontrol yazılımında mevcuttur.</p>
        <p className={styles["circle"]}>Test doğru çalışıyor.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.5.b</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Brake Tests (Fren Testi) → Both Channels (Her İki Kanal) → OK? (Tamam?).</p>
        <p>Not: 'Her İki Kanal' test ayarıyla, her bir fren, tek tek ve sırayla test edilir (fren kanalları 'Kanal 1' ve 'Kanal 2'). Bu, bu test ayarına dahildir ve otomatik olarak yapılır.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Kabin yukarı yönde hareket etmez.</p>
        <p>– SMLCD 'Passed' (Geçildi) mesajını gösterir.</p>
        <p>Başarısız:</p>
        <p>– SMLCD ‘Failed’ (Başarısız) mesajını gösterir.</p>
        <p>– Kabin yukarı yönde hareket eder ve en üst katta emniyetli park yapar.</p>
        <p className={styles["arrow"]}>Test başarısız olduysa kabini J 41712120 emniyetli park etkinleştirme sonrasında Bırakma uyarınca emniyetli park pozisyonundan çıkarın.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

    <div className={styles["box"]}>
      <h4>7.6.10 Fren doğru açılmaz veya kapanmazsa normal asansör çalışması önleniyor mu   </h4>
      <div>{radio("7.6.10", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Çin (SCN), otomatik fren torku izleme olmadan TSG T7001:2009+A2:2017 uyarınca</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Ayrıntılar için J 45344872 Çin UCM Alanı Test Gereklilikleri ve İşlemi.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: %0 VKN</p>
        <p>Kabin seyir yönü: STATİK</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Fren doğru açılmaz veya kapanmazsa kabin hareket etmez.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.10</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>SCPOWx kartında konektör SCPOWx.KB'yi ayırın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Asansör bozuk duruma girer.</p>
        <p>– Başka bir kata kabin çağrısı girildiğinde kabin hareket etmez.</p>
        <p>– SMLCD, FATL hatası ‘ER1507’yi gösterir.</p>
        <p>Başarısız:</p>
        <p>– Başka bir kata kabin çağrısı girildiğinde kabin hareket eder.</p>
        <p>– SMLCD FATL hatası ‘ER1507’ göstermez.</p>
        <p className={styles["arrow"]}>SCPOWx kartında konektör SCPOWx.KB'yi bağlayın.</p>
        <p className={styles["arrow"]}>Hatayı resetleyin:</p>
        <p>– Ana şalter JH'yi kapatın.</p>
        <p>– Ana şalter JH'yi açın.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>
      

    <div className={styles["box"]}>
      <h4>7.6.11 Fren gücü yeterli değilse asansörün normal çalışması önleniyor mu </h4>
      <div>{radio("7.6.11", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>TSG T7001:2009+A2:2017 uyarınca Çin (SCN)</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Ayrıntılar için J 45344872 Çin UCM Alanı Test Gereklilikleri ve İşlemi.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: %0 VKN</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Fren gücü yeterli değilse, asansör güvenli park moduna girer ve bloke olur.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.11, MR asansör için</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
        <p>► Testi yapın.</p>
        <p>UYARI</p>
        <p>Kabin çok hızlı hareket ettiğinde (sesli sinyalle anlaşılmaktadır) manuel fren açma kolunu hemen bırakın ve makina frenini kapatın.</p>
        <p>– SMLCD: Tests (Testler) → Brake Tests (Fren Testleri) → Brake Torque Test (Fren Tork Testi) → OK? (Tamam?).</p>
        <p>– Manuel fren açma kolunu makine içine yerleştirin.</p>
        <p>– Frekans dönüştürücü makineye tork uygulamaya başladığında manuel fren bırakma kolunu çekin ve makine frenini çok kısa bir süre açık tutun.</p>
        <p className={styles["circle"]}>Tahrik kasnağının hızını izleyin ve kontrol edin.</p>
        <p className={styles["circle"]}>KB kontağının durumunun değişmediğinden emin olun.</p>
        <p>– Kabinin 20 ... 120 mm hareket ettiğinden emin olun.</p>
        <p>– Kontrolde zil çaldığında manuel fren bırakma kolunu çıkarın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Frekans dönüştürücü kabin hareketini saptar.</p>
        <p>– Kabin yukarı yönde hareket eder ve en üst katta emniyetli park yapar.</p>
        <p>– Başka bir kata kabin çağrısı girildiğinde kabin hareket etmez. Asansör emniyetli park modunda bloke edilir.</p>
        <p>– SMLCD 'Failed' (Başarısız) mesajını gösterir.</p>
        <p>– SMLCD ‘ER1653’ ve ‘ER1655’ hatalarını gösterir.</p>
        <p>Başarısız:</p>
        <p>– Başka bir kata kabin çağrısı girildiğinde kabin hareket eder.</p>
        <p>– SMLCD ‘ER1653’ ve ‘ER1655’ hatalarını göstermez.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Kabini J 41712120 emniyetli park etkinleştirme sonrasında Bırakma belgesinde belirtildiği gibi emniyetli park pozisyonundan çıkarın.</p>
        <p>– Manuel fren açma kolunun çıkarıldığından emin olun.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.11, MRL asansör için</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Tests (Kabul Testleri) → UEM Detect Test (UEM Saptama Testi).</p>
        <p>– SMLCD “Turn on JEM” (JEM'i açın) gösterdiğinde manuel tahliye şalteri JEM'i açın.</p>
        <p>– SMLCD ‘Press and hold DEM’ (DEM'i basılı tutun) gösterdiğinde manuel tahliye düğmesi DEM'i basılı tutun.</p>
        <p>– Kumandada zil çaldığında veya kabin yukarıya hareket etmeye başladığında manuel tahliye düğmesi DEM'i bırakın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Frekans dönüştürücü kabin hareketini saptar. Kumanda kısmında zil çalar.</p>
        <p>– Kabin durur.</p>
        <p>– SMLCD 'Passed' (Geçildi) mesajını gösterir.</p>
        <p>Başarısız:</p>
        <p>– SMLCD ‘Test aborted’ (Test kesildi) gösterir.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Manuel tahliye şalterini JEM kapatın.</p>
        <p>– Kabini güvenli park pozisyonundan bırakın.</p>
        <p className={styles["circle"]}>SMLCD: Command (Komut) → ClrSafetyPark.</p>
        <p>– Frenleri kontrol edin.</p>
        <p className={styles["circle"]}>SMLCD: OK? (Tamam?) → Is Brake Safe? (Fren Güvenli mi?) = YES (EVET) → OK? (TAMAM?)→ BrakeCapaTest (Fren Kapasitesi Testi) → OK? (TAMAM?) → BrakeCapaTest Passed (Fren Kapasitesi Testi Geçildi).</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>7.6.12.b Elektrikli dinamik frenleme işlevi mevcut mu ve test yukarı yönde doğru çalışıyor mu</h4>
      <div>{radio("7.6.12.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Çin (CN) TSG T7007-2022 uyarınca</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Bu testi yapmadan önce, aşağıdaki testlerden birinin son 24 saat içinde başarıyla yapıldığından emin olun:</p>
        <p className={styles["circle"]}>Otomatik fren torku izleme (BTM)</p>
        <p className={styles["circle"]}>Otomatik statik tek fren testi (ASBT).</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kabin yükü: % 0 GQ</p>
        <p>Seyir hızı: VTest</p>
        <p>Kabin seyir yönü: YUKARI</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Elektriksel dinamik frenleme işlevi kontrol yazılımında mevcuttur.</p>
        <p className={styles["circle"]}>Test doğru çalışıyor.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.7.6.12.b</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>Testi yapın.</p>
        <p>– SMLCD: Tests (Testler) → Acceptance Test (Kabul Testi) → EDBTest → OK? (Tamam?) → Start test trip (Test seyri başlat) → OK? (Tamam?).</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD ‘Done’ (Yapıldı) ve ‘MaxSpd’ (Maks Hız) ..... m/s gösterir.</p>
        <p>– Seyir hızı ≤ 0,30 m/s.</p>
        <p>Başarısız:</p>
        <p>– SMLCD ‘Failed’ (Başarısız) ve 'Speed too high' (Hız çok yüksek) gösterir.</p>
        <p>– Seyir hızı {">"} 0,30 m/s.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>8.2.2 Kat kapısı ve kabin kapısı bypass cihazı kontrol üzerinde mevcut, işaretli ve işlevsel mi   </h4>
      <div>{radio("8.2.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kat kapısı durumu: Kapalı</p>
        <p>Kabin kapısı paneli/panelleri durumu:</p>
        <p className={styles["circle"]}>Kapalı</p>
        <p className={styles["circle"]}>Kapı kapatma sonlandırma kontağı (örneğin KET-S) aktif</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Köprüleme cihazı kablolama şemasına göre “Bypass” işaretlidir.</p>
        <p className={styles["circle"]}>Köprüleme cihazının durumu takılı bypass cihazı fişlerine göre “normal”, “kabin” ve “kilit” olarak açıkça tanımlanabilir.</p>
        <p className={styles["circle"]}>Köprüleme cihazı kat kapısı ve kabin kapısının devresini ayrı olarak köprüler.</p>
        <p className={styles["circle"]}>Köprüleme cihazı etkinken:</p>
        <p>– Kabin normal çalışma modunda seyir yapamaz.</p>
        <p>– Kabin kapılarının çalışması mümkün değil veya etkin durumdan çıkıyor.</p>
        <p>– Kabin, sadece inceleme kontrol veya revizyon kontrolüyle hareket ettirilebilir.</p>
        <p>– İnceleme seyri sırasında ve kabinde sesli sinyal ve kabin altında yanıp sönen bir ışık aktif.</p>
      </div>



    <div className={styles["box"]}>
      <h4>13.1.23 Sismik mod için görsel gösterge kurulu ve çalışır durumda mı</h4>
      <div>{radio("13.1.23", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
      <p>[#2.2]</p>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Sismik asansör kategorisi 3</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Görsel gösterge, manuel reset cihazının yakınına yerleştirilmiştir.</p>
        <p className={styles["circle"]}>Asansör sismik moddayken görsel gösterge yanar.</p>
        <p className={styles["circle"]}>İtfaiyeci asansörü için:</p>
        <p>– İtfaiyeci tahliye katında, JBFF/JNFF itfaiyeci çalıştırma şalterinin yanına ek bir görsel gösterge yerleştirilmiştir.</p>
        <p>– JBFF/JNFF şalterinde manuel reset cihazının konumu gösterilir.</p>
      </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>13 STM hizalama</h3>
      <hr />
    </div>
    <div className={styles["box"]}>
      <h3 className={styles["title"]}>13.1 Makina dairesi / kuyu başlığı </h3>
      <hr />
    </div>

     <div className={styles["box"]}>
      <h4>STM.3.a STM'ler gerektiği şekilde kurulu mu </h4>
      <div>{radio("stm.3.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Arka karşı ağırlıklı MR asansörü (üstten askılı kabin)</p>
      </div>
      
      <div className={styles["box"]}>
        <p>Not</p>
        <p>Ürüne özel spesifik SAIS belgesinde tanımlanan makina hizalama kontrolü zaten yapıldıysa tahrik şaftlarının seviyelenmesini kontrol etmek
        gerekmez.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçüm noktası</p>
        <img src={şekil68} className={styles["w-300"]} />
      </div>

      <div className={styles["box"]}>
        <p>STM Makaralarının Hizalanması</p>
        <p>1 Makara çapı ≤ 107 mm</p>
        <p>2 Makara çapı {">"} 107 mm</p>
        <img src={şekil69} className={styles["w-300"]} />
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>STM makaraları / STM'ler hizalıdır.</p>
        <p className={styles["circle"]}>STM'ler makaraların ortasında kurulmuş.</p>
        <p className={styles["circle"]}>STM tutucular monte edilmiştir, hasarsızdır, tamamen yerleştirilmiştir ve STM'lerle çarpışmaz.</p>
        <p className={styles["circle"]}>STM makaralarının çalışan yüzeyinde ani paslanma veya kalıntı yoktur.</p>
        <p className={styles["circle"]}>Koruyucu folyo STM makaralarından çıkarılmıştır.</p>
      </div>


    <div className={styles["box"]}>
      <h4>STM.1.a STM'ler doğru hizalanmış mı</h4>
      <div>{radio("stm.1.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

    <div className={styles["box"]}>
      <h4>STM hizalama</h4>
      <div>{radio("stm_hizalama", { variant: "circle", inputArray: 
        ["Alttan askılı kabin",
         "Üstten askılı kabin",
        ] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>STM adedi / makara çapı</h4>
      <div>{radio("stm_adedi3", { variant: "circle", inputArray: 
        ["2 / makara çapı 86 mm",
         "2 / makara çapı > 86 mm",
         "≥ 3 / tüm makara çapları",
        ] })}
        <p className={styles["subtitle"]}>Makara çapı 86 mm olan 2 STM varsa, sadece A, C ve E boyutlarının ölçülmesi gerekir.</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Kabin tarafı</p>
      <p>Alttan askılı kabin - A ve B için ölçüm noktaları</p>
      <p>1 Karşı ağırlık tarafında ölçüm</p>
      <p>2 Kabin tarafında ölçüm</p>
      <img src={şekil70} className={styles["w-350"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Kabin tarafı</p>
      <p>Üstten askılı kabin - C ve D için ölçme noktaları</p>
      <p>1 Üstten görünüm</p>
      <p>2 Yandan görünüm</p>
      <img src={şekil71} className={styles["w-350"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Karşı ağırlık tarafı</p>
      <p>E ve F için ölçüm noktaları</p>
      <p>1 Üstten görünüm</p>
      <p>2 Yandan görünüm</p>
      <img src={şekil72} className={styles["w-350"]}/>
    </div>

    <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

      <div className={styles["box"]}>
        <p>Alttan askılı kabin</p>
        <p className={styles["arrow"]}>SAIS İncelemesini basılı kopya ile yapıyorsanız: Ölçülen değeri SAIS kontrolü STM.1.b içine kaydedin.</p>
      </div>

    <div>{inputLine("a1_mm", "A1 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında STM mesafesini ölçün</h5>
    </div>
    <div>{inputLine("b1_mm", "B1 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında STM mesafesini ölçün</h5>
    </div>
    <div>{inputLine("a4_mm", "A4 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("b4_mm", "B4 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi</h5>
    </div>
    <div className={styles["box"]}>
        <p>Üstten askılı kabin</p>
      </div>
    <div>{inputLine("c1_mm", "C1 (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu üstünde ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("c2_mm", "C2 (mm)")}
        <h5 className={styles["subtitle"]}>Ölçüm noktası C1'in 1500 mm altında ölçülen STM mesafesi</h5>
    </div>

    <div className={styles["box"]}>
      <h5>C1 ve C2 (mm) arasında hesaplanan fark</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 7 mm</p>
    </div>

    <div>{inputLine("d1_mm", "D1 (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu üstünde ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("d2_mm", "D2 (mm)")}
        <h5 className={styles["subtitle"]}>Ölçüm noktası D1'in 1500 mm altında ölçülen STM mesafesi</h5>
    </div>

    <div className={styles["box"]}>
      <h5>D1 ve D2 (mm) arasında hesaplanan fark</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 7 mm</p>
    </div>


    <div>{inputLine("e1_mm", "E1 (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu üstünde ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("e2_mm", "E2 (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu ortasında ölçülen STM mesafesi</h5>
    </div>

    <div className={styles["box"]}>
      <h5>E1 ve E2 (mm) arasında hesaplanan fark</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 5 mm</p>
    </div>

    <div>{inputLine("f1_mm", "F1 (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu üstünde ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("f2_mm", "F2 (mm)")}
        <h5 className={styles["subtitle"]}>Kuyu ortasında ölçülen STM mesafesi</h5>
    </div>

    <div className={styles["box"]}>
      <h5>F1 ve F2 (mm) arasında hesaplanan fark</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 5 mm</p>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Ölçüm noktaları arasında hesaplanan farklar belirtildiği gibidir.</p>
      </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.STM.1.a - Kabin tarafı - Alttan askılı kabin</p>
      <p className={styles["arrow"]}>Kuyunun üstüne yakın iken bu mesafeleri kılavuz ray yüzeyi ile STM iç kenarı arasında ölçün:</p>
      <p>– Karşı ağırlık tarafında A1 ve B1</p>
      <p>– Kabin tarafında A4 ve B4.</p>
      <p className={styles["arrow"]}>Ölçülen değerleri kaydedin.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.STM.1.a - Kabin tarafı - Üstten askılı kabin</p>
      <p className={styles["arrow"]}>Kuyunun üstüne yakınken, bu mesafeleri kılavuz rayın işlenmiş yüzeyi ile STM dış kenarı arasında ölçün:</p>
      <p>– C1 ve D1.</p>
      <p className={styles["arrow"]}>Ölçülen C1 ve D1 mesafelerinin 1500 mm altındayken, kılavuz rayın işlenmiş yüzeyi ile aynı STM dış kenarı arasında bu mesafeleri ölçün:</p>
      <p>– C2 ve D2.</p>
      <p className={styles["arrow"]}>Ölçülen değerleri kaydedin.</p>
      <p className={styles["arrow"]}>Ölçülen değerleri karşılaştırın.</p>
    </div>

    <div className={styles["box"]}>
      <p>Test yöntemi m.STM.1.a - Karşı ağırlık tarafı</p>
      <p className={styles["arrow"]}>Kuyunun üstüne yakınken, bu mesafeleri kılavuz rayın işlenmiş yüzeyi ile STM dış kenarı arasında ölçün:</p>
      <p>– E1 ve F1.</p>
      <p className={styles["arrow"]}>Kuyu ortasında iken kılavuz rayın işlenmiş yüzeyi ile aynı STM dış kenarı arasında bu mesafeleri ölçün:</p>
      <p>– E2 ve F2.</p>
      <p>Not: Ölçüme çalışma açıklığını dahil etmeyin.</p>
      <p className={styles["arrow"]}>Ölçülen değerleri kaydedin (çalışma açıklığı hariç).</p>
      <p className={styles["arrow"]}>Ölçülen değerleri karşılaştırın.</p>
    </div>


    <div className={styles["box"]}>
      <h4>5.1.20 Kayış izleme cihazı doğru monte edilmiş ve işlevsel mi</h4>
      <div>{radio("5.1.20", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Çin (CN) TSG T7007:2022 uyarınca</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Kayış izleme cihazı montaj el kitabı uyarınca monte edilmiştir.</p>
        <p className={styles["circle"]}>SMLCD, STM durumunu gösterir.</p>
        <p className={styles["circle"]}>SMLCD'de 'Call Not Accept' (Çağrı Kabul Edilmiyor) mesajı gösteriliyor.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.5.1.20</p>
        <p className={styles["arrow"]}>KFM modunu etkinleştirin.</p>
        <p>– SMLCD: Commands (Komutlar) → Special trips (Özel seyirler) → KFM.</p>
        <p className={styles["arrow"]}>Boş kabini en üst katın bir kat altında konumlandırın.</p>
        <p className={styles["arrow"]}>JRH/JEM'i "RECALL" (REVİZYON) moduna ayarlayın.</p>
        <p className={styles["arrow"]}>MRL asansörü için: Kuyu başındaki kayış izleme cihazına erişin.</p>
        <p>– Kabini kabin çatısına kolay erişim için konumlandırın.</p>
        <p>– Kabin tavanında, REC'de JREC'i “INSPECTION” (İNCELEME) moduna ayarlayın.</p>
        <p>– Kayış izleme cihazına kolayca erişene kadar aracı yukarı doğru hareket ettirin.</p>
        <p className={styles["arrow"]}>Kayış izleme cihazını etkinleştirin.</p>
        <p>– Kayış izleme cihazında, 'BMD durumu' LED'leri YEŞİL'den KIRMIZI'ya değişene kadar TEST düğmesine yaklaşık 3 saniye basın.</p>
        <p className={styles["arrow"]}>MRL asansörü için: Kabin çatısından çıkın.</p>
        <p>– Kabin çatısından güvenli bir şekilde çıkmak için aracı aşağı doğru hareket ettirin.</p>
        <p>– REC üzerindeki JREC'i “NORMAL” moda ayarlayın.</p>
        <p>– Kabin çatısından çıkın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
        <p className={styles["arrow"]}>JRH/JEM'i "NORMAL" moda ayarlayın.</p>
        <p className={styles["arrow"]}>SMLCD durumunu kontrol edin.</p>
        <p>– SMLCD: Logs (Kayıtlar) → ErrorLog (Hata Kaydı) → Show (Göster) → New (Yeni).</p>
        <p>– SMLCD, 587 'TMDevERR' hatasını gösteriyor.</p>
        <p className={styles["arrow"]}>Bir kabin çağrısı girin.</p>
        <p>– SMLCD: Commands (Komutlar) → Car Call (Kabin Çağrısı) → 1 → Car Call Side1 (Kabin Çağrısı Taraf1) → OK? (Tamam?).</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD'de 'Call Not Accept' (Çağrı Kabul Edilmiyor) gösteriliyor.</p>
        <p>– Kabin hareket etmez.</p>
        <p>Başarısız:</p>
        <p>– SMLCD'de 'Please wait' (Lütfen bekleyin) mesajı gösteriliyor.</p>
        <p>– Kabin hareket eder.</p>
        <p className={styles["arrow"]}>MRL asansörü için: Kuyu başındaki kayış izleme cihazına erişin.</p>
        <p>– Kabin tavanında, REC'de JREC'i “INSPECTION” (İNCELEME) moduna ayarlayın.</p>
        <p>– Kayış izleme cihazına kolayca erişene kadar aracı yukarı doğru hareket ettirin.</p>
        <p className={styles["arrow"]}>Kayış izleme cihazını resetleyin.</p>
        <p>– Kayış izleme cihazında, 'BMD durumu' LED'leri KIRMIZI'dan YEŞİL'e değişene kadar RESET düğmesine yaklaşık 3 saniye basın.</p>
        <p className={styles["arrow"]}>MRL asansörü için: Kabin çatısından çıkın.</p>
        <p>– Kabin çatısından güvenli bir şekilde çıkmak için aracı aşağı doğru hareket ettirin.</p>
        <p>– REC üzerindeki JREC'i “NORMAL” moda ayarlayın.</p>
        <p>– Kabin çatısından çıkın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– KFM modunu kapatın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>13.2 Kabin çatısı </h3>
      <hr />
    </div>
    <div className={styles["box"]}>
      <h4>STM.3.b STM'ler gerektiği şekilde kurulu mu </h4>
      <div>{radio("stm.3.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Uygulanabilirlik</p>
      <p>Üstten askı kabinle asansör</p>
    </div>
    <div className={styles["box"]}>
      <p>Ürün verileri</p>
    </div>

    <div className={styles["box"]}>
      <p>Olası ölçüm noktaları örnekleri</p>
      <img src={şekil73} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>STM Makaralarının Hizalanması</p>
      <p>1 Makara çapı ≤ 107 mm</p>
      <p>2 Makara çapı {">"} 107 mm</p>
      <img src={şekil74} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>STM makaraları / STM'ler hizalıdır.</p>
        <p className={styles["circle"]}>STM'ler makaraların ortasında kurulmuş.</p>
        <p className={styles["circle"]}>STM tutucular monte edilmiştir, hasarsızdır, tamamen yerleştirilmiştir ve STM'lerle çarpışmaz.</p>
        <p className={styles["circle"]}>STM makaralarının çalışan yüzeyinde ani paslanma veya kalıntı yoktur.</p>
        <p className={styles["circle"]}>Koruyucu folyo STM makaralarından çıkarılmıştır.</p>
      </div>



    <div className={styles["box"]}>
      <h3 className={styles["title"]}>13.3 Karşı ağırlık </h3>
      <hr />
    </div>
    <div className={styles["box"]}>
      <h4>STM.3.c STM'ler gerektiği şekilde kurulu mu </h4>
      <div>{radio("stm.3.c", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>


    <div className={styles["box"]}>
      <p>Olası ölçüm noktaları örnekleri (karşı ağırlık tipine bağlı olarak)</p>
      <img src={şekil75} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>STM Makaralarının Hizalanması</p>
      <p>1 Makara çapı ≤ 107 mm</p>
      <p>2 Makara çapı {">"} 107 mm</p>
      <img src={şekil76} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>STM makaraları / STM'ler hizalıdır.</p>
        <p className={styles["circle"]}>STM'ler makaraların ortasında kurulmuş.</p>
        <p className={styles["circle"]}>STM tutucular monte edilmiştir, hasarsızdır, tamamen yerleştirilmiştir ve STM'lerle çarpışmaz.</p>
        <p className={styles["circle"]}>STM makaralarının çalışan yüzeyinde ani paslanma veya kalıntı yoktur.</p>
        <p className={styles["circle"]}>Koruyucu folyo STM makaralarından çıkarılmıştır.</p>
      </div>
    
    <div className={styles["box"]}>
      <h3 className={styles["title"]}>13.4 Kuyu dibi  </h3>
      <hr />
    </div>
    <div className={styles["box"]}>
      <h4>STM.1.b STM'ler doğru hizalanmış mı</h4>
      <div>{radio("stm.1.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Alttan askılı kabinli asansör</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>STM'ler ve kılavuz ray baş kısmı arasındaki ölçüm noktasına erişemiyorsanız:</p>
        <p className={styles["arrow"]}>Kabini en alt katta konumlandırın.</p>
        <p className={styles["arrow"]}>Bu ölçümü kabin çatısından yapın.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

    <div className={styles["box"]}>
      <p>A ve B için ölçüm noktaları</p>
      <p>Karşı ağırlık tarafında ölçüm (örnek)</p>
      <img src={şekil77} className={styles["w-350"]} />
      <p>A ve B için ölçüm noktaları</p>
      <p>Kabin tarafında ölçüm (örnek)</p>
      <img src={şekil78} className={styles["w-350"]} />
    </div>

    <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <div>{inputLine("a1_mm2_2", " A1 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında ölçülen STM mesafesi / Ölçülen SAIS kontrolü STM.1.a değerini kaydedin.</h5>
    </div>
    <div>{inputLine("a2_mm_2", "A2 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında STM mesafesini ölçün</h5>
    </div>
    <div>{inputLine("b1_mm2_2", "B1 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında ölçülen STM mesafesi / Ölçülen SAIS kontrolü STM.1.a değerini kaydedin.</h5>
    </div>
    <div>{inputLine("b2_mm_2", "B2 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında STM mesafesini ölçün</h5>
    </div>
    <div>{inputLine("a3_mm_2", "A3 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("a4_mm2_2", "A4 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi / Ölçülen SAIS kontrolü STM.1.a değerini kaydedin.</h5>
    </div>
    <div>{inputLine("b3_mm_2", "B3 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("b4_mm2_2", "B4 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi / Ölçülen SAIS kontrolü STM.1.a değerini kaydedin.</h5>
    </div>
      
    <div className={styles["box"]}>
      <h5>A1 ile A2 arasında hesaplanan fark (mm)</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 7 mm</p>
    </div>
    <div className={styles["box"]}>
      <h5>B1 ile B2 arasında hesaplanan fark (mm)</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 7 mm</p>
    </div>
    <div className={styles["box"]}>
      <h5>A3 ile A4 arasında hesaplanan fark (mm)</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 7 mm</p>
    </div>
    <div className={styles["box"]}>
      <h5>B3 ile B4 arasında hesaplanan fark (mm)</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 7 mm</p>
    </div>
    <div className={styles["box"]}>
      <h5>A2 ile A3 arasında hesaplanan fark (mm)</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 5 mm</p>
    </div>
    <div className={styles["box"]}>
      <h5>B2 ile B3 arasında hesaplanan fark (mm)</h5>
      <p>Value: ?</p>
      <p>Belirtilen: {"<"} 5 mm</p>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Ölçüm noktaları arasında hesaplanan farklar belirtildiği gibidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.STM.1.b</p>
        <p className={styles["arrow"]}>Kılavuz ray başı ile STM iç kenarı arasındaki şu mesafeleri ölçün:</p>
        <p>– Karşı ağırlık tarafında A2 ve B2</p>
        <p>– Kabin tarafında A3 ve B3.</p>
        <p className={styles["arrow"]}>Ölçülen değerleri kaydedin.</p>
      </div>

    <div className={styles["box"]}>
      <h4>STM.2 sönümleme pedleri doğru monte edilmiş mi</h4>
      <div>{radio("stm.2", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>CA PK 44 veya CA PK 33 ile sönümlendirme pedleri monte edilmiş asansör</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Tüm sönümlendirme pedlerinin monte edildiğini görsel olarak kontrol etmek için bir ayna veya bir sopa kullanın.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

      <div className={styles["box"]}>
        <p>CA PK 44 olan asansör için sönümlendirme pedleri - sönümlendirme pedleri olan 4 STM (örnekler)</p>
        <p>2 Bilezik izolasyonu ve mobil çekiş kirişi arasında açıklık</p>
        <img src={şekil79} className={styles["w-350"]} />
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Sönümlendirme pedleri doğru monte edilmiştir.</p>
        <p className={styles["circle"]}>CA PK 44 ve sönümlendirme pedleri olan 4 STM'li asansörler için: Bilezik izolasyonu ve mobil çekiş kirişi arasında açıklık {">"} 1 mm.</p>
      </div>

    <div className={styles["box"]}>
      <h4>STM.3.d STM'ler gerektiği şekilde kurulu mu</h4>
      <div>{radio("stm.3.d", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Alttan askılı kabinli asansör</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Makara akslarından birine entegre bir su terazisi kurulmuşsa bu su terazisi ölçüm için kullanılabilir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabin altında olası ölçüm noktası örneği - 2 STM'li Asansör</p>
        <img src={şekil80} className={styles["w-250"]} />
      </div>

      <div className={styles["box"]}>
        <p>Entegre Su Terazisi Örneği (CA PK 44 gösterilmiştir) - {">"} 2 STM'li Asansör</p>
        <img src={şekil81} className={styles["w-250"]} />
      </div>

      <div className={styles["box"]}>
        <p>Entegre Su Terazisi Örneği (CA PK 44 gösterilmiştir) ≥ 3 STM'li Asansör</p>
        <img src={şekil82} className={styles["w-250"]} />
      </div>

      <div className={styles["box"]}>
        <p>STM Makaralarının Hizalanması</p>
        <p>1 Makara çapı ≤ 107 mm</p>
        <p>2 Makara çapı {">"} 107 mm</p>
        <img src={şekil83} className={styles["w-250"]} />
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>STM makaraları / STM'ler hizalıdır.</p>
        <p className={styles["circle"]}>STM'ler makaraların ortasında kurulmuş.</p>
        <p className={styles["circle"]}>STM tutucular monte edilmiştir, hasarsızdır, tamamen yerleştirilmiştir ve STM'lerle çarpışmaz.</p>
        <p className={styles["circle"]}>STM makaralarının çalışan yüzeyinde ani paslanma veya kalıntı yoktur.</p>
        <p className={styles["circle"]}>Koruyucu folyo STM makaralarından çıkarılmıştır.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.STM.3.d</p>
        <p className={styles["arrow"]}>Her STM tutucunun monte edildiğini, hasarsız olduğunu, yerine oturtulduğunui ve STM'lere temas etmediğini kontrol edin.</p>
        <p className={styles["arrow"]}>Her STM makaranın / STM'nin yatay hizalamasını kabin altında bir su terazisi kullanarak inceleyin. Kontrolü şu noktalarda yapın:</p>
        <p>– Karşı ağırlık tarafı.</p>
        <p>– STM sabitleme noktası tarafı.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– Her STM makarası / STM hizalıdır. Yatay sapma belirlenen limitler dahilindedir.</p>
      </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>14 Kabin kapıları ve kat kapıları</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>4.3.2 Kapalı kapılarla, kabin kapısı panelleri arasında, paneller ve dikey kısımlar, başlıklar ve eşikler arasındaki çalışma açıklığı ≤ 6 mm mi </h4>
      <div>{radio("4.3.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.3.3 Kabin kapısı panelindeki tüm girintiler veya çıkıntılar ≤ 3 mm mi </h4>
      <div>{radio("4.3.3", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.4.12 Kabin kapısı kilidi (KTC) ilgili standarda göre işlevsel mi  </h4>
      <div>{radio("4.4.12", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Kabin kapı kilit açma bölgesinde olduğunda kabin kapısı kabin içinden açılabilir.</p>
        <p className={styles["circle"]}>Kabin kapı kilit açma bölgesi dışındayken:</p>
        <p>– Kabin kapısı kilitlidir.</p>
        <p>– Kabin kapısı manuel olarak ≤ 50 mm açılabilir.</p>
        <p className={styles["circle"]}>Kanca, kabin kapısı kontağı (KTC/2KTC) kapanmadan önce ≥ 7 mm geçiyor.</p>
        <p className={styles["circle"]}>Kabin kapısı kontağı (KTC/2KTC) emniyet devresini açar ve doğru ayarlıdır.</p>
        <p className={styles["circle"]}>Monte edilmişse ek kabin kapısı kontağı (KTC2) emniyet devresini açar ve doğru ayarlıdır.</p>
      </div>
      

    <div className={styles["box"]}>
      <h4>4.4.14 Kabin çıkış cihazı monte edilmiş ve işlevsel mi  </h4>
      <div>{radio("4.3.14", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Kabin çıkış cihazının halatı çekildiğinde her kabin kapısının kilidi açılır.</p>
      </div>


    <div className={styles["box"]}>
      <h4>4.4.1 Kapı sistemi ≤ 150 N gücüyle kapanıyor, engelle karşılaştığında ters hareket ediyor ve tüm koruyucu cihazlar kapıyı ters hareket
      ettiriyor mu</h4>
      <div>{radio("4.4.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kat kapısı ve kabin kapısı akuple olmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <div>{inputLine("max_kapatma_gucu", "Maksimum kapatma gücü (N) ")}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 150 N.</h5>
    </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Kontak kapatma gücü sınırlayıcı (KSKB) ≤ 150 N kuvvetle karşılaştığında kapıyı ters çevirir.</p>
        <p className={styles["circle"]}>Kapı açma düğmesi (DT-O) her pozisyonda kapıyı tersine çevirir.</p>
        <p className={styles["circle"]}>Şu koruyucu cihazların biri monte edilmiştir ve bir kişinin geçmesi durumunda kapıyı tersine çevirir:</p>
        <p>– Işık perdesi/fotosel (RPHT)</p>
        <p>– Mekanik emniyet cihazları (RSE, ATL).</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.4.4.1</p>
        <p className={styles["arrow"]}>EJ 41351507 SAIS Kapılar için Destek Bilgisi belgesinde belirtilen test işlemine uyun.</p>
      </div>


    <div className={styles["box"]}>
      <h4>4.4.8 Kapı sistemi kapı kilit açma bölgesi içinde kabin içinden ve dışından açılabiliyor mu  </h4>
      <div>{radio("4.4.8", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kat kapısı ve kabin kapısı akuple olmuş</p>
        <p>Test konumu: Kabin içinde ve dışında</p>
        <p>Kapı güç besleme: KAPALI</p>
        <p>Kabin konumu: Kilit açma bölgesi içinde</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Kabin kapıları ve kat kapıları manuel açılabiliyor.</p>
      </div>



    <div className={styles["box"]}>
      <h4>4.4.3 Kapı kapanmasının kinetik enerjisi ≤ 10 J mü  </h4>
      <div>{radio("4.4.3", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kat kapısı ve kabin kapısı akuple olmuş</p>
      </div>


    <div className={styles["box"]}>
      <h4>4.4.5 Kapının servis dışı bırakan cihazla kapanması veya son zamanlayıcı spesifikasyona göre mi </h4>
      <div>{radio("4.4.5", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Test ayarı</p>
        <p>Kat kapısı ve kabin kapısı akuple olmuş</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Kapı kapanma enerjisi ≤ 4 J.</p>
        <p className={styles["circle"]}>Sesli bir sinyal duyulur.</p>
        <p className={styles["circle"]}>Kapı, engelin giderilmesi için tekrar açılır.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.4.4.5</p>
        <p className={styles["arrow"]}>Ölçüm aleti üzerinde halka göstergenin tamamen geri çekildiğinden emin olun.</p>
        <p className={styles["arrow"]}>Işık perdesi/fotoseli (RPHT) devre dışı bırakın.</p>
        <p className={styles["arrow"]}>Ölçme aletini kabin kapısı panelleri arasında konumlandırın.</p>
        <p className={styles["arrow"]}>Kapıyı kapatın. Kapının ölçme aletine çarpmasına izin verin.</p>
        <p className={styles["arrow"]}>Çarpmanın, kapı maksimum hıza ulaştığında gerçekleştiğinden emin olun.</p>
        <p>Not: Olağandışı hız profili olan kapıları test etmek zordur. İyi olan beklenti, kinetik enerjiyi kapanma hareketinin sonundaki bir noktada, kapının kapanma noktasından 0,25 BT uzaklıkta orta yükseklikte ölçmektir.</p>
        <p className={styles["arrow"]}>Ölçme aletindeki Fmaks değerini okuyun.</p>
        <p className={styles["arrow"]}>Ölçme aletinde gösterilen Fmaks değerini izin verilen maksimum değerle karşılaştırın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>– Kapı kapanma enerjisi belirtildiği gibidir.</p>
      </div>

      <img src={tablo26} className={styles["w-200"]} />



    <div className={styles["box"]}>
      <h4>4.3.4 Kat kapısı eşiği ile kabin kapısı eşiği arasındaki yatay açıklık ≤ 35 mm mi  </h4>
      <div>{radio("4.3.4", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>8.3.1 Maksimum durma doğruluğu her kat zemininde ±5 mm limitleri içinde mi </h4>
      <div>{radio("8.3.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>



    <div className={styles["box"]}>
      <h3 className={styles["title"]}>15 Elektriksel ölçümler </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <p>Emniyet incelemesi için hazırlama</p>
      <p>Elektriksel tehlikeler açısından dikkatli olun</p>
      <p className={styles["arrow"]}>Bazı ölçümlerin canlı voltaj altında yapıldığında dikkat edin.</p>
      <p className={styles["arrow"]}>Test araçlarının IEC/EN 61010-1 ve IEC/EN 61557 ile uyumlu olduğundan emin olun.</p>
      <p>SAIS destek belgesi ve kablolama şemasına başvurun</p>
      <p className={styles["arrow"]}>Elektriksel ölçümler için SAIS destek belgesine başvurun.</p>
      <p className={styles["arrow"]}>Tanımlanan ölçüm işlemi ve belirli ölçüm noktalarının geçerli olduğundan emin olmak için daima onaylı kablolama şemasına başvurun.</p>
      <p className={styles["arrow"]}>Asansörde NPE (ön mühendislik çalışması yapılmamış) çözümler varsa elektriksel ölçüm işlemi ve ölçüm noktalarına uyarlayın.</p>
      <p>Yerel kanunlar ve standartların gerekliliklerine uyun.</p>
      <p className={styles["arrow"]}>Şunları dikkate alın:</p>
      <p>– EN 81-20 ve IEC/EN 60204-1 sadece ana şalter ve kabin aydınlatma şalterine bağlı devreler için geçerlidir.</p>
      <p>– Binaların elektriksel tesisatı ile ilgili ulusal gereklilikler bu şalterlerin giriş terminallerine kadar ve makine alanı, makara dairesi, kuyu ve kuyu dibi tüm aydınlatma ve priz çıkış devrelerine kadar geçerlidir.</p>
      <p className={styles["arrow"]}>Elektrik tesisatlarının test edilmesi için ulusal düzenlemeler bu belgede tanımlanandan daha fazlasını gerektiriyorsa mutlaka bu ulusal düzenlemelerin dikkate alınması gerekir.</p>
    </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>Güç kaynağı  </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p className={styles["circle"]}>Ana şalter (JH) veya kuyu aydınlatma şalteri (SIBS) koruma işlevi olmayan şalter kesicilerse bina tarafındaki güç kaynağının kontrol edilmesi gerekir.</p>
        <p className={styles["circle"]}>Ana şalter (JH) veya kuyu aydınlatma şalteri (SIBS) koruma işlevli şalter kesicilerse sadece asansör tarafındaki güç kaynağının kontrol edilmesi gerekir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <div className={styles["box"]}>
      <h4>10.2.5 Ana şebeke ve aydınlatma güç kaynağı kablolama şeması / yerleşim çizimine göre mi  </h4>
      <div>{radio("10.2.5", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

      <div>{inputLine("belirtilen_topraklama_sistemi_tipi", "Belirtilen topraklama sistemi tipi", {variant: "border"})}
        <h5 className={styles["subtitle"]}>IT ağına izin verilmez. / TN-S, TN-C-S ve TT (3L, N + PE) ağları için, kablolama şemasına göre kumanda panosunda PEN köprüsünün kuruluolmadığını kontrol edin.</h5>
      </div>

      <div>{inputLine("belirtilen_voltaj_u0u", "Belirtilen voltaj U0/U (V)")}</div>
      <div>{inputLine("voltaj_uou", "Voltaj U0/U (V)")}
      <h5 className={styles["subtitle"]}>Yerleşim çiziminde belirtilen toleransa izin verilir</h5>
      </div>
      <div>{inputLine("sabit_hiz_inn_sirasında_belirtilen_anma_ana_şebeke_akimi", "Sabit hız INN (A) sırasında belirtilen anma ana şebeke akımı")}</div>
      <div>{inputLine("hizlanma_ina_sirasinda_belirtilen_ana_sebeke_akimi", "Hızlanma INA (A) sırasında belirtilen ana şebeke akımı")}</div>
      <div>{inputLine("belirtilen_jh_varyantı", "Belirtilen JH varyantı")}</div>

      <div>
        <h5>JH varyantı</h5>
        <div>{radio("jh_varyantı_radio", { variant: "circle", inputArray: 
          ["Koruyucu işlevli ana şalter (JH) (Sadece asansör tarafında SAIS kontrolü)",
           "Koruyucu işlevi olmayan ana şalter (JH) (bina tarafında SAIS kontrolü)"
           ] })}
        </div>
      </div>

      <p className={styles["arrow"]}>Asansör tarafında şu kontrolleri yapın:</p>

      <div>{selectField("mcb_tipi", "MCB tipi", 
        [ { _id: "1", name: "MCB B"},
          { _id: "2", name: "MCB C"},
          { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
      </div>

      <div>{selectField("mcb_b_derecelendirmesi", "MCB B derecelendirmesi", 
        [ { _id: "1", name: "B10A"},
          { _id: "2", name: "B16A"},
          { _id: "3", name: "B20A"},
          { _id: "4", name: "B25A"},
          { _id: "5", name: "B32A"},
          { _id: "6", name: "B35A"},
          { _id: "7", name: "B40A"},
          { _id: "8", name: "B50A"},
          { _id: "9", name: "B63A"},
          { _id: "10", name: "B80A"},
          { _id: "11", name: "B100A"},
          { _id: "12", name: "B125A"},
          { _id: "13", name: "MCCB"},
          { _id: "14", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Örnek: B16A = MCB 16A eğri B</p>
      </div>

      <div>{selectField("mecb_c_derecelendirme", "MCB C derecelendirme", 
        [ { _id: "1", name: "C10A"},
          { _id: "2", name: "C16A"},
          { _id: "3", name: "C20A"},
          { _id: "4", name: "C25A"},
          { _id: "5", name: "C32A"},
          { _id: "6", name: "C35A"},
          { _id: "7", name: "C40A"},
          { _id: "8", name: "C50A"},
          { _id: "9", name: "C63A"},
          { _id: "10", name: "C80A"},
          { _id: "11", name: "C100A"},
          { _id: "12", name: "C125A"},
          { _id: "13", name: "MCCB"},
          { _id: "14", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])} 
        <p className={styles["subtitle"]}>Örnek: C16A = MCB 16A eğri C</p>
      </div>

      <p className={styles["arrow"]}>Bina tarafında şu kontrolleri yapın:</p>

      <div>{inputLine("sih_icin_belirtilen_max_izin_veirlen_sigorta_degeri", "SIH (A) için belirtilen maksimum izin verilen sigorta derecesi")}</div>

      <div>{selectField("mcb_sigorta_tipi", "MCB / sigorta tipi", 
        [ { _id: "1", name: "MCB B"},
          { _id: "2", name: "MCB C"},
          { _id: "3", name: "MCCB"},
          { _id: "4", name: "Sigorta (gG/gL)"},
          { _id: "5", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
      </div>

      <div>{selectField("mcb_derecesi_sigorta_in", "MCB derecesi / sigorta IN (A)", 
        [ { _id: "1", name: "1"},
          { _id: "2", name: "2"},
          { _id: "3", name: "3"},
          { _id: "4", name: "4"},
          { _id: "5", name: "6"},
          { _id: "6", name: "8"},
          { _id: "7", name: "10"},
          { _id: "8", name: "13"},
          { _id: "9", name: "16"},
          { _id: "10", name: "20"},
          { _id: "11", name: "25"},
          { _id: "12", name: "32"},
          { _id: "13", name: "35"},
          { _id: "14", name: "40"},
          { _id: "15", name: "50"},
          { _id: "16", name: "63"},
          { _id: "17", name: "80"},
          { _id: "18", name: "100"},
          { _id: "19", name: "125"},
          { _id: "20", name: "160"},
          { _id: "21", name: "200"},
          { _id: "22", name: "250"},
          { _id: "23", name: "280"},
          { _id: "24", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
      </div>

      <div>{inputLine("belirtilen_isik_salteri_tipi", "Belirtilen ışık şalteri tipi (SIL)")}</div>

      <div>{selectField("sil_mcb_rcd_tip_derecelendirme", "SIL: MCB/RCD tip ve derecelendirme", 
        [ { _id: "1", name: "C6A, 30mA tip A"},
          { _id: "2", name: "C8A, 30mA tip A"},
          { _id: "3", name: "C10A, 30mA tip A"},
          { _id: "4", name: "C13A, 30mA tip A"},
          { _id: "5", name: "C16A, 30mA tip A"},
          { _id: "6", name: "C20A, 30mA tip A"},
          { _id: "7", name: "C25A, 30mA tip A"},
          { _id: "8", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Örnek: C6A, 30 mA tip A = 6A C tipi, I<IoTriangleOutline />N 30mA tip A</p>
      </div>
      
      <div>{selectField("sis_mcb_rcd_tip_derecelendirme", "SIS: MCB/RCD tip ve derecelendirme", 
        [ { _id: "1", name: "C6A, 30mA tip A"},
          { _id: "2", name: "C8A, 30mA tip A"},
          { _id: "3", name: "C10A, 30mA tip A"},
          { _id: "4", name: "C13A, 30mA tip A"},
          { _id: "5", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Belirtilen: Kablolama şemasına bakınız. / Örnek: C6A, 30 mA tip A = 6A eğri C, I<IoTriangleOutline />N 30 mA tip A</p>
      </div>

      <div>{inputLine("schindler_tarafindan_saglanan_kuyu_aydinlatma2", "Schindler tarafından sağlanan kuyu aydınlatma")}
        <p className={styles["subtitle"]}>Sipariş edilirse Schindler tarafından sağlanır / Sipariş edilmezse Schindler tarafından sağlanmaz.</p>
      </div>

      <div>{inputLine("belirtilen_kuyu_aydınlatma_salteri_tipi", "Belirtilen kuyu aydınlatma şalteri tipi (SIBS)")}</div>

      <div>{selectField("sibs_mcb_rcd_tip_derecelendirme", "SIBS: MCB/RCD tip ve derecelendirme", 
        [ { _id: "1", name: "C6A, 30mA tip A"},
          { _id: "2", name: "C8A, 30mA tip A"},
          { _id: "3", name: "C10A, 30mA tip A"},
          { _id: "4", name: "C13A, 30mA tip A"},
          { _id: "5", name: "C16A, 30mA tip A"},
          { _id: "6", name: "C20A, 30mA tip A"},
          { _id: "7", name: "C25A, 30mA tip A"},
          { _id: "8", name: "Sipariş edilmemiş"},
          { _id: "9", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Örnek: C6A, 30 mA tip A = 6A C tipi, IΔN 30mA tip A</p>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Ofis tarafından onaylanan ana şebeke ve aydınlatma güç kaynağı, kablolama şeması / yerleşim çizimine uygun.</p>
      </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>Elektriksel süreklilik </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>10.3.1.a Koruyucu bağlama devresinin elektriksel sürekliliği belirtildiği gibi mi </h4>
      <div>{radio("10.3.1.a", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p className={styles["circle"]}>Bileşenin konumu/pozisyonu doğrudan ölçüme izin vermediğinde elektriksel süreklilik zaten kontrol edilmiş olan bir bağlantı noktasından da doğrulanabilir.</p>
        <p className={styles["circle"]}>Ölçülen direnç ilgili koruyucu topraklama iletkeninin/iletkenlerinin uzunluğu, kesit alanı ve malzemesine göre beklenen aralıkta olmalıdır.</p>
        <p className={styles["arrow"]}>Binadan gelen koruyucu topraklamanın (PE) bağlı olduğu terminal ile asansörün elektrik tesisatının teması mümkün farklı iletken kısımları arasında elektriksel sürekliliği doğrulayın.</p>
        <p className={styles["arrow"]}>Koruma sınıfı 2 olan bileşenlerin doğrulanması gerekmez.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <p className={styles["arrow"]}>Kontrolde şu ölçümleri yapın:</p>

    <div className={styles["box"]}>
      <h4>Kumanda panosu arka plakası (Ω)  </h4>
      <div>{radio("kumando_panosu_arka_plakası", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 0,5 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>Kumanda panosu kapağı/kapısı (Ω) </h4>
      <div>{radio("kumanda_panosu_kapağı_kapısı", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 0,5 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>Kumanda panosu priz çıkışı (Ω)  </h4>
      <div>{radio("kumando_panosu_priz_cikisi", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 0,5 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>Kabin priz çıkışı (Ω)  </h4>
      <div>{radio("kabin_priz_cikisi", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <p className={styles["arrow"]}>Kabin çatısında şu ölçümleri yapın:</p>

    <div className={styles["box"]}>
      <h4>OKR Muhafazası (Ω) </h4>
      <div>{radio("okr_muhafazasi", { variant: "horizontal", inputArray: ["-","N/A","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>Kabin ön kapısı (Ω)  </h4>
      <div>{radio("kabin_on_kapisi", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>Kabin arka kapısı (Ω) </h4>
      <div>{radio("kabin_arka_kapisi", { variant: "horizontal", inputArray: ["-","N/A","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <p className={styles["arrow"]}>Kuyu tavanında şu ölçümleri yapın:</p>

    <div className={styles["box"]}>
      <h4>Frekans dönüştürücü muhafazası (Ω)  </h4>
      <div>{radio("frekans_donusturucu_muhafazasi", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 0,5 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>Makine muhafazası (Ω)</h4>
      <div>{radio("makine_muhafazasi", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 0,5 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>Fren muhafazası (Ω) </h4>
      <div>{radio("fren_muhafazasi", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 0,5 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>İkinci ana şalter JH1 (Ω)  </h4>
      <div>{radio("ikinci_ana_salter_jh1", { variant: "horizontal", inputArray: ["-","N/A","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 0,5 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>Tahliye cihazı muhafazası (Ω) </h4>
      <div>{radio("tahliye_cihazi_muhafazasi", { variant: "horizontal", inputArray: ["-","N/A","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 0,5 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <p className={styles["arrow"]}>Her kat kapısında bu ölçümleri yapın:</p>

    <div className={styles["box"]}>
      <h4>Her kat kapısı (Ω) </h4>
      <div>{radio("her_kat_kapisi", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <p className={styles["arrow"]}>Kuyu aydınlatmasında bu ölçümleri yapın:</p>

    <div className={styles["box"]}>
      <h4>Kuyu aydınlatması (Ω)  </h4>
      <div>{radio("kuyu_aydinlatmasi", { variant: "horizontal", inputArray: ["-","N/A","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <p className={styles["arrow"]}>Kuyu dibinde bu ölçümleri yapın:</p>

    <div className={styles["box"]}>
      <h4>Kuyu dibi priz çıkışı (Ω)</h4>
      <div>{radio("kuyu_aydinlatmasi2", { variant: "horizontal", inputArray: ["-","Yes ","No"] })}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>
    </div>

    <p className={styles["arrow"]}>Diğer ölçüm noktaları:</p>

    <div className={styles["box"]}>
      <h4>Diğerleri</h4>
      <div>{radio("digerleri", { variant: "horizontal", inputArray: ["-","N/A","Yes ","No"] })}
      </div>
    </div>

    <div>{inputLine("olcum_noktasi", "Ölçüm noktası ")}</div>
    <div>{inputLine("olculen_deger", "Ölçülen değer (Ω)")}</div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Tüm ölçülen değerler belirtildiği gibidir.</p>
      </div>
      
      <div className={styles["box"]}>
        <p>Test yöntemi m.10.3.1.a</p>
        <p className={styles["arrow"]}>Ölçüm aleti el kitabına başvurun.</p>
        <p className={styles["arrow"]}>Kabini kabin çatısına kolay erişim için konumlandırın.</p>
        <p className={styles["arrow"]}>Kontrolde, besleme modülünde binadan gelen koruyucu topraklama sistemine (PE) olan bağlantı için kumanda panosu terminalinden şuraya ölçüm yapın:</p>
        <p>– Kumanda panosu arka plakası</p>
        <p>– Kumanda panosu kapısı</p>
        <p>– Kumanda panosu prizi çıkışı PE terminali</p>
        <p>– Kabin prizi çıkışı PE terminali.</p>
        <p className={styles["arrow"]}>Kabin çatısında, kabin prizi çıkışının PE terminali ile sıralananlar arasını ölçün:</p>
        <p>– Bir metal OKR monte edilmişse, OKR muhafazası</p>
        <p>– Kabin ön kapısı PE terminali</p>
        <p>– Kuruluysa, kabin arka kapısı PE terminali.</p>
        <p className={styles["arrow"]}>Besleme modülünde harici koruyucu topraklama sistemi (PE) bağlantı terminali ile kabin soket çıkışının PE terminali arasında seyir kablosunu dengeleyin. Bu, seyir kablosunun direncini ortadan kaldırır.</p>
        <p className={styles["arrow"]}>Kuyu baş kısmında, kabin priz çıkışı PE terminalinden şuralara kadar ölçün:</p>
        <p>– Frekans dönüştürücü muhafazası</p>
        <p>– Makina muhafazası</p>
        <p>– Tüm frenlerin muhafazası</p>
        <p>– Kuruluysa, ikinci ana şalter JH1'in PE terminali</p>
        <p>– Kuruluysa, tahliye cihazı muhafazası.</p>
        <p className={styles["arrow"]}>Her kat kapısında, kabin priz çıkışı PE terminalinden şuralara kadar ölçün:</p>
        <p>– Her kat kapısında PE terminali (vida).</p>
        <p className={styles["arrow"]}>Kuyu aydınlatması koruma sınıfı 2 değilse: Kuyu aydınlatmasında, kabin priz çıkışının PE terminalinden şuraya kadar ölçün:</p>
        <p>– Kuyu aydınlatmasının PE terminali.</p>
        <p className={styles["arrow"]}>Kuyu dibinde, test edilen kat kapısında PE terminalinden şuraya kadar ölçün:</p>
        <p>– Kuyu dibi prizi çıkışı PE terminali.</p>
      </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>Eşpotansiyel bağı  </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>10.3.1.b Kılavuz rayların eşpotansiyelle olan bağı belirtildiği gibi mi </h4>
      <div>{radio("10.3.1.b", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>ACVF veya motora eş potansiyelli bağlanma, kılavuz raylara doğrudan bağlantıyla yapılmış</p>
      </div>

      <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>


    <div className={styles["box"]}>
      <h4>Ana güç koruyucu iletken (Ω)  </h4>
      <div>{radio("ana_guc_koruyucu_iletken", { variant: "horizontal", inputArray: ["-", "N/A","Yes", "No"] })}
        <p className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>Aydınlatma güç koruyucu iletken (Ω) </h4>
      <div>{radio("10.3.1.b", { variant: "horizontal", inputArray: ["-", "N/A","Yes", "No"] })}
        <p className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</p>
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Tüm ölçülen değerler belirtildiği gibidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.10.3.1.b</p>
        <p className={styles["arrow"]}>Ölçüm aleti el kitabına başvurun.</p>
        <p className={styles["arrow"]}>Ana şalter JH'yi kapatın.</p>
        <p className={styles["arrow"]}>SIBS, SIS ve SIL'yi kapatın.</p>
        <p className={styles["arrow"]}>Besleme modülünde dış koruyucu topraklama sistemine (PE) olan bağlantı için terminalden gelen koruyucu iletkeni/iletkenleri ayırın.</p>
        <p className={styles["arrow"]}>Besleme modülünde dış koruyucu topraklama sistemine (PE) olan bağlantı terminalinden şuraya kadar ölçüm yapın:</p>
        <p>– Gelen ana güç koruyucu kondüktör</p>
        <p>– Kuruluysa, gelen ışık güç koruyucu kondüktörü.</p>
        <p className={styles["arrow"]}>Besleme modülünde dış koruyucu topraklama sistemine (PE) bağlantı için terminalden gelen koruyucu kondüktörü/kondüktörleri takın.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– SIBS, SIS ve SIL'yi açın.</p>
        <p>– Ana şalter JH'yi açın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>Yalıtım direnci </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>10.3.2 Güç devrelerinin ve emniyet devresinin yalıtım direnci ilgili standarda göre mi </h4>
      <div>{radio("10.3.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
      <p>[#2.2]</p>
    </div>

    <div className={styles["box"]}>
        <p>Not</p>
        <p className={styles["arrow"]}>{">"} 50 VAC veya 120 VDC voltaj sağlanan tüm asansör güç kablolarının yalıtım direncini doğrulayın. Elektronik bileşenlerin hasar görmesini önlemek
        üzere ACVF'ler (kapı tahriği (tahrikleri), ana tahrik), kontrol ve fren modülüne takılı tel ve fişleri ayırmak önemlidir.</p>
        <p>Genel test voltajı 500 V ile belirtilir.</p>
      </div>

      <div className={styles["box"]}>
          <p>Ölçülen değer</p>
        </div>

    <p>Güç devreleri</p>

    <div className={styles["box"]}>
      <h4>ACVF.X1:L1  </h4>
      <div>{radio("acvg.x1.l1", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>ACVF.X1:L2   </h4>
      <div>{radio("acvf.x1.l2", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>ACVF.X1:L3 </h4>
      <div>{radio("acvf.x1.l3", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>

    <div className={styles["box"]}>
      <h4>AS:JH2  </h4>
      <div>{radio("as.jh2", { variant: "horizontal", inputArray: ["-","N/A","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>AS:JH4 </h4>
      <div>{radio("as.jh4", { variant: "horizontal", inputArray: ["-","N/A","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>AS:JH6  </h4>
      <div>{radio("as.jh6", { variant: "horizontal", inputArray: ["-","N/A","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>AS:JH8</h4>
      <div>{radio("as.jh8", { variant: "horizontal", inputArray: ["-","N/A","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>


    <div className={styles["box"]}>
      <h4>SIS:1.</h4>
      <div>{radio("sis.1", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>SIS:N (:3) </h4>
      <div>{radio("sis.n.3", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>MGB:1 </h4>
      <div>{radio("mgb.1", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>MGB:2 </h4>
      <div>{radio("mgb.2", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>MGB:3 </h4>
      <div>{radio("mgb.3", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>MGB:4 </h4>
      <div>{radio("mgb.4", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>SIL:2  </h4>
      <div>{radio("sil.2", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen: {">"}1,0 MΩ / Belirlenen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>SIBS:2 JLBS açıksa </h4>
      <div>{radio("sibs.2.jlbs_acik", { variant: "horizontal", inputArray: ["-","N/A","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Sorumluluk müşteriye aktarılmış ve teknik müdür tarafından doğrulanmışsa bu ölçüm geçerli değildir. / Belirtilen: {">"} 1,0 MΩ / Belirlendiği gibi değilse
      HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>SIBS:N (:4) JLBS açıksa </h4>
      <div>{radio("sibs.n.4.jlbs.acik", { variant: "horizontal", inputArray: ["-","N/A","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Sorumluluk müşteriye aktarılmış ve teknik müdür tarafından doğrulanmışsa bu ölçüm geçerli değildir. / Belirtilen: {">"} 1,0 MΩ / Belirlendiği gibi değilse
      HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>
    <div className={styles["box"]}>
      <h4>SIBS:2 JLBS kapalıysa  </h4>
      <div>{radio("sibs.2.jlbs.kapali", { variant: "horizontal", inputArray: ["-","N/A","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Sorumluluk müşteriye aktarılmış ve teknik müdür tarafından doğrulanmışsa bu ölçüm geçerli değildir. / Belirtilen:{">"}1,0 MΩ / Belirlendiği gibi değilse
      HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>

    <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Tüm ölçülen değerler belirtildiği gibidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.10.3.2</p>
        <p className={styles["arrow"]}>Asansörün kablolama şemasına başvurun.</p>
        <p className={styles["arrow"]}>Ölçülecek tüm güç devrelerini tanımlayın.</p>
        <p className={styles["arrow"]}>Ölçüm aleti el kitabına başvurun.</p>
        <p className={styles["arrow"]}>Kabini kabin çatısına kolay erişim için konumlandırın.</p>
        <p className={styles["arrow"]}>Ana şalter JH'yi kapatın ve kilitleyin.</p>
        <p className={styles["arrow"]}>SIL ve SIS'yi kapatın.</p>
        <p className={styles["arrow"]}>TAS kuruluysa giriş fişi XTAS'ı ayırın.</p>
        <p className={styles["arrow"]}>Asansör güç kablosunun (JH) yalıtım direncini ölçün:</p>
        <p>– Frekans dönüştürücü terminalinde giriş kablosu L1, L2 ve L3'ü ayırın.</p>
        <p>– Frekans dönüştürücü PE terminalinden şuraya kadar ölçüm yapın:</p>
        <p className={styles["circle"]}>ACVF.X1:L1</p>
        <p className={styles["circle"]}>ACVF.X1:L2</p>
        <p className={styles["circle"]}>ACVF.X1:L3.</p>
        <p>– Frekans dönüştürücü terminali giriş kablosu L1, L2 ve L3'ü takın.</p>
        <p className={styles["arrow"]}>Otomatik kurtarma cihazı (ARD) olan asansör için: ARD güç kablosunun yalıtım direncini ölçün.</p>
        <p>– Kumanda panosunda PE terminalinden şuraya ölçüm yapın:</p>
        <p>– AS:JH2</p>
        <p>– AS:JH4</p>
        <p>– AS:JH6</p>
        <p>– AS:JH8</p>
        <p className={styles["arrow"]}>Kontrol güç kablosunun (SIS) yalıtım direncini ölçün.</p>
        <p>– Fren modülünde konektör SCPOW.POW IN'yi (güç kaynağı) ayırın.</p>
        <p>– Kabin kapısı tahrikindeki JHCT veya JHT'yi kapatın veya giriş kablosunu ayırın.</p>
        <p>– Kuruluysa, 2JHCT kısmını ikinci kabin kapısı tahriğinde kapatın veya giriş kablosunu ayırın.</p>
        <p>– Besleme modülünde PE terminalinden şuraya ölçün:</p>
        <p className={styles["circle"]}>SIS:1.</p>
        <p className={styles["circle"]}>SIS:N (:3).</p>
        <p>– JHCT veya JHT'nin açık olduğunu kontrol edin veya giriş kablosunu kabin kapısı tahrikine bağlayın.</p>
        <p>– Kuruluysa, 2JHCT'nin açık olduğunu kontrol edin veya giriş kablosunu ikinci kabin kapısı tahrikine bağlayın.</p>
        <p>– Fren modülünde konektör SCPOW.POW IN'yi (güç kaynağı) bağlayın.</p>
        <p className={styles["arrow"]}>Fren güç kablosunun yalıtım direncini ölçün.</p>
        <p>– Fren modülünde MGB konektörünü ayırın.</p>
        <p>– Besleme modülünde PE terminalinden fren kabloları konektörlerine kadar ölçüm yapın:</p>
        <p className={styles["circle"]}>MGB:1</p>
        <p className={styles["circle"]}>MGB:2</p>
        <p className={styles["circle"]}>MGB:3</p>
        <p className={styles["circle"]}>MGB:4.</p>
        <p>– MGB konektörünü fren modülüne takın.</p>
        <p className={styles["arrow"]}>Kabin aydınlatma güç kablosunun (SIL) yalıtım direncini ölçün.</p>
        <p>– L ile N arasında kabin prizi çıkışında bir tel köprü bağlayın.</p>
        <p>– Besleme modülünde PE terminalinden SIL (çıkış tarafı) kısmına ölçüm yapın:</p>
        <p className={styles["circle"]}>SIL:2.</p>
        <p>– L ile N arasında kabin soketi çıkışında bir tel köprüyü ayırın.</p>
        <p className={styles["arrow"]}>Geçerliyse kuyu aydınlatma güç kablosunun (SIBS) yalıtım direncini ölçün.</p>
        <p>– SIBS'yi kapatın.</p>
        <p>– Besleme modülünde PE terminalinden SIBS (çıkış tarafı) kısmına ölçüm yapın ve şalter JLBS'nin açık olduğuna emin olun:</p>
        <p className={styles["circle"]}>SIBS:2</p>
        <p className={styles["circle"]}>SIBS:N (:4).</p>
        <p>– Besleme modülünde PE terminalinden SIBS (çıkış tarafı) kısmına ölçüm yapın ve şalter JLBS'nin kapalı olduğuna emin olun:</p>
        <p className={styles["circle"]}>SIBS:2.</p>
        <p>– SIBS'yi açın.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– TAS kuruluysa giriş fişi XTAS'ı bağlayın.</p>
        <p>– Ana şalter JH kilidini açın ve kendisini açın.</p>
        <p>– SIL ve SIS'yi açın.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>


    <div className={styles["box"]}>
      <h3 className={styles["title"]}>Hata halka empedansı </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>10.4.1 Hata halka empedansı ilgili standarda göre mi </h4>
      <div>{radio("10.4.1", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>TN ağı</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["arrow"]}>Testi yüksek akım seyir modunda yapın.</p>
        <p className={styles["arrow"]}>Ölçümü güç devresinin en uzak noktasında yapın.</p>
      </div>

      <div className={styles["box"]}>
        <p>Ürün verileri</p>
      </div>

    <div>{inputLine("ana_salterin_belirtilen_anma_akimi2", "Ana şalterin belirtilen anma akımı JH (A)", {dontUseSymbol:true})}
      <p className={styles["subtitle"]}>Koruma işlevi olmayan ana şalter (JH) için bina tarafındaki SIH'nin anma akımını kullanın.</p>
    </div>

    <div className={styles["box"]}>
        <p>Ölçülen değer</p>
      </div>

    <div className={styles["box"]}>
      <p>Sigorta ve MCB için belirtilen kısa devre akımı IM</p>
      <p>U0 = AC 230 V / 50 Hz</p>
      <p>IN Koruyucu cihazın nominal akımı</p>
      <p>IM Belirtilen kısa devre akımı</p>
      <p>gG/gL Sigorta gG/gL</p>
      <img src={tablo27} className={styles["w-350"]} />
    </div>

    <div className={styles["box"]}>
      <p>MCCB tip TMF / TMD / TMA (termomanyetik atma ünitesi) için belirtilen kısa devre akımı IM</p>
      <p className={styles["circle"]}>Koruyucu cihazın nominal akımı IN (A) cihazda belirtilmiştir.</p>
      <p className={styles["circle"]}>Belirtilen kısa devre akımı IM (A):</p>
      <p>– Sabit manyetik eşik tA ≤ 0,1 s ile MCCB: 10*IN*1,5.</p>
      <p>– Ayarlanabilir manyetik eşik ile MCCB için, potansiyometre ayarına bağlı olarak tA ≤ 0,1 s: X*IN*1,5.</p>
      <img src={şekil84} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>MCCB tip Micrologic 2.2 (elektronik atma ünitesi) için Belirtilen kısa devre akımı IM</p>
      <p className={styles["circle"]}>Koruyucu cihazın ani kavpistonalı kısa devre akımı Ii (A) cihazda belirtilmiştir.</p>
      <p className={styles["circle"]}>Belirtilen kısa devre akımı IM (A):</p>
      <p>– Ani kavpistonalı kısa devre akım koruma bulunan MCCB için: li*1,5.</p>
    </div>

    <div className={styles["box"]}>
      <h4>VF.X1: Ölçülen değer IK belirlendiği gibidir</h4>
      <div>{radio("vf_x1", { variant: "horizontal", inputArray: ["-","Yes","No"] })}
      </div>
      <h5 className={styles["subtitle"]}>Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
    </div>

    <div>{selectField("koruyucu_cihaz_tipi", "Koruyucu cihaz tipi ", 
        [ { _id: "1", name: "Sigorta (gG/gL)"},
          { _id: "2", name: "MCB B"},
          { _id: "3", name: "MCB C"},
          { _id: "4", name: "MCB D"},
          { _id: "5", name: "MCCB"},
          { _id: "6", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}</div>

      <div>{selectField("koruyucu_cihaz_derecesi_in", "Koruyucu cihaz derecesi IN (A)  ", 
        [ { _id: "1", name: "10"},
          { _id: "2", name: "13"},
          { _id: "3", name: "16"},
          { _id: "4", name: "20"},
          { _id: "5", name: "25"},
          { _id: "6", name: "32"},
          { _id: "7", name: "35"},
          { _id: "8", name: "40"},
          { _id: "9", name: "50"},
          { _id: "10", name: "63"},
          { _id: "11", name: "80"},
          { _id: "12", name: "100"},
          { _id: "13", name: "125"},
          { _id: "14", name: "160"},
          { _id: "15", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}</div>

<div>{inputLine("l1_olculen_deger_ik", "L1: Ölçülen değer IK (A) ")}
        <span className={styles["subtitle"]}>Belirtilen: Belirtilen IM (A) değerine başvurun.</span>
      </div>
      <div>{inputLine("l2_olculen_deger_ik", "L2: Ölçülen değer IK (A)  ")}
        <span className={styles["subtitle"]}>Belirtilen: Belirtilen IM (A) değerine başvurun.</span>
      </div>
      <div>{inputLine("l3_olculen_deger_ik", "L3: Ölçülen değer IK (A)  ")}
        <span className={styles["subtitle"]}>Belirtilen: Belirtilen IM (A) değerine başvurun.</span>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p>Beklenen toprak hata akımının (kısa devre akımı IK) ölçülen en düşük değeri belirtilen kısa devre akımı IM'den daha yüksektir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.10.4.1</p>
        <p>UYARI</p>
        <p>Bu ölçümler canlı voltajla yapılır.</p>
        <p className={styles["arrow"]}>Ölçüm aleti el kitabına başvurun.</p>
        <p className={styles["arrow"]}>Kabini kabin çatısına kolay erişim için konumlandırın.</p>
        <p className={styles["arrow"]}>Frekans dönüştürücü PE terminalinden (giriş tarafı) şunlara ölçüm yapın:</p>
        <p>– VF.X1:L1</p>
        <p>– VF.X1:L2</p>
        <p>– VF.X1:L3.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>
    
      <div className={styles["box"]}>
        <h3 className={styles["title"]}>RCD koruması </h3>
        <hr />
      </div>


      <div className={styles["box"]}>
        <h4>10.4.2.a Ana beslemenin RCD koruması ilgili standarda uygun mu? </h4>
        <div>{radio("10.4.2.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Frekans dönüştürücülü TT ağı</p>
      </div>

      <div className={styles["box"]}>
      <h4>Uygulanabilirliği belirtin  </h4>
      <div>{radio("uygulanabilirligini_belirtin", { variant: "circle", inputArray: 
        ["Sorumluluk Schindler'e ait. Bu SAIS kontrolü zorunludur",
         "Sorumluluk müşteriye aktarılmış ve teknik müdür tarafından doğrulanmış. Bu SAIS kontrolü gerekmez",
         "Frekans dönüştürücülü TT ağı yok. Bu SAIS kontrolü gerekmez"] })}</div>
         <h5 className={styles["subtitle"]}>Ayrıntılar için bkz. EJ 46200151 RCD'ler üzerinde NI/MOD Talimatı (SAIS) Asansörler ve Yürüyen Merdivenler</h5>
    </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>RCD genel terimi artık(kaçak) akım saptama bulunan herhangi bir cihazı kapsar.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test ayarı</p>
      </div>

    <div className={styles["box"]}>
      <p>Schindler standart ölçüm aracı "Fluke çok işlevli test cihazı" için ayarlama:</p>
      <p className={styles["arrow"]}>Döner anahtarı ΔT'ye (RCD atma süresi) ayarlayın.</p>
      <p className={styles["arrow"]}>Belirtilen ölçüm kablolarını kullanın.</p>
      <p className={styles["arrow"]}> F1 tuşuna basın. Kurulu RCD'nin derecesine bağlı olarak "300 mA", "500 mA" veya "p00 mA" (RCD derecesi) seçin.</p>
      <p className={styles["arrow"]}>F2 tuşuna basın. "x1" seçin (test akımı çarpanı).</p>
      <p className={styles["arrow"]}>F3 tuşuna basın. "ᴖ––ᴖ–" seçin (RCD test akımı "titreşimli akım").</p>
      <p className={styles["arrow"]}>F4 tuşuna basın. "0°" seçin (faz açısı)</p>
      <img src={şekil85} className={styles["w-300"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Ölçülen değer</p>
    </div>

    <div className={styles["box"]}>
        <h4>JH:1/L1 - JH:3/L2 - JH:5/L3: RCD koruma belirlendiği gibidir</h4>
        <div>{radio("jh_1_l1_jh_3_l2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        </div>
        <h5 className={styles["subtitle"]}>Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
      </div>

      <div>{selectField("rcd_tipi5", "RCD Tipi", 
        [ { _id: "1", name: "RCD B"},
          { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Belirtilen: RCD B</h5>
      </div>

      <div>{selectField("rcd_derecesi_ma4", "RCD Derecesi (mA) ", 
        [ { _id: "1", name: "300"},
          { _id: "2", name: "500"},
          { _id: "3", name: "1000"},
          { _id: "4", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Belirtilen: Kablolama şemasına başvurun.</h5>
      </div>

      <div>{inputLine("jh_1_l1_olculen_atama_suresi", "JH:1/L1: Ölçülen atma süresi (ms)", {variant: "border"})}
        <h5 className={styles["subtitle"]}>Belirtilen: ≤ 300 ms</h5>
      </div>
      <div>{inputLine("jh_3_l2_olculen_atama_suresi", "JH:3/L2: Ölçülen atma süresi (ms)", {variant: "border"})}
        <h5 className={styles["subtitle"]}>Belirtilen: ≤ 300 ms</h5>
      </div>
      <div>{inputLine("jh_5_l3_olculen_atama_suresi", "JH:5/L3: Ölçülen atma süresi (ms) ", {variant: "border"})}
        <h5 className={styles["subtitle"]}>Belirtilen: ≤ 300 ms</h5>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Belirtilen RCD tip B kuruludur.</p>
        <p className={styles["circle"]}>Ölçülen atma süresi belirtildiği gibidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.10.4.2.a</p>
        <p>UYARI</p>
        <p>Bu ölçümler canlı voltajla yapılır.</p>
        <p className={styles["arrow"]}>Ölçüm araçlarının doğru ayarlandığından emin olun.</p>
        <p className={styles["arrow"]}>Ana besleme JH'nin RCD korumasını inceleyin.</p>
        <p>– JFIH için RCD tip B'nin monte edildiğinden emin olun.</p>
        <p>– Besleme modülünde PE terminalinden JH (giriş tarafı) kısmına ölçüm yapın:</p>
        <p className={styles["circle"]}>JH:1/L1</p>
        <p className={styles["circle"]}>JH:3/L2</p>
        <p className={styles["circle"]}>JH:5/L3.</p>
        <p>– ΔT atma süresini kurulu RCD derecesine bağlı olarak doğru anma kaçak akımı IΔN ile ölçün.</p>
        <p>– RCD'yi resetleyin.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

      <div className={styles["box"]}>
        <h4>10.4.2.b Dahili asansör devrelerinin RCD koruması ilgili standarda göre mi? </h4>
        <div>{radio("10.4.2.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>RCD genel terimi artık(kaçak) akım saptama bulunan herhangi bir cihazı kapsar.</p>
      </div>
      
      <div className={styles["box"]}>
        <p>Test ayarı</p>
      </div>


    <div>
      <p>Schindler standart ölçüm aracı "Fluke çok işlevli test cihazı" için ayarlama:</p>
      <p className={styles["arrow"]}>Döner anahtarı <IoTriangleOutline />T'ye (RCD atma süresi) ayarlayın.</p>
      <p className={styles["arrow"]}>Belirtilen ölçüm kablolarını kullanın.</p>
      <p className={styles["arrow"]}> F1 tuşuna basın. Kurulu RCD'nin derecesine bağlı olarak "300 mA", "500 mA" veya "p00 mA" (RCD derecesi) seçin.</p>
      <p className={styles["arrow"]}>F2 tuşuna basın. "x1" seçin (test akımı çarpanı).</p>
      <p className={styles["arrow"]}>F3 tuşuna basın. "ᴖ––ᴖ–" seçin (RCD test akımı "titreşimli akım").</p>
      <p className={styles["arrow"]}>F4 tuşuna basın. "0°" seçin (faz açısı)</p>
      <img src={şekil86} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
          <p>Ölçülen değer</p>
        </div>

    <div className={styles["box"]}>
        <h4>SIL:2 (kabin aydınlatması): RCD koruması belirtildiği gibidir </h4>
        <div>{radio("sil_2", { variant: "horizontal", inputArray: ["-", "Yes", "No"] })}
        <p>Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</p>
        </div>
    </div>

    <div>{selectField("rcd_tipi6", "RCD Tipi ", 
        [ { _id: "1", name: "RCD A"},
          { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Belirtilen: RCD A</h5>
    </div>

    <div>{selectField("rcd_derecesi_ma5", "RCD Derecesi (mA)", 
        [ { _id: "1", name: "30"},
          { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Belirtilen: 30 mA</h5>
    </div>

    <div>{inputLine("olculen_atma_suresi", "Ölçülen atma süresi (ms)")}
        <span className={styles["subtitle"]}>Belirtilen: ≤ 300 ms</span>
      </div>

      <div className={styles["box"]}>
        <h4>SIBS:2 (kuyu aydınlatması): RCD koruması belirtildiği gibidir </h4>
        <div>{radio("sibs_2_kuyu_aydinlatmasi", { variant: "horizontal", inputArray: ["-", "N/A ","Yes", "No"] })}
        <h5 className={styles["subtitle"]}>Sorumluluk müşteriye aktarılmış ve teknik müdür tarafından doğrulanmışsa bu ölçüm geçerli değildir. / Belirlendiği gibi değilse HAYIR'ı seçin ve bulguları kaydedin</h5>
        </div>
      </div>

      <div>{selectField("rcd_tipi7", "RCD Tipi ", 
          [ { _id: "1", name: "RCD A"},
            { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <h5 className={styles["subtitle"]}>Belirtilen: RCD A</h5>
      </div>

    <div>{selectField("rcd_derecesi_ma6", "RCD Derecesi (mA)", 
        [ { _id: "1", name: "30"},
          { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Belirtilen: 30 mA</h5>
    </div>

    <div>{inputLine("olculen_atma_suresi2", "Ölçülen atma süresi (ms)")}
        <span className={styles["subtitle"]}>Belirtilen: ≤ 300 ms</span>
      </div>


      <div className={styles["box"]}>
        <h4>SIS:1 (kontrol, kabin, makina ve makina freni arayüzü): RCD koruması belirtildiği gibidir</h4>
        <div>{radio("sis_1_kuyu_aydinlatmasi", { variant: "horizontal", inputArray: ["-","Yes", "No"] })}
        <h5 className={styles["subtitle"]}>Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</h5>
        </div>
      </div>

      <div>{selectField("rcd_tipi8", "RCD Tipi ", 
          [ { _id: "1", name: "RCD A"},
            { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <h5 className={styles["subtitle"]}>Belirtilen: RCD A</h5>
      </div>

    <div>{selectField("rcd_derecesi_ma7", "RCD Derecesi (mA)", 
        [ { _id: "1", name: "30"},
          { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <h5 className={styles["subtitle"]}>Belirtilen: 30 mA</h5>
    </div>

    <div>{inputLine("olculen_atma_suresi3", "Ölçülen atma süresi (ms)")}
        <span className={styles["subtitle"]}>Belirtilen: ≤ 300 ms</span>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Belirtilen RCD tip A kuruludur.</p>
        <p className={styles["circle"]}>Ölçülen atma süresi belirtildiği gibidir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.10.4.2.b</p>
        <p>UYARI</p>
        <p>Bu ölçümler canlı voltajla yapılır.</p>
        <p className={styles["arrow"]}>Ölçüm araçlarının doğru ayarlandığından emin olun.</p>
        <p className={styles["arrow"]}>Kabin aydınlatmasının (SIL) RCD korumasını inceleyin.</p>
        <p>– RCD tip A'nın kurulu olduğundan emin olun.</p>
        <p>– Besleme modülünde PE terminalinden SIL (çıkış tarafı) kısmına ölçüm yapın:</p>
        <p className={styles["circle"]}>SIL:2.</p>
        <p>– Anma kaçak akım IΔN 30 mA ile atma süresi ΔT ölçün.</p>
        <p>– RCD'yi resetleyin.</p>
        <p className={styles["arrow"]}>Gerekliyse kuyu aydınlatmasının (SIBS) RCD korumasını inceleyin.</p>
        <p>– RCD tip A'nın kurulu olduğundan emin olun.</p>
        <p>– Besleme modülünde PE terminalinden SIBS (çıkış tarafı) kısmına ölçüm yapın:</p>
        <p className={styles["circle"]}>SIBS:2.</p>
        <p>– Anma kaçak akım IΔN 30 mA ile atma süresi ΔT ölçün.</p>
        <p>– RCD'yi resetleyin.</p>
        <p className={styles["arrow"]}>Kontrol, kabin, makina ve makina freni arayüzünün RCD korumasını inceleyin (SIS).</p>
        <p>– RCD tip A'nın kurulu olduğundan emin olun.</p>
        <p>– Besleme modülünde PE terminalinden SIS'ye (çıkış tarafı) kadar ölçüm yapın:</p>
        <p className={styles["circle"]}>SIS:1.</p>
        <p>– Anma kaçak akım IΔN 30 mA ile atma süresi ΔT ölçün.</p>
        <p>– RCD'yi resetleyin.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>

      <div className={styles["box"]}>
        <h3 className={styles["title"]}>Toprak hata saptaması  </h3>
        <hr />
      </div>

      <div className={styles["box"]}>
        <h4>10.4.5 Emniyet devresi toprak hata saptama ilgili standarda göre mi  </h4>
        <div>{radio("10.4.5", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        </div>
        <p>[#2.2]</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>SMLCD üzerinde, T1, T2, T3A, T3B, T4, ve T5 kapalıdır (beyaz zeminde siyah karakterler) ve emniyet devresini açık gösterir.</p>
        <p className={styles["circle"]}>SMLCD '1590' hatası ile 'Blk Perm' (Kalıcı Blokaj) mesajını gösterir.</p>
      </div>

      <div className={styles["box"]}>
        <p>Test yöntemi m.10.4.5</p>
        <p className={styles["arrow"]}>Emniyet devresinin kapalı olduğundan emin olun.</p>
        <p className={styles["arrow"]}>Emniyet devresi toprak hata saptama kısmını ölçün.</p>
        <p>– Emniyet devresi WAGO HK:5 fişi üzerinde toprağa (PE) bir tel köprüsü takın.</p>
        <p>– Emniyet devresinde bir kısa devre yapın.</p>
        <p>– Emniyet devresi WAGO fişi üzerinde toprağa (PE) giden tel köprüyü ayırın.</p>
        <p className={styles["arrow"]}>Sonuçları kontrol edin.</p>
        <p>Geçildi:</p>
        <p>– SMLCD üzerinde, T1, T2, T3A, T3B, T4, ve T5 kapalıdır (beyaz zeminde siyah karakterler) ve emniyet devresini açık gösterir.</p>
        <p>– SMLCD '1590' hatası ile 'Blk Perm' (Kalıcı Blokaj) mesajını gösterir.</p>
        <p>Başarısız:</p>
        <p>– SMLCD üzerinde, T1, T2, T3A, T3B, T4 veya T5 açıktır (siyah zeminde beyaz karakterler) ve kapalı bir emniyet devresini gösterir.</p>
        <p>– SMLCD '1590' hatası ile 'Blk Perm' (Kalıcı Blokaj) mesajını göstermez.</p>
        <p className={styles["arrow"]}>Sistemi geri yükleyin.</p>
        <p>– SMLCD: Commands (Komutlar) → Clr Blocking (Blokajı Gider) → Ok? (Tamam?).</p>
        <p>– Asansörün normal çalışma modunda olduğundan emin olun.</p>
      </div>
      


      <div className={styles["box"]}>
        <h3 className={styles["title"]}>Elektriksel ölçümleri doğrulama </h3>
        <hr />
      </div>

      <p>KG zorunlu tutuyorsa, aşağıdakileri doğrulayın:</p>
      <p className={styles["circle"]}>Tüm elektrik kontrol ve ölçümleri doğru şekilde yapılmış ve tamamlanmıştır.</p>
      <p className={styles["circle"]}>Tüm bulgular kaydedilmiştir.</p>

      <div>{inputLine("şirket1", "Şirket", {variant: "border"})}
        <h5 className={styles["subtitle"]}>[#2.2] / Bu asansör için resmi olarak elektriksel ölçümler yapmaya yetkili şirket</h5>
      </div>
      <div>{inputLine("sais_denetcisi_tekrar_denetleyen2", "SAIS Denetçisi / Tekrar denetleyen  ", {variant: "border"})}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
      </div>
      <div>{inputLine("yer1", "Yer", {variant: "border"})}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
      </div>
      <div>{inputLine("tarih3", "Tarih", {variant: "border"})}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
      </div>

      {/* İMZA */}
      {/* İMZA */}
      {/* İMZA */}
      {/* İMZA */}

      <div className={styles["box"]}>
        <h3 className={styles["title"]}>16 Son kontroller  </h3>
        <hr />
      </div>

      <div className={styles["box"]}>
        <h4>11.12 Emniyet bileşeni/bileşenleri verileri toplanmış mı </h4>
        <div>{radio("11.12", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2]</p>
        </div>
      </div>

      <div className={styles["box"]}>
        <p>Uygulanabilirlik</p>
        <p>Asansör Direktifi 2014/33/EU adli bölgelerine uyan KG'ler</p>
      </div>

      <div className={styles["box"]}>
        <p>Not</p>
        <p>Emniyet bileşeni verileri şu yöntemlerden biri ile toplanabilir:</p>
        <p className={styles["circle"]}>TraceLink uygulaması ile elektronik olarak</p>
        <p className={styles["circle"]}>Manuel olarak belge J 46200087 Emniyet Bileşeni Veri Toplama LD 2014/33/EU ile.</p>
      </div>

      <div className={styles["box"]}>
        <h4>11.13.1.a Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (Schindler sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.1.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>

      <div className={styles["box"]}>
        <h4>Schindler sorumluluğundaki ek bulgular </h4>
        <div>{radio("schindler_sorumlulugundaki_ek_bulgular", { variant: "horizontal", inputArray: ["Yes","No"] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <h4>11.13.1.b Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (Schindler sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.1.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.1.c Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili Schindler bulguları)  </h4>
        <div>{radio("11.13.1.c", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.1.d Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili Schindler bulguları)  </h4>
        <div>{radio("11.13.1.d", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.1.e Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili Schindler bulguları)</h4>
        <div>{radio("11.13.1.e", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.1.f Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili Schindler bulguları)  </h4>
        <div>{radio("11.13.1.f", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.1.g Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili Schindler bulguları)   </h4>
        <div>{radio("11.13.1.g", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.1.h Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili Schindler bulguları)</h4>
        <div>{radio("11.13.1.h", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.1.i Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili Schindler bulguları)  </h4>
        <div>{radio("11.13.1.i", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.1.j Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili Schindler bulguları)  </h4>
        <div>{radio("11.13.1.j", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.a Asansörde SAIS incelemesi bulgularına ek olarak herhangi bir güvenlikle ilgili uyumsuzluk yok mu (ilgili müşteri bulguları) </h4>
        <div>{radio("11.13.2.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>

      <div className={styles["box"]}>
        <h4>Müşteri sorumluluğundaki ek bulgular </h4>
        <div>{radio("musteri_sorumlulugundaki_ek_bulgular", { variant: "horizontal", inputArray: ["Yes","No"] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <h4>11.13.2.b Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.c Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.c", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.d Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.d", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.e Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.e", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.f Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.f", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.g Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.g", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.h Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.h", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.i Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.i", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>11.13.2.j Asansörde SAIS incelemesi bulgularına ek olarak güvenlikle ilgili herhangi bir uyumsuzluk yok mu (müşteri sorumluluğundaki bulgular)</h4>
        <div>{radio("11.13.2.j", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2] Ek bulgular varsa her bulguyu ayrı olarak kaydedin. Müşteri için açık madde listesinde (OIL) her bulguyu kaydedin.</p>
        </div>
      </div>

      <div>
        <p>Son kontroller</p>
        <p className={styles["arrow"]}>Aşağıdakilerden emin olun:</p>
        <p>– Asansör normal çalışma modundadır.</p>
        <p>– Çalışma yerinden tüm aletler kaldırılmıştır.</p>
        <p>– SAIS kontrolleri ve testleri için kullanılan tüm elektriksel köprüler kaldırılmıştır.</p>
        <p className={styles["arrow"]}>Gerekliyse SAIS incelemesini kayıt defterine kaydedin</p>
      </div>

      <div>
        <p>SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız:</p>
        <p className={styles["arrow"]}>SAIS incelemesinin tüm negatif bulgularını belge J 43401256 açık madde listesinin (OIL) ilgili bölümüne kaydedin.</p>
        <p className={styles["arrow"]}>SAIS incelemesi için emniyetle ilgili seçenekler için daha fazla belge (örneğin bir SAIS Ek belgesi) kullanıldıysa:</p>
        <p>– Tüm belirtilen kontroller ve testlerin tamamlandığından ve tüm kabul kriterlerinin karşılandığından emin olun.</p>
        <p>– Bu belgeyi/belgeleri SAIS belgesiyle birlikte sağlayın.</p>
        <p className={styles["arrow"]}>Bu belgelerin tamamlanmış ve imzalanmış olduğundan emin olun:</p>
        <p>– SAIS inceleme raporu</p>
        <p>– Açık madde listesi (OIL).</p>
        <p className={styles["arrow"]}>SAIS inceleme raporu ve açık madde listesini (OIL) asansörden sorumlu Schindler ticari ünitesine (örneğin KG, MDC, TRD, Dual Brand, KW veya Şube Ofisi) gönderin.</p>
      </div>


      <div className={styles["box"]}>
        <h3 className={styles["title"]}>17 İnceleme imzalama </h3>
        <hr />
      </div>


      <div className={styles["box"]}>
        <h4>12.1 Asansör halkın kullanımına sokulabilir mi </h4>
        <div>{radio("12.1", { variant: "horizontal", inputArray: ["-","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        <h5 className={styles["subtitle"]}>[#2.2] ON 0-17025: Geçici izin/uyum beyanı YOKTUR. Asansör mevzuatla ve kurallarla uyumludur veya değildir.</h5>
        </div>
      </div>



      <div className={styles["box"]}>
        <p>Not</p>
        <p className={styles["circle"]}> <IoTriangleOutline style={{rotate: "180deg ", width:"10px"}}  />(“üçgen”) ile gösterilen bulgular için:</p>
        <p>- <IoTriangleOutline style={{rotate: "180deg ", width:"10px"}} />(üçgen”) ile işaretlenmiş ve açık madde listesi (OIL) belgesinde kaydedilmiş tüm bulgular kapatılmadan asansör halkın hizmetine girmesi için
        onaylanmamalıdır</p>
        <p>– Tekrar çalışma ve tekrar inceleme gereklidir.</p>
        <p>– Tekrar inceleme bir SAIS Denetçisi tarafından yapılmalıdır.</p>
        <p className={styles["circle"]}> □ ("kare") ile gösterilen bulgular için:</p>

        <p>– Asansör kamu hizmeti için onaylanabilir.</p>
        <p>Kamu kullanımı için yayınlanmış / erişilebilir 3665 DoC (uyum beyanı) faaliyetinin onaylanmasından sonra en geç 4 hafta içinde tekrar çalışma ve
        tekrar inceleme gereklidir.</p>
        <p>–  <IoSquareOutline style={{width:"10px"}} /> (“kare”) ile işaretlenmiş tüm bulguların tekrar incelenmesi bir SAIS Ana Eğitmeni tarafından eğitilmiş ve SAIS tekrar incelemeleri yapmak üzere
        sertifikalı ve tekrar inceleme sonuçlarını bir SAIS denetçisine bildiren, NI'dan bağımsız bir teknik saha uzmanı tarafından yapılabilir. Bu sürece spesifik
        bir KG dahili kalite güvencesi mevcutsa SAIS denetçisinin bu tekrar inceleme sonuçlarını kabul etmesine izin verilir</p>
        <p className={styles["circle"]}>Açık madde listesi (OIL) belgesinde kaydedilen ve <IoTriangleOutline style={{rotate: "180deg ", width:"10px"}} /> (“üçgen”) veya <IoSquareOutline style={{width:"10px"}} /> (“kare”) ile belirtilen tüm bulguların kapatılması bir SAIS denetçisi tarafından
        doğrulanmalıdır.</p>
      </div>

      <div className={styles["box"]}>
        <p>Kabul kriterleri</p>
        <p className={styles["circle"]}>Tüm testler şuna göre yapılmıştır</p>
        <p>– Bu belgede ana hatları verilen ayarlar, işlemler ve kabul kriterleri.</p>
        <p>– Herhangi bir ek yetkili makam gereklilikleri.</p>
        <p className={styles["circle"]}><IoTriangleOutline style={{rotate: "180deg ", width:"10px"}} />(“üçgen”) veya <IoSquareOutline style={{width:"10px"}} /> (“kare”) ile geçen tüm bulgular tekrar çalışma ve tekrar inceleme için açık madde listesine (OIL) kaydedilir.</p>
        <p className={styles["circle"]}><IoTriangleOutline style={{rotate: "180deg ", width:"10px"}} />(“üçgen”) ile gösterilen negatif bir bulgu saptanmamıştır.</p>
        <p className={styles["circle"]}>Eğer emniyetle ilgili seçenekler (örneğin spesifik bir SAIS Ek belgesi) için ek belge(ler) geçerliyse:</p>
        <p>– Emniyetle ilgili tüm seçenekler için SAIS denetimi yapılır.</p>
        <p><IoTriangleOutline style={{rotate: "180deg ", width:"10px"}} />(“üçgen”) ile gösterilen negatif bir bulgu saptanmamıştır.</p>
      </div>
      

      <p>SAIS incelemesinin tamamlandığını doğrulayın.</p>

      <div>{inputLine("şirket2", "Şirket")}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
      </div>
      <div>{inputLine("sais_denetcisi_tekrar_denetleyen3", "SAIS Denetçisi / Tekrar Denetleyen ")}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
      </div>
      <div>{inputLine("tarih4", "Tarih")}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
      </div>
      <p>Tekrar inceleme yapan SAIS Denetçisi imzayla tekrar incelenen maddeler için sorumluluk alır. SAIS Denetçisi önceki SAIS incelemeleri/tekrar
      incelemelerinde kayıt edilmemiş uygunsuzluklar saptarsa SAIS Denetçisi bulguları açık madde listesine (OIL) kaydetmelidir.</p>

      {/* İMZA */}
      {/* İMZA */}
      {/* İMZA */}
      {/* İMZA */}

      <p>Asansörler Direktifi 2014/33/EU, Ek V, Vlll, X, XI ve Xll ile buradaki hükümlerle uyumu belirlemek üzere uyumlu şekilde yapılmıştır.</p>
      
    </div>
  );
};
export default EN81_50_2;
