export type BlogAuthor = {
  name?: string;
  image?: string | null;
  role?: string;
  bio?: unknown;
};

export type BlogCategory = {
  _id: string;
  title: string;
  slug: string;
};

/**
 * Shape returned by `POSTS_QUERY` / `POSTS_HOME_QUERY` from Sanity.
 */
export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: string | null;
  publishedAt?: string;
  categories?: BlogCategory[];
  author?: BlogAuthor;
};

/**
 * Shape returned by `POST_QUERY` (full article).
 */
export type BlogPostFull = BlogPost & {
  body?: unknown;
};
