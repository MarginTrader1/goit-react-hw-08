import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

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
            <Suspense fallback={null}>
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
            </Suspense>
         </Layout>
      </div>
   );
};

export default App;
