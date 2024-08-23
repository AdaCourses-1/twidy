
const VideoGrid = () => {
    const videos = [
        {
          thumbnail: "src/assets/Photo (1).png",
          videoUrl: 'src/assets/video.svg',
        },
        {
          thumbnail: "src/assets/Photo (3).png",
          videoUrl: 'src/assets/video.svg',
        },
        {
          thumbnail: "src/assets/varnava.png",
          videoUrl: 'src/assets/video.svg',
        },
        {
          thumbnail: "src/assets/Photo (1).png",
          videoUrl: 'src/assets/video.svg',
        },
        {
          thumbnail: "src/assets/Photo (3).png",
          videoUrl: 'src/assets/video.svg',
        },
        {
          thumbnail: "src/assets/varnava.png",
          videoUrl: 'src/assets/video.svg',
        },
        {
            thumbnail: "src/assets/Photo (1).png",
            videoUrl: 'src/assets/video.svg',
        },
        {
            thumbnail: "src/assets/Photo (3).png",
            videoUrl: 'src/assets/video.svg',
        },
      ];
      
  return (
    <div>
    <h5 className="ml-7">Май(9)</h5>
        <div style={styles.gridContainer}>
        {videos.map((video, index) => (
            <div key={index} style={styles.videoItem}>
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={`Thumbnail ${index + 1}`} style={styles.thumbnail} />
                <div style={styles.playButton}>▶️</div>
            </a>
            </div>
        ))}
        </div>
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '10px',
    padding: '20px',
  },
  videoItem: {
    position: 'relative',
  },
  thumbnail: {
    width: '170px',
    height: '169px',
    borderRadius: '8px',

  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '24px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    padding: '10px',
  },
};

export default VideoGrid;






















// const Video = () => {
//     const videoActor = [
//         {imgURL: "src/assets/Photo (1).png",}
//         {imgURL: "src/assets/play.svg",}
        
//     ];

//     return (
//         <div className="">

//         </div>
//     )
// }


// export default Video;