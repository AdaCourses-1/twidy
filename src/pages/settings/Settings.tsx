import ChannelsFollowers from '@/shared/channelsFollowers/ChannelsFollowers';
import Costcontact from '@/shared/cost-contact/Costcontact';
import GeneralSettings from '@/shared/generalSettings/GeneralSettings';
import Header from '@/shared/header/Header';
import HistoryTransaction from '@/shared/history/History';
import TabNavigation from '@/shared/navigate/Navigate';

const tabList = [
  {
    value: 'general',
    label: 'Общие',
    content: <GeneralSettings />,
  },
  {
    value: 'contact_cost',
    label: 'Стоимость контакта',
    content: <Costcontact />,
  },
  {
    value: 'payment_finances',
    label: 'Оплата и финансы',
    content: <HistoryTransaction />,
  },
  {
    value: 'channels_subs',
    label: 'Каналы и подписки',
    content: <ChannelsFollowers />,
  },
];

const Settings = () => {
  return (
    <div className="settings-page w-full mb-20">
      <Header />
      <TabNavigation tabList={tabList} />
    </div>
  );
};

export default Settings;
