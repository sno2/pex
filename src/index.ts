import type {
  Photo,
  PhotoQuery,
  PhotosQuery,
  Video,
  VideoQuery,
  VideosQuery,
  PopularVideosQuery,
  PaginatedData,
  PaginatedOpts,
} from "./types";

import axios from "axios";

export interface PexOpts {
  key: string;
}

/**
 * The main class used to utilize the Pexels API.
 *
 * ## Example
 *
 * ```ts
 * const pex = new Pex({ key: "YOUR_API_KEY" });
 * const photo = await pex.getPhoto({ id: "" });
 * ```
 */
export class Pex {
  #opts: PexOpts;
  #axios: ReturnType<typeof axios.create>;

  /**
   * @param opts The options that includes your Pexels API key.
   */
  constructor(opts: PexOpts) {
    this.#opts = opts;
    this.#axios = axios.create({
      baseURL: "https://api.pexels.com",
      headers: {
        Authorization: this.#opts.key,
      },
    });
  }

  /**
   * Gets a single photo object.
   * @param queryOpts An object that includes the `id` of the specified photo and some other options.
   * @returns The queried photo.
   */
  async getPhoto(queryOpts: PhotoQuery) {
    const res = await this.#axios.get<Photo>(`/v1/photos${queryOpts.id}`);
    return res.data;
  }

  /**
   * Gets multiple photos based upon the search `query` specified in the `queryOpts` parameter and the other properties in `queryOpts`.
   * @param queryOpts The options used to search/filter/sort through the photos.
   * @returns The paginated photos response.
   */
  async getPhotos(queryOpts: PhotosQuery & PaginatedOpts) {
    const res = await this.#axios.get<PaginatedData<["photos", Photo]>>(
      "/v1/search",
      {
        params: queryOpts,
      }
    );
    return res.data;
  }

  /**
   * Gets the curated photos from the Pexels API.
   * @param paginatedOpts The options to specify the behavior of the paginated response (limit per page, ect.).
   * @returns The paginated, curated photos.
   */
  async getCuratedPhotos(paginatedOpts: PaginatedOpts) {
    const res = await this.#axios.get<PaginatedData<["photos", Photo]>>(
      "/v1/curated",
      {
        params: paginatedOpts,
      }
    );
    return res.data;
  }

  /**
   * Gets a given video based upon the `id` in the `queryOpts` parameter.
   * @param queryOpts The options used to get the video data.
   * @returns The video object.
   */
  async getVideo(queryOpts: VideoQuery) {
    const res = await this.#axios.get<Video>(`/videos/${queryOpts.id}`);
    return res.data;
  }

  /**
   * Gets multiple videos based upon the query options.
   * @param queryOpts The options used to query for videos.
   * @returns The paginated videos the match your query options.
   */
  async getVideos(queryOpts: VideosQuery & PaginatedOpts) {
    const res = await this.#axios.get<PaginatedData<["videos", Photo]>>(
      "/videos/search",
      {
        params: queryOpts,
      }
    );
    return res.data;
  }

  /**
   * Gets the popular videos based upon the query options.
   * @param queryOpts The options used to query for videos.
   * @returns The paginated popular videos.
   */
  async getPopularVideos(queryOpts: PopularVideosQuery & PaginatedOpts) {
    const res = await this.#axios.get<PaginatedData<["videos", Photo]>>(
      "/videos/popular",
      {
        params: queryOpts,
      }
    );
    return res.data;
  }
}
