import { useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  interactive?: boolean
  onRate?: (value: number) => void
  userRating?: number | null
  size?: 'sm' | 'md'
  disabled?: boolean
}

export function StarRating({
  rating,
  interactive = false,
  onRate,
  userRating,
  size = 'sm',
  disabled = false,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0)

  const starSizeClass =
    size === 'sm' ? 'w-[14px] h-[14px]' : interactive ? 'w-[22px] h-[22px]' : 'w-[18px] h-[18px]'
  const containerClass =
    interactive && !disabled ? 'cursor-pointer' : disabled ? 'cursor-not-allowed opacity-50' : ''

  return (
    <div
      className={cn('flex items-center gap-[2px]', containerClass)}
      onMouseLeave={() => setHoverRating(0)}
    >
      {[1, 2, 3, 4, 5].map((starIndex) => {
        const isHovered = interactive && hoverRating >= starIndex
        const isRatedByUser =
          interactive && userRating && userRating >= starIndex && hoverRating === 0
        const fillInteractive = isHovered || isRatedByUser

        const fillDisplay = !interactive && Math.floor(rating) >= starIndex
        const isHalf = !interactive && !fillDisplay && rating >= starIndex - 0.5

        const isFilled = interactive ? fillInteractive : fillDisplay

        if (!interactive && isHalf) {
          return (
            <StarHalf
              key={starIndex}
              className={cn(starSizeClass, 'fill-amber-400 text-amber-400')}
              aria-hidden="true"
            />
          )
        }

        return (
          <button
            key={starIndex}
            type={interactive ? 'button' : undefined}
            disabled={!interactive || disabled}
            onMouseEnter={() => interactive && setHoverRating(starIndex)}
            onClick={() => interactive && onRate && onRate(starIndex)}
            className={cn(
              'focus:outline-none transition-colors',
              interactive
                ? 'hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring rounded-sm'
                : 'cursor-default',
            )}
            aria-label={interactive ? `Avaliar com ${starIndex} estrelas` : undefined}
          >
            <Star
              className={cn(
                starSizeClass,
                'transition-all',
                isFilled ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/30',
              )}
              aria-hidden="true"
            />
          </button>
        )
      })}
    </div>
  )
}
