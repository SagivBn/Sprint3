import { NoteTxt } from './note-txt.jsx'

export function NoteList({ notes }) {

    // console.log('NoteTxt =' , NoteTxt)
    return <div>
        {/* hello */}
        <NoteTxt note={notes[0]} />
    </div>
    // <section className="note-list">
    //     {notes.map(note => <article key={note.id}>
    //         key = {note.id}
    //         {/* <h4>Txt: {note['info']['txt']}</h4> */}
    //     </article>)}
    // </section>
}