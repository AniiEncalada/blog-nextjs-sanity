/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText, type PortableTextReactComponents } from 'next-sanity'

import styles from './PostBody.module.css'
import { SanityImage } from './SanityImage'

const myPortableTextComponents = (
  locale: string,
): Partial<PortableTextReactComponents> => ({
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />
    },
  },
  unknownType: ({ value }) => {
    return <p>{value[locale]}</p>
  },
})

export default function PostBody({ content, locale }) {
  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText
        value={content}
        components={myPortableTextComponents(locale)}
      />
    </div>
  )
}
