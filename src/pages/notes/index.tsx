import { Layout } from '@/components'
import { getAllNotes } from '@/lib/api'
import Note from '@/types/note'
import Link from 'next/link'

type Props = {
  allNotes: Note[]
}

export default function Notes({ allNotes }: Props) {
  return (
    <Layout>
      <h1>Notas</h1>
      {allNotes.length ? (
        <ul className="pl-0">
          {allNotes.map((note) => (
            <li key={note.slug} className="flex justify-between">
              <Link href={`/notes/${note.slug}`}>
                <a>{note.title}</a>
              </Link>
              <em>{new Date(note.updated).toLocaleString()}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma nota por enquanto...</p>
      )}
    </Layout>
  )
}

export const getStaticProps = () => {
  const allNotes = getAllNotes(['slug', 'title', 'updated'])

  return {
    props: { allNotes },
  }
}
