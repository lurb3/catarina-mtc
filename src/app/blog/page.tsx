import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { safeFetch } from "@/sanity/lib/fetch";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { BlogPost } from "@/types/blog";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Medicina Tradicional Chinesa",
  description:
    "Artigos sobre acupunctura, fitoterapia chinesa e hábitos de saúde para o seu bem-estar.",
};

export const revalidate = 60;

const BlogPage = async () => {
  const posts = await safeFetch<BlogPost[]>(POSTS_QUERY, {}, []);

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Artigos sobre Medicina Tradicional Chinesa, hábitos de saúde e bem-estar — escritos para o ajudar a cuidar de si com mais consciência."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-body-color mx-auto max-w-2xl text-center">
              <p className="text-lg">
                Ainda não há artigos publicados. Volte em breve!
              </p>
              <p className="mt-2 text-sm">
                (Os artigos são geridos no Sanity Studio em{" "}
                <code className="bg-primary/10 text-primary rounded px-1.5 py-0.5">
                  /studio
                </code>
                .)
              </p>
            </div>
          ) : (
            <div className="-mx-4 flex flex-wrap justify-center">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <div className="mb-10">
                    <SingleBlog blog={post} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
