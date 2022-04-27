import React from "react";
import "../Style.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const imageRender = () => {
    return props.dataImg.map((val) => {
      return <ImageCard key={val.id} data={val} />;
    });
  };

  return <div className="img-list">{imageRender()}</div>;
};

export default ImageList;
