import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Camera } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function CreateChannel(props: LayoutProps) {
  const [activeTab, setActiveTab] = useState('free');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[585px] pl-10">
        <p className="text-[#4E3F6F] pt-[73px] pb-4 text-3xl font-bold">
          Создать канал  
        </p>  
        <Tabs defaultValue="free">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              onClick={() => handleClick('free')}
              className={`inline-flex items-center justify-center ${
                activeTab === 'free'
                  ? 'text-[#FFFFFF] bg-[#615DFA] rounded-[20px] h-10 px-12 py-7 '
                  : 'text-[#4E3F6F]'
              }`}
              value="free"
            >
              Бeсплатный
            </TabsTrigger>
            <TabsTrigger
              onClick={() => handleClick('paid')}
              className={`inline-flex items-center justify-center  ${
                activeTab === 'paid'
                  ? 'text-[#FFFFFF] bg-[#615DFA] rounded-[20px] h-10 px-12 py-7'
                  : 'text-[#4E3F6F]'
              }`}
              value="paid"
            >
              Платный
            </TabsTrigger>
          </TabsList>
          <TabsContent value="free">
            <div className="grid gap-5 py-4">
              <div className="flex items-center gap-7">
                <Camera className="color-[##8C8CB6] bg-[#F2F2FE] pl-[35px] pr-[35px] min-h-[99px] min-w-[99px] rounded-[20px]" />
                <Label
                  htmlFor="photo"
                  className="text-[#4E3F6F] text-base font-bold"
                >
                  Загрузить фото
                </Label>
                <Input id="name" className="hidden" />
              </div>
              <div className="items-center gap-4">
                <Input
                  id="name"
                  defaultValue="Название"
                  className="col-span-4 text-[#4E3F6F] text-base font-bold bg-[#F2F2FE] w-100%"
                />
              </div>
              <div>
                <Textarea
                  className="text-[#4E3F6F] text-base font-bold bg-[#F2F2FE] w-100% min-h-[160px] max-h-[260px]"
                  placeholder="Описание канала"
                />
              </div>
              <div className="items-center gap-4">
                <Input
                  id="category"
                  defaultValue="Категория"
                  className="col-span-4 text-[#4E3F6F] text-base font-bold bg-[#F2F2FE] w-100%"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="paid">
          <div className="grid gap-5 py-4">
              <div className="flex items-center gap-7">
                <Camera className="color-[##8C8CB6] bg-[#F2F2FE] pl-[35px] pr-[35px] min-h-[99px] min-w-[99px] rounded-[20px]" />
                <Label
                  htmlFor="photo"
                  className="text-[#4E3F6F] text-base font-bold"
                >
                  Загрузить фото
                </Label>
                <Input id="name" className="hidden" />
              </div>
              <div className="items-center gap-4">
                <Input
                  id="name"
                  defaultValue="Название"
                  className="col-span-4 text-[#4E3F6F] text-base font-bold bg-[#F2F2FE] w-100%"
                />
              </div>
              <div>
                <Textarea
                  className="text-[#4E3F6F] text-base font-bold bg-[#F2F2FE] w-100% min-h-[160px] max-h-[260px]"
                  placeholder="Описание канала"
                />
              </div>
              <div className="items-center gap-4">
                <Input
                  id="category"
                  defaultValue="Категория"
                  className="col-span-4 text-[#4E3F6F] text-base font-bold bg-[#F2F2FE] w-100%"
                />
              </div>
            </div>
          </TabsContent>
          <DialogFooter className="flex justify-start">
              <Button type="submit">Создать</Button>
            </DialogFooter>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default CreateChannel;
