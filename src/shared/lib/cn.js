// Склеивает классы, пропуская пустые значения: cn('a', isActive && 'b')
export const cn = (...classes) => classes.filter(Boolean).join(' ')
