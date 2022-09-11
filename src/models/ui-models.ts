export interface IStyles {
  [value: string]: string;
}

export interface IModal {
  children?: React.ReactNode;
  onClose?: () => void;
}
