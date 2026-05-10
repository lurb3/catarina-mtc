import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const formatDate = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString("pt-PT", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

const SingleBlog = ({ blog }: { blog: BlogPost }) => {
  const { title, slug, mainImage, excerpt, author, categories, publishedAt } =
    blog;
  const href = `/blog/${slug}`;
  const primaryCategory = categories?.[0]?.title;

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
      <Link href={href} className="relative block aspect-37/22 w-full">
        {primaryCategory && (
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
            {primaryCategory}
          </span>
        )}
        {mainImage ? (
          <Image src={mainImage} alt={title} fill className="object-cover" />
        ) : (
          <div className="bg-primary/10 absolute inset-0" />
        )}
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href={href}
            className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
          >
            {title}
          </Link>
        </h3>
        {excerpt && (
          <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
            {excerpt}
          </p>
        )}
        <div className="flex items-center">
          {author?.name && (
            <div className="border-body-color/10 mr-5 flex items-center border-r pr-5 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5 dark:border-white/10">
              {author.image && (
                <div className="mr-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src={author.image} alt={author.name} fill />
                  </div>
                </div>
              )}
              <div className="w-full">
                <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                  Por {author.name}
                </h4>
                {author.role && (
                  <p className="text-body-color text-xs">{author.role}</p>
                )}
              </div>
            </div>
          )}
          <div className="inline-block">
            <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
              Data
            </h4>
            <p className="text-body-color text-xs">{formatDate(publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
