import React from "react";

const Book = ({ book }) => {
    const {bookName, review, author, image, category, publisher, tags , rating  } = book;
    const singleTag = tags.map(tag => <button>{tag}</button>);
    return (
      <div className="card bg-base-100 w-96  shadow-sm">
  <figure className="mx-auto bg-gray-200 px-28 py-4">
    <img className="h-[166px]"
      src={image}
      alt={bookName} />
      
  </figure>
  <div className="card-body">
     <div className="badge flexgap-2">{singleTag}</div>
    <h2 className="card-title">
      {bookName}  
    </h2>
    <p>By: {publisher}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div>
    );
};

export default Book;