import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CHANNEL_ITEMS } from './const';
import { ChannelItem } from './types';

import { Search, X } from 'lucide-react';

import { useEffect, useState } from 'react';

const ChannelsFollowers = () => {
  const [activeTab, setActiveTab] = useState('follower');
  const [channelItems, setChannelItems] =
    useState<ChannelItem[]>(CHANNEL_ITEMS);
  const [search, setSearch] = useState<string>('');

  const handleSearch = () => {
    if (search) {
      setChannelItems(filterItems());
    } else {
      setChannelItems(CHANNEL_ITEMS);
    }
  };

  const filterItems = () => {
    return CHANNEL_ITEMS.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <div className="pl-14">
      <h3 className="text-[#4E3F6F] font-bold text-4xl pb-4">
        Каналы и подписки
      </h3>
      <Tabs defaultValue="follower">
        <TabsList className="w-max-[257px] items-center pb-5 pt-3">
          <TabsTrigger
            className="text-[#8C8C6B] hover:text-[#4E3F6F]"
            value="follower"
            onClick={() => setActiveTab('follower')}
          >
            Подписки
          </TabsTrigger>
          <TabsTrigger
            className="text-[#8C8C6B] hover:text-[#4E3F6F]"
            value="manage"
            onClick={() => setActiveTab('manage')}
          >
            Управления
          </TabsTrigger>
          {activeTab === 'follower' && (
            <Button className="ml-[300px] w-max-[184px]">Создать канал</Button>
          )}
        </TabsList>
        <TabsContent value="follower">
          <div className="flex items-center max-w-[716px] max-h-[68px] pt-10">
            <Label className="relative flex-1">
              <Input
                placeholder="Поиск"
                value={search}
                onChange={onSearchChange}
                className="font-bold text-base text-[#4E3F6F]"
              />
              <Search
                strokeWidth={3}
                size={16}
                color="#8C8CB6"
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
            </Label>
          </div>
          <div className="flex flex-col justify-between gap-5 pt-7">
            {channelItems.map((channelItem: ChannelItem) => (
              <div
                key={channelItem.id}
                className="flex items-center bg-[#Fff] h-max-[74px] max-w-[716px] rounded-[15px]"
              >
                <img
                  className="mr-8 ml-4 mt-4 mb-4 rounded-2xl"
                  src={channelItem.imgUrl}
                  alt={channelItem.title}
                />
                <div className="flex  flex-col max-w-[285px]">
                  <span className="flex gap-2 text-[#4E3F6F] font-bold text-xs pb-2">
                    {channelItem.name}
                    <span className="text-[#FFFF] bg-[#FFA012] font-semibold text-xs rounded-[10px] pl-2 pr-2 pt-[2px] pb-[2px]">
                      {channelItem.price}
                      {channelItem.currency}
                    </span>
                  </span>
                  <span className="text-[#8C8CB6]">
                    {channelItem.description}
                  </span>
                </div>
                <div className="">
                  <span className="text-[#8C8CB6] pl-14">
                    {channelItem.title}
                  </span>
                </div>
                <X className="ml-auto mr-4 pt-13 pb-13 stroke-[#8C8CB6]" />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChannelsFollowers;
