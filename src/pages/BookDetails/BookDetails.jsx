import React from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";
import { addToDb } from "../../Utility/AddToDb";

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
const SingleBook = data.find(book=> book.bookId === bookId)
const { bookName, yearOfPublishing,publisher,tags,category,rating,totalPages,review,image,author } = SingleBook;
const handleMarkAsRead = (id) => {
  addToDb(id);
}
   return (
       <div className="card lg:card-side bg-base-100 shadow-none max-w-6xl mx-auto gap-12 p-4 mt-2 mb-2">
      
   
      <figure className="lg:w-1/2 bg-[#F3F3F3] rounded-2xl p-16 flex justify-center items-center">
        <img
          src={image}
          alt="Book Cover"
          className="shadow-2xl rounded-md object-cover max-h-[500px]"
        />
      </figure>

    
      <div className="card-body lg:w-1/2 p-0 justify-center">
        
       
        <h2 className="text-4xl font-bold text-[#131313] font-serif mb-2">{bookName}</h2>
        <p className="text-lg text-[#131313CC] font-medium mb-4">By : {author}</p>

     
        <div className="border-b border-gray-200 my-2"></div>

      
        <p className="text-lg font-medium text-[#131313CC]">{category}</p>

        <div className="border-b border-gray-200 my-2"></div>

        
        <p className="text-[#131313B3] leading-relaxed mb-4">
            {review}
        </p>

      
        <div className="flex items-center gap-4 mb-4">
          <span className="font-bold text-[#131313]">Tags:{tags}</span>
          <span className="px-4 py-1.5 bg-[#23BE0A0D] text-[#23BE0A] font-medium rounded-full text-sm">#Young Adult</span>
          <span className="px-4 py-1.5 bg-[#23BE0A0D] text-[#23BE0A] font-medium rounded-full text-sm">#Identity</span>
        </div>

        <div className="border-b border-gray-200 my-2"></div>

     
        <div className="grid grid-cols-2 gap-y-3 my-4 text-[#131313B3] w-3/4">
          <p>Number of Pages:</p>
          <p className="font-semibold text-[#131313]">{totalPages}</p>
          
          <p>Publisher:</p>
          <p className="font-semibold text-[#131313]">{publisher}</p>
          
          <p>Year of Publishing:</p>
          <p className="font-semibold text-[#131313]">{yearOfPublishing}</p>
          
          <p>Rating:</p>
          <p className="font-semibold text-[#131313]">{rating}</p>
        </div>

       
        <div className="card-actions justify-start gap-4 mt-6">
          <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline border-gray-300 text-black px-8 hover:bg-gray-100">Mark As Read</button>
          <button className="btn bg-[#50B1C9] hover:bg-[#3d9cb4] text-white border-none px-8">Wishlist</button>
        </div>
      </div>
    </div>
    )
};

export default BookDetails;