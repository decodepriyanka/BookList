import React from "react";

const BookCard = ({ bookData }) => {
  const { cover_image, title, author, description, genre, publication_year } =
    bookData;
  console.log("++++GENNENEN", genre);
  const addedToWhislist = true;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <a href="#">
        <img className="rounded-t-lg" src={cover_image} alt={title} />
      </a>
      {addedToWhislist ? (
        <button
          type="button"
          // onClick={(e) => wishlistToggleHandler(e, product)}
          className="absolute right-0 w-12 h-12 text-pink-600 rounded-full top-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-3/4 p-2 ${"hover:fill-current"} bg-pink-200 rounded-full bg-opacity-60 h-3/4`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          // onClick={(e) => removeFromWishList(e, product)}
          className="absolute right-0 w-12 h-12 text-pink-600 rounded-full top-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-3/4 p-2 fill-current hover:fill-current bg-pink-200 rounded-full bg-opacity-60 h-3/4`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      )}
      {genre.length > 0 &&
        genre.map((gen) => {
          console.log("++++GEGEGGE", gen);
          return (
            <div className="absolute px-4 ml-4 text-sm leading-7 text-gray-100 bg-gray-600 bottom-3 backdrop-blur-md backdrop-filter bg-clip-padding bg-opacity-20 lg:gap-x-10 md:flex rounded-xl">
              <span className="cursor-pointer">{gen}</span>
            </div>
          );
        })}

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Explore
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BookCard;
