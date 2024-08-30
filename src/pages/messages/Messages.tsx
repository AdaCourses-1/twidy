import VideoSection from '@/shared/video/VideoSection';
import Header from '@/shared/header/Header';
import GeneralMaterials from '@/shared/generalMaterials/GeneralMaterials';


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
