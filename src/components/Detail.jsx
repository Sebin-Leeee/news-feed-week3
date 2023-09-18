import React from "react";

function Detail(props) {
  const maxLength = 200;

  const truncatedDescription =
    props.description && props.description.length > maxLength
      ? props.description.slice(0, maxLength) + "..."
      : props.description;

  return (
    <div>
      <p>{props.creator}</p>
      <p className="info">{truncatedDescription}</p>
    </div>
  );
}

export default Detail;
