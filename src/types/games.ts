export interface NameWithId {
  id: number;
  name: string;
}

export interface Localization {
  audio: boolean;
  interface: boolean;
  language_id: number;
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

export interface Media {
  covers: Record<string, Image>;
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
  score: string;
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

export interface L10n {
  description?: string;
  language_id: number;
  summary?: string;
}

export interface Revision {
  l10n: L10n[];
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
  developers?: string;
  publishers?: string;
  genres?: NameWithId[];
  tags?: NameWithId[];
  release_date?: string;
  features?: NameWithId[];
  controllers?: string;
  release_date_count_down?: boolean;
}

export interface Game {
  id: string;
  revision: Revision;
  slug: string;
  title: string;
  type: any;
}
