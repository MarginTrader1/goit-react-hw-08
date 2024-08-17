import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";

import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
   const dispatch = useDispatch();
   const handleSubmit = (values, actions) => {
      console.log(values);
      dispatch(register(values));
      actions.resetForm();
   };

   const id = useId();

   return (
      <Formik
         initialValues={{
            name: "",
            email: "",
            password: "",
         }}
         onSubmit={handleSubmit}
      >
         <Form className={css.form} autoComplete="off">
            <label className={css.label} htmlFor={`name-${id}`}>
               Username
               <Field
                  type="text"
                  name="name"
                  id={`name-${id}`}
                  className={css.inputField}
                  placeholder="Enter name..."
               />
            </label>
            <label className={css.label} htmlFor={`email-${id}`}>
               Email
               <Field
                  type="email"
                  name="email"
                  id={`email-${id}`}
                  className={css.inputField}
                  placeholder="Enter email..."
               />
            </label>
            <label className={css.label} htmlFor={`password-${id}`}>
               Password
               <Field
                  type="text"
                  name="password"
                  id={`password-${id}`}
                  className={css.inputField}
                  placeholder="Enter password..."
               />
            </label>
            <button type="submit" className={css.button}>
               Register
            </button>
         </Form>
      </Formik>
   );
}
