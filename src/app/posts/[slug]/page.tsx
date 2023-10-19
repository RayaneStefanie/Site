import posts from "@/data/posts.json";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) return <p>404 not found</p>;

  return (
    <main className="container mx-auto mt-4">
      <article className="prose mx-auto">
        <h1>{post.title}</h1>
        <span className="text-zinc-400">{formatDate(new Date(post.date))}</span>
        <p className="relative h-80">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-md block mt-0"
          />
        </p>
        <p>{post.fullText}</p>
      </article>
    </main>
  );
}
