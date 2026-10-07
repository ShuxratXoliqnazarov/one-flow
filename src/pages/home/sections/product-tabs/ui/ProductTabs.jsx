import { useState } from 'react'
import { cn } from '@/shared/lib'
import { Button, Container } from '@/shared/ui'
import { action, tabs } from '../model/data'
import { TabIcon } from './TabIcon'

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" className="shrink-0">
      <circle cx="10" cy="10" r="10" className="fill-primary/80" />
      <path d="M6 10.5l2.5 2.5L14 7.5" fill="none" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}

export function ProductTabs() {
  const [activeId, setActiveId] = useState('collaborate')
  const activeTab = tabs.find((tab) => tab.id === activeId)

  return (
    <section className="bg-primary py-16 lg:py-32">
      <Container>
        <div className="text-primary overflow-hidden rounded-lg bg-[#d3e8f4]">
          <div
            role="tablist"
            className="flex overflow-x-auto border-b border-[#94b4c2] px-4 md:justify-around md:px-12"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={tab.id === activeId}
                onClick={() => setActiveId(tab.id)}
                className="flex shrink-0 flex-col items-center gap-2 px-4 pt-8 transition hover:opacity-70"
              >
                <TabIcon name={tab.id} />
                <span
                  className={cn(
                    'font-work-sans border-b-[3px] pb-[31px] text-lg leading-6',
                    tab.id === activeId ? 'border-primary' : 'border-transparent',
                  )}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            className="relative px-6 pt-10 pb-12 md:px-24 lg:min-h-[478px] lg:pt-[50px]"
          >
            <div className="lg:max-w-[545px]">
              <h3 className="font-roboto text-4xl font-bold md:text-[55px] md:leading-[60px]">
                {activeTab.title}
              </h3>
              <p className="font-work-sans mt-6 text-lg md:text-[21px] md:leading-7">
                {activeTab.text}
              </p>
              <ul className="mt-14 flex flex-col gap-2">
                {activeTab.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-work-sans flex items-center gap-2 text-sm leading-5"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button size="sm" variant="outline" href={action.href} className="mt-11">
                {action.label}
              </Button>
            </div>

            <img
              src={activeTab.image}
              alt=""
              width={420}
              height={418}
              loading="lazy"
              className="mx-auto mt-8 lg:absolute lg:top-[59px] lg:right-0 lg:mt-0"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
