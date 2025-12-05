import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/"
          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
