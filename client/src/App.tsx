import { useQuery } from "react-query";
import { NewsFeed, NewsFeedOptions } from "./utils/news.feed";
import { formatDateWithTimeZone } from "./utils/dateFormatter";
import { Wrapper } from "./app.styles";
import { useState } from "react";

const App = () => {
  const newsfeed = new NewsFeed();

  const [articles, setArticles] = useState({
    q: "apple",
    from: formatDateWithTimeZone(),
    sortBy: "popularity",
  } as NewsFeedOptions);

  const [headlines, setHeadlines] = useState({
    sources: "bbc-news",
  } as NewsFeedOptions);

  const { data, isLoading, error } = useQuery(["articles", articles], () =>
    newsfeed.getArticles(articles)
  );

  const {
    data: headlineData,
    isLoading: headlineIsLoading,
    error: headlineError,
  } = useQuery(["headlines", headlines], () =>
    newsfeed.getTopHeadlineArticles(headlines)
  );

  return (
    <Wrapper>
      <div className="App">Test: {JSON.stringify(headlineData)}</div>
    </Wrapper>
  );
};

export default App;
