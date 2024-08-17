import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.css";

export default function UserMenu() {
   return (
      <div className={css.wrapper}>
         <p className={css.username}>Welcome, username</p>
         <button type="button" onClick={() => {}}>
            Logout
         </button>
      </div>
   );
}
