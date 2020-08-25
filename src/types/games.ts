export interface NameWithId {
  id: number;
  name: string;
}

export interface Localization {
  audio: boolean;
  interface: boolean;
  language: string;
  subtitles: boolean;
}

export interface MediaType {
  AspectHeight: number;
  AspectWidth: number;
  ID: number;
  IsNeedResize: boolean;
  IsNeedValidate: boolean;
  Name: string;
  ResultHeight: number;
  ResultWidth: number;
}

export interface Image {
  id: number;
  type: string;
  url: string;
}

export interface Covers {
  catalog: Image;
  horizontal: Image;
  horizontal_small: Image;
  large_single: Image;
  vertical: Image;
  wide_slider: Image;
}

export interface Media {
  covers: Covers;
  screenshots: Image[] | null;
}

export interface Rating {
  agency: string;
  display_online_notice: boolean;
  rating: string;
  show_age_restrict: boolean;
}

export interface Review {
  link: string;
  press_name: string;
  quote: string;
  score: number;
}

export interface SocialLink {
  type: string;
  url: string;
}

export interface Requirements {
  cpu: string;
  disk_space: number;
  gpu: string;
  os: string;
  ram: number;
}

export interface SystemRequirements {
  minimal: Requirements;
  platform: string;
  recommended: Requirements;
}

export interface Feature {
  id: number;
  name: string;
  icon: string;
}

export interface Price {
  base_amount: number;
  discount: number;
  final_amount: number;
  grapheme: string;
  region_currency_id: number;
}

export interface Revision {
  description: string;
  id: number;
  license: string;
  localization?: Localization[];
  media: Media;
  platforms: string[];
  play_time: number;
  rating: Rating[];
  review: Review[];
  social_links: SocialLink[];
  status: string;
  summary: string;
  system_requirements?: SystemRequirements[];
  trailer: string;
  prices?: Price[];
  developers?: NameWithId[];
  publishers?: NameWithId[];
  genres?: NameWithId[];
  tags?: NameWithId[];
  release_date?: string;
  features?: NameWithId[];
  controllers?: string;
}

export interface Game {
  id: string;
  revision: Revision;
  slug: string;
  title: string;
  type: any;
}
