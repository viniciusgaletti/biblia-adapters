import * as React from 'react'
import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-[var(--radius)] border border-border bg-background px-[12px] py-[10px] text-[13px] font-sans transition-all duration-200 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/15 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 resize-y aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive/15 aria-[invalid=true]:focus-visible:border-destructive',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
