import { TFile, useNewDataModalStore } from "../../../../../newDataModalStore";
import Radio from "../../components/Radio/Radio";
import Checkbox from "../../components/Checkbox/Checkbox";
import InputLine from "../../components/InputLine/InputLine";
import { useModulePageStore } from "../../../../../../../modulePageStore";
import { IoSquareOutline, IoTriangleOutline } from "react-icons/io5";
import ReactDOMServer from "react-dom/server";
import { ReactNode } from "react";
import SelectField from "../../../../../../../../../components/inputs/SelectField/SelectField";
import styles from "./EN81_50.module.scss";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import DateInput from "../../components/DateInput/DateInput";


import eye from '../../assets/eye.png'
import stop from '../../assets/stop.png'
import attention from '../../assets/attention.png'
import ray from '../../assets/ray.png'
import ray2 from '../../assets/ray2.png'
import ray3 from '../../assets/ray3.png'
import ray4 from '../../assets/ray4.png'
import ray5 from '../../assets/ray5.png'
import ray6 from '../../assets/ray6.png'
import ray7 from '../../assets/ray7.png'
import ray8 from '../../assets/ray8.png'
import ray9 from '../../assets/ray9.png'
import ray10 from '../../assets/ray10.png'
import photo1 from '../../assets/photo1.png'
import asansor1 from '../../assets/asansor1.png'
import asansor2 from '../../assets/asansor2.png'
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
import şekil1 from '../../assets/şekil1.png'
import şekil2 from '../../assets/şekil2.png'
import şekil3 from '../../assets/şekil3.png'
import şekil4 from '../../assets/şekil4.png'
import şekil5 from '../../assets/şekil5.png'
import şekil6 from '../../assets/şekil6.png'
import şekil17 from '../../assets/şekil17.png'
import şekil18 from '../../assets/şekil18.png'
import şekil19 from '../../assets/şekil19.png'
import şekil20 from '../../assets/şekil20.png'
import şekil21 from '../../assets/şekil21.png'
import şekil22 from '../../assets/şekil22.png'
import şekil23 from '../../assets/şekil23.png'
import şekil24 from '../../assets/şekil24.png'
import şekil25 from '../../assets/şekil25.png'


