import Costcontact from '@/shared/cost-contact/Costcontact';
import Header from '@/shared/header/Header';
import HistoryTransaction from '@/shared/history/History';

const Settings = () => {
  return (
    <div className="settings-page w-full mb-20">
      <Header />
      <HistoryTransaction />
      <Costcontact />
    </div>
  );
};

export default Settings;
