
export class NotePreview extends React.Component {

    state = {
        note: null
    }
    componentDidMount() {
        this.setState({ note: this.props.note })
    }


    DynamicCmp = (note) => {
        const { type } = this.state.note
        switch (type) {
            case ('note-txt'):
                return TxtNote(note)
            case ('note-img'):
                return ImgNote(note)
            case ('note-todos'):
                return TodosNote(note)
            default: return <div>not yet implented</div>
        }
    }

    render() {
        const { note } = this.state
        const { DynamicCmp } = this
        if (!note) return <h1>Loading</h1>
        console.log(note, DynamicCmp)
        return (
            <DynamicCmp note={note} />
        )
    }
}

function TxtNote({ note }) {
    const { title, txt } = note.info
    return (
        <div>
            <h3>{title}</h3>
            <p>{txt}</p>
        </div>
    )
}

function ImgNote({ note }) {
    const { title, url } = note.info
    console.log(url)
    return (
        <div>
            <h3>{title}</h3>
            <img src={url}></img>
        </div>
    )
}

function TodosNote({ note }) {
    const { title, todos } = note.info
    console.log(todos)
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {todos.map((todo, idx) => <li className="note-todo-item" key={idx}>{todo.txt}</li>)}
            </ul>
            {/* <p>{txt}</p> */}
        </div>
    )
}

