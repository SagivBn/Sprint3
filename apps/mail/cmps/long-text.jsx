export class LongText extends React.Component {
    state = {
        isLongTxtShown: false
    }

    toggleLongTxt = () => {
        this.setState(({ isLongTxtShown }) => ({
            isLongTxtShown: !isLongTxtShown
        }))
    }

    render() {
        const { text } = this.props
        const { isLongTxtShown } = this.state
        const txt =
            isLongTxtShown || text.length < 100
                ? text
                : `${text.substr(0, 101)}...`
        let spanTxt
        if (text.length < 100) spanTxt = ''
        else if (isLongTxtShown) spanTxt = 'Read Less'
        else spanTxt = 'Read More'

        return (
            <p className='long-text'>
                {txt}
                <span onClick={this.toggleLongTxt}>{spanTxt}</span>{' '}
            </p>
        )
    }
}
