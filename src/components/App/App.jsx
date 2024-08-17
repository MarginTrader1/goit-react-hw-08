import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import { Toaster } from "react-hot-toast";

import css from "./App.module.css";

const App = () => {
   const dispatch = useDispatch();
   const error = useSelector(selectError);
   const isLoading = useSelector(selectLoading);

   //используем хук useEffect для первой загрузки
   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch]);

   return (
      <div className={css.container}>
         <ContactForm />
         <SearchBox />
         {isLoading ? <Loader /> : <ContactList />}
         {error && <ErrorMessage />}

         <Toaster position="top-right" reverseOrder={false} />
      </div>
   );
};

export default App;
