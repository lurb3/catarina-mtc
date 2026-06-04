import PortableContent from "@/components/Blog/PortableContent";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import { safeFetch } from "@/sanity/lib/fetch";
import {
  POSTS_SLUGS_QUERY,
  POST_QUERY,
} from "@/sanity/lib/queries";
import { BlogPostFull } from "@/types/blog";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = { slug: string };

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await safeFetch<string[]>(POSTS_SLUGS_QUERY, {}, []);
    return slugs.map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await safeFetch<BlogPostFull | null>(POST_QUERY, { slug }, null);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("pt-PT", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { slug } = await params;
  const post = await safeFetch<BlogPostFull | null>(POST_QUERY, { slug }, null);

  if (!post) notFound();

  const { title, mainImage, author, publishedAt, categories, body, excerpt } =
    post;

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <h1 className="mb-8 text-3xl leading-tight font-bold text-[#2D352C] sm:text-4xl sm:leading-tight">
              {title}
            </h1>

            <div className="mb-10 flex flex-wrap items-center justify-between border-b border-[#2D352C]/20 pb-4">
              <div className="flex flex-wrap items-center">
                {author?.name && (
                  <div className="mr-10 mb-5 flex items-center">
                    {author.image && (
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image src={author.image} alt={author.name} fill />
                        </div>
                      </div>
                    )}
                    <span className="text-[#4B544A] text-base font-medium">
                      Por <span>{author.name}</span>
                      {author.role && (
                        <span className="text-[#6C7463] ml-1 text-sm">
                          · {author.role}
                        </span>
                      )}
                    </span>
                  </div>
                )}
                {publishedAt && (
                  <p className="text-[#4B544A] mr-5 mb-5 text-base font-medium">
                    {formatDate(publishedAt)}
                  </p>
                )}
              </div>
              {categories?.[0] && (
                <div className="mb-5">
                  <span className="bg-[#2D352C] inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-[#E6E1D2]">
                    {categories[0].title}
                  </span>
                </div>
              )}
            </div>

            {mainImage && (
              <div className="mb-10 w-full overflow-hidden rounded-sm">
                <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                  <Image
                    src={mainImage}
                    alt={title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            )}

            {excerpt && (
              <p className="text-[#4B544A] mb-10 text-lg leading-relaxed font-medium italic sm:text-xl">
                {excerpt}
              </p>
            )}

            <div>
              <PortableContent value={body} />
            </div>

            <div className="items-center justify-between sm:flex">
              {categories && categories.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-body-color mb-3 text-sm font-medium">
                    Categorias :
                  </h4>
                  <div className="flex flex-wrap items-center">
                    {categories.map((c) => (
                      <TagButton key={c._id} text={c.title} />
                    ))}
                  </div>
                </div>
              )}
              <div className="mb-5">
                <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                  Partilhar :
                </h5>
                <div className="flex items-center sm:justify-end">
                  <SharePost />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
