import React, { useState } from "react";

function Card({ name, image, rating, description }) {
  const templateStar = {
    filledStar: (
      <>
        <svg
          className="w-4 h-4 text-yellow-300"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </>
    ),
    normalStar: (
      <>
        <svg
          className="w-4 h-4 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </>
    ),
  };
  const [rate, setRate] = useState([templateStar.filledStar]);

  const renderStars = (rating) => {
    const stars = [];
    const normalStar = Math.floor(rating);

    for (let i = 0; i < normalStar; i++) {
      stars.push(<span key={`filled-${i}`}>{templateStar.filledStar}</span>);
    }

    for (let i = normalStar; i < 10; i++) {
      stars.push(<span key={`normal-${i}`}>{templateStar.normalStar}</span>);
    }
    return stars;
  };

  return (
    <div className=" h-[36rem] box-border w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-[75%]">
        <img
          className="rounded-t-lg w-[100%] h-[100%] "
          src={image}
          alt="product image"
        />
      </div>

      <div className="pt-2 px-5 pb-5 bg-black rounded-b-lg  h-[25%]">
        <h5 className="text-xl font-semibold tracking-tight text-white dark:text-white">
          {name}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {renderStars(rating)}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Card;
