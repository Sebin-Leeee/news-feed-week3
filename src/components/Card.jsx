import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import Detail from "./Detail";
import Title from "./Title";

function Card(props) {
  const [active, setActive] = useState(false);
  function closeItem() {
    setActive(true);
  }

  return (
    <div className={active ? "close" : "card"}>
      <div className="card-top">
        <div className="img-container">
          <ImageContainer img={props.img} />
        </div>
        <div>
          <h2>
            <Title link={props.link} title={props.name} />
          </h2>
          <span class="delete" onClick={closeItem}>
            x
          </span>
          <p>
            <span className="creator">By: {props.creator}</span>
          </p>
        </div>
      </div>
      <Detail description={props.detail} />
      <p>
        <a className="read-more" href={props.link}>
          Read More >{" "}
        </a>
      </p>
    </div>
  );
}

export default Card;
