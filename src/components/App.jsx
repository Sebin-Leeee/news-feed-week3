import React from "react";
import Card from "./Card";
import stories from "../sample_news_stories.json";

function createCard(story) {
  return (
    <Card
      name={story.title}
      link={story.link}
      creator={story.creator}
      img={story.image_url}
      detail={story.description}
      key={story.source_id}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="page-title">My News Feed</h1>
      {stories.results.map(createCard)};
    </div>
  );
}

export default App;
