import { createContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-hot-toast";
import filters from "./reducers/Filters";
import books from "./reducers/Books";
import { filtersInitialState } from "./initialState/filterInitialState";
import { booksInitialState } from "./initialState/booksInitialState";
import { getBooks } from "../services/books-service";
import { BOOKS_ACTIONS } from "../constants/DispatchTypes";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [filtersState, filtersDispatch] = useReducer(
    filters,
    filtersInitialState
  );
  const [booksState, booksDispatch] = useReducer(books, booksInitialState);
  const [buttonDisabled, setButtonDisable] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [disableQuantityButton, setDisableQuantityButtons] = useState(false);

  const handleError = (e) => {
    console.error(e);
    toast.error("Something Went Wrong, Try Later");
  };

  const getAllUniqueGenres = (books) => {
    let uniqueGenresSet = new Set();
    books.forEach((book) => {
      book.genre.forEach((genre) => {
        uniqueGenresSet.add(genre);
      });
    });
    return Array.from(uniqueGenresSet);
  };

  useEffect(() => {
    const addBooksData = async () => {
      try {
        const { data } = await getBooks(8);
        const allGenre = getAllUniqueGenres(data);
        booksDispatch({
          type: BOOKS_ACTIONS.SAVE_BOOKS_DATA,
          payload: data,
        });

        booksDispatch({
          type: BOOKS_ACTIONS.SAVE_CATEGORY,
          payload: allGenre,
        });
      } catch (error) {
        handleError(error);
      }
    };

    addBooksData();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        filtersState,
        filtersDispatch,
        booksState,
        booksDispatch,
        buttonDisabled,
        setButtonDisable,
        searchTerm,
        setSearchTerm,
        disableQuantityButton,
        setDisableQuantityButtons,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
