import { cn } from '@/lib/utils';
import { format, fromUnixTime } from 'date-fns';

const Message = (props: any) => {
  const { isMe, text, isLastMsg, createdAt } = props;

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
  const lastMsg = isLastMsg ? 'mb-10' : '';

  const formattedDate = format(
    fromUnixTime(createdAt.seconds),
    'dd.MM.yyyy HH:mm'
  );

  return (
    <div className={cn(position, lastMsg, 'pt-2 max-w-[50%]')}>
      <div
        className={cn(
          messageBgColor,
          paddings,
          radiuses,
          textColor,
          'break-words'
        )}
        style={{
          overflowX: 'hidden',
        }}
      >
        {text}
      </div>
      <span
        className={cn(
          datePosition,
          'text-[#8C8CB6] mt-2 text-base font-normal'
        )}
      >
        {formattedDate}
      </span>
    </div>
  );
};

export default Message;