const SAIS5500 = ({ handleInputChange, files, setFiles }: { handleInputChange: (e: any) => void; files: TFile; setFiles: (state: TFile) => void }) => {
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
    <div className={styles.container}>

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
           "SES5 Rel. 02",
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
          {checkbox("rapport5", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>TSG T7007-2022</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport6", { variant: "rect" })}
          <span className={styles["checkbox-label"]}>Uluslararası kanunlar ve standartlardan yerel sapmalar</span>
        </div>
        <div className={styles.checkbox}>
          {checkbox("rapport7", { variant: "rect" })}
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
      <div>
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

      <div>
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

      <div>
        <p>SAIS kontrolleri ve testlerini yapmak için her zaman harici ESE panelini kullanın.</p>
        <img src={attention}  className={styles["eye-image"]} />
      </div>
      <div>
        <h3 className={styles["title"]}>SAIS doküman ayrıntıları</h3>
        <hr />
      </div>

      <div>
        <p>R__46200207_02 ES1/ES5.0/ES5 Rel. 02 EN 81-20 / EN 81-50 - SAIS kabul inceleme raporu</p>
        <br/>
        <p>
        Bu belge, piyasaya sürülmüş İngilizce master versiyonunun bir çevirisidir.<br />
        KA No.: 600147 / KA Tarih: 15.10.2022<br />
        Belge versiyonu: J/R_46200207_02<br />
        Dil: TR
        </p>
        <p>Sınıflandırma: 11010 / Merkez büro: GS0<br/>
        Çeviri Bürosu: GL0</p>
      </div>
      
      <ol>
        <li className={styles["arrow"]}>Bu belge:</li>
       <li> – Yeni bir asansörün SAIS incelemesi için gerekli kontroller ve testlerin nasıl yapılacağı konusunda talimat içerir.</li>
        <li>– Makine daireli ve dairesiz çekiş asansörleri için geçerlidir.</li>
        <li>– Sadece %100 standart asansör sistemi ES1 Rel. 02, ES5.0 Rel. 02 veya ES5 Rel. 02 ve yazılım versiyonu v11.xx.xx veya üstü olan SC 1 kontrolün kombinasyonunda geçerlidir. Belirtilen dışında yazılım versiyonları için testler farklılık gösterebilir.</li>
        <li className={styles["circle"]}>SAIS denetimi sırasında SAIS Denetçisinin Kılavuzu içinde tanımlanan uluslararası standartlarından yerel sapmalar dikkate alınmalıdır. Uluslararası
        standartlara göre daha katı yerel sapmalar veya ek standartlar geçerliyse bunlar dikkate alınmalıdır.</li>
        <li className={styles["circle"]}>Herhangi bir modifiye veya uyarlanmış asansör için SAIS belgesi J 46200093 Schindler genel çekiş EN 81-20 / EN 81-50 Denetçinin kılavuzu kullanılmalıdır.</li>
      </ol>

      <ol>
        <li>Semboller ve tanımlar</li>
        <li className={styles["circle"]}>uid: Kontroller ve testler için özel tanımlama numarası</li>
        <li className={styles["circle"]}>N/A: Denetlenen asansör için uygulanabilir değildir</li>
        <li className={styles["circle"]}>Fixed: Bulgu mevcut SAIS incelemesi sırasında düzeltilmiştir. Son kontrol veya test neticesi pozitiftir.</li>
        <li className={styles["circle"]}>Fixed: Bulgu mevcut SAIS incelemesi sırasında düzeltilmiştir. Son kontrol veya test neticesi pozitiftir.</li>
        <li className={styles["circle"]}>Evet: Kontrol veya testin sonucu pozitiftir.</li>
        <li className={styles["circle"]}> □ Hayır: Kontrol veya testin sonucu negatiftir. Potansiyel emniyet riski. Asansör halkın kullanımına sokulabilir. Tüm bulguları, kamu kullanımı için yayınlanmış / erişilebilir 3665 DoC (uyum beyanı) faaliyetinin onaylanmasından sonra en geç 4 hafta içinde düzeltme için açık madde listesine (OIL)
        kaydedin.</li>
        <li className={styles["circle"]}> ∇ Hayır: Kontrol veya testin sonucu negatiftir. Acil emniyet riski. Asansör halkın kullanımına sokulmamalıdır. Düzeltme için tüm bulguları açık madde listesine (OIL) kaydedin.</li>
        <li className={styles["circle"]}>* (yıldız işareti): Zorunlu alan</li>
        <li className={styles["circle"]}>ARTI (+) işareti (sadece eSAIS için kullanılabilir): Belirli bir bulgunuz varsa bulguyu kaydedin. Bir metin yazın veya fotoğraf çekin. Kontrol veya test sonucu negatifse bulgu açık madde listesine (OIL) kaydedilir.</li>
        <li className={styles["circle"]}>Kırmızı STOP işareti: Kontrol veya testin kabul kriterleri karşılanmazsa SAIS incelemesini hemen durdurun.</li>
        <li className={styles["circle"]}>GÖSTER/GİZLE işareti (sadece eSAIS için): Bir seçenek seçerseniz sadece o seçenekle ilişkili SAIS kontrolleri ve testleri gösterilir. Seçilmeyen seçeneklerle ilişkili SAIS kontrolleri ve testleri gösterilmez. Herhangi bir seçenek seçmezseniz ilişkili bir SAIS kontrolü ve testi gösterilmez.</li>
        <li className={styles["circle"]}>OK <span className={styles["arrow"]}></span> işareti: Görev, eylem adımı</li>
        <li>Bir seçenek seçmeniz gerekiyorsa farklı liste tipleri size seçenekleri gösterir.</li>
        <li className={styles["circle"]}>(sadece eSAIS için) Sadece bir seçenek seçilebilirse ama daha fazla seçenek yüklenmiş ve onaylanmışsa:</li>
        <li>– Bir seçenek seçin.</li>
        <li>– ARTI (+) işaretine dokunun ve kalan seçenekleri kaydedin.</li>
      </ol>

      <ol>
        <li className={styles["circle"]}>SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız seçenekleri resimde gösterildiği gibi seçin.</li>
        <li>1 Sadece bir seçenek seçin (yuvarlak sembollü liste)</li>
        <li>2 Sadece bir seçenek seçin (sembolsüz liste)</li>
        <li>3 Bir veya daha fazla seçenek seçin (köşeli sembollü liste)</li>
        <p>Not: Liste tipi sadece tek seçenek seçilmesine izin veriyorsa ama daha fazla seçenek yüklenmiş ve onaylanmışsa listede tüm yüklenmiş ve onaylanmış seçenekleri seçin</p>
        <img src={photo1}  className={styles["section-image"]} />
      </ol>

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
        <div>{radio("urunhatti3", { variant: "circle", inputArray: 
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
      <div>{inputLine("stm_adedi", "STM adedi ZZ (-)")}</div>
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

      <div>{inputLine("diger_kat_kapisi_tipi", "Diğer")}
        <p className={styles["subtitle"]}>Kat kapısı kilidinin tipini belirtin.</p>
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
      <h4>11.2 Çalıştırma el kitapları ve asansör günlüğü yerel dilde mevcut mu?</h4>
      <div>{radio("11.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
        <div>{radio("11.8", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}</div>
        <p className={styles["subtitle"]}>[#2.2]</p>
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
      <h4>10.2.1 Binadan gelen koruyucu iletkenin (PE) kesit alanı ilgili standart / çizime göre mi</h4>
      <div>{radio("10.2.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
      <div>
        <h5>Bu kabul kriterlerinden birini seçin:</h5>
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
      <h4>2.11.1 Makina dairesi erişim kapıları veya kurtarma kapıları ilgili standarda göre mi</h4>
      <div>{radio("2.11.1", { variant: "horizontal", inputArray: ["-", "N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
    </div>

    <div className={styles["box"]}>
      <h4>2.2.4 Kabin, kuyu ve makine dairesinde aydınlatmanın bağımsız kaynağı ve koruması var mı</h4>
      <div>{radio("2.2.4", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>3.7.3.a Kuyu aydınlatması makina dairesi veya kumanda panosunda, diğer tüm kuyu ışığı şalterlerinden bağımsız olarak çalıştırılabiliyor mu </h4>
      <div>{radio("3.7.3.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
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
      <h4>6.0.11 Sabit revizyon kontrol paneli/panelleri doğru çalışıyor mu </h4>
      <div>{radio("6.0.11", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>10.4.8.a Emniyet devresi kontakları ilgili standarda göre mi </h4>
      <div>{radio("10.4.8.a", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>2.3.1.b Kumanda panosunun boyutları ve emniyet açıklıkları ilgili standartlara göre mi</h4>
      <div>{radio("2.3.1.b", { variant: "horizontal", inputArray: ["-", "N/A" ,"Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>2.3.1.d Kumanda panosunun boyutları ve emniyet açıklıkları ilgili standartlara göre mi</h4>
      <div>{radio("2.3.1.d", { variant: "horizontal", inputArray: ["-", "N/A" ,"Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>2.3.2 Merdivenler veya basamaklar ve korkuluklar monte edilmiş mi</h4>
      <div>{radio("2.3.2", { variant: "horizontal", inputArray: ["-", "N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>2.3.3 Girintiler ve kanallar çevrelenmiş mi</h4>
      <div>{radio("2.3.3", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>2.13.1 Kuyuya nesneler ve/veya insanların düşmesine karşı koruma mevcut mu</h4>
      <div>{radio("2.13.1", { variant: "horizontal", inputArray: ["-", "N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>2.5.1 Gerekli uyarılar, ikazlar ve işaretler yerleştirilmiş mi</h4>
      <div>{radio("2.5.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>5.1.19 STM etiketi doğru konuma yerleştirilmiş ve STM etiketi üzerindeki STM üretim tarihi doğru mu</h4>
      <div>{radio("5.1.19", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h4>2.8.1 Belirtilen kontrol kurulu mu  </h4>
      <div>{radio("2.8.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div>{selectField("control_type2", "Kontrol tipi", 
        [ { _id: "1", name: "CO SC 1"},
          { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p>Belirtilen: CO SC 1</p>
    </div>
    <div>{inputLine("yazilim_versiyonu2", "Yazılım versiyonu ")}</div>

    <div className={styles["box"]}>
      <h4>2.8.2 Fren tipi şalteri doğru pozisyonda ayarlı m </h4>
      <div>{radio("2.8.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.7.j İstenmeyen kabin hareketi koruma cihazının/cihazlarının tip etiketi, yerleşim çiziminde mevcut mu</h4>
      <div>{radio("4.2.7.j", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>5.1.14 Makina destek kirişleri yerleşim çizimine göre monte edilmiş ve tutturulmuş mu </h4>
      <div>{radio("5.1.14", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>5.1.17 Makina desteğindeki tutturucu cıvatalar doğru monte edilmiş mi </h4>
      <div>{radio("5.1.17", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>2.14.1.a Ağır bileşenleri kaldırmak için doğru yollar mevcut mu ve yerleşim çizimine göre maksimum kaldırma kapasitesiyle işaretli mi</h4>
      <div>{radio("2.14.1.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>2.10.1 Makine dairesi havalandırması yerleşim çizimine göre mi </h4>
      <div>{radio("2.10.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.4.14.a Dönen makaralar ve çekiş kasnakları korumalı mı ve STM'ler gerektiği şekilde kurulu mu </h4>
      <div>{radio("3.4.14", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.16.a Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı</h4>
      <div>{radio("4.1.16.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>2.16.2 Makina dairesinde üçüncü parti ekipman bulunmuyor mu </h4>
      <div>{radio("2.16.2", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>2.9.1.b Kurtarma çalışması için manuel fren açma kolu mevcut ve işlevsel mi ve fren açma mekanizmasının hareket serbestisi kurulum el kitabına göre mi</h4>
      <div>{radio("2.9.1.b", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>2.9.4 Otomatik bir tahliye besleme cihazı (AESD) kurulu ve işlevsel mi</h4>
      <div>{radio("2.9.4", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.4.16 Kullanıcı talimatı ve emniyet uyarılarının olduğu bir etikete sahip kat kapısı kilidi açma anahtarı mevcut mu </h4>
      <div>{radio("4.4.16", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>2.12.1 Makine dairesi/kumanda panosu ile kabin içi arasında acil güç kaynağına sahip bir haberleşme cihazı var mı</h4>
      <div>{radio("2.12.1", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>3.2.2 Azaltılmış tampon hareketi için uyarı işareti manuel fren açma kolu yakınında monte edilmiş mi</h4>
      <div>{radio("3.2.2", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>6 Kabin çatısı </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>4.2.1 Acil durdurma şalteri/şalterleri (JHC) kolay erişilebilir, işaretli ve işlevsel mi </h4>
      <div>{radio("4.2.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.2.3.g İnceleme kontrolü kuyu dışından resetlenebiliyor mu ve resetleme işlemi bir uyarı sinyali ile doğrulanıyor mu </h4>
      <div>{radio("4.2.3.g", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.1.2.a Kabin çatısına girmesine izin verilen kişi sayısı ilgili standarda / yerleşim çizimine göre kabin çatısının herhangi bir giriş noktasında
      belirtilmiş mi?</h4>
      <div>{radio("3.1.2.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>2.15.1.c Çok sayıda asansör açıkça işaretli mi </h4>
      <div>{radio("2.15.1.c", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.3.a İnceleme kontrolü erişilebilir ve işlevsel mi </h4>
      <div>{radio("4.2.3.a", { variant: "horizontal", inputArray: ["-" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.1.7.c Acil durum alarm cihazı ve acil durum aydınlatması işlevsel mi </h4>
      <div>{radio("4.1.7.c", { variant: "horizontal", inputArray: ["-" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>10.4.8.b Emniyet devresi kontakları ilgili standarda göre mi</h4>
      <div>{radio("10.4.8.b", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>2.2.3.b En az bir priz çıkışı kurulu ve işlevsel mi? </h4>
      <div>{radio("2.2.3.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.2.17 Kabin çatısı uzatmaları ilgili standarda göre mi</h4>
      <div>{radio("4.2.17", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.2.6 Yük kapasitesi ve kabin çatısında ayakta durma bölgesi ilgili standarda göre mi   </h4>
      <div>{radio("4.2.6", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.2.4 Tekmelik ilgili standarda göre monte edilmiş mi </h4>
      <div>{radio("4.2.4", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.5 Korkuluk veya düşme koruması ilgili standarda göre mi </h4>
      <div>{radio("4.2.5", { variant: "horizontal", inputArray: ["-", , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
      

     <div>
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
        <h4>4.2.8 Bakım basamağı doğru kurulu ve işlevsel mi  </h4>
        <div>{radio("4.2.8", { variant: "horizontal", inputArray: ["-","N/A" , "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2]</p>
        </div>
      </div>

    <div className={styles["box"]}>
      <h4>4.1.13.a Kabinin her acil kurtarma kapısı ilgili standarda göre mi </h4>
      <div>{radio("4.1.13.a", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
        <h4>4.2.14 Yerel dilde doğru etiketler monte edilmiş mi ve kabin kaldırma cihazları sökülmüş mü</h4>
        <div>{radio("4.2.14", { variant: "horizontal", inputArray: ["-","N/A" , "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2]</p>
        </div>
      </div>
    <div className={styles["box"]}>
        <h4>SR.5 Yangın koruma kiti LDU'da kurulu mu</h4>
        <div>{radio("sr_5_yangin_koruma_kiti_ldu", { variant: "horizontal", inputArray: ["-","N/A" , "Fixed ","Yes", <IoSquareOutline />] })}
          <p>[#2.2]</p>
        </div>
      </div>

      <div className={styles["box"]}>
      <h4>10.4.7 Kurulu kablolama EMC gereklilikleriyle uyumlu mu  </h4>
      <div>{radio("10.4.7", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.2.11 Belirtilen fren bakım çubuğu (BMB) ve kenedi doğru monte edilmiş, işlevsel ve etiketli mi </h4>
      <div>{radio("4.2.11", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("cbd_siparis_edilmis_gerekli", "CBD sipariş edilmiş/gerekli", {dontUseSymbol:true})}</div>

    <div className={styles["box"]}>
      <h4>4.2.9.a Kılavuz patenler doğru kurulu mu  </h4>
      <div>{radio("4.2.9.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.16.b Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı  </h4>
      <div>{radio("4.1.16.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h3 className={styles["title"]}>7 Kuyu baş kısmı </h3>
      <hr />
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
      <h4>2.2.1.a Çalışma alanları ve makina alanlarının geçiş kısımlarındaki aydınlatma şiddeti ilgili standarda göre mi</h4>
      <div>{radio("2.2.1.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>2.14.1.b Ağır bileşenleri kaldırmak için doğru yollar mevcut mu ve yerleşim çizimine göre maksimum kaldırma kapasitesiyle işaretli mi </h4>
      <div>{radio("2.14.1.b", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.1.3.b Üst boşluktaki emniyet açıklıkları ilgili standart / yerleşim çizimine göre mi </h4>
      <div>{radio("3.1.3.b", { variant: "horizontal", inputArray: ["-", "N/A", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>MRL asansör</p>
      <img src={asansor1} className={styles["w-300"]} />
    </div>
    <div className={styles["box"]}>
      <p>MR asansör</p>
      <img src={asansor2} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>SKS ölçüsü (kabin zıplama mesafesi)</p>
    </div>

    <div className={styles["box"]}>
      <p>1) Standart asansör için (yavaşlama izleme cihazı olmayan asansör), aşağıdaki tabloya başvurun veya bu formülü kullanın:</p>
      <p>SKS = (0,035*VKN^2)*1000 (mm)</p>
      <img src={tablo1} className={styles["w-500"]} />
      <p>2) Yavaşlama izleme cihazı bulunan bir asansör için (örneğin ETSL), aşağıdaki tabloya başvurun.</p>
      <img src={tablo2} className={styles["w-200"]} />
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

    <img src={tablo3} className={styles["w-500"]} />

    <div>
      <h5 className={styles["circle"]}>Hesaplanan F* (mm) </h5>
      <p>Value: ?<br />
      Ölçülen F - Fmaks / SAIS denetimini bu belgenin basılı bir kopyasıyla yaparsanız: F* {">"} 0 ise: F* değerini gir(sonra girilen bu değer, B mesafesinden
        çıkarılacaktır). F* ≤ 0 ise: 0 girin</p>
    </div>
     <div>{inputLine("olculen_guvenlik_mesafesi4", "Ölçülen güvenlik mesafesi B (mm)", {variant: "border"})}
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

    <img src={tablo4} className={styles["w-500"]} />

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
      <h4>3.1.5 Kabin kılavuz rayları ve karşı ağırlık üzerindeki açıklıklar yerleşim çizimine göre mi  </h4>
      <div>{radio("3.1.5", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.4.14.c Dönen makaralar ve çekiş kasnakları korumalı mı ve STM'ler gerektiği şekilde kurulu mu</h4>
      <div>{radio("3.4.14.c", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.16.c Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı </h4>
      <div>{radio("3.4.16.c", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>5.1.16 Makinanın her tutturma cıvatası bir emniye teliyle sabitlenmiş mi  </h4>
      <div>{radio("5.1.16", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.5.1 Yukarı yönde giden kabin aşırı hız koruma cihazı (makina freni) kurulu ve CE işaretli mi </h4>
      <div>{radio("7.5.1", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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

      <div>{inputLine("yazilim_versiyonu", "Yazılım versiyonu", {dontUseSymbol:true})}</div>
      <div className={styles["box"]}>
        <h4>2.1.5 İkinci ana şalter JH1 tahriğe yakın monte edilmiş, kolayca tanımlanabilir ve erişilebilir ve işlevsel mi </h4>
        <div>{radio("2.1.5", { variant: "horizontal", inputArray: ["-","N/A", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
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

      <div>{inputLine("belirtilen_asiri_hiz_regulator_tipi", "Belirtilen aşırı hız regülatörü tipi ")}</div>
      
      <div>{selectField("asiri_hiz_regulator_tipi", "Aşırı hız regülatörü tipi", 
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
      <h3 className={styles["title"]}>7.4 Karşı ağırlık aşırı hız regülatörü</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>7.4.1 Belirtilen karşı ağırlık aşırı hız regülatörü doğru dönüş yönünde kurulu, mühürlü ve CE işaretli mi ve emniyet kontağı (KBVG) işlevsel mi </h4>
      <div>{radio("7.4.1", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
    <div>{selectField("vca2", "VCA1 (m/s) ", 
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
      <h3 className={styles["title"]}>7.5 Askı yolları</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>5.1.1 Belirtilen STM'ler doğru kurulu mu </h4>
      <div>{radio("5.1.1", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("belirtilen_stm_tipi", "Belirtilen STM tipi ")}</div>

    <div>{selectField("stm_tipi2", "STM tipi", 
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
      <h4>5.1.18 Tüm STM'lerin doğru üretim tarihleri kontrol parametresi (TMManufactDate) içine girilmiş mi</h4>
      <div>{radio("5.1.18", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>5.1.2 STM'ler için belirtilen sonlandırma bağlantıları doğru kurulmuş ve bir bükülme önleyici cihazla sabitlenmiş mi </h4>
      <div>{radio("5.1.2", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h4>5.1.4 STM'ler arasında yük dağılımı gerektiği gibi mi </h4>
      <div>{radio("5.1.4", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h3 className={styles["title"]}>8 Kuyu (aşağıya doğru seyir)</h3>
      <hr />
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
      <div>{radio("3.5.3", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>3.6.7.b Bir kapı paneli kapalı pozisyonda kilitliyken diğer kapı panelleri açılamıyor durumda mı</h4>
      <div>{radio("3.6.7.b", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.4.7 Her kat kapısı için acil kilit açma cihazı monte edilmiş ve işlevsel mi </h4>
      <div>{radio("4.4.7", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.6.5 Kat kapısı panelleri arasındaki açıklık ilgili standarda göre mi </h4>
      <div>{radio("3.6.5", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h4>4.2.10 Belirtilen global kuyu bilgisi sistemi (AC GSI) doğru kurulu, etiketli ve CE işaretli mi </h4>
      <div>{radio("4.2.10", { variant: "horizontal", inputArray: ["-", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div>{inputLine("belirtilen_kuyu_bilgi_sistemi", "Belirtilen kuyu bilgi sistemi")}</div>

    <div className={styles["box"]}>
        <h5>Kuyu bilgi sistemi</h5>
        <div>{radio("urunhatti2", { variant: "circle", inputArray: 
          ["AC GSI 100 / AC GSI 101 (UET olmadan)",
           "AC GSI 200 / AC GSI 201 (UET ile)",
           "AC GSI 3 (UET ve ETSL ile)",
           ] })}
        </div>
      </div>

    <div className={styles["box"]}>
      <h4>6.0.7 Emniyet kontağı KSERE-U doğru kurulu ve işlevsel mi </h4>
      <div>{radio("6.0.7", { variant: "horizontal", inputArray: ["-","N/A", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h4>3.4.4 Kuyudaki ayırıcı bölme ilgili standarda göre monte edilmiş mi </h4>
      <div>{radio("3.4.4", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>3.4.14.d Dönen makaralar korumalı mı ve STM'ler gerektiği şekilde kurulu mu  </h4>
      <div>{radio("3.4.14.d", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>3.3.6.a Belirtilen karşı ağırlık tamponu/tamponları ve tampon desteği/destekleri doğru pozisyonda mı, kurulu mu ve CE işaretli mi</h4>
      <div>{radio("3.3.6.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div>{inputLine("belirtilen_tampon_tipi2", "Belirtilen tampon tipi")}</div>

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

      <div>{selectField("tampon_adedi_zpg2", "Tampon adedi ZPG (-)", 
          [ { _id: "1", name: "1"},
            { _id: "2", name: "2"},
            { _id: "3", name: "4"},
            { _id: "4", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
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

      <div>{inputLine("anma_hizi_vkn2", "Anma hızı VKN (m/s)")}</div>
      <div>{inputLine("belirtilen_parasut_tipi3", "Belirtilen paraşüt tipi")}</div>

      <div>{selectField("tampon_adedi_zpg", "Paraşüt tipi", 
          [ { _id: "1", name: "SA RF 0002"},
            { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
      </div>
      <div>{selectField("kilavuz_ray_basinin_genisligi3", "Kılavuz ray başının genişliği (BFK) (mm)", 
          [ { _id: "1", name: "10"},
            { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <p className={styles["subtitle"]}>Belirtilen: 10 mm / Kılavuz ray tipi: T75-B (T75x62x10)</p>
      </div>

      <div className={styles["box"]}>
        <img src={ray} className={styles["w-100"]} />

        <div>{selectField("kilavuz_rayin_islenmis_yuzeyi3", "Kılavuz rayın işlenmiş yüzeyi", 
          [ { _id: "1", name: "Makinada işlenmiş"},
            { _id: "2", name: "Belirtilen gibi değil (bulguları kaydedin)"},
          ])}
          <p className={styles["subtitle"]}>Kılavuz ray tipi B: Makinada işlenmiş</p>
        </div>

        <div className={styles["box"]}>
          <h4>7.3.4.a Karşı ağırlık paraşütü ve aktivasyon mekanizması montaj/devreye alma kılavuzuna göre monte edilmiş, tutturulmuş, ayarlanmış ve işlevsel mi</h4>
          <div>{radio("7.3.4.a", { variant: "horizontal", inputArray: ["-","N/A", ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
          </div>
        </div>
      </div>


      <div className={styles["box"]}>
      <h3 className={styles["title"]}>9 Kuyu dibi  </h3>
      <hr />
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
      <h4>3.1.2.b Kuyu dibinden girmesine izin verilen kişi sayısı ilgili standarda / yerleşim çizimine göre herhangi bir kuyu dibi giriş noktasında belirtilmiş mi?</h4>
      <div>{radio("3.1.2.b", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>2.15.1.b Çok sayıda asansör açıkça işaretli mi </h4>
      <div>{radio("2.15.1.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.8 Kuyu dibine erişim ilgili standarda göre mi </h4>
      <div>{radio("3.4.8", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.7.3.b Kuyu aydınlatması kuyu dibine erişim sağlayan kapıdan tüm diğer kuyu aydınlatma şalterlerinden bağımsız olarak çalıştırılabiliyor mu</h4>
      <div>{radio("3.7.3.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.4.19 Kuyu dibi çıkış cihazı monte edilmiş ve işlevsel mi </h4>
      <div>{radio("3.4.19", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>10.4.8.c Emniyet devresi kontakları ilgili standarda göre mi </h4>
      <div>{radio("10.4.8.c", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.2.3.b İnceleme kontrolü erişilebilir ve işlevsel mi  </h4>
      <div>{radio("4.2.3.b", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.7.b Acil durum alarm cihazı işlevsel mi  </h4>
      <div>{radio("4.1.7.b", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>2.2.3.c En az bir priz çıkışı kurulu ve işlevsel mi </h4>
      <div>{radio("2.2.3.c", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.1.3.a Karşı ağırlık tamponu ile tampon darbe plakası arasındaki mesafe (HGP) yerleşim çizimine göre mi  </h4>
      <div>{radio("3.1.3.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div>{inputLine("belirtilen_hgp", "Belirtilen HGP (mm):")}</div>

    <div>{inputLine("hgp2", "HGP (mm) ")}
      <p className={styles["subtitle"]}>Belirtilen: Aşağıdaki tabloya başvurun.</p>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.2 Karşı ağırlık seperatörü ilgili standarda göre mi  </h4>
      <div>{radio("3.4.2", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.2.7.d HGP etiketi karşı ağırlık seperatörü üzerine veya yakınına monte edilmiş ve ilgili standarda göre doldurulmuş mu?  </h4>
      <div>{radio("4.2.7.d", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>4.2.9.b Kılavuz patenler doğru kurulu mu </h4>
      <div>{radio("4.2.9.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.4.14.e Dönen makaralar korumalı mı ve STM'ler gerektiği şekilde kurulu mu  </h4>
      <div>{radio("3.4.14.e", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.16.e Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı </h4>
      <div>{radio("4.1.16.e", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.2.3.c İnceleme kontrolü kuyu dışından resetlenebiliyor mu ve resetleme işlemi bir uyarı sinyali ile doğrulanıyor mu  </h4>
      <div>{radio("4.2.3.c", { variant: "horizontal", inputArray: ["-" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
    <div>{selectField("kilavuz_ray_basinin_genisligi", "Kılavuz ray başının genişliği (BFK) (mm)", 
        [ { _id: "1", name: "9"},
          { _id: "2", name: "10"},
          { _id: "3", name: "16"},
          { _id: "4", name: "19"},
          { _id: "5", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Belirtilen: Aşağıdaki tabloya başvurun.</p>
    </div>

    <img src={ray2} className={styles["w-100"]} />

    <div>{selectField("kilavuz_rayin_islenmis_yuzeyi", "Kılavuz rayın işlenmiş yüzeyi ", 
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
      <h4>7.3.4 Karşı ağırlık paraşütü ve aktivasyon mekanizması montaj/devreye alma kılavuzuna göre monte edilmiş, tutturulmuş, ayarlanmış ve işlevsel mi</h4>
      <div>{radio("7.3.4", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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

    <div>{selectField("halat_tipi", "Halat tipi ", 
        [ { _id: "1", name: "6 mm, sentetik fiberli ve doğru merkez renkli çelik halat"},
          { _id: "2", name: "6 mm tam çelik halat"},
          { _id: "3", name: "Belirtilen gibi değil (bulguları kaydedin)"},
        ])}
        <p className={styles["subtitle"]}>Belirtilen: 6 mm çelik tel halat</p>
    </div>

    
    <div className={styles["box"]}>
      <h5>Halat tipi ve halat üreticisinin tanımı</h5>
      <p className={styles["circle"]}> HQB ≤ 85 m olan SA GBP 201 için:</p>
      <p>– Halat çapı: 6 mm</p>
      <p>– Halat tipi: Sentetik fiberli çelik halat</p>
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
      <p>– Halat tipi: Sentetik fiberli çelik halat</p>
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
      <h4>7.4.12 Karşı ağırlık aşırı hız regülatörü için belirtilen halat gergi cihazı kurulu ve işlevsel mi </h4>
      <div>{radio("7.4.12", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <p>MM TD 203 CWT (ray montajı gösterilmiştir)</p>
      <img src={ray3} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>LSRTD Yatay pozisyondayken kuyu dibi zemini ve halat makarasının merkezi arasındaki mesafe<br/>
        A Gerdirme cihazı tipi<br />
        B Ray montajı<br />
        C Zemin montajı</p>
      <img src={tablo5} className={styles["w-300"]}/>
    </div>

    <div className={styles["box"]}>
      <p>MM TW 251 CWT (ray montajı gösterilmiştir)</p>
      <img src={ray4} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <h4>7.4.6 Karşı ağırlık aşırı hız regülatörünün mekanik tetikleme hızı (VCA2/VTS) gerektiği şekilde mi </h4>
      <div>{radio("7.4.6", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h3 className={styles["title"]}>9.4 Dengeleme yöntemleri</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>5.2.1 Belirtilen dengeleme zinciri, uç bağlantıları ve kılavuzlar dahil doğru kurulu mu </h4>
      <div>{radio("5.2.1", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <img src={tablo6} className={styles["w-200"]} />
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

    <div>{inputLine("belirtilen_tampon_tipi", "Belirtilen tampon tipi")}</div>

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
      <h3 className={styles["title"]}>9.6 Kabin aşırı hız regülatörü </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>7.2.3 Kabin aşırı hız regülatörü için belirtilen halat tipi kurulu ve yağlanmamış durumda mı  </h4>
      <div>{radio("7.2.3", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h4>7.2.2 Kabin aşırı hız regülatörü için belirtilen halat gerilim cihazı kurulu ve işlevsel mi  </h4>
      <div>{radio("7.2.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline /> ]})}
      </div>
      <p>[#2.2]</p>
    </div>

    <div className={styles["box"]}>
     <p>MM TD 201 Kabin (ray montajı gösterilmiştir)</p>
     <img src={ray5} className={styles["w-300"]}/>
    </div>

    <div className={styles["box"]}>
      <p>MM TD 201 Kabin - AP (ray montajı gösterilmiştir)</p>
      <p>1 Yaylı pim 6x20</p>
     <img src={ray6} className={styles["w-300"]}/>
    </div>

    <div className={styles["box"]}>
      <p>MM TD 201 Azaltılmış/alçak kuyu dibi için kabin (ray montajı gösterilmiştir)</p>
     <img src={ray7} className={styles["w-300"]}/>
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
     <img src={tablo7} className={styles["w-300"]}/>
    </div>

    <div className={styles["box"]}>
      <p>MM TW 251 Kabin (ray montajı gösterilmiştir)</p>
     <img src={ray8} className={styles["w-300"]}/>
    </div>

    <div className={styles["box"]}>
      <h4>7.2.8 Kabin aşırı hız regülatörünün mekanik tetikleme hızı (VCA1) gerektiği gibi mi</h4>
      <div>{radio("7.2.8", { variant: "horizontal", inputArray: ["-","N/A" ,"Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h3 className={styles["title"]}>9.7 Kuyu dibi emniyet boşluğu</h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>3.1.8 Kuyu dibindeki emniyet açıklıkları ilgili standart / yerleşim çizimine göre mi </h4>
      <div>{radio("3.1.8", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <img src={şekil1} className={styles["w-500"]} />

    <div>{inputLine("x_mm2", "X (mm)")}
      <h5 className={styles["subtitle"]}>Between 0 and 2000</h5>
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
        <img src={şekil2} className={styles["w-400"]} />
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
        <img src={şekil3} className={styles["w-200"]} />
      </div>

      <div className={styles["box"]}>
        <h4>3.1.7 Kabin altındaki sığınma alanı ilgili standarda göre mi </h4>
        <div>{radio("3.1.7", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
        <h4>4.1.11 Kabin etek sacı gerektiği gibi ve kabin etek sacı ile kuyu dibi duvarı arasındaki mesafe ilgili standarda göre mi  </h4>
        <div>{radio("4.1.11", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <img src={şekil4} className={styles["w-300"]} />

      <div className={styles["box"]}>
        <h4>3.4.13 Kuyu dibi altındaki erişilebilir alan korunmakta mı  </h4>
        <div>{radio("3.4.13", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        <h5 className={styles["subtitle"]}>[#2.2]</h5>
        </div>
      </div>
      <div className={styles["box"]}>
        <h4>3.4.3 Kuyu dibindeki bölme ilgili standarda göre mi </h4>
        <div>{radio("3.4.3", { variant: "horizontal", inputArray: ["-", "N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
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

      <div>{inputLine("belirtilen_parasut_tipi2", "Belirtilen paraşüt tipi")}</div>

      <div>{selectField("parasut_tipi3", "Paraşüt tipi ", 
          [ { _id: "1", name: "SA G 01"},
            { _id: "2", name: "SA SGM 01"},
            { _id: "3", name: "SA GED 10"},
            { _id: "4", name: "SA GED 20"},
            { _id: "5", name: "Belirtilen gibi değil (bulguları kaydedin)"},
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

      <img src={ray9} className={styles["w-150"]} />

      <div>{selectField("kilavuz_rayin_islenmis_yuzeyi2", "Kılavuz rayın işlenmiş yüzeyi ", 
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
        <h4>7.1.4 Kabin paraşütü ve aktivasyon mekanizması montaj/devreye alma kılavuzuna göre monte edilmiş, sabitlenmiş, ayarlanmış ve işlevsel mi</h4>
        <div>{radio("7.1.4", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
        </div>
      </div>

      <div className={styles["box"]}>
      <h3 className={styles["title"]}>10 Kuyu (yukarıya doğru seyir) </h3>
      <hr />
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

    <img src={ray10} className={styles["w-150"]} />


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

    <div>{selectField("karsi_agirlik_kilavuz_ray_tipi3", "Karşı ağırlık kılavuz ray tipi  ", 
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

    <div>{inputLine("hsk_mm", "HSK (mm)")}</div>

    <div className={styles["box"]}>
      <h4>3.8.2.b Doğru tip ve sayıda kenetler kurulu mu ve bunlar doğru tip ve sayıda tutturucu cıvatalarıyla tutturulmuş mu  </h4>
      <div>{radio("3.8.2.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>


    <div className={styles["box"]}>
      <h4>3.8.5 Kılavuz rayların hizalanması (BKS/BGS) belirtilen limitler dahilinde mi </h4>
      <div>{radio("3.8.5", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("belirtilen_bks_mm", "Belirtilen BKS (mm)")}
        <h5 className={styles["subtitle"]}>Kabin kılavuz rayları arasındaki mesafe</h5>
    </div>

    <div>{inputLine("belirtilen_bgs_mm", "Belirtilen BGS (mm)")}
        <h5 className={styles["subtitle"]}>Kabin kılavuz rayları arasındaki mesafe</h5>
    </div>

    <div className={styles["box"]}>
      <h4>3.8.4 Ray birleşme yerleri düzgün, kılavuz raylar temizlenmiş ve yüzey korozyona karşı korunmuş mu </h4>
      <div>{radio("3.8.4", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.16.f Ana yapısal sabitlemeler (cıvatalar, kaynaklar) gerektiği gibi tamamlanmış mı  </h4>
      <div>{radio("4.1.16.f", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>3.4.7 İnceleme kapıları ilgili standarda göre mi  </h4>
      <div>{radio("3.4.7", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
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
      <h4>3.4.20 Kuyuya yatay çıkıntılar ve bölen kirişler ilgili standarda göre eğimli </h4>
      <div>{radio("3.4.20", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>3.4.12 Kuyuda herhangi bir üçüncü parti ekipmanı bulunmuyor mu  </h4>
      <div>{radio("3.4.12", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>3.1.6 Karşı ağırlığın daha ileri kılavuzlu seyri ilgili standarda / yerleşim çizimine göre mi  </h4>
      <div>{radio("3.1.6", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>Ölçüm noktaları (örnek)</p>
      <p>D1 Karşı ağırlığın daha ileri kılavuzlu seyrinin mesafesi</p>
      <p>D2 Karşı ağırlığın en yüksek kısmı ile STM sonlandırma bağlantısının en alçak kısmı arasındaki serbest dikey mesafe</p>
      <img src={şekil5} className={styles["w-200"]}/>
    </div>

    <div className={styles["box"]}>
      <p>1) Standart asansör için (yavaşlama izleme cihazı olmayan asansör), aşağıdaki tabloya başvurun veya bu formülü kullanın:</p>
      <p>SGS = (0,035*VKN^2)*1000 (mm)</p>
      <img src={tablo8} className={styles["w-400"]}/>
    </div>

    <div className={styles["box"]}>
      <p>2) Yavaşlama izleme cihazı bulunan bir asansör için (örneğin ETSL), aşağıdaki tabloya başvurun.</p>
      <img src={tablo9} className={styles["w-200"]}/>
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

    <div>
      <p>Kabul kriterleri</p>
      <p className={styles["circle"]}>D1 - Z ≥ 100 mm (D2 - Z {">"} 0 mm ise uygun)</p>
      <p className={styles["circle"]}>D2 - Z {">"} 0 mm (çarpma yok).</p>
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
      <h4>4.1.8 Kabin içindeki aydınlatma şiddeti ilgili standarda göre mi </h4>
      <div>{radio("4.1.8", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.1.14 Yeterli kabin havalandırması sağlanmış mı</h4>
      <div>{radio("4.1.14", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.1.1 Mevcut maksimum kabin alanı kabinin anma yüküne göre mi   </h4>
      <div>{radio("4.1.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("belirtilen_gq", "Belirtilen GQ (kg)")}</div>

    <div className={styles["box"]}>
      <h4>4.1.6 Kabin bilgi etiketi CIL ilgili standarda göre mi </h4>
      <div>{radio("4.1.6", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>5.3.2 Son kabin dekorasyonu kurulu ve sağlam bir şekilde tutturulmuş mu </h4>
      <div>{radio("5.3.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
    <div className={styles["box"]}>
      <h3 className={styles["title"]}>12.1 Dengeli yük testleri </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>5.3.3 Asansör sistemi gerektiği şekilde dengeli mi</h4>
      <div>{radio("5.3.3", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("belirtilen_yuk_dengeleme_kg", "Belirtilen yük dengeleme KG (% GQ)", {dontUseSymbol:true})}</div>
    <div>{inputLine("ortalama_akim_asagı", "Ortalama akım aşağı (A)")}</div>
    <div>{inputLine("ortalama_akim_yukari", "Ortalama akım yukarı (A)")}</div>
    <div>{inputLine("yuk_dengeleme_kg2", "Yük dengeleme KG (% GQ) ")}
      <p className={styles["subtitle"]}>KG = (Fiili_yük * [%]100) / Anma_yükü</p>
    </div>

    <div className={styles["box"]}>
      <h4>8.2.1 Ölçülen hız tasarım hızına denk geliyor mu </h4>
      <div>{radio("8.2.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>3.4.15 Son limit kontakları (KNE) doğru konumlandırılmış ve işlevsel mi </h4>
      <div>{radio("3.4.15", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("tetikleme_seviyesi_mesafesi", "Üst KNE - Son kat seviyesi ile KNE'nin tetiklenme seviyesi arasındaki mesafe (mm)  ")}
    <h5 className={styles["subtitle"]}>{"Belirtilen: < HGP (SAIS kontrolü 3.1.3.a kısmına başvurun)"}</h5>
    </div>
    <div>{inputLine("tetik_noktası_arasindaki_mesafe", "Alt KNE - En alt kat seviyesi ile tetik noktası KNE arasındaki mesafe (mm) ")}
    <h5 className={styles["subtitle"]}>{"Belirtilen: < HKP (SAIS kontrolü 3.1.8 kısmına başvurun)"}</h5>
    </div>

    <div className={styles["box"]}>
      <h4>7.2.15.b SA WOL 35 için, kabin aşırı hız regülatörünün sürtünme gücü gerektiği şekilde mi</h4>
      <div>{radio("7.2.15.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.4.11.a SA GBP 201 için karşı ağırlık aşırı hız regülatöründe sürtünme gücü gerektiği şekilde mi</h4>
      <div>{radio("7.4.11.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.4.11.b SA WOL 35 için, karşı ağırlık aşırı hız regülatöründe sürtünme gücü gerektiği gibi mi </h4>
      <div>{radio("7.4.11.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.5.4 Yukarı yöne giden kabin aşırı hız koruma cihazı (makina freni) doğru çalışıyor mu </h4>
      <div>{radio("7.5.4", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>5.3.4.a Kabin yer çekimiyle yukarı hareket ediyor mu ve/veya bir tahliye cihazı doğru monte edilmiş mi </h4>
      <div>{radio("5.3.4.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("belirtilen_yuk_dengelemesi", "Belirtilen yük dengeleme KG (% GQ)")}</div>
    <div>{inputLine("belirtilen_anma_yuku", "Belirtilen anma yükü GQ (kg) ")}</div>

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
      <h4>5.3.4.b Kabin yer çekimiyle aşağı hareket ediyor mu ve/veya bir tahliye cihazı doğru monte edilmiş mi </h4>
      <div>{radio("5.3.4.b", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("belirtilen_yuk_dengeleme2", "Belirtilen yük dengeleme KG (% GQ)", {dontUseSymbol:true})}</div>
    <div>{inputLine("belirtilen_anma_yuku2", "Belirtilen anma yükü GQ (kg)  ", {dontUseSymbol:true})}</div>

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
      <h4>3.3.2 Kabin tampon(lar) üzerinde durduğunda karşı ağırlık yükseltilemez mi </h4>
      <div>{radio("3.3.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.3.4 Enerji dağılımı tamponları (yağ tamponları) için kabin, tampon testinden sonra hasarsız mı?  </h4>
      <div>{radio("3.3.4", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.6.1.b Asansör aşağı yönde istenmeden kabin hareketi için testi geçiyor mu </h4>
      <div>{radio("7.6.1.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("durma_mesafesi", "Durma mesafesi SBZ_UCM_down")}
      <span className={styles["subtitle"]}>Belirtilen: ≤ 950 mm</span>
    </div>

    <img src={şekil6} className={styles["w-200"]} />

    <div className={styles["box"]}>
      <h4>7.6.12.a Elektrikli dinamik frenleme işlevi mevcut mu ve test aşağı yönde doğru çalışıyor mu? </h4>
      <div>{radio("7.6.12.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>8.1.2 Ana şebeke akımı ve voltajlar belirtilen limit içinde mi </h4>
      <div>{radio("8.1.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
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
      <h4>7.1.8.a Kaymalı paraşüt kabini aşağı yönde %100 GQ / VCA1 ile durduruyor mu</h4>
      <div>{radio("7.1.8.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <div>{radio("asansor_sistemi22", { variant: "circle", inputArray: 
        ["ES1",
         "ES5.0",
         "ES5"] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi panosu - ES1</p>
      <p>Ayrıntılar için bakınız J 41378670 SA GED Serisi %100 GQ Frenleme izi panosu.</p>
      <p>1) Minimum SLR değeri tanımlanamaz. SLR'nin maksimum değeri geçmediğinden emin olun.</p>
      <img src={tablo10} className={styles["w-350"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi tablosu - ES5.0</p>
      <p>Ayrıntılar için bakınız J 41378670 SA GED Serisi %100 GQ Frenleme izi panosu.</p>
      <img src={tablo11} className={styles["w-400"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA GED 10 / SA GED 20 frenleme izi tablosu - ES5</p>
      <p>Ayrıntılar için bakınız J 41378670 SA GED Serisi %100 GQ Frenleme izi panosu.</p>
      <img src={tablo12} className={styles["w-400"]} />
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
      <div>{radio("asansor_sistemi2", { variant: "circle", inputArray: 
        ["Evet",
         "Hayır",
        ] })}
        <p className={styles["subtitle"]}>Paraşütü serbest bırakmak için kabinden ağırlık kaldırmanız gerekiyorsa, HAYIR'ı seçin.</p>
      </div>
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
      <h4>7.1.8 Kaymalı paraşüt, kabini aşağı yönde %125 GQ / VKN ile durduruyor mu </h4>
      <div>{radio("7.1.8", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("ortalama_fren_izi_slr_sls", "Ortalama fren izi SLR/SLS (mm)")}</div>

    <div className={styles["box"]}>
      <h4>Asansör sistemi</h4>
      <div>{radio("asansor_sistemi3", { variant: "circle", inputArray: 
        ["ES1",
         "ES5.0",
         "ES5",
        ] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi panosu - ES1</p>
      <p>1) Minimum SLR değeri tanımlanamaz. SLR'nin maksimum değeri geçmediğinden emin olun.</p>
      <img src={tablo13} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi tablosu - ES5.0</p>
      <p>Ayrıntılar için bakınız J 59503469 SA GED Serisi %125 GQ Frenleme izi tablosu.</p>
      <img src={tablo14} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA GED frenleme izi panosu - ES5</p>
      <p>Ayrıntılar için bakınız J 59503469 SA GED Serisi %125 GQ Frenleme izi tablosu.</p>
      <img src={tablo15} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA SGM 01 frenleme izi panosu - ES5</p>
      <p>Ayrıntılar için bakınız J 59503495 SA SGM 01 125% GQ / VKN Frenleme izi tablosu.</p>
      <img src={tablo16} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
      <p>SA G 01 frenleme izi panosu - ES5</p>
      <p>Ayrıntılar için bakınız EJ 604724 paraşütler için SAIS destek bilgisi.</p>
      <img src={tablo17} className={styles["w-200"]} />
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
      <div>{radio("asansor_sistemi4", { variant: "circle", inputArray: 
        ["Evet",
         "Hayır",
        ] })}
        <p className={styles["subtitle"]}>Paraşütü serbest bırakmak için kabinden ağırlık kaldırmanız gerekiyorsa, HAYIR'ı seçin.</p>
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>4.1.10 Kabin aşırı yükü ilgili standarda göre izleniyor mu  </h4>
      <div>{radio("4.1.10", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>8.3.2 En alt katta yük boşaltma sırasında kabinin seviyeleme doğruluğu ± 20 mm dahilinde mi  </h4>
      <div>{radio("8.3.2", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h4>7.6.1.a Asansör yukarı yönde istenmeyen kabin hareketi için testi geçiyor mu </h4>
      <div>{radio("7.6.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("durma_mesafesi_zbz_ucm_up", "Durma mesafesi SBZ_UCM_up (mm) ")}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 950 mm</h5>
    </div>

    <img src={şekil17} className={styles["w-250"]} />

    <div className={styles["box"]}>
      <h4>7.6.1.c Asansör test hızıyla yukarı yönde istenmeyen kabin hareketine yönelik testi geçiyor mu </h4>
      <div>{radio("7.6.1.c", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
      <p>[#2.2]</p>
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
      <img src={tablo18} className={styles["w-200"]} />
    </div>

    <div className={styles["box"]}>
      <h4>3.3.7 Karşı ağırlık tampon(lar) üzerinde durduğunda kabin yükseltilemez mi </h4>
      <div>{radio("3.3.7", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.3.9 Enerji dağılımı tamponları (yağ tamponları) için karşı ağırlık, tampon testinden sonra hasarsız mı?  </h4>
      <div>{radio("3.3.9", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.3.7 Ani kavramalı paraşüt karşı ağırlığı aşağı yönde durduruyor mu </h4>
      <div>{radio("7.3.7", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.3.8 Kaymalı paraşüt karşı ağırlığı aşağı yönde durduruyor mu </h4>
      <div>{radio("7.3.8", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("ortalama_fren_izi_slr_sls2", "Ortalama fren izi SLR/SLS (mm) ")}
      <h5 className={styles["subtitle"]}>Her paraşüt geçişini kumanda panosunun içine yapıştırılmış paraşüt geçişi etiketine kaydedin. Geçiş etiketi için J 59502634 Talimatı - Geçiş etiketi için SA WSB 01/02/05 / J 59503369 Talimatı - SA WCB 0X uyarınca etiketi doldurun.</h5>
    </div>

    <div className={styles["box"]}>
      <h4>9.4.1 Motor çalışma süresi sınırlayıcı doğru çalışıyor mu   </h4>
      <div>{radio("9.4.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>3.1.1 Elektriksel yavaşlama izleme cihazı her iki yönde doğru çalışıyor mu </h4>
      <div>{radio("3.1.1", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>10.4.9 Tek kontaktör çözümü elektriksel izlemesi doğru çalışıyor mu  </h4>
      <div>{radio("10.4.9", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>10.4.10 Çıkış kontaktör kutusu (OCB) doğru monte edilmiş ve işlevsel mi </h4>
      <div>{radio("10.4.10", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.6.5.a Otomatik fren torku izleme işlevi var mı ve test doğru çalışıyor mu </h4>
      <div>{radio("7.6.5.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.6.5.b Otomatik statik tek fren testi (ASBT) işlevi var mı ve test doğru çalışıyor mu </h4>
      <div>{radio("7.6.5.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div className={styles["box"]}>
      <h4>7.6.10 Fren doğru açılmaz veya kapanmazsa normal asansör çalışması önleniyor mu   </h4>
      <div>{radio("7.6.10", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.6.11 Fren gücü yeterli değilse asansörün normal çalışması önleniyor mu </h4>
      <div>{radio("7.6.11", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>7.6.12.b Elektrikli dinamik frenleme işlevi mevcut mu ve test yukarı yönde doğru çalışıyor mu</h4>
      <div>{radio("7.6.12.b", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>8.2.2 Kat kapısı ve kabin kapısı bypass cihazı kontrol üzerinde mevcut, işaretli ve işlevsel mi   </h4>
      <div>{radio("8.2.2", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>13.1.23 Sismik mod için görsel gösterge kurulu ve çalışır durumda mı</h4>
      <div>{radio("13.1.23", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
      <p>[#2.2]</p>
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
      <h4>STM.1.a STM'ler doğru hizalanmış mı</h4>
      <div>{radio("stm.1.a", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <div>{radio("stm_hizalama2", { variant: "circle", inputArray: 
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
      <img src={şekil18} className={styles["w-350"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Kabin tarafı</p>
      <p>Üstten askılı kabin - C ve D için ölçme noktaları</p>
      <p>1 Üstten görünüm</p>
      <p>2 Yandan görünüm</p>
      <img src={şekil19} className={styles["w-350"]}/>
    </div>

    <div className={styles["box"]}>
      <p>Karşı ağırlık tarafı</p>
      <p>E ve F için ölçüm noktaları</p>
      <p>1 Üstten görünüm</p>
      <p>2 Yandan görünüm</p>
      <img src={şekil20} className={styles["w-350"]}/>
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
      <h4>5.1.20 Kayış izleme cihazı doğru monte edilmiş ve işlevsel mi</h4>
      <div>{radio("5.1.20", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h3 className={styles["title"]}>13.3 Karşı ağırlık </h3>
      <hr />
    </div>
    <div className={styles["box"]}>
      <h4>STM.3.c STM'ler gerektiği şekilde kurulu mu </h4>
      <div>{radio("stm.3.c", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoSquareOutline />] })}
      </div>
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
      <p>A ve B için ölçüm noktaları</p>
      <p>Karşı ağırlık tarafında ölçüm (örnek)</p>
      <img src={şekil21} className={styles["w-350"]} />
      <p>A ve B için ölçüm noktaları</p>
      <p>Kabin tarafında ölçüm (örnek)</p>
      <img src={şekil22} className={styles["w-350"]} />
    </div>

    <div>{inputLine("a1_mm2", " A1 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında ölçülen STM mesafesi / Ölçülen SAIS kontrolü STM.1.a değerini kaydedin.</h5>
    </div>
    <div>{inputLine("a2_mm", "A2 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında STM mesafesini ölçün</h5>
    </div>
    <div>{inputLine("b1_mm2", "B1 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında ölçülen STM mesafesi / Ölçülen SAIS kontrolü STM.1.a değerini kaydedin.</h5>
    </div>
    <div>{inputLine("b2_mm", "B2 (mm)")}
        <h5 className={styles["subtitle"]}>Karşı ağırlık tarafında STM mesafesini ölçün</h5>
    </div>
    <div>{inputLine("a3_mm", "A3 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("a4_mm2", "A4 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi / Ölçülen SAIS kontrolü STM.1.a değerini kaydedin.</h5>
    </div>
    <div>{inputLine("b3_mm", "B3 (mm)")}
        <h5 className={styles["subtitle"]}>Kabin tarafında ölçülen STM mesafesi</h5>
    </div>
    <div>{inputLine("b4_mm2", "B4 (mm)")}
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
      <h4>STM.2 sönümleme pedleri doğru monte edilmiş mi</h4>
      <div>{radio("stm.2", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>STM.3.d STM'ler gerektiği şekilde kurulu mu</h4>
      <div>{radio("stm.3.d", { variant: "horizontal", inputArray: ["-","N/A","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
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
      <h4>4.4.14 Kabin çıkış cihazı monte edilmiş ve işlevsel mi  </h4>
      <div>{radio("4.4.14", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.4.1 Kapı sistemi ≤ 150 N gücüyle kapanıyor, engelle karşılaştığında ters hareket ediyor ve tüm koruyucu cihazlar kapıyı ters hareket
      ettiriyor mu</h4>
      <div>{radio("4.4.1", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("max_kapatma_gucu", "Maksimum kapatma gücü (N) ")}
      <h5 className={styles["subtitle"]}>Belirtilen: ≤ 150 N.</h5>
    </div>

    <div className={styles["box"]}>
      <h4>4.4.8 Kapı sistemi kapı kilit açma bölgesi içinde kabin içinden ve dışından açılabiliyor mu  </h4>
      <div>{radio("4.4.8", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.4.3 Kapı kapanmasının kinetik enerjisi ≤ 10 J mü  </h4>
      <div>{radio("4.4.3", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>4.4.5 Kapının servis dışı bırakan cihazla kapanması veya son zamanlayıcı spesifikasyona göre mi </h4>
      <div>{radio("4.4.5", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoSquareOutline />] })}
        <p>[#2.2]</p>
      </div>
    </div>
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
      <h3 className={styles["title"]}>Güç kaynağı  </h3>
      <hr />
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
      <h3 className={styles["title"]}>Elektriksel süreklilik </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>10.3.1.a Koruyucu bağlama devresinin elektriksel sürekliliği belirtildiği gibi mi </h4>
      <div>{radio("10.3.1.a", { variant: "horizontal", inputArray: ["-","Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      <p>[#2.2]</p>
      </div>
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
      <h4>Ana güç koruyucu iletken (Ω)  </h4>
      <div>{radio("ana_guc_koruyucu_iletken", { variant: "horizontal", inputArray: ["-", "N/A","Yes", "No"] })}
        <p className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</p>
      </div>
    </div>
    <div className={styles["box"]}>
      <h4>Aydınlatma güç koruyucu iletken (Ω) </h4>
      <div>{radio("aydınlatma_guc_koruyucu_iletken", { variant: "horizontal", inputArray: ["-", "N/A","Yes", "No"] })}
        <p className={styles["subtitle"]}>Belirtilen: ≤ 2,0 Ω / Belirtilen gibi değilse HAYIR'ı seçin ve bulguları kaydedin.</p>
      </div>
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
      <h3 className={styles["title"]}>Hata halka empedansı </h3>
      <hr />
    </div>

    <div className={styles["box"]}>
      <h4>10.4.1 Hata halka empedansı ilgili standarda göre mi </h4>
      <div>{radio("10.4.1", { variant: "horizontal", inputArray: ["-", "N/A" , "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}} />] })}
      </div>
    </div>

    <div>{inputLine("ana_salterin_belirtilen_anma_akimi2", "Ana şalterin belirtilen anma akımı JH (A)", {dontUseSymbol:true})}
      <p className={styles["subtitle"]}>Koruma işlevi olmayan ana şalter (JH) için bina tarafındaki SIH'nin anma akımını kullanın.</p>
    </div>

    <div className={styles["box"]}>
      <p>Sigorta ve MCB için belirtilen kısa devre akımı IM</p>
      <p>U0 = AC 230 V / 50 Hz</p>
      <p>IN Koruyucu cihazın nominal akımı</p>
      <p>IM Belirtilen kısa devre akımı</p>
      <p>gG/gL Sigorta gG/gL</p>
      <img src={tablo19} className={styles["w-350"]} />
    </div>

    <div className={styles["box"]}>
      <p>MCCB tip TMF / TMD / TMA (termomanyetik atma ünitesi) için belirtilen kısa devre akımı IM</p>
      <p className={styles["circle"]}>Koruyucu cihazın nominal akımı IN (A) cihazda belirtilmiştir.</p>
      <p className={styles["circle"]}>Belirtilen kısa devre akımı IM (A):</p>
      <p>– Sabit manyetik eşik tA ≤ 0,1 s ile MCCB: 10*IN*1,5.</p>
      <p>– Ayarlanabilir manyetik eşik ile MCCB için, potansiyometre ayarına bağlı olarak tA ≤ 0,1 s: X*IN*1,5.</p>
      <img src={şekil23} className={styles["w-200"]} />
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
        <h3 className={styles["title"]}>RCD koruması </h3>
        <hr />
      </div>


      <div className={styles["box"]}>
        <h4>10.4.2.a Ana beslemenin RCD koruması ilgili standarda uygun mu? </h4>
        <div>{radio("10.4.2.a", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        </div>
      </div>

      <div className={styles["box"]}>
      <h4>Uygulanabilirliği belirtin  </h4>
      <div>{radio("uygulanabilirligini_belirtin", { variant: "circle", inputArray: 
        ["Sorumluluk Schindler'e ait. Bu SAIS kontrolü zorunludur",
         "Sorumluluk müşteriye aktarılmış ve teknik müdür tarafından doğrulanmış. Bu SAIS kontrolü gerekmez",
         "Frekans dönüştürücülü TT ağı yok. Bu SAIS kontrolü gerekmez"] })}</div>
         <h5 className={styles["subtitle"]}>Ayrıntılar için bkz. EJ 46200151 RCD'ler üzerinde NI/MOD Talimatı (SAIS) Asansörler ve Yürüyen Merdivenler</h5>
    </div>

    <div>
      <p>Schindler standart ölçüm aracı "Fluke çok işlevli test cihazı" için ayarlama:</p>
      <p className={styles["arrow"]}>Döner anahtarı ΔT'ye (RCD atma süresi) ayarlayın.</p>
      <p className={styles["arrow"]}>Belirtilen ölçüm kablolarını kullanın.</p>
      <p className={styles["arrow"]}> F1 tuşuna basın. Kurulu RCD'nin derecesine bağlı olarak "300 mA", "500 mA" veya "p00 mA" (RCD derecesi) seçin.</p>
      <p className={styles["arrow"]}>F2 tuşuna basın. "x1" seçin (test akımı çarpanı).</p>
      <p className={styles["arrow"]}>F3 tuşuna basın. "ᴖ––ᴖ–" seçin (RCD test akımı "titreşimli akım").</p>
      <p className={styles["arrow"]}>F4 tuşuna basın. "0°" seçin (faz açısı)</p>
      <img src={şekil24} className={styles["w-300"]}/>
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
        <h4>10.4.2.b Dahili asansör devrelerinin RCD koruması ilgili standarda göre mi? </h4>
        <div>{radio("10.4.2.b", { variant: "horizontal", inputArray: ["-", "Fixed ","Yes", <IoTriangleOutline style={{rotate: "180deg"}}  />] })}
        </div>
      </div>


    <div>
      <p>Schindler standart ölçüm aracı "Fluke çok işlevli test cihazı" için ayarlama:</p>
      <p className={styles["arrow"]}>Döner anahtarı <IoTriangleOutline />T'ye (RCD atma süresi) ayarlayın.</p>
      <p className={styles["arrow"]}>Belirtilen ölçüm kablolarını kullanın.</p>
      <p className={styles["arrow"]}> F1 tuşuna basın. Kurulu RCD'nin derecesine bağlı olarak "300 mA", "500 mA" veya "p00 mA" (RCD derecesi) seçin.</p>
      <p className={styles["arrow"]}>F2 tuşuna basın. "x1" seçin (test akımı çarpanı).</p>
      <p className={styles["arrow"]}>F3 tuşuna basın. "ᴖ––ᴖ–" seçin (RCD test akımı "titreşimli akım").</p>
      <p className={styles["arrow"]}>F4 tuşuna basın. "0°" seçin (faz açısı)</p>
      <img src={şekil25} className={styles["w-300"]} />
    </div>

    <div className={styles["box"]}>
        <h4>SIL:2 (kabin aydınlatması): RCD koruması belirtildiği gibidir </h4>
        <div>{radio("ofis3", { variant: "horizontal", inputArray: ["-", "Yes", "No"] })}
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
        <div>{radio("sibs_2_kuyu_aydinlatmasi", { variant: "horizontal", inputArray: ["-","Yes", "No"] })}
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
        <h3 className={styles["title"]}>Elektriksel ölçümleri doğrulama </h3>
        <hr />
      </div>

      <p>KG zorunlu tutuyorsa, aşağıdakileri doğrulayın:</p>
      <p className={styles["circle"]}>Tüm elektrik kontrol ve ölçümleri doğru şekilde yapılmış ve tamamlanmıştır.</p>
      <p className={styles["circle"]}>Tüm bulgular kaydedilmiştir.</p>

      <div>{inputLine("şirket", "Şirket", {variant: "border"})}
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
export default SAIS5500;
