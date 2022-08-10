import React from "react";
import { useNews } from "../Context/newsContext";
import { Link } from "react-router-dom";
import "./Articles.css"

function Articles() {
  const { news } = useNews();
  return (
    <>
      <div className="outer-main">
      
        {news?.map((item, _id) => {
          return (
            <div className="job-content">
            <div key={item.id} >
            
              <p>
                <Link to={`news/${item.id}`}>{item.title.rendered}</Link>
              </p>
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Articles };
