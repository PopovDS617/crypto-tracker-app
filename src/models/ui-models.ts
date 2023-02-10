export interface Styles {
  [value: string]: string;
}

export interface Modal {
  children?: React.ReactNode;
  onClose?: () => void;
}
