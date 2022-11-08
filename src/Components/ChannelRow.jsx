import React from "react";
import "./ChannelRow.css";
import Avatar from "@mui/material/Avatar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image}></Avatar>
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutlineIcon fontSize="xxsmall" />}
        </h4>
        <p>{subs} subscribers • {noOfVideos} vidoes </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
