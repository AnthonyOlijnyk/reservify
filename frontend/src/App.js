import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomePage1 from "./pages/HomePage1";
import ReservationConfirmation from "./pages/ReservationConfirmation";
import Home from "./pages/Home";
import Search from "./pages/Search";
import RestaurantDetailsReserve from "./pages/RestaurantDetailsReserve";
import CancelReservation from "./pages/CancelReservation";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
      case "/restaurant-detailsreserve":
        title = "";
        metaDescription = "";
        break;
      case "/cancel-reservation":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage1 />} />
      <Route
        path="/reservation-confirmation"
        element={<ReservationConfirmation />}
      />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route
        path="/restaurant-detailsreserve"
        element={<RestaurantDetailsReserve />}
      />
      <Route path="/cancel-reservation" element={<CancelReservation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
