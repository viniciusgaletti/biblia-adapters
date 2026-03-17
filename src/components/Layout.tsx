import { Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { BookOpen, LogOut, Loader2 } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { ErrorBoundary } from './ErrorBoundary'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'

export default function Layout() {
  const { user, signOut } = useAuth()

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border shadow-sm">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <BookOpen className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold text-primary tracking-tight">
                Bíblia dos Eliters
              </span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {user && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => signOut()}
                  className="rounded-full text-muted-foreground hover:text-foreground"
                  title="Sair"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-8 animate-fade-in">
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
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
