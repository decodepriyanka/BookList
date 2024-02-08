import { BOOKS_ACTIONS } from "../../constants/DispatchTypes";
import { booksInitialState } from "../initialState/booksInitialState";

const books = (state, { type, payload }) => {
  switch (type) {
    case BOOKS_ACTIONS.SAVE_CATEGORY:
      return { ...state, categories: payload };

    case BOOKS_ACTIONS.SAVE_BOOKS_DATA:
      return { ...state, booksData: payload };
    case BOOKS_ACTIONS.RESET:
      return booksInitialState;

    default:
      return state;
  }
};
export default books;
