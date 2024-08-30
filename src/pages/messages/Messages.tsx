import PhotoSection from "@/shared/photo/PhotoSection";
import VideoSection from "@/shared/video/VideoSection";
import GeneralMaterials from "@/shared/generalMaterials/GeneralMaterials";
import Header from "@/shared/header/Header";

const Messages = () => {
  return <div>
    <Header />
    <GeneralMaterials />
    <VideoSection />
    <PhotoSection />
  </div>;
};

export default Messages;
