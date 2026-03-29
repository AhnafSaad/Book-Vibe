import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
    const {bookName, image, category, publisher, tags, rating, bookId} = book;
    const singleTag = tags.map(tag => <button>{tag}</button>);
    return (
      <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96  shadow-sm">
  <figure className="mx-auto bg-gray-200 px-28 py-4">
    <img className="h-41.5"
      src={image}
      alt={bookName} />
      
  </figure>
  <div className="card-body">
    <div className="flex gap-1">
     <div className="badge flex gap-2 bg-green-300">{singleTag[0]}</div>
      <div className="badge flex gap-2 bg-green-300">{singleTag[1]}</div>
      </div>
    <h2 className="card-title">
      {bookName}  
    </h2>
    <p className="font-semibold">By: {publisher}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline"><FaStarHalfAlt />
{rating}</div>
    </div>
  </div>
  </div>
  </Link>
  
    );
};

export default Book;