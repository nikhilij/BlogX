import Link from "next/link";
import slugify from "slugify";

export default function Blog() {
  // Temporary static data - slugs are now generated using slugify
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn the basics of Next.js and why it's awesome.",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "React Fundamentals",
      excerpt: "A refresher on React concepts you need to know.",
      date: "2024-01-10",
    },
  ].map((post) => ({
    ...post,
    slug: slugify(post.title, { lower: true, strict: true }),
  }));

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
