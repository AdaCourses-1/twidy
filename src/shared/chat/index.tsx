import { Ellipsis } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Photo1 from '@/assets/Photo (1).png';
import Message from './message';

const Chat = () => {
  return (
    <div className="rounded-md overflow-hidden min-h-[50vh] w-full">
      <div className="flex items-center bg-white py-10 px-14">
        <div className="flex relative mr-10">
          <img
            className="rounded-sm"
            width={68}
            height={76}
            src={Photo1}
            alt="Анастасия Евлеева"
          />
          <span className="absolute right-0 top-2/4 translate-y-[-50%] -translate-x-[-50%] inline-block w-4 h-4 bg-[#57BB34] rounded-sm border-4 border-white"></span>
        </div>
        <div className="">
          <h2 className="text-[#4E3F6E] font-bold text-lg">
            Анастасия Евлеева
          </h2>
          <span className="text-[#8C8CB6] font-semibold text-base">Online</span>
        </div>
        <div className="bg-[#F2F2FE] w-14 h-14 rounded-full ml-auto flex items-center justify-center coursor-pointer">
          <Ellipsis color="#4E3F6F" size={36} />
        </div>
      </div>
      <Separator className="h-[3px] bg-[#F2F2FE] rounded-md" />
      <div className="flex flex-col items-baseline gap-8 max-h-[400px] overflow-auto">
        <Message />
        <Message isMe />
        <Message />
        <Message isMe />
        <Message />
        <Message />
        <Message isMe />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message isMe />
        <Message />
        <Message isMe />
        <Message />
        <Message />
        <Message isMe />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
};

export default Chat;
