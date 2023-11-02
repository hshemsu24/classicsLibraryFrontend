import React, { useState, useEffect } from 'react';

function Books() {
    

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

    const labelStyle = {
        marginRight: '5px',
        marginLeft: '5px'
    }

    return (
        <div>
            <table className='book-table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Editor</th>
                        <th>Publisher</th>
                        <th>Date of Publication</th>
                        <th>Edition</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book.id} className={index % 2 === 0 ? 'even-item' : 'odd-item'}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.editor}</td>
                            <td>{book.publisher}</td>
                            <td>{book.date_of_publication}</td>
                            <td>{book.edition}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Books;
