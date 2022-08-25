import { storageService } from "../../../services/storage.service.js"

export const noteService = {
    query,
    getById
}

const KEY = 'notesDB'
const gNotes = [
    {
        id: "n101",
        type: "note-txt",
        isPinned: true,
        info: {
            title: "BeSTack" ,
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: "n102",
        type: "note-img",
        info: {
            url: "http://some-img/me",
            title: "Bobi and Me"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: "n103",
        type: "note-todos",
        info: {
            title: "Get my stuff together",
            todos: [
                { txt: "Driving liscence", doneAt: null },
                { txt: "Coding power", doneAt: 187111111 }
            ]
        }
    }
]


function query(filterBy) {
    let notes = _loadFromStorage()
    if (!notes) {
        notes = gNotes
        _saveToStorage(notes)
    }

    // if (filterBy) {
    //   let { name, minPrice, maxPrice } = filterBy
    //   books = books.filter(book => (
    //     book.listPrice.amount >= minPrice &&
    //     book.listPrice.amount <= maxPrice &&
    //     book.title.includes(name)
    //   ))
    //}
    return Promise.resolve(notes)
}

function editNote(noteId, key, value) {
    const note = getById(noteId)
    if (!note) return Promise.resolve(null)
    note.info[key] = value
    return Promise.resolve({ note })
}


function getById(id) {
    if (!id) return Promise.resolve(null)
    const notes = _loadFromStorage()
    const note = notes.find(note => note.id === id)
    return Promise.resolve(note)
}


function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

function _saveToStorage(value) {
    storageService.saveToStorage(KEY, value)
}