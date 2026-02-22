import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-[var(--color-foreground)] mb-3">Page not found</h1>
        <p className="text-[var(--color-muted)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20"
        >
          <Home className="w-4 h-4" />
          Back Home
        </Link>
      </div>
    </div>
  );
}
