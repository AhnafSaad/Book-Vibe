import React from "react";
import { useParams } from "react-router";
import { useLoaderData } from "react-router";

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
const SingleBook = data.find(book=> book.bookId === bookId)
const { bookName, yearOfPublishing,publisher,tags,category,rating,totalPages,review,image,author } = SingleBook;
   return (
       <div className="card lg:card-side bg-base-100 shadow-none max-w-6xl mx-auto gap-12 p-4 mt-2 mb-2">
      
   
      <figure className="lg:w-1/2 bg-[#F3F3F3] rounded-2xl p-16 flex justify-center items-center">
        <img
          src="https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp" 
          alt="Book Cover"
          className="shadow-2xl rounded-md object-cover max-h-[500px]"
        />
      </figure>

    
      <div className="card-body lg:w-1/2 p-0 justify-center">
        
       
        <h2 className="text-4xl font-bold text-[#131313] font-serif mb-2">The Catcher in the Rye</h2>
        <p className="text-lg text-[#131313CC] font-medium mb-4">By : Awlad Hossain</p>

     
        <div className="border-b border-gray-200 my-2"></div>

      
        <p className="text-lg font-medium text-[#131313CC]">Fiction</p>

        <div className="border-b border-gray-200 my-2"></div>

        
        <p className="text-[#131313B3] leading-relaxed mb-4">
          <span className="font-bold text-[#131313]">Review :</span> Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus.
        </p>

      
        <div className="flex items-center gap-4 mb-4">
          <span className="font-bold text-[#131313]">Tag</span>
          <span className="px-4 py-1.5 bg-[#23BE0A0D] text-[#23BE0A] font-medium rounded-full text-sm">#Young Adult</span>
          <span className="px-4 py-1.5 bg-[#23BE0A0D] text-[#23BE0A] font-medium rounded-full text-sm">#Identity</span>
        </div>

        <div className="border-b border-gray-200 my-2"></div>

     
        <div className="grid grid-cols-2 gap-y-3 my-4 text-[#131313B3] w-3/4">
          <p>Number of Pages:</p>
          <p className="font-semibold text-[#131313]">281</p>
          
          <p>Publisher:</p>
          <p className="font-semibold text-[#131313]">J.B Lippincott & Co.</p>
          
          <p>Year of Publishing:</p>
          <p className="font-semibold text-[#131313]">1960</p>
          
          <p>Rating:</p>
          <p className="font-semibold text-[#131313]">4.8</p>
        </div>

       
        <div className="card-actions justify-start gap-4 mt-6">
          <button className="btn btn-outline border-gray-300 text-black px-8 hover:bg-gray-100">Read</button>
          <button className="btn bg-[#50B1C9] hover:bg-[#3d9cb4] text-white border-none px-8">Wishlist</button>
        </div>
      </div>
    </div>
    )
};

export default BookDetails;