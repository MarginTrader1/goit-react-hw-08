import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors"; 

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
