import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

import channelImg from '@/assets/channel/channelImg.svg';

import { ChangeEvent, useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function CreateChannel(props: LayoutProps) {
  const [activeTab, setActiveTab] = useState('free');
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
    <Dialog >
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[585px] pl-10 max-h-[790px]">
        <p className="text-[#4E3F6F] pt-[73px] pb-4 text-3xl font-bold">
          Создать канал  
        </p>  
        <Tabs defaultValue="free">
          <TabsList className="grid grid-cols-3 ">
            <TabsTrigger
              onClick={() => handleClick('free')}
              className={`inline-flex items-center justify-center max-w-[147px] ${
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
              className={`inline-flex items-center justify-center max-w-[147px] ${
                activeTab === 'paid'
                  ? 'text-[#FFFFFF] bg-[#615DFA] rounded-[20px] h-10 px-12 py-7'
                  : 'text-[#4E3F6F]'
              }`}
              value="paid"
            >
              Платный
            </TabsTrigger>
          </TabsList>
          <TabsContent value="free" className='max-w-[454px]'>
            <div className="grid gap-5 py-4">
              <div className="flex items-center gap-7">
                <div className='grid place-items-center color-[##8C8CB6] bg-[#F2F2FE] pl-[35px] pr-[35px] min-h-[99px] min-w-[99px] rounded-[20px]'>
                <img className='max-h-[99px] max-w-[99px]' src={localImg ? localImg : channelImg}/>
                </div>
                <label
                  className=" text-[#4E3F6F] text-base font-bold"
                >
                  Загрузить фото
                  <input onChange = {handleChangeImage} type="file" className="hidden" />
                </label>
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
          <TabsContent value="paid" className='max-w-[454px]'>
          <div className="grid gap-5 py-4">
              <div className="flex items-center gap-7">
                <Label
                  htmlFor="photo"
                  className="text-[#4E3F6F] text-base font-bold"
                >
                  Платный
                  <input type="file" className="hidden" />
                </Label>
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
              <Button type="submit" className='mb-[60px]'>Создать</Button>
          </DialogFooter>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

export default CreateChannel;
