import { useQuery } from "react-query";
import { NewsFeed, NewsFeedOptions } from "./utils/news.feed";
import { formatDateWithTimeZone } from "./utils/dateFormatter";
import { useStyles } from "./app.styles";
import { useState } from "react";

import { Header } from "./components/header/header.component";
import { Feed } from "./components/feed/feed.component";
import { Grid } from "@material-ui/core";

const App = () => {
  const newsfeed = new NewsFeed();

  const [articles] = useState({
    q: "apple",
    from: formatDateWithTimeZone(),
    sortBy: "popularity",
  } as NewsFeedOptions);

  const [headlines] = useState({
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

  const { root, app } = useStyles();
  return (
    <div className={root}>
      <Header />
      <div className={app}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item lg={6}>
            {headlineData?.map((article) => (
              <Feed key={article?.publishedAt} {...article} />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
