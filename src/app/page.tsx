import posts from "@/data/posts.json";
import PostCard from "./post-card";

export default function Home() {
  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-8">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
