import { useState } from 'react'
import { Button, Logo } from '@/shared/ui'
import globeIcon from '../assets/globe.svg'
import { actions, navLinks } from '../model/data'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex h-20 items-center justify-between px-4 md:pr-[26px] md:pl-12">
        <a href="/" aria-label="oneflow — на главную">
          <Logo className="text-black" />
        </a>

        <div className="flex items-center">
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 [&>li:nth-child(-n+2)]:mr-[30px]">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-work-sans text-base leading-5 transition hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-12 hidden items-center gap-2 sm:flex">
            <Button size="sm" href={actions.demo.href}>
              {actions.demo.label}
            </Button>
            <Button size="sm" variant="outline" href={actions.login.href}>
              {actions.login.label}
            </Button>
          </div>

          <button type="button" aria-label="Change language" className="ml-[50px] hidden sm:block">
            <img src={globeIcon} alt="" width={20} height={20} />
          </button>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="ml-6 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className="bg-primary h-0.5 w-6" />
            <span className="bg-primary h-0.5 w-6" />
            <span className="bg-primary h-0.5 w-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-primary/10 border-t px-4 pb-6 md:px-12 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="font-work-sans block py-3 text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2 sm:hidden">
            <Button size="sm" href={actions.demo.href}>
              {actions.demo.label}
            </Button>
            <Button size="sm" variant="outline" href={actions.login.href}>
              {actions.login.label}
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
