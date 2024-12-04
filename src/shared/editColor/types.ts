export interface ColorsItemProps {
  id: number;
  name: string;
  color: string;
  selectedColor?: string;
  onColorChange?: (color: string) => void;
}

export interface EditColorProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}
