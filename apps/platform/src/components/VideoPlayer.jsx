import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl, title, description }) => {
  return (
    <div style={{textAlign: 'center', width: '100%' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className='' style={{ margin: '20px auto', maxWidth: '1000px' }}>
        <ReactPlayer 
          url={videoUrl} 
          controls 
          width='100%'
          height='400px'
        />
      </div>
    </div>
  );
};

export default VideoPlayer;