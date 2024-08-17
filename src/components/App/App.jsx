import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Layout from "../Layout/Layout";

const App = () => {
   return (
      <div>
         <Layout>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="*" element={<NotFoundPage />} />
            </Routes>
         </Layout>
      </div>
   );
};

export default App;
