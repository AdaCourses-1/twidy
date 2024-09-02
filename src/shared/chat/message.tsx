import { cn } from '@/lib/utils';

const Message = (props: any) => {
  const { isMe } = props;

  const messageBgColor = isMe ? 'bg-[#615DFA]' : 'bg-[#F2F2FE]';
  const position = isMe ? 'ml-auto' : 'mr-auto';
  const padding = 'px-8 py-6';
  const radiuses = isMe
    ? 'rounded-tr-[20px] rounded-tl-[20px] rounded-bl-[20px]'
    : 'rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px]';
    const textColor = isMe ? 'text-white' : 'text-[#4E3F6F]';

  return <div className={cn(messageBgColor, position, padding, radiuses, textColor)}>Message</div>;
};

export default Message;
