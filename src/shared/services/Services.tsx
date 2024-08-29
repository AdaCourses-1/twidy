import { Switch } from '@/components/ui/switch';
import { SERVICE_ITEMS } from './const';
import { ServicesItem } from './types';
import { useState } from 'react';
import { PlusIcon } from 'lucide-react';

const Services = () => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const handleSwitchChange = (index: number) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const handleAddServiceClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <>
      <h2 className="text-[#4E3F6F] font-bold text-4xl pt-[17px] h-[101px]">
        Услуги
      </h2>
      <div className="flex-1 flex gap-[30px] -ml-7 flex-wrap pb-[100px]">
        {!isLoading && (
          <div className="flex gap-[30px] flex-wrap">
            {SERVICE_ITEMS.map((services: ServicesItem, index) => (
              <div
                key={services.name}
                className={`max-w-[270px]  max-h-[375px] flex flex-col flex-wrap p-8 pl-0  justify-between bg-white rounded-[20px] ${
                  activeIndexes.includes(index) ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div className="ml-[37px]">
                  <h5 className="mb-[10px] text-lg items-start font-bold text-[#4E3F6F]">
                    {services.name}
                  </h5>
                  <span className="text-center text-lg font-semibold text-[#8C8CB6]">
                    {services.description}
                  </span>
                </div>
                <div className="flex ml-[37px]">
                  <div>
                    <p className="text-[#4E3F6F] font-bold text-4xl mt-[122px]">
                      {services.price}
                      {services.currency}
                    </p>
                    <span className="text-[#8C8CB6] font-bold text-base">
                      Изменение
                    </span>
                  </div>
                  <div>
                    <Switch
                      className="ml-[55px] mt-[145px]"
                      onCheckedChange={() => handleSwitchChange(index)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={handleAddServiceClick}
              className="bg-[#6C53E7] w-[270px] h-[378px] rounded-[20px] flex flex-col items-center pt-[100px] cursor-pointer active:-translate-y-3 transition-transform duration-100 ease-in-out"
            >
              <PlusIcon className="w-[270px] h-24 font-bold text-[200px] text-white" />
              <span className="font-bold text-lg text-white">
                Добавить услугу
              </span>
            </button>
          </div>
        )}
        {isLoading && (
          <div className="flex-col items-center justify-center h-screen mt-[300px] ml-[500px]">
            <div className="absolute border-8 border-slate-100 border-l-violet-600 dark:border-gray-800 dark:border-l-gray-600 rounded-full after:rounded-full w-20 h-20 animate-spin"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
