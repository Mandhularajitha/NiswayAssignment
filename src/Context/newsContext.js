import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const NewsContext = createContext(null);

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10")
      .then((res) => {
        // console.log(res, "lujpoujo");
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
};

const useNews = () => useContext(NewsContext);

export { useNews, NewsProvider };
