import { PostTag } from './PostTag'

export function StoryCard({ post }) {
  return (
    <article className="bg-ocean flex min-h-[444px] flex-col items-center rounded-sm px-6 pt-6 pb-12 text-white md:pb-[88px]">
      <PostTag>{post.tag}</PostTag>
      <h3 className="flex flex-1 items-center py-10 text-[44px] leading-none">{post.title}</h3>
      <a
        href={post.action.href}
        className="font-work-sans hover:text-ocean inline-flex h-10 items-center rounded-sm border border-white px-4 text-sm transition hover:bg-white"
      >
        {post.action.label}
      </a>
    </article>
  )
}
