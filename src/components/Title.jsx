import React from "react";

function Title(props) {
  return (
    <div>
      <a href={props.link} className="title">
        {props.title}
      </a>
    </div>
  );
}

export default Title;
