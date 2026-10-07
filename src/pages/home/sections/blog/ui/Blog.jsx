import { Button, Container } from '@/shared/ui'
import { blogLink, featuredPost, posts, title } from '../model/data'
import { ArticleCard } from './ArticleCard'
import { FeaturedPost } from './FeaturedPost'
import { StoryCard } from './StoryCard'

const cards = { article: ArticleCard, story: StoryCard }

export function Blog() {
  return (
    <section className="bg-white">
      <Container className="pt-20 pb-24 lg:pb-[200px]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-roboto text-[32px] leading-10 font-bold md:text-5xl md:leading-[54px]">
            {title}
          </h2>
          <Button href={blogLink.href} className="text-base!">
            {blogLink.label}
          </Button>
        </div>

        <div className="mt-10 flex flex-col gap-6 lg:mt-[80px]">
          <FeaturedPost post={featuredPost} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const Card = cards[post.type]
              return <Card key={post.id} post={post} />
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
