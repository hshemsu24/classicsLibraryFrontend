import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './components/Books'

function App() {

  const books = [
    {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "editor": "J. B. Lippincott & Co.",
        "publisher": "HarperCollins",
        "date_of_publication": "1960",
        "edition": "First Edition"
    },
    {
        "id": 2,
        "title": "1984",
        "author": "George Orwell",
        "editor": "Secker and Warburg",
        "publisher": "Penguin Books",
        "date_of_publication": "1949",
        "edition": "First Edition"
    },
    {
        "id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "editor": "Charles Scribner's Sons",
        "publisher": "Scribner",
        "date_of_publication": "1925",
        "edition": "First Edition"
    },
    {
        "id": 4,
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel García Márquez",
        "editor": "Harper & Row",
        "publisher": "Harper & Row",
        "date_of_publication": "1967",
        "edition": "First Edition"
    },
    {
        "id": 5,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "editor": "Chatto & Windus",
        "publisher": "HarperCollins",
        "date_of_publication": "1932",
        "edition": "First Edition"
    },
    {
        "id": 6,
        "title": "The Catcher in the Rye",
        "author": "J. D. Salinger",
        "editor": "Little, Brown and Company",
        "publisher": "Little, Brown and Company",
        "date_of_publication": "1951",
        "edition": "First Edition"
    },
    {
        "id": 7,
        "title": "The Lord of the Rings",
        "author": "J. R. R. Tolkien",
        "editor": "George Allen & Unwin",
        "publisher": "HarperCollins",
        "date_of_publication": "1954",
        "edition": "First Edition"
    },
    {
        "id": 8,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "editor": "T. Egerton, Whitehall",
        "publisher": "Penguin Classics",
        "date_of_publication": "1813",
        "edition": "First Edition"
    },
    {
        "id": 9,
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "editor": "Ward, Lock and Company",
        "publisher": "Penguin Classics",
        "date_of_publication": "1890",
        "edition": "First Edition"
    },
    {
        "id": 10,
        "title": "The Hobbit",
        "author": "J. R. R. Tolkien",
        "editor": "George Allen & Unwin",
        "publisher": "HarperCollins",
        "date_of_publication": "1937",
        "edition": "First Edition"
    }
]

  const filteredBooks = books;

  const handleSearch = () => {
    

  }

  return (
    <>
      <div>
        <h1>Holloway Classics Library</h1>
      </div>

      <div className="filters">
        
        <label htmlFor="title">Book Title: </label>
        <input type="text"  id = "title" name = "title"/>
        
        <label htmlFor="author"> Original Author: </label>
        <select name="author" id="author">
          <option value="">All Authors</option>
          {books.map(book => (          
              <option key={book.id} value={book.author}>{book.author}</option>
          ))}
        </select>

        <label htmlFor="editor"> Editor: </label>
        <select name="editor" id="editor">
          <option value="">All Editors</option>
          {books.map(book => (          
              <option key={book.id} value={book.editor}>{book.editor}</option>
          ))}
        </select>

        <button onClick={handleSearch} className='search-button'>SEARCH</button>
      </div>

      <div>
        <h4>Number of Total Books: {books.length}</h4>
        <h4>Number of Results: 10</h4> 
        {/* shouold be {filteredbooks.length} when finished */}
      </div>

      <div>
        <Books />
      </div>

    </>
  )
}

export default App
