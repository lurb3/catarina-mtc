import Image from "next/image";
import { Treatment } from "@/types/treatment";

const SingleTreatment = ({ treatment }: { treatment: Treatment }) => {
  const { icon, title, paragraph, image } = treatment;

  return (
    <article className="group overflow-hidden rounded-2xl bg-[#2D352C] transition hover:bg-[#1F2620] hover:shadow-2xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#4B544A] text-[#E6CFB8]">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-serif text-xl text-[#E6CFB8]">{title}</h3>
        <p className="text-sm leading-relaxed text-[#B5BFAB]">{paragraph}</p>
      </div>
    </article>
  );
};

export default SingleTreatment;
