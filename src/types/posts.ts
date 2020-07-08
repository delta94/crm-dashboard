export interface Content {
  body: string;
  language_id: number;
  title: string;
}

export interface Post {
  content: Content[];
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
