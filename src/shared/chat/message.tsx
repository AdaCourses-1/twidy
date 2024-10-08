import { cn } from '@/lib/utils';

const Message = (props: any) => {
  const { isMe, text } = props;

  const messageBgColor = isMe ? 'bg-[#615DFA]' : 'bg-[#F2F2FE]';
  const position = isMe ? 'ml-auto' : 'mr-auto';
  const paddings = 'px-6 py-4';
  const radiuses = isMe
    ? 'rounded-tl-3xl rounded-tr-lg rounded-bl-lg'
    : 'rounded-tl-3xl rounded-tr-lg rounded-br-lg';

  const textColor = isMe ? 'text-white' : 'text-[#4E3F6F]';

  return (
    <div className={cn(position)}>
      <div className={cn(messageBgColor, paddings, radiuses, textColor)}>
        {text}
      </div>
      <span>16:36</span>
    </div>
  );
};

export default Message;
