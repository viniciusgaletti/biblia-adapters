import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/use-theme'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full transition-transform active:scale-95"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 text-foreground transition-all rotate-0 scale-100" />
      ) : (
        <Sun className="h-5 w-5 text-foreground transition-all rotate-0 scale-100" />
      )}
    </Button>
  )
}
