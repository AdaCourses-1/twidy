import { Slider } from '@/components/ui/slider';

const EditFont = () => {
  return (
    <div className="ml-9 bg-white p-8 rounded-[20px] w-full">
      <h4 className="text-[#4E3F6F] font-bold mb-4 text-xl">Размер текста</h4>
      <div className="flex items-center gap-2">
        <span className="text-[#4E3F6F] font-bold text-xs">Aa</span>
        <Slider />
        <span className="text-[#4E3F6F] font-bold text-xl">Aa</span>
      </div>
    </div>
  );
};

export default EditFont;
