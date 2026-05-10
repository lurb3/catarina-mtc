import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      const url = urlFor(value).width(1200).fit("max").auto("format").url();
      return (
        <figure className="my-10">
          <div className="relative aspect-97/60 w-full overflow-hidden rounded-sm">
            <Image
              src={url}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-body-color mt-3 text-center text-sm italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href ?? "#";
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <Link
            href={href}
            className="text-primary underline hover:opacity-80"
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:opacity-80"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-5 text-2xl font-bold text-black sm:text-3xl dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-4 text-xl font-bold text-black sm:text-2xl dark:text-white">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="bg-primary/10 my-8 rounded-md border-l-4 border-primary px-6 py-4 italic text-body-color">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-body-color mb-6 text-base leading-relaxed sm:text-lg sm:leading-relaxed">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-body-color mb-6 list-inside list-disc space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-body-color mb-6 list-inside list-decimal space-y-2">
        {children}
      </ol>
    ),
  },
};

const PortableContent = ({ value }: { value: unknown }) => {
  if (!value) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={value as any} components={components} />;
};

export default PortableContent;
