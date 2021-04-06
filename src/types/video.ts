import type { Locale } from "./locale";
import type { Orientation } from "./orientation";
import type { Quality } from "./quality";
import type { Size } from "./size";

export interface Video {
  id: number;
  width: number;
  height: number;
  url: string;
  image: string;
  duration: number;
  user: VideoUser;
  video_files: VideoFile[];
}

export interface VideoUser {
  id: number;
  name: string;
  url: string;
}

export interface VideoFile {
  id: number;
  quality: Quality;
  file_type: string;
  width: number | null;
  height: number | null;
  link: string;
}

export interface VideoPicture {
  id: number;
  picture: string;
  nr: number;
}

export type VideoQuery = Pick<Video, "id">;

export interface VideosQuery {
  query: string;
  orientation?: Orientation;
  size?: Size;
  locale?: Locale;
}

export interface PopularVideosQuery {
  min_width?: number;
  min_height?: number;
  min_duration?: number;
  max_duration?: number;
}
