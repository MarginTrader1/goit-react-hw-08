import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { Toaster } from "react-hot-toast";

import css from "./ContactsPage.module.css";

const ContactsPage = () => {
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

export default ContactsPage;
