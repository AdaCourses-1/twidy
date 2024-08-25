import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TabNavigation = () => {
  return (
    <div className="mt-12 ml-12">
      <Tabs>
        <TabsList className="gap-10">
          <TabsTrigger
            className="text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl  border-transparent "
            value="tab1"
          >
            Общие
          </TabsTrigger>
          <TabsTrigger
            className="text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl border-b-2 border-transparent "
            value="tab2"
          >
            Стоимость контакта
          </TabsTrigger>
          <TabsTrigger
            className="text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl border-b-2 border-transparent "
            value="tab3"
          >
            Оплата и финансы
          </TabsTrigger>
          <TabsTrigger
            className="text-[#8C8CB6] hover:text-[#4E3F6F] font-bold text-2xl border-b-2 border-transparent "
            value="tab4"
          >
            Каналы и подписки
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabNavigation;
