import { Options } from "src/utils/news.api.types";
import { NewsApi } from "../utils/news.api";

export const getAllArticles = async (payload: { [key: string]: unknown }) => {
  const payloadOptions: Options = {
    ...payload,
    endpoint: "everything",
  };

  const newsApi = new NewsApi();
  const data = await newsApi.get(payloadOptions);

  return data;
};

export const getTopHeadlines = async (payload: { [key: string]: unknown }) => {
  const payloadOptions: Options = {
    ...payload,
    endpoint: "top-headlines",
  };

  const newsApi = new NewsApi();
  const data = await newsApi.get(payloadOptions);

  return data;
};
