import { safeFetch } from "@/sanity/lib/fetch";
import { POSTS_HOME_QUERY } from "@/sanity/lib/queries";
import { BlogPost } from "@/types/blog";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

export const revalidate = 60;

const Blog = async () => {
  const posts = await safeFetch<BlogPost[]>(POSTS_HOME_QUERY, {}, []);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Últimos Artigos"
          paragraph="Partilhamos reflexões sobre Medicina Tradicional Chinesa, hábitos de saúde e bem-estar para o ajudar a viver com mais equilíbrio."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id} className="w-full">
              <SingleBlog blog={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
