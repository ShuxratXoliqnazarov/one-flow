import { PostMeta } from './PostMeta'
import { PostTag } from './PostTag'

export function FeaturedPost({ post }) {
  return (
    <a
      href={post.href}
      className="bg-blush grid overflow-hidden rounded-sm transition hover:shadow-lg md:min-h-[477px] md:grid-cols-2"
    >
      <div className="flex flex-col px-6 pt-8 pb-6 md:pt-12 md:pr-0 md:pl-8">
        <PostTag className="self-start">{post.tag}</PostTag>
        <h3 className="my-8 max-w-[420px] text-[32px] leading-10 md:my-auto md:text-5xl md:leading-[54px]">
          {post.title}
        </h3>
        <PostMeta category={post.category} readTime={post.readTime} className="md:-ml-2" />
      </div>
      <img
        src={post.image}
        alt=""
        width={576}
        height={469}
        loading="lazy"
        className="h-full w-full object-cover object-right"
      />
    </a>
  )
}
