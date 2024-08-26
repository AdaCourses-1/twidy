import { VIDEOGRID_ITEMS } from "@/shared/video/const";

const VideoGrid = () => {
   
      
  return (
    <div className="pl-12 pr-14">
    <h5 className="ml-7">Май(9)</h5>
        <div className="grid grid-cols-6 gap-2 p-5">
        {VIDEOGRID_ITEMS.map((grid) => (
            <div key={grid.id} className="relative">
              <a href={grid.videoUrl}>
                  <img src={grid.thumbnail} alt={grid.thumbnail} className="w-40 h-40 rounded-lg" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl rounded-full p-2">
                     <img src={grid.videoUrl}/> 
                  </div>
              </a>
            </div>
        ))}
        </div>
    </div>
  );
};

export default VideoGrid;