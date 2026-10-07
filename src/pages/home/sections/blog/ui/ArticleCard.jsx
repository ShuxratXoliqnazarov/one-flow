import { cn } from '@/shared/lib'
import { PostMeta } from './PostMeta'
import { PostTag } from './PostTag'

const themes = {
  dark: { card: 'bg-primary text-white', image: 'object-contain object-top pt-1.5' },
  light: { card: 'bg-blush text-primary', image: 'object-cover' },
}

export function ArticleCard({ post }) {
  const theme = themes[post.theme]

  return (
    <a
      href={post.href}
      className={cn(
        'flex min-h-[444px] flex-col overflow-hidden rounded-sm transition hover:shadow-lg',
        theme.card,
      )}
    >
      <img
        src={post.image}
        alt=""
        width={368}
        height={207}
        loading="lazy"
        className={cn('h-[207px] w-full', theme.image)}
      />
      <div className="flex flex-1 flex-col px-6 pb-6">
        <PostTag className="mt-6 self-start">{post.tag}</PostTag>
        <h3 className="mt-5 text-2xl leading-8">{post.title}</h3>
        <PostMeta category={post.category} readTime={post.readTime} className="mt-auto pt-6" />
      </div>
    </a>
  )
}
