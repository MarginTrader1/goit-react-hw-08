import Contact from "../Contact/Contact";

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";

const ContactList = () => {
   //получаем данные сложного селектора из стора
   const filteredContacts = useSelector(selectFilteredContacts);

   return (
      <ul className={css.list}>
         {filteredContacts.map(({ id, name, number }) => {
            return (
               <li key={id} className={css.card}>
                  <Contact name={name} number={number} id={id} />
               </li>
            );
         })}
      </ul>
   );
};

export default ContactList;
