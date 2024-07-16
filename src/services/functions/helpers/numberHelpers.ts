export const addCommasToNumber = (num: number | undefined): string => {
  return num?.toLocaleString("en-US") ?? "0";
};

export const formatNumberBasedOnProp = (propTitle: string, num: number | undefined): string => {
  if (!num) return "0";
  const noCommaProps = ["year", "serial_number"];
  return noCommaProps.includes(propTitle) ? num?.toString() : addCommasToNumber(num);
};

export const roundNumber = (num: number, decimal?: number) => (typeof num === "number" ? parseFloat(num.toFixed(decimal || 2)) : 0);

export const convertNumberToWord = (number: string = "0") => {
  const steps = ["", "Bir", "İki", "Üç", "Dört", "Beş", "Altı", "Yedi", "Sekiz", "Dokuz"];
  const tens = ["", "On", "Yirmi", "Otuz", "Kırk", "Elli", "Altmış", "Yetmiş", "Seksen", "Doksan"];
  const hundreds = ["", "Yüz", "İkiyüz", "Üçyüz", "Dörtyüz", "Beşyüz", "Altıyüz", "Yediyüz", "Sekizyüz", "Dokuzyüz"];
  const nS = ["", "Bin", "Milyon", "Milyar", "Trilyon", "Katrilyon", "Kentilyon", "Seksilyon", "Septilyon", "Oktilyon"];

  const max = 30;

  const completer = ["", "00", "0"];

  let index;
  let backer;
  let triples;
  let result = "";

  const getUntilThousands = (triple: any) => `${hundreds[triple[0]]} ${tens[triple[1]]} ${steps[triple[2]]}`;

  const errorHandlers = () => {
    if (number.toString().length > max) {
      return "";
      //   throw new RangeError(`Girilen hesaplanamayacak kadar çok büyük. Sayı en fazla ${max} basamak olmalıdır`);
    }
    if (typeof number != "string") {
      return "";
      //   throw new TypeError('Parametre string olmalıdır');
    }
    for (let index = 0; index < number.length; ++index) {
      if (number[index] < "0" || number[index] > "9") {
        return "";
        // throw new Error('Sayı sadece rakamlardan oluşmalıdır');
      }
    }
  };
  errorHandlers();

  number = completer[number.length % 3] + number;

  for (index = number.length, backer = 0; index > 0; index -= 3, ++backer) {
    triples = getUntilThousands(number.substr(index - 3, 3));
    if (triples !== "") {
      result = `${triples} ${nS[backer]} ${result}`;
    }
  }

  const trimmedResult = result.trim();

  if (trimmedResult.slice(0, 7) === "Bir Bin") {
    return trimmedResult.slice(4);
  } else if (result === "") {
    return "sıfır";
  } else {
    return result.includes("undefined") ? "" : trimmedResult;
  }
};
