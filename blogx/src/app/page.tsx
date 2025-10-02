export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Blog</h1>
        <div className="grid gap-6">
          {/* We'll add blog posts here tomorrow */}
          <div className="border p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Welcome to My Blog</h2>
            <p className="text-gray-600">Coming soon with amazing content!</p>
          </div>
        </div>
      </div>
    </main>
  )
}