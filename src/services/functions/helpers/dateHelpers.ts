import dayjs from "dayjs";

const monthNames = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];

export function convertDateObjectToString(date: Date): string {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
}

export function convertShowTimeToNumber(timeString: string): number {
  const timeOnly = timeString.length < 6 && timeString.length > 4;
  const dateOnly = timeString.length < 12 && timeString.length > 6;

  let returnNumber = 0;

  if (timeString) {
    if (timeOnly) {
      const [hours, minutes] = timeString.split(":");
      returnNumber = Number(hours) * 60 + Number(minutes);
      return returnNumber;
    }

    if (dateOnly) {
      const [day, other] = timeString.split(",");
      const month = other.slice(0, 3);
      const year = other.slice(-4);
      const dateObject = new Date(`${year}-${monthNames.indexOf(month) + 1}-${day}`);
      returnNumber = dateObject.getTime();
      return returnNumber;
    }

    const [hours, minutes] = timeString.slice(0, 5).split(":");
    const [dayString, other] = timeString.slice(5).split(",");
    const day = dayString.trim().length < 2 ? "0" + dayString.trim() : dayString.trim();
    const monthString = other.slice(0, 3);
    const month = monthNames.indexOf(monthString) < 9 ? `0${monthNames.indexOf(monthString) + 1}` : `${monthNames.indexOf(monthString) + 1}`;
    const year = other.slice(-4);
    const dateObject = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
    returnNumber = dateObject.getTime();
  }
  return returnNumber;
}

export function convertTimeToShow(date: string | undefined, params?: { dateOnly?: boolean; timeOnly?: boolean; dateFirst?: boolean }) {
  if (date) {
    let minute = dayjs(date).minute().toString();
    minute = minute.length === 1 ? `0${minute}` : minute;
    let hour = dayjs(date).hour().toString();
    hour = hour.length === 1 ? `0${hour}` : hour;
    let day = dayjs(date).date().toString();
    let month = dayjs(date).month().toString();
    let year = dayjs(date).year().toString();
    return params?.dateOnly
      ? `${day},${monthNames[Number(month)]}\u00a0${year}`
      : params?.timeOnly
      ? `${hour}:${minute}`
      : params?.dateFirst
      ? `${day},${monthNames[Number(month)]} ${year}\u00a0\u00a0\u00a0${hour}:${minute}`
      : `${hour}:${minute}\u00a0\u00a0\u00a0${day},${monthNames[Number(month)]} ${year}`;
  } else {
    return "";
  }
}

export function isoToDate(iso: string): string {
  const date = new Date(iso);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export const isoDateTimeFormat = "YYYY-MM-DDTHH:mm:ssZ";
export const isoDateFormat = "YYYY-MM-DD";
export const yearFormat = "YYYY";
export const monthDayFormat = "MM-DD";
