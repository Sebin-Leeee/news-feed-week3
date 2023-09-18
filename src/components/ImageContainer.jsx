import React from "react";

function ImageContainer(props) {
  const imageElement = props.img ? (
    <img className="square-img" src={props.img} alt="News Story" />
  ) : (
    <img src="https://placehold.co/600x400?text=News+Story" alt="News Story" />
  );
  return <div>{imageElement}</div>;
}

export default ImageContainer;
