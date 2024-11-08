import React, { useEffect, useState } from 'react';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">
                Books
            </h2>
            <p>{books.length}</p>
        </div>
    );
};

export default Books;


/**
 * 1.State to store books
 * 2. Use effect 
 * 3. Fetch to load data
 * 4. set the data to the book state
 */