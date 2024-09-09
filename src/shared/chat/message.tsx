import { cn } from '@/lib/utils';

const Message = (props: any) => {
  const { isMe, text, isLastMsg } = props;

  // message classes
  const messageBgColor = isMe ? 'bg-[#615DFA]' : 'bg-[#F2F2FE]';
  const position = isMe ? 'ml-auto' : 'mr-auto';
  const paddings = 'px-6 py-4';
  const radiuses = isMe
    ? 'rounded-tl-3xl rounded-tr-lg rounded-bl-lg'
    : 'rounded-tl-3xl rounded-tr-lg rounded-br-lg';

  const textColor = isMe ? 'text-white' : 'text-[#4E3F6F]';

  // date classes
  const datePosition = isMe ? 'block text-right' : 'block';
  const lastMsg = isLastMsg ? 'mb-6' : '';

  return (
    <div className={cn(position, lastMsg, 'pt-2 max-w-[50%]')}>
      <div className={cn(messageBgColor, paddings, radiuses, textColor)}>
        {text}
      </div>
      <span
        className={cn(
          datePosition,
          'text-[#8C8CB6] mt-2 text-base font-normal'
        )}
      >
        16:36
      </span>
    </div>
  );
};

export default Message;