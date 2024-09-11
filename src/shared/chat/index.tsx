import Photo1 from '@/assets/Photo (1).png';
import { Separator } from '@/components/ui/separator';
import { Ellipsis, Paperclip, SendHorizontal } from 'lucide-react';
import Message from './message';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useCollection } from '@/hooks/useCollection';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useFirestore } from '@/hooks/useFirestore';
import { Textarea } from '@/components/ui/textarea';

const Chat = () => {
  const { documents: messages, error } = useCollection(
    'messages',
    null,
    'createdAt'
  );
  const { addDocument } = useFirestore('messages');
  const [messageText, setMessageText] = useState('');
  const { user } = useContext(AuthContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Функция для прокрутки вниз
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendMessage = async () => {
    if (!messageText.trim()) return;

    try {
      await addDocument({
        author: user.uid,
        text: messageText,
      });
      setMessageText('');
    } catch (err) {
      console.error('Ошибка при отправке сообщения:', err.message);
    }
  };

  useEffect(() => {
    // Adjust the textarea height automatically based on the content
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset the height first
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set it to the scroll height
    }
  }, [messageText]);

  // Прокручиваем вниз при добавлении новых сообщений
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className="rounded-md overflow-hidden bg-white px-14 pb-10 w-full relative"
      style={{
        transform: 'translateZ(0)',
      }}
    >
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
      <PerfectScrollbar className="flex flex-col items-baseline gap-8 overflow-y-auto pr-4 h-[50vh] last:bg-black">
        {messages?.map((message: any) => (
          <Message
            key={message.id}
            isMe={message.author === user.uid}
            text={message.text}
            isLastMsg={messages.length - 1 === messages.indexOf(message)}
          />
        ))}
        <div ref={messagesEndRef} />
      </PerfectScrollbar>
      <div className="flex py-5 items-end gap-7 mt-auto fixed bottom-0 left-[50%] -translate-x-1/2 w-full bg-white px-10 pr-16">
        <Paperclip className="mb-4" />
        <div className="flex justify-between items-end bg-[#F2F2FE] text-[#8C8CB6] px-6 py-2 w-full rounded-[20px] font-bold">
          <Textarea
            ref={textareaRef}
            className="w-full bg-transparent border-none resize-none max-h-[50vh] scrollbar-hide"
            onChange={(e) => setMessageText(e.target.value)}
            value={messageText}
            placeholder="Введите ваше сообщение"
            style={{
              maxHeight: '20vh',
            }}
            rows={1}
          />
          <SendHorizontal
            color="#8C8CB6"
            className="cursor-pointer mb-1"
            onClick={handleSendMessage}
          />
        </div>
      </div>
      {error && error}
    </div>
  );
};

export default Chat;
