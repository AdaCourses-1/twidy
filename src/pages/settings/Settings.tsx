import TabNavigation from '@/shared/navigate/Navigate';
import { TAB_LIST } from '../Settings/const';
import Header from '@/shared/header/Header';

const Settings = () => {
  return (
    <div>
      <Header />
      <TabNavigation tabList={TAB_LIST} />
    </div>
  );
};

export default Settings;
