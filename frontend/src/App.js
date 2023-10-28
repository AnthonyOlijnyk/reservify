import { useEffect } from "react";
import {Routes,Route,useNavigationType,useLocation,} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ReservePage from "./pages/ReservePage";
import UserDash from "./pages/UserDash";
import ConfirmationPage from "./pages/ConfirmationPage";
import AdminDash from "./pages/AdminDash";
import AdminEdit from "./pages/AdminEdit";

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
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/searchpage":
        title = "";
        metaDescription = "";
        break;
      case "/reservepage":
        title = "";
        metaDescription = "";
        break;
      case "/user-dash":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-confirmation":
        title = "";
        metaDescription = "";
        break;
      case "/admin-dash":
        title = "";
        metaDescription = "";
        break;
      case "/admin-edit":
        title = "";
        metaDescription = "";
        break;
      default:
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
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/searchpage" element={<SearchPage />} />
      <Route path="/reservepage" element={<ReservePage />} />
      <Route path="/user-dash" element={<UserDash />} />
      <Route path="/reservation-confirmation" element={<ConfirmationPage />} />
      <Route path="/admin-dash" element={<AdminDash />} />
      <Route path="/admin-edit" element={<AdminEdit />} />
    </Routes>
  );
}
export default App;
