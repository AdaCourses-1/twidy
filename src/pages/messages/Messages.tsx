import { Button } from '@/components/ui/button';
import ChannelsFollowers from '@/shared/channelsFollowers/ChannelsFollowers';

const Messages = () => {
  return (
    <div className="settings-page w-full mb-20">
      <ChannelsFollowers>
        <Button variant="ghost">Подписки </Button>
      </ChannelsFollowers>
    </div>
  );
};

export default Messages;
