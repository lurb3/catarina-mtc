import { BLOG_ENABLED } from "@/config/features";
import { notFound } from "next/navigation";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!BLOG_ENABLED) notFound();

  return children;
}
