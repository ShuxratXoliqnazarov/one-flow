import { cn } from '@/shared/lib'
import { columns } from '../model/data'

export function FooterNav() {
  return (
    <nav className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:flex lg:justify-between">
      {columns.map((column) => (
        <div key={column.title}>
          <h3 className="font-work-sans text-base leading-6">{column.title}</h3>
          <ul className="mt-2 flex flex-col gap-[9px]">
            {column.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={cn(
                    'font-work-sans text-base leading-6 transition hover:text-white',
                    column.highlighted ? 'text-white' : 'text-white/60',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
