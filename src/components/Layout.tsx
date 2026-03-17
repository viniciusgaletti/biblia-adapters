import { Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { BookOpen, Loader2 } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { ErrorBoundary } from './ErrorBoundary'

export default function Layout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-0 min-h-16 h-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-y-3 gap-x-4">
            <Link
              to="/"
              className="flex items-center gap-2 group shrink-0"
              aria-label="Página Inicial"
            >
              <BookOpen className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold text-primary tracking-tight hidden sm:inline-block">
                Bíblia dos Adapters
              </span>
            </Link>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 animate-fade-in">
          <Suspense
            fallback={
              <div
                className="flex justify-center items-center h-64"
                role="status"
                aria-label="Carregando"
              >
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  )
}
