import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className=" VideoItem item" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        className="ui image images"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
