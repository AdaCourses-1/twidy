import { Button } from '@/components/ui/button';
import ChannelsFollowers from '@/shared/channelsFollowers/ChannelsFollowers';
import Header from '@/shared/header/Header';
import HistoryTransaction from '@/shared/history/History';



const Settings = () => {
  return (
    <div className="settings-page w-full mb-20">
      <Header />
      <HistoryTransaction />
      <ChannelsFollowers>
        <Button variant="ghost">Подписки </Button>
      </ChannelsFollowers>
    </div>
  );
};

export default Settings;
