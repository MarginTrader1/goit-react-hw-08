import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
   const dispatch = useDispatch(); // для отправки экшна в стор

   return (
      <>
         <div className={css.contact}>
            <div className={css.name}>
               <FaUser />
               <p>{name}</p>
            </div>
            <div className={css.number}>
               <FaPhoneAlt />
               <p>{number}</p>
            </div>
         </div>
         <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
            {"Delete"}
         </button>
      </>
   );
};

export default Contact;
