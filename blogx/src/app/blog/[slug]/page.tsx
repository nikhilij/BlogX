import Link from "next/link";
import { notFound } from "next/navigation";
import slugify from "slugify";

interface PageProps {
  params: {
    slug: string;
  };
}


export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  // Temporary static data - slugs are now generated using slugify
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn the basics of Next.js and why it's awesome.",
      date: "2024-01-15",
      content: `
        <h2>Why Next.js?</h2>
        <p>Next.js is a powerful React framework that makes building web applications easier and more efficient. It provides features like server-side rendering, static site generation, and API routes out of the box.</p>

        <h2>Getting Started</h2>
        <p>To get started with Next.js, you'll need to have Node.js installed. Then you can create a new project using:</p>
        <pre><code>npx create-next-app@latest my-app</code></pre>

        <h2>Key Features</h2>
        <ul>
          <li>Server-side rendering</li>
          <li>Static site generation</li>
          <li>API routes</li>
          <li>File-based routing</li>
          <li>TypeScript support</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "React Fundamentals",
      excerpt: "A refresher on React concepts you need to know.",
      date: "2024-01-10",
      content: `
        <h2>What is React?</h2>
        <p>React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.</p>

        <h2>Core Concepts</h2>
        <h3>Components</h3>
        <p>Components are the building blocks of React applications. They can be functional or class-based.</p>

        <h3>State</h3>
        <p>State represents data that can change over time. In functional components, we use the useState hook to manage state.</p>

        <h3>Props</h3>
        <p>Props are how we pass data from parent components to child components.</p>

        <h2>Example</h2>
        <pre><code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}</code></pre>
      `,
    },
  ].map((post) => ({
    ...post,
    slug: slugify(post.title, { lower: true, strict: true }),
  }));

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-semibold border-b-2 text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </header>

          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
