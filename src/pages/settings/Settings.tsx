import Costcontact from '@/shared/costcontact/Costcontact';
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
