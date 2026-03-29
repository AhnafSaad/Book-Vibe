import Book from "../Book/Book";
import React, { useEffect } from "react";
import { useState } from "react";

const Books = () => {
    const [AllBooks , setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    }, []);
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
        {AllBooks.map(SingleBook => <Book key={SingleBook.id} book={SingleBook} />)}
        </div>
        </div>
    );
};

export default Books;