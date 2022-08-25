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
                <div className='header'>
                    <div className='header-left'>
                        <span className='material-icons'> menu </span>
                        <img src='\assets\img\logo.png'></img>
                    </div>

                    <div className='header-middle'>
                        <span className='material-icons'> search </span>
                        <input type='text' placeholder='Search mail' />
                        <span className='material-icons'> arrow_drop_down </span>
                    </div>

                    <div className='header-right'>
                        <span className='material-icons'> apps </span>
                        <span className='material-icons'> notifications </span>
                        <span className='material-icons'> account_circle </span>
                    </div>
                </div>
                <div className='emailList'>
                    <div className='emailList-settings'>
                        <button className='sidebar-compose'>
                            <span className='material-icons'> add </span>Compose
                        </button>
                        <div className='emailList-settingsLeft'>
                            <input type='checkbox' />
                            <span className='material-icons'> arrow_drop_down </span>
                            <span className='material-icons'> redo </span>
                            <span className='material-icons'> more_vert </span>
                        </div>
                        <div className='emailList-settingsRight'>
                            <span className='material-icons'> chevron_left </span>
                            <span className='material-icons'> chevron_right </span>
                            <span className='material-icons'> keyboard_hide </span>
                            <span className='material-icons'> settings </span>
                        </div>
                    </div>
                </div>

                <form onSubmit={this.onFilter} className='email-form'>
                    <label className='email-search-label' htmlFor='by-search'></label>
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
