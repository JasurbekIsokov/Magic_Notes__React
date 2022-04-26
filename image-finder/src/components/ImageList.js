import React from "react";

const ImageList = (props) => {
  const imageRender = () => {
    return props.dataImg.map((val) => {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={val.urls.regular} />
        </div>
      );
    });
  };

  return <div>{imageRender()}</div>;
};

export default ImageList;
