import Daria from '@/assets/Photo (3).png';
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const GeneralMaterials = () => {
  const [activeTab, setActiveTab] = useState('Фото');

  return (
    <div className="pt-[60px] pb-[38px] ml-[75px] flex relative">
      <>
        <img
          src={Daria}
          className="w-[93px] h-[109px] rounded-[20px]"
          alt="Daria"
        />
        <div className="ml-[36px]">
          <h1 className="font-bold text-[#4E3F6F] text-4xl">
            Общие материалы с Дарьей Небесной
          </h1>
          <Tabs defaultValue="Фото" className="mt-3">
            <TabsList className="flex gap-4">
              <TabsTrigger
                value="Фото"
                onClick={() => setActiveTab('Фото')}
                className={`font-semibold size-4 w-[150px] h-[58px] rounded-[20px] ${
                  activeTab === 'Фото'
                    ? 'bg-[#615DFA] text-white'
                    : 'bg-white text-black'
                }`}
              >
                Фото (159)
              </TabsTrigger>
              <TabsTrigger
                value="Видео"
                onClick={() => setActiveTab('Видео')}
                className={`w-[150px] h-[58px] rounded-[20px] ${
                  activeTab === 'Видео'
                    ? 'bg-[#615DFA] text-white'
                    : 'bg-white text-black'
                }`}
              >
                Видео (32)
              </TabsTrigger>
              <TabsTrigger
                value="Аудио"
                onClick={() => setActiveTab('Аудио')}
                className={`w-[150px] h-[58px] rounded-[20px] ${
                  activeTab === 'Аудио'
                    ? 'bg-[#615DFA] text-white'
                    : 'bg-white text-black'
                }`}
              >
                Аудио (3)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <button className="absolute -ml-6 top-[85px] w-[53px] h-[53px] rounded-full bg-[#615DFA] cursor-pointer">
          <ArrowLeft className="text-white w-[25px] h-[25px] flex m-[14px]" />
        </button>
      </>
    </div>
  );
};

export default GeneralMaterials;
