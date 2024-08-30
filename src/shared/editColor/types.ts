export interface ColorsItemProps {
  id: number;
  name: string;
  color: string;
  selectedColor?: string;
  onColorChange?: (color: string) => void;
}
