import Photo1 from '@/assets/Photo (1).png';
import { Separator } from '@/components/ui/separator';
import { Ellipsis } from 'lucide-react';
import Message from './message';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useCollection } from '@/hooks/useCollection';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@/context/AuthContext';

const Chat = () => {
  const { documents: messages, error } = useCollection(
    'messages',
    null,
    'createdAt'
  );
  const { user } = useContext(AuthContext);

  useEffect(() => {
    console.log(messages, user);
  }, [messages]);
  return (
    <div className="rounded-md overflow-hidden min-h-[50vh] bg-white w-full px-14">
      <div className="flex items-center  bg-white py-10">
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
          <h2 className="text-[#4E3F6F] font-bold text-lg">
            Анастасия Евлеева
          </h2>
          <span className="text-[#8C8CB6] text-base font-semibold">Онлайн</span>
        </div>
        <div className="bg-[#F2F2FE] w-14 h-14 rounded-full ml-auto flex items-center justify-center cursor-pointer">
          <Ellipsis color="#4E3F6F" size={36} />
        </div>
      </div>
      <Separator className="h-[3px] bg-[#F2F2FE] rounded-md" />
      <PerfectScrollbar
        options={{
          wheelSpeed: 1,
          wheelPropagation: true,
          swipeEasing: true,
          minScrollbarLength: 20,
          maxScrollbarLength: 60,
          useBothWheelAxes: true,
        }}
        className="flex flex-col items-baseline gap-8 min-h-[70vh] max-h-[700px] overflow-y-auto pr-4"
      >
        {messages?.map((message) => (
          <Message
            key={message.id}
            isMe={message.author === user.uid}
            text={message.text}
          />
        ))}
      </PerfectScrollbar>
      {error && error}
    </div>
  );
};

export default Chat;
