import { useId } from "react";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

import css from "./SearchBox.module.css";

const SearchBox = () => {
   const dispatch = useDispatch();

   let filterValue = useSelector(selectNameFilter);

   const handleChange = (evt) => {
      dispatch(changeFilter(evt.target.value));
   };

   const id = useId();

   return (
      <div className={css.input}>
         <label htmlFor={`search-${id}`}>Find contacts by name</label>
         <input type="text" id={`search-${id}`} value={filterValue} onChange={handleChange} placeholder="Enter contacts name..." />
      </div>
   );
};

export default SearchBox;
