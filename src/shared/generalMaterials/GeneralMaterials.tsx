import Daria from '@/assets/Photo (3).png';
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { GeneralMaterialsItemProps } from './types';
import { GENERALMATERIALS_ITEMS } from './const';

const GeneralMaterials = () => {
  const [activeTab, setActiveTab] = useState(GENERALMATERIALS_ITEMS[0].title);

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
          <Tabs defaultValue={GENERALMATERIALS_ITEMS[0].title} className="mt-3">
            <TabsList className="flex gap-4">
              {GENERALMATERIALS_ITEMS.map(
                (ganeralmaterial: GeneralMaterialsItemProps) => (
                  <TabsTrigger
                    value={ganeralmaterial.title}
                    onClick={() => setActiveTab(ganeralmaterial.title)}
                    className={`font-semibold size-4 w-[150px] h-[58px] rounded-[20px] ${
                      activeTab === ganeralmaterial.title
                        ? 'bg-[#615DFA] text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    {ganeralmaterial.title} ({ganeralmaterial.counter})
                  </TabsTrigger>
                )
              )}
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
