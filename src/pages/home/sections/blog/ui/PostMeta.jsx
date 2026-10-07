import { cn } from '@/shared/lib'

export function PostMeta({ category, readTime, className }) {
  return (
    <p className={cn('font-work-sans flex gap-4 text-[11px] leading-4', className)}>
      <span>{category} |</span>
      <span>{readTime}</span>
    </p>
  )
}
