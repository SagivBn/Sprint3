import { noteService } from "../services/note.service.js"
import { noteList } from "../cmps/note-list.jsx"


export class NoteApp extends React.Component {

    state = {
        notes: [],
        filterBy: null
    }
    componentDidMount() {
        this.loadNotes()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes())
    }

    loadNotes = () => {
        noteService.query(this.state.filterBy)
            .then(notes => {
                this.setState({ notes })
            })
    }

    render() {
        const { notes, filterBy } = this.state
        return <section>
            hello
            {/* <NoteFilter filterBy={filterBy} onSetFilter={this.onSetFilter} /> */}
            <noteList notes={notes} />
        </section>
    }
}


// import { BookDetails } from "./book-details.jsx"
// import { BookFilter } from "../cmps/book-filter.jsx"
// import { BookList } from "../cmps/book-list.jsx"
// import { bookService } from "../services/book.service.js"

// export class BookApp extends React.Component {

//     state = {
//         books: [],
//         filterBy: null,
//         selectedBook: null
//     }

//     componentDidMount() {
//         this.loadBooks()
//     }

//     loadBooks = () => {
//         bookService.query(this.state.filterBy)
//             .then(books => {
//                 this.setState({ books })
//             })
//     }

//     onSetFilter = (filterBy) => {
//         this.setState({ filterBy }, this.loadBooks)
//     }

//     // onSelectBook = (bookId) => {
//     //     bookService.getById(bookId)
//     //         .then(book => this.setState({ selectedBook: book }))
//     // }

//     getPriceTxt = (currencyCode, amount) => {
//         let priceTxt
//         switch (currencyCode) {
//             case 'EUR':
//                 priceTxt = amount + '€'
//                 break;
//             case 'ILS':
//                 priceTxt = '₪' + amount
//                 break;
//             case 'USD':
//                 priceTxt = '$' + amount
//                 break;
//         }
//         return priceTxt
//     }

//     render() {
//         const { books, selectedBook } = this.state

//         // {if(!books.length) return <h1>Loading...</h1>}

//         return <section className="main-layout">
//             {!selectedBook && <React.Fragment>
//                 <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
//                 <BookList getPriceTxt={this.getPriceTxt}
//                     books={books} />
//             </React.Fragment>}
//         </section>
//     }
// }