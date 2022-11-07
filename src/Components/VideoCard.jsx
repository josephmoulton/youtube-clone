import React from "react";
import "./VideoCard.css";
import Avatar from "@mui/material/Avatar";

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
  return (
    <div className="videoCard">
      <img src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h3>{title}</h3>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
