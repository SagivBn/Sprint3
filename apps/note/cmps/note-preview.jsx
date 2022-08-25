
export class NotePreview extends React.Component {

    state = {
        note: null
    }
    componentDidMount() {
        this.setState({ note: this.props.note })
    }


    DynamicCmp = (note) => {
        const { type } = this.state.note
        console.log(type)
        switch (type) {
            case ('note-txt'):
                return TxtNote(note)
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
    console.log(note)
    const { title, txt } = note.info
    console.log(title)
    return (
        <div>
            <h3>{title}</h3>
            <p>{txt}</p>
        </div>
    )
}


