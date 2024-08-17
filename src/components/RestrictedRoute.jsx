import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom"; // компонент навигации

// компонент для ограниченых маршрутов - передаем компонент и маршрут
// логика: если пользователь залогинен --> перекинь его на другую страничку, если нет - покажи компонент
export default function RestrictedRoute({ component, redirectTo }) {
   const isLoggedIn = useSelector(selectIsLoggedIn);

   return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
