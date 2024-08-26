import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { CHANNEL_ITEMS } from './const';
import { ChannelItem } from './types';
import { SheetContent, SheetTrigger,Sheet } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}


const ChannelsFollowers = (props: LayoutProps) => {
  return (
    <div className="pl-14">
    <h3 className="text-[#4E3F6F] font-bold text-4xl">Каналы и подписки</h3>
      <Tabs defaultValue="sign-in">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Подписки</TabsTrigger>
          <TabsTrigger value="sign-up">Управления</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
      <div className="flex items-center max-w-[716px] max-h-[68px] pt-10">
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
      <div className="flex flex-col justify-between gap-5 pt-7">
        {CHANNEL_ITEMS.map((channelItem: ChannelItem)=>(
           <div key={channelItem.id} className='flex items-center  bg-[#Fff] h-max-[74px] max-w-[716px] rounded-[15px]'>
           <img className='mr-8 ml-4 mt-4 mb-4 rounded-2xl ' src={channelItem.imgUrl}/>
             <div className="flex  flex-col max-w-[285px]">
               <span className='flex gap-2 text-[#4E3F6F] font-bold text-xs pb-2'>{channelItem.name}
                 <span className='text-[#FFFF] bg-[#FFA012] font-semibold text-xs rounded-[6px] pl-2 pr-2'>{channelItem.price}{channelItem.currency}</span>
               </span>
               <span className='text-[#8C8CB6]'>{channelItem.description}</span>
             </div>
             <div className="">
               <span className='text-[#8C8CB6] pl-14'>{channelItem.title}</span>
           </div>
           <img className='ml-12 pt-13 pb-13' src={channelItem.icon}/>
         </div>
        ))}
      </div>
        </TabsContent>
      </Tabs>
  </div>
  )
}

export default ChannelsFollowers