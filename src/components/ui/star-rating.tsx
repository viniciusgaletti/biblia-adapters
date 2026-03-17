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

  const gapClass = interactive ? 'gap-[3px]' : 'gap-[1px]'
  const starSizeClass = size === 'sm' ? 'w-[14px] h-[14px]' : 'w-[18px] h-[18px]'
  const containerClass = disabled ? 'opacity-50 pointer-events-none' : ''

  return (
    <div
      className={cn('flex items-center', gapClass, containerClass)}
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

        const starColorClass = isFilled
          ? 'fill-[#f59e0b] text-[#f59e0b]'
          : 'fill-transparent text-muted-foreground'

        const interactiveStarColor = isHovered
          ? 'fill-[#fbbf24] text-[#fbbf24]'
          : isFilled
            ? 'fill-[#f59e0b] text-[#f59e0b]'
            : 'fill-transparent text-muted-foreground'

        const finalColorClass = interactive
          ? interactiveStarColor
          : isHalf
            ? 'fill-[#f59e0b] text-[#f59e0b]'
            : starColorClass

        if (!interactive && isHalf) {
          return (
            <StarHalf
              key={starIndex}
              className={cn(
                starSizeClass,
                'fill-[#f59e0b] text-[#f59e0b] transition-colors duration-100 ease-in-out',
              )}
              aria-hidden="true"
            />
          )
        }

        if (interactive) {
          return (
            <button
              key={starIndex}
              type="button"
              disabled={disabled}
              onMouseEnter={() => setHoverRating(starIndex)}
              onClick={() => onRate && onRate(starIndex)}
              className={cn(
                'flex items-center justify-center w-[32px] h-[32px] bg-transparent border-none cursor-pointer rounded-[4px] p-0 transition-colors duration-100 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                !disabled && 'hover:bg-accent',
              )}
              aria-label={`Avaliar com ${starIndex} estrelas`}
            >
              <Star
                className={cn(
                  starSizeClass,
                  finalColorClass,
                  'transition-colors duration-100 ease-in-out',
                )}
                aria-hidden="true"
              />
            </button>
          )
        }

        return (
          <Star
            key={starIndex}
            className={cn(
              starSizeClass,
              finalColorClass,
              'transition-colors duration-100 ease-in-out',
            )}
            aria-hidden="true"
          />
        )
      })}
    </div>
  )
}
