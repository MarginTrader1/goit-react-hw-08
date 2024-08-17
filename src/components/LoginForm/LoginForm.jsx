import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";

import css from "./LoginForm.module.css";

export default function LoginForm() {
   const dispatch = useDispatch();
   const handleSubmit = (values, actions) => {
      dispatch(login(values));
      actions.resetForm();
   };

   const id = useId();

   return (
      <Formik
         initialValues={{
            email: "",
            password: "",
         }}
         onSubmit={handleSubmit}
      >
         <Form className={css.form} autoComplete="off">
            <label className={css.label} htmlFor={`email-${id}`}>
               Email
               <Field
                  className={css.inputField}
                  type="email"
                  name="email"
                  id={`email-${id}`}
                  placeholder="Enter email..."
               />
            </label>
            <label className={css.label} htmlFor={`password-${id}`}>
               Password
               <Field
                  className={css.inputField}
                  type="text"
                  name="password"
                  id={`password-${id}`}
                  placeholder="Enter password..."
               />
            </label>
            <button type="submit" className={css.button}>
               Log In
            </button>
         </Form>
      </Formik>
   );
}
