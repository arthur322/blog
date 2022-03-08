import { Layout } from '@/components'
import { getAllNotes, getNoteBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import Note from '@/types/note'

type Props = {
  note: Note
}

export default function NotePage({ note }: Props) {
  return (
    <Layout pageTitle={note.title}>
      <p>
        Estágio: <span className="capitalize">{note.stage}</span>
      </p>
      <div dangerouslySetInnerHTML={{ __html: note.content }} />
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const note = getNoteBySlug(params.slug, [
    'slug',
    'title',
    'date',
    'updated',
    'stage',
    'content',
  ])
  const noteContent = await markdownToHtml(note.content || '')

  return {
    props: {
      note: {
        ...note,
        content: noteContent,
      },
    },
  }
}

export const getStaticPaths = () => {
  const allNotes = getAllNotes(['slug'])

  return {
    paths: allNotes.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}
