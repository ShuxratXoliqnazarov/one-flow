import { cn } from '@/shared/lib'

// Центрирует контент секции: 1152px контента + отступы по бокам на мобилке
export function Container({ className, children }) {
  return <div className={cn('mx-auto w-full max-w-[1184px] px-4', className)}>{children}</div>
}
