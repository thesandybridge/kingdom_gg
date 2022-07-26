type Author = {
  name: string;
  picture?: string;
};

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author?: Author;
  excerpt: string;
  ogImage?: {
    url?: string;
  };
  content: string;
  steamLink?: string;
  trailer?: string;
  category: string;
  roadmap?: string;
};

export type { PostType };
