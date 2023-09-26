import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./modules/LandingPage/LandingPage";
import SignUp from "./modules/SignUp/Signup";
import SignIn from "./modules/SignIn/SignIn";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/signin",
            element: <SignIn />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        }
    ]);
    return <RouterProvider router={router} />;
}

export default App;