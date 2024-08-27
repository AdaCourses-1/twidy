import { VIDEO_ITEMS } from "@/shared/video/const";
import playIcon  from "@/assets/play.svg"; 

const VideoSection = () => {
  return (
    <div className="pl-12 pr-14">
    <h5 className="ml-9">Май(9)</h5>
        <div className="grid grid-cols-6 gap-8 p-5">
        {VIDEO_ITEMS.map((video) => (
            <div key={video.id} className="relative">
              <div>
                  <img src={video.thumbnail} alt={video.thumbnail} className="w-40 h-40 rounded-lg" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl rounded-full p-2">
                    <img src={playIcon} className="w-14 h-14 rounded-full"/>
                  </div>
              </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default VideoSection;