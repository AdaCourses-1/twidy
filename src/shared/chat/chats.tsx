import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { Search } from 'lucide-react';
import Chat from './chat';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useCollection } from '@/hooks/useCollection';

const Chats = () => {
  const { documents: users, error } = useCollection('users', null, null);

  const [activeChat, setActiveChat] = useState(5);
  const handleClickActiveChat = (id: number) => {
    setActiveChat(id);
  };

  return (
    <div className="pt-10 bg-[#F2F2FE] min-w-[413px]">
      <div className="mb-3 pr-8">
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
        <Tabs defaultValue="choose" className="w-full">
          <TabsList>
            <TabsTrigger value="choose" className="bg-[#615DFA] text-white">
              Выбрать
            </TabsTrigger>
            <TabsTrigger value="archive">Архивировать</TabsTrigger>
            <TabsTrigger value="delete">Удалить</TabsTrigger>
          </TabsList>
          <TabsContent value="choose" className="mt-6">
            <PerfectScrollbar className="flex flex-col max-h-[700px] overflow-y-auto">
              {users?.map((user: any) => (
                <Chat
                  key={user.id}
                  isActive={activeChat === user.id}
                  handleClickActiveChat={handleClickActiveChat}
                  {...user}
                />
              ))}
            </PerfectScrollbar>
            {error && error}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Chats;