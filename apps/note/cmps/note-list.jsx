import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes }) {


    // onAddNote = () => {

    // }
    
    return <section className="note-list grid">
        {notes.map(note => <article className="note" key={note.id}>
            <NotePreview note={note} />
        </article>)}
    </section>
}