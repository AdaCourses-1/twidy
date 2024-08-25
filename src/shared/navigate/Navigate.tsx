import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div className="mt-12 ml-12">
      <Tabs value={activeTab}>
        <TabsList className="gap-4 ml-6">
          <TabsTrigger
            className="text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl "
            value="tab1"
            onClick={() => handleTabChange('tab1')}
          >
            Общие
          </TabsTrigger>
          <TabsTrigger
            className="text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl "
            value="tab2"
            onClick={() => handleTabChange('tab2')}
          >
            Стоимость контакта
          </TabsTrigger>
          <TabsTrigger
            className="text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl "
            value="tab3"
            onClick={() => handleTabChange('tab3')}
          >
            Оплата и финансы
          </TabsTrigger>
          <TabsTrigger
            className="text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl "
            value="tab4"
            onClick={() => handleTabChange('tab4')}
          >
            Каналы и подписки
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabNavigation;
