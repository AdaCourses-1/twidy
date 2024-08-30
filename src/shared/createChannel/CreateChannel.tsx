import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ChangeEvent, useState } from 'react';

import { Camera } from 'lucide-react';

import { TAB_ITEM } from './const';

interface LayoutProps {
  children: React.ReactNode;
}

export function CreateChannel(props: LayoutProps) {
  const [activeTab, setActiveTab] = useState<string>(TAB_ITEM.free);
  const [localImg, setLocalImg] = useState<string | null>(null);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setLocalImg(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="max-h-[790px]">
        <DialogTitle className="text-[#4E3F6F] pt-[73px] pb-4 text-3xl font-bold">
          Создать канал  
        </DialogTitle>
        <Tabs defaultValue={activeTab}>
          <TabsList className="grid grid-cols-3 bg-inherit">
            <TabsTrigger
              onClick={() => handleClick(TAB_ITEM.free)}
              className="data-[state=active]:bg-[#615DFA] data-[state=active]:text-[#FFFFFF] py-5 rounded-[20px]"
              value={TAB_ITEM.free}
            >
              Бeсплатный
            </TabsTrigger>
            <TabsTrigger
              onClick={() => handleClick(TAB_ITEM.paid)}
              className="data-[state=active]:bg-[#615DFA] data-[state=active]:text-[#FFFFFF] py-5 rounded-[20px]"
              value={TAB_ITEM.paid}
            >
              Платный
            </TabsTrigger>
          </TabsList>
          <TabsContent value={TAB_ITEM.free} className="max-w-[454px]">
            <div className="grid gap-5 py-6">
              <label className="flex items-center gap-7">
                <div className="grid place-items-center color-[##8C8CB6] bg-[#F2F2FE] pl-[35px] pr-[35px] min-h-[99px] min-w-[99px] rounded-[20px]">
                  {localImg ? (
                      <img className="max-h-[99px] max-w-[99px]" src={localImg} alt="Аватар"/>
                  ) : (
                    <Camera strokeWidth={1} />
                  )}
                </div>
                <div className=" text-[#4E3F6F] text-base font-bold">
                  Загрузить фото
                  <input
                    onChange={handleChangeImage}
                    type="file"
                    className="hidden"
                  />
                </div>
              </label>
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
          <TabsContent value={TAB_ITEM.paid} className="max-w-[454px]">
          <div className="grid gap-5 py-6">
              <label className="flex items-center gap-7">
                <div className="grid place-items-center color-[##8C8CB6] bg-[#F2F2FE] pl-[35px] pr-[35px] min-h-[99px] min-w-[99px] rounded-[20px]">
                  {localImg ? (
                      <img className="max-h-[99px] max-w-[99px]" src={localImg} alt="Аватар"/>
                  ) : (
                    <Camera strokeWidth={1} />
                  )}
                </div>
                <div className=" text-[#4E3F6F] text-base font-bold">
                  Загрузить фото
                  <input
                    onChange={handleChangeImage}
                    type="file"
                    className="hidden"
                  />
                </div>
              </label>
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
              <div className="items-center gap-4">
                <Input
                  id="price"
                  defaultValue="Цена"
                  className="col-span-4 text-[#4E3F6F] text-base font-bold bg-[#F2F2FE] w-100%"
                />
              </div>
            </div>
          </TabsContent>
          <DialogFooter className="!justify-start">
            <Button type="submit" className="mb-[60px]">
              Создать
            </Button>
          </DialogFooter>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default CreateChannel;
