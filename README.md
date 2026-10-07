# Oneflow — командная вёрстка

Лендинг по макету [Figma](https://www.figma.com/design/HZaauAwFBCowxPkwGw3vSg/Oneflow----Copy-?node-id=0-1).
Стек: **React + Vite + Tailwind CSS v4 + JavaScript**. Архитектура: **FSD** (только слои `app`, `pages`, `shared` — `widgets`, `features` и `entities` нам не нужны, у нас только вёрстка).

## Запуск

```bash
npm install
npm run dev
```

Другие команды: `npm run build`, `npm run lint`, `npm run format`.

## Структура

```
src/
├── app/                      # точка входа: main.jsx, App.jsx, глобальные стили
│   └── styles/index.css      # Tailwind + цвета/шрифты из макета (@theme)
├── pages/
│   └── home/
│       ├── ui/HomePage.jsx       # собирает секции по порядку
│       ├── sections/             # ⭐ СЕКЦИИ ЛЕНДИНГА — каждая папка = одна секция = один человек
│       │   └── hero/
│       │       ├── ui/Hero.jsx   # вёрстка секции
│       │       ├── model/data.js # тексты, ссылки, массивы карточек
│       │       ├── assets/       # картинки и иконки ТОЛЬКО этой секции
│       │       └── index.js      # публичный экспорт: export { Hero } from './ui/Hero'
│       └── index.js
└── shared/                   # общее для всех
    ├── ui/                   # Button, Container
    ├── lib/                  # cn() — склейка классов
    └── assets/               # общие иконки/картинки (логотип и т.п.)
```

## Секции (порядок как в макете)

| #  | Папка (в `pages/home/`)     | Компонент         | Что в макете                                              | Кто делает |
|----|-----------------------------|-------------------|-----------------------------------------------------------|------------|
| 1  | `sections/header`           | `Header`          | Шапка: логотип, меню, кнопки                              |            |
| 2  | `sections/hero`             | `Hero`            | «Work wonders»                                            |            |
| 3  | `sections/partners`         | `Partners`        | «Join these companies making business flow» + логотипы    |            |
| 4  | `sections/smart-contracts`   | `SmartContracts`  | «Turn signatures into smart contracts»                    |            |
| 5  | `sections/product-tabs`      | `ProductTabs`     | Табы Create / Collaborate / Sign / Manage / Analyze / Integrate |      |
| 6  | `sections/press-play`       | `PressPlay`       | «Press play» (видео)                                      |            |
| 7  | `sections/platform`         | `Platform`        | «The complete platform for smart contracts»               |            |
| 8  | `sections/demo-banner`       | `DemoBanner`      | «Believe your eyes»                                       |            |
| 9  | `sections/testimonials`      | `Testimonials`    | «Don’t just take our word for it…» — отзывы               |            |
| 10 | `sections/integrations`      | `Integrations`    | «Seamless integrations»                                   |            |
| 11 | `sections/blog`             | `Blog`            | «And for our next trick…» — статьи                        |            |
| 12 | `sections/more-from-oneflow` | `MoreFromOneflow` | «More from Oneflow»                                       |            |
| 13 | `sections/footer`           | `Footer`          | Футер + «Get in the flow»                                 |            |

## Правила команды

1. **Работаешь только в папке своей секции.** Чужие секции не трогаем.
2. **Импорт только через `index.js`** и алиас `@`:
   ```js
   import { Button, Container } from '@/shared/ui' // ✅
   import { Button } from '../../shared/ui/Button/Button' // ❌
   ```
3. **Слои импортируют только «вниз»:** `app → pages → shared`. Секция не импортирует другую секцию — общее выносим в `shared`.
4. **Тексты и списки — в `model/data.js`**, в JSX рендерим через `.map()`, а не копипастим карточки.
5. **Картинки своей секции — в `assets/` своей секции**; общие (логотип и т.п.) — в `shared/assets`.
6. **Цвета и шрифты — из темы**, не хардкодим hex:
   - `bg-primary` / `text-primary` — `#013A4C` (тёмно-бирюзовый)
   - `bg-accent` — `#FFD063` (жёлтые кнопки)
   - `font-roboto` (заголовки и текст), `font-work-sans` (кнопки)
   Новый общий цвет → добавляем в `src/app/styles/index.css` (`@theme`) и предупреждаем команду.
7. **Контент секции оборачиваем в `<Container>`** — он держит ширину 1152px как в макете.
8. **Кнопки — через `<Button variant="accent" | "primary" | "outline">`.** Изменения в `shared/` — только по договорённости.
9. **Git:** каждый в своей ветке `section/<папка>` (например `section/hero`), потом Pull Request в `main`.
