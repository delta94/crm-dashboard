export interface Content {
  body: string;
  language_id: number;
  title: string;
}

export interface Post {
  l10n: Content[];
  cover: string;
  created_at: string;
  id: number;
  published_at: string;
  slug: string;
  status: string;
}

export interface PostPayload {
  l10n: Content[];
  cover: string;
  id: number;
  slug: string;
}

export interface Language {
  id: number;
  language: string;
}
