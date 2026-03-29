import React from "react";
import heroImg from "../../assets/pngwing1.jpg";

const Banner = () => {
    return (
    
        
        <div className="mt-4 mb-4 w-full max-w-[1170px] lg:h-[554px] mx-auto rounded-[24px] overflow-hidden bg-base-200">
            <div className="hero h-full px-6 lg:px-20">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
                    {/* Image Section */}
                    <img
                        src={heroImg}
                        alt="Hero Books"
                        className="max-w-xs lg:max-w-sm rounded-lg shadow-2xl"
                    />
                    
                    {/* Text Section */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
                            Books to freshen up <br className="hidden lg:block" /> your bookshelf
                        </h1>
                        <p className="py-8 text-lg text-gray-600">
                            Discover your next favorite read from our curated collection.
                        </p>
                        <button className="btn btn-primary bg-[#23BE0A] border-none text-white px-8 hover:bg-[#1fa308]">
                            View The List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;