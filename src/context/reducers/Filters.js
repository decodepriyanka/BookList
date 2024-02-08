import { FILTERS_ACTION } from "../../constants/DispatchTypes";
import { filtersInitialState } from "../initialState/filterInitialState";

const filters = (state, { type, payload }) => {
  switch (type) {
    case FILTERS_ACTION.RESET:
      return filtersInitialState;

    case FILTERS_ACTION.UPDATE_CATEGORY:
      return { ...state, selectedCategory: [...payload] };

    default:
      return state;
  }
};
export default filters;
