import React from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../Context/newsContext";
import "./news.css"

export const News = () => {
  const params = useParams();
  let newsId = params.id;
  const { news } = useNews();

  const newsToShow = news.find((n) => Number(n?.id) === Number(newsId));
  console.log(newsToShow);

  return (
    <div className="content-container">
      <p>{newsToShow?.date}</p>
      <p>{newsToShow?.author}</p>

      <p className="content" dangerouslySetInnerHTML={{__html:newsToShow?.content?.rendered}}/>   
    </div>
  );
};

