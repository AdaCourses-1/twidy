import { COLORS_LIST } from './const';
import { ColorsItemProps, EditColorProps } from './types';

const EditColor = ({ selectedColor, onColorChange }: EditColorProps) => {
  return (
    <div className="ml-9 bg-white p-8 rounded-[20px] w-full">
      <h4 className="text-[#4E3F6F] font-bold text-xl mb-3">Цвет сообщений</h4>
      <div className="flex flex-wrap gap-4">
        {COLORS_LIST.map((colorItem: ColorsItemProps) => (
          <label
            key={colorItem.id}
            className="flex items-center justify-center relative"
            onClick={() => onColorChange(colorItem.color)}
          >
            <input
              type="radio"
              value={colorItem.color}
              checked={selectedColor === colorItem.color}
              className="form-radio absolute opacity-0"
              onChange={() => onColorChange(colorItem.color)}
            />
            <span
              style={{ backgroundColor: colorItem.color }}
              className={`block h-12 w-12 rounded-full cursor-pointer relative ${
                selectedColor === colorItem.color &&
                'after:absolute after:top-1/2 after:left-1/2 after:w-4 after:h-4 after:rounded-full after:bg-white after:transform after:-translate-x-1/2 after:-translate-y-1/2'
              }`}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default EditColor;
