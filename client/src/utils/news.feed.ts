import axios, { Axios } from "axios";

export class NewsFeed {
  private httpService: Axios;
  private readonly BASE_URL = "http://localhost:6750/api";
  constructor() {
    this.httpService = axios;
  }

  async getArticles(options: NewsFeedOptions): Promise<Articles[] | never[]> {
    try {
      const results = await this.httpService.post(
        `${this.BASE_URL}/everything`,
        options
      );
      if (results?.data.length > 0) {
        return results?.data;
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getTopHeadlineArticles(
    options: NewsFeedOptions
  ): Promise<Articles[] | never[]> {
    try {
      const results = await this.httpService.post(
        `${this.BASE_URL}/headlines`,
        options
      );
      if (results?.data.length > 0) {
        return results?.data;
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

export type NewsFeedOptions = {
  q?: string;
  from?: string;
  sortBy?: string;
  country?: string;
  sources?: string;
};

export type Articles = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
