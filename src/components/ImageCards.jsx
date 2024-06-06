import { Image } from "antd";
import React from "react";

const ImageCard = ({ photos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {photos.map((photo) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Image src={photo.src.original} width={100} />
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
