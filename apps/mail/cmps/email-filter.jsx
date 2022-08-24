export class EmailFilter extends React.Component {
    state = {
        filterBy: {
            search: '',
            isRead: false,
        },
    };

    componentDidMount() {
        console.log('inputRef:', this.inputRef);
    }

    handleChange = ({target}) => {
        const field = target.name;

        this.setState(
            prevState => ({
                filterBy: {
                    ...prevState.filterBy,
                    [field]: value,
                },
            }),
            () => {
                this.props.onSetFilter(this.state.filterBy);
            },
        );
    };

    onFilter = ev => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy);
    };

    render() {
        const {search, isRead} = this.state.filterBy;
        return (
            <section className='email-filter'>
                <form onSubmit={this.onFilter} className='email-form'>
                    <label className='email-search-label' htmlFor='by-search'>
                        Search Email:
                    </label>
                    <input
                        ref={this.inputRef}
                        className='email-input-by-search'
                        type='text'
                        placeholder='Search mail'
                        id='by-search'
                        name='search'
                        value={search}
                        onChange={this.handleChange}
                    ></input>
                </form>
            </section>
        );
    }
}
