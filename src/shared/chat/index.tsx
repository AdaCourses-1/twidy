import Photo1 from '@/assets/Photo (1).png';
import { Separator } from '@/components/ui/separator';
import { Ellipsis, Paperclip, SendHorizontal } from 'lucide-react';
import Message from './message';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useCollection } from '@/hooks/useCollection';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { useFirestore } from '@/hooks/useFirestore'; // Импорт хука

const Chat = () => {
  const { documents: messages, error } = useCollection('messages', null, 'createdAt');
  const { user } = useContext(AuthContext);
  const { addDocument } = useFirestore('messages'); // Используем хук
  const [messageText, setMessageText] = useState(''); // Состояние для хранения текста сообщения
  const messagesEndRef = useRef<HTMLDivElement>(null); // Реф для контейнера сообщений

  // Функция для прокрутки вниз
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Прокручиваем вниз при добавлении новых сообщений
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (messageText.trim() === '') return; // Не отправляем пустое сообщение

    try {
      await addDocument({
        author: user.uid, // Идентификатор пользователя
        text: messageText, // Текст сообщения
        createdAt: new Date() // Дата создания сообщения
      });
      setMessageText(''); // Очистить поле ввода после отправки
    } catch (err) {
      console.error("Ошибка при отправке сообщения:", err.message);
    }
  };

  return (
    <div className="rounded-md overflow-hidden bg-white px-14 pb-10 w-full">
      <div className="flex items-center bg-white py-10">
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
          wheelSpeed: 2,
          useBothWheelAxes: true,
        }}
        className="flex flex-col items-baseline gap-8 min-h-[70vh] max-h-[700px] overflow-y-auto pr-4"
      >
        {messages?.map((message: any) => (
          <Message
            key={message.id}
            isMe={message.author === user.uid as string}
            text={message.text}
          />
        ))}
        {/* Реф для скролла в конец */}
        <div ref={messagesEndRef} />
      </PerfectScrollbar>

      <div className="flex py-5 gap-7 items-end w-full mt-auto">
        <Paperclip className="mb-4 " />
        <div className="flex justify-between items-end bg-[#F2F2FE] text-[#8C8CB6] px-6 py-4 w-full rounded-[20px] font-bold">
          <div
            className="w-full bg-transparent border-none outline-none"
            contentEditable
            onInput={(e) => setMessageText(e.currentTarget.textContent || '')}
            // Делаем поле редактируемым, чтобы можно было вводить текст
            dangerouslySetInnerHTML={{ __html: messageText }} // Установка HTML-содержимого
          />
          <SendHorizontal
            color="#8C8CB6"
            className="cursor-pointer"
            onClick={handleSendMessage}
          />
        </div>
      </div>
      {error && error}
    </div>
  );
};

export default Chat;
