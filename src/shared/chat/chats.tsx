import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import Chat from './chat';

const Chats = () => {
  return (
    <div className="pt-10 pr-7 bg-[#F2F2FE]">
      <div className="mb-3">
        <Label className="relative flex-1">
          <Input
            placeholder="Поиск"
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
      <div className="flex">
        <Tabs>
          <TabsList>
            <TabsTrigger value="choose" className="bg-[#615DFA] text-white">
              Выбрать
            </TabsTrigger>
            <TabsTrigger value="archive">Архивировать</TabsTrigger>
            <TabsTrigger value="delete">Удалить</TabsTrigger>
          </TabsList>
          <TabsContent value="choose">
            <div className="flex flex-col">
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
              <Chat />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Chats;
