import ChannelsFollowers from '@/shared/channelsFollowers/ChannelsFollowers';
import Costcontact from '@/shared/cost-contact/Costcontact';
import Finance from '@/shared/finance/Finance';
import GeneralSettings from '@/shared/generalSettings/GeneralSettings';
import Header from '@/shared/header/Header';
import HistoryTransaction from '@/shared/history/History';

const Settings = () => {
  return (
    <div className="settings-page w-full mb-20">
      <Header />
      <GeneralSettings />
      <Finance />
      <HistoryTransaction />
      <ChannelsFollowers />
      <Costcontact />
    </div>
  );
};

export default Settings;
