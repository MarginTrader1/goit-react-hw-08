import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom"; // компонент навигации

// компонент для приватных маршрутов - передаем компонент и маршрут
// логика: если пользователь залогинен --> покажи компонент, если нет - перекинь его на страничку LogIn
export default function PrivateRoute({ component, redirectTo }) {
   const isLoggedIn = useSelector(selectIsLoggedIn);

   return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
