import Avatar from 'components/AuthorAvatar'
import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'

export default function PostHeader(
  props: Pick<
    Post,
    | 'title'
    | 'coverImage'
    | 'date'
    | 'author'
    | 'slug'
    | 'comunity'
    | 'category'
  >,
) {
  const { title, coverImage, date, author, slug, category, comunity } = props

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:flex justify-between items-center">
        {author && <Avatar name={author.name} picture={author.picture} />}
        {comunity && <Avatar name={comunity.name} picture={comunity.logo} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 flex justify-between items-center md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
          {comunity && <Avatar name={comunity.name} picture={comunity.logo} />}
        </div>
        <div className="mb-6 text-lg flex justify-between items-center">
          <Date dateString={date} />
          <strong>{category.name}</strong>
        </div>
      </div>
    </>
  )
}
