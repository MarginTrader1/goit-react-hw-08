import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
   return (
      <section className={css.data}>
         <p>No data for this route! </p>
         <Link to={`/`} className={css.backlink}>
            <GoArrowLeft />
            {`go back`}
         </Link>
      </section>
   );
};

export default NotFoundPage;
