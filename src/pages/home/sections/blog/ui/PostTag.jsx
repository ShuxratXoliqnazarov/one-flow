import { cn } from '@/shared/lib'

const tagStyles = {
  Article: 'bg-magenta text-white',
  Guide: 'bg-blush text-primary',
  'Customer Story': 'bg-sky text-white',
}

export function PostTag({ children, className }) {
  return (
    <span
      className={cn(
        'font-work-sans inline-flex h-[21px] items-center rounded-sm px-2 text-[11px]',
        tagStyles[children],
        className,
      )}
    >
      {children}
    </span>
  )
}
