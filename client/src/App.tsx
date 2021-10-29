import { useQuery } from "react-query";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { NewsFeed, NewsFeedOptions } from "./utils/news.feed";
import { formatDateWithTimeZone } from "./utils/dateFormatter";
import { useStyles } from "./app.styles";
import { Header } from "./components/header/header.component";
import { Feed } from "./components/feed/feed.component";
import { AppContext, AppStateOptions } from "./AppContext";
import { IsLoading } from "./components/utils/utils.component";
import shortid from "shortid";

const App = () => {
  const newsfeed = new NewsFeed();
  const [appState, setAppState] = useState({
    sortBy: "publishedAt",
  } as AppStateOptions);

  const [state, setState] = useState({
    articles: {
      q: "apple",
      from: formatDateWithTimeZone(),
      sortBy: "popularity",
    } as NewsFeedOptions,
    headlines: {
      sources: "bbc-news",
    } as NewsFeedOptions,
  });

  const { data: articleData, isLoading } = useQuery(
    ["articles", state.articles],
    () => newsfeed.getArticles(state.articles)
  );

  const { data: headlineData, isLoading: headlineIsLoading } = useQuery(
    ["headlines", state.headlines],
    () => newsfeed.getTopHeadlineArticles(state.headlines)
  );

  useEffect(() => {
    if (appState.region === "us" && state.headlines.country == null) {
      if (state?.headlines?.sources) {
        delete state.headlines.sources;
        setState((prevState) => ({
          ...prevState,
          headlines: {
            country: appState.region,
          },
        }));
      }
    }

    if (appState.region === "uk") {
      if (state?.headlines?.country) {
        delete state.headlines.country;
        setState((prevState) => ({
          ...prevState,
          headlines: {
            sources: "bbc-news",
          },
        }));
      }
    }

    if (appState.region === "" && appState.sortBy !== state.articles.sortBy) {
      setState((prevState) => ({
        ...prevState,
        articles: {
          q: "netflix",
          from: formatDateWithTimeZone(),
          sortBy: appState.sortBy,
        },
      }));
    }
  }, [appState, state]);

  const { root, app } = useStyles();
  if (isLoading) return <IsLoading />;
  if (headlineIsLoading) return <IsLoading />;

  const renderByRegion = appState.region === "" ? articleData : headlineData;

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
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
              {renderByRegion?.map((article) => (
                <Feed key={shortid.generate()} {...article} />
              ))}
            </Grid>
          </Grid>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
