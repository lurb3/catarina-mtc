import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    publishedAt,
    "categories": categories[]->{_id, title, "slug": slug.current},
    "author": author->{name, "image": image.asset->url, role}
  }
`;

export const POSTS_HOME_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    publishedAt,
    "categories": categories[]->{_id, title, "slug": slug.current},
    "author": author->{name, "image": image.asset->url, role}
  }
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    body,
    publishedAt,
    _updatedAt,
    "categories": categories[]->{_id, title, "slug": slug.current},
    "author": author->{name, "image": image.asset->url, role, bio}
  }
`;

export const POSTS_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const POSTS_SITEMAP_QUERY = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`;
