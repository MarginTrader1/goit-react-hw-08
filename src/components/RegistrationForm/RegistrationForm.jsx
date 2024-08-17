import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";

import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
export default function RegistrationForm() {
   const dispatch = useDispatch();
   const handleSubmit = (values, actions) => {
      console.log(values);
      dispatch(register(values));
      actions.resetForm();
   };

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
            <label className={css.label}>
               Username
               <Field type="text" name="name" className={css.inputField} />
            </label>
            <label className={css.label}>
               Email
               <Field type="email" name="email" className={css.inputField} />
            </label>
            <label className={css.label}>
               Password
               <Field type="password" name="password" className={css.inputField} />
            </label>
            <button type="submit" className={css.button}>
               Register
            </button>
         </Form>
      </Formik>
   );
}
