import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";

export default function Navigation() {
   return (
      <nav>
         <NavLink className={css.link} to="/">
            Home
         </NavLink>

         <NavLink className={css.link} to="/contacts">
            Contacts
         </NavLink>
      </nav>
   );
}
