import { noteService } from "../services/note.service.js";


export class NoteButtons extends React.Component {

    state = {
        isPin: false
    }


    componentDidMount() {
        this.IsPin()
    }

    IsPin = () => {
        const { noteId } = this.props.noteId
        noteService.isPin(noteId)
            .then((isPin) => this.setState({ isPin }))
    }

    onChangePin = () => {
        const { isPin } = this.state.isPin
        const { noteId } = this.props.noteId
        this.setState({ isPinned: !this.state.isPin })
        this.props.onPinNote(noteId)



    }
    render() {
        const { noteId, onRemoveNote } = this.props
        const { isPin } = this.state
        const { onChangePin } = this

        return <section className="note-buttons">
            <button onClick={() => { onRemoveNote(noteId) }}>delete</button>
            {/* <button>change color</button> */}
            <input type="checkbox"
                checked={isPin}
                onChange={onChangePin}
            />
        </section>
    }
}
