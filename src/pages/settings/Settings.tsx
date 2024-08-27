import ChannelsFollowers from '@/shared/channelsFollowers/ChannelsFollowers';
import GeneralSettings from '@/shared/generalSettings/GeneralSettings';
import Header from '@/shared/header/Header';
import HistoryTransaction from '@/shared/history/History';

const Settings = () => {
  return (
    <div className="settings-page w-full mb-20">
      <Header />
      <GeneralSettings />
      <HistoryTransaction />
      <ChannelsFollowers />
    </div>
  );
};

export default Settings;
