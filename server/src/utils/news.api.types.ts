export interface NewsReponse {
  status: string;
  totalResults: number;
  articles: Array<Articles>;
}

export interface Articles {
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
}

export type Options = {
  endpoint: string;
  q?: string;
  from?: string;
  sortBy?: string;
  country?: string;
  sources?: string;
};

export type Payload = Options & {
  apiKey: string;
};
