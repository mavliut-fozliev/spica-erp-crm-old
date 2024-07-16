export type TColors = {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  disabled: string;
};

const colors: TColors = {
  primary: "132, 90, 223",
  secondary: "35, 183, 229",
  success: "38, 191, 148",
  danger: "227, 51, 51",
  warning: "245, 184, 73",
  disabled: "192, 192, 192",
};

export default function getColor(color?: keyof TColors, opacity?: number): string {
  return `rgba(${colors[color || "primary"]}, ${opacity ?? 1})`;
}
