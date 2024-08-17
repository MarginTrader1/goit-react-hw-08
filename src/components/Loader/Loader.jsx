import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
   return (
      <ThreeDots
         visible={true}
         height="80"
         width="80"
         color="#ff0000"
         radius="9"
         ariaLabel="three-dots-loading"
         wrapperStyle={{}}
         wrapperClass={css.loader}
      />
   );
};

export default Loader;
