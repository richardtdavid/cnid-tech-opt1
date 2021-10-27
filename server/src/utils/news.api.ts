import dotenv from "dotenv";
import axios, { Axios, AxiosResponse } from "axios";
import { Articles, NewsReponse, Options, Payload } from "./news.api.types";

dotenv.config();
export class NewsApi {
  private httpsService: Axios;
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor() {
    this.httpsService = axios;
    this.baseUrl = process.env.BASE_URL ?? "https://newsapi.org/v2";
    this.apiKey = process.env.API_KEY ?? "";
  }

  public async get(options: Options): Promise<Array<Articles> | Array<never>> {
    if (!options?.endpoint) {
      throw new Error("news api endpoint is a required field");
    }

    try {
      const payload: Payload = {
        ...options,
        apiKey: this.apiKey,
      };

      const url = this.buildUrlWithSearchParams(payload);
      const results = await this.httpsService.get(url.href);

      if (results?.data) {
        const { data }: AxiosResponse<NewsReponse> = results;
        if (data?.status === "ok") {
          return data?.articles;
        }
        return [];
      }

      return [];
    } catch (err) {
      console.log(err);

      return [];
    }
  }

  private buildUrlWithSearchParams(payload: Payload): URL {
    const urlWithParams = new URL(`${this.baseUrl}/${payload?.endpoint}`);

    for (const [key, value] of Object.entries(payload)) {
      urlWithParams.searchParams.append(key, value);
    }

    return urlWithParams;
  }
}
