import { cn } from '@/shared/lib'

const variants = {
  accent: 'bg-accent text-primary border-accent hover:brightness-95',
  primary: 'bg-primary text-white border-primary hover:opacity-90',
  outline: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white',
}

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-[50px] px-5 text-lg',
}

// Если передан href — рендерится как ссылка, иначе как <button>
export function Button({ variant = 'accent', size = 'md', href, className, children, ...props }) {
  const classes = cn(
    'inline-flex items-center justify-center rounded border font-work-sans transition',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
