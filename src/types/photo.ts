import type { Locale } from "./locale";
import type { Orientation } from "./orientation";
import type { Size } from "./size";

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string | null;
  src: PhotoSource;
  liked: boolean;
}

export interface PhotoSource {
  original: string;
  large2x: string;
  large: string;
  medium: string;
  small: string;
  portrait: string;
  landscape: string;
  tiny: string;
}

export type PhotoQuery = Pick<Photo, "id">;

export interface PhotosQuery {
  query: string;
  orientation?: Orientation;
  size?: Size;
  color?: string;
  locale?: Locale;
}
