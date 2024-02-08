import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../context/BooksProvider";
import BookCard from "../../components/BookCard";
import Loader from "../../components/Loader";
const Books = () => {
  const [showLoader, setShowLoader] = useState(true);
  const { booksState } = useContext(BooksContext);

  useEffect(() => {
    document.title = "Books | The Book Shelf";
    const loader = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(loader);
  }, []);

  const { booksData } = booksState;
  return (
    <>
      <div className="relative flex flex-col">
        <div className="relative py-24 mt-16 overflow-hidden bg-gray-900 lg:mt-0 isolate sm:pt-32 sm:pb-16">
          <img
            src="https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/boksbg.png?updatedAt=1684597529803"
            alt="header-books"
            className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="px-6 mx-auto max-w-7xl lg:px-8">
            {showLoader ? (
              <div className="w-full h-screen flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <>
                <div className="max-w-2xl mx-auto lg:mx-0">
                  <h2 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                    THE
                    <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff4694] to-[#776fff] ">
                      BOOK SHELF
                    </span>
                  </h2>
                </div>
                <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
                  <dl className="grid grid-cols-2 gap-6 mt-8 sm:mt-20 lg:grid-cols-4">
                    {booksData.map((book) => {
                      return <BookCard key={book.id} bookData={book} />;
                    })}
                  </dl>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
