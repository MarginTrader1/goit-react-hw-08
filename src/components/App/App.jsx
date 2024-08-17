import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../Layout/Layout";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const App = () => {
   // паттерн оновлення користувача при монтуваннi App
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(refreshUser());
   }, [dispatch]);

   const isRefreshing = useSelector(selectIsRefreshing);

   // пока страничка обновляется мы не показываем вообще ничего
   return isRefreshing ? (
      <div>Refreshing user.....</div>
   ) : (
      <div>
         <Layout>
            <Routes>
               <Route path="/" element={<HomePage />} />

               <Route
                  path="/register"
                  element={
                     <RestrictedRoute component={<RegistrationPage />} redirectTo="/contacts" />
                  }
               />
               <Route
                  path="/login"
                  element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
               />

               <Route
                  path="/contacts"
                  element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />}
               />

               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Layout>
      </div>
   );
};

export default App;
