import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
    const {bookName, image, category, publisher, tags, rating, bookId} = book;
    const singleTag = tags.map(tag => <button>{tag}</button>);
    return (
      <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-gray-100">
  <figure className="mx-auto bg-gray-200 px-28 py-8 rounded-t-2xl">
    <img className="h-44 object-cover"
      src={image}
      alt={bookName} />

  </figure>
  <div className="card-body">
    <div className="flex gap-2">
     <div className="badge flex gap-2 bg-[#23BE0A0D] text-[#23BE0A] border-none">{singleTag[0]}</div>
      <div className="badge flex gap-2 bg-[#23BE0A0D] text-[#23BE0A] border-none">{singleTag[1]}</div>
      </div>
    <h2 className="card-title text-xl font-bold mt-2">
      {bookName}
    </h2>
    <p className="font-semibold text-gray-600">By: {publisher}</p>
    <div className="border-t border-dashed border-gray-300 my-2"></div>
    <div className="card-actions justify-between items-center">
      <div className="badge badge-outline text-sm font-medium">{category}</div>
      <div className="badge badge-outline flex items-center gap-1 text-sm font-medium">
        <FaStarHalfAlt />
        {rating}
      </div>
    </div>
  </div>
  </div>
  </Link>

    );
};

export default Book;