import GeneralMaterials from '@/shared/generalMaterials/GeneralMaterials';
import Header from '@/shared/header/Header';
import VideoSection from '@/shared/video/VideoSection';

const Messages = () => {
  return (
    <div className="settings-page w-full mb-20">
      <Header />
      <GeneralMaterials />
      <VideoSection />
    </div>
  );
};

export default Messages;
