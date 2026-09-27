import { BlogPostFull } from "@/types/blog";

type Props = {
  post: BlogPostFull;
  slug: string;
};

/**
 * JSON-LD structured data for a blog article.
 * Renders BlogPosting + BreadcrumbList schemas in the page <head>.
 */
const BlogPostingJsonLd = ({ post, slug }: Props) => {
  const url = `https://catarinaabreumtc.com/blog/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt ?? "",
        url,
        ...(post.mainImage && { image: post.mainImage }),
        ...(post.publishedAt && {
          datePublished: post.publishedAt,
          dateModified: post._updatedAt ?? post.publishedAt,
        }),
        author: {
          "@type": "Person",
          "@id": "https://catarinaabreumtc.com/#catarina",
          name: post.author?.name ?? "Catarina Abreu",
          url: "https://catarinaabreumtc.com/perfil-clinico",
        },
        publisher: {
          "@type": "Organization",
          name: "Catarina Abreu — MTC",
          url: "https://catarinaabreumtc.com",
          logo: {
            "@type": "ImageObject",
            url: "https://catarinaabreumtc.com/images/logo/logo.svg",
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        inLanguage: "pt-PT",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: "https://catarinaabreumtc.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://catarinaabreumtc.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default BlogPostingJsonLd;
