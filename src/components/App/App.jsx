import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../Layout/Layout";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

const App = () => {
   return (
      <div>
         <Layout>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/contacts" element={<ContactsPage />} />
               <Route path="/register" element={<RegistrationPage />} />
               <Route path="/login" element={<LoginPage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Layout>
      </div>
   );
};

export default App;
