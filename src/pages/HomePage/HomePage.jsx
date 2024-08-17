import css from "./HomePage.module.css";

const HomePage = () => {
   return (
      <>
         <div className={css.title}>
            <h1>
               Phonebook
               <span role="img" aria-label="Greeting icon">
                  📲
               </span>
            </h1>
         </div>
      </>
   );
};

export default HomePage;
