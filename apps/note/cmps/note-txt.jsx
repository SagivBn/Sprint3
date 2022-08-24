const { Link } = ReactRouterDOM

export class NoteTxt extends React.Component {
    state = {
        txt: this.props.txt
    }
    render() {
        // const { txt } = this.state
        console.log(this.props)
        return <div>
            hello from note-txt
        </div>
    }
}