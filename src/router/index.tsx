import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "../pages/learn/Layout";
import Quickstart from "../pages/learn/Quickstart";
import Thinking from "../pages/learn/Thinking";
import Installation from "../pages/learn/installation";
import ContributePage from "../pages/Contribute";
import Login from "../pages/Login";
import ProtectedRoute from "../auth/ProtectedRoute";
import ErrorHandler from "../error/ErrorHandler";
import PageNotFound from "../pages/pagenotFound";

const isLogged = true;
const userData: { email: string } | null = isLogged
  ? { email: "ali@sayed" }
  : null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="contribute"
          element={
            <ProtectedRoute
              isAllowed={isLogged}
              redirectPath="/login"
              data={userData}
            >
              <ContributePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute
              isAllowed={!isLogged}
              redirectPath="/contribute"
              data={userData}
            >
              <Login />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/learn" element={<Layout />}>
        <Route index element={<Quickstart />} />
        <Route path="think-in-react" element={<Thinking />} />
        <Route path="installation" element={<Installation />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
