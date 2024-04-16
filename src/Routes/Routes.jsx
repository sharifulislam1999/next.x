import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/Details/Details";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import SavedEstate from "../Pages/SavedEstate/SavedEstate";
import Profile from "../Pages/Profile/Profile";
    const Routes = createBrowserRouter([
        {
            path:"/",
            element: <Root></Root>,
            errorElement: <Error></Error>,
            children : [
                {
                    path: "/",
                    loader : ()=>fetch("/estates.json"),
                    element: <Home></Home> 
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/register",
                    element: <Register></Register>
                },
                {
                    path: "/details/:_id",
                    loader : ()=>fetch("/estates.json"),
                    element : <PrivateRoute><Details></Details></PrivateRoute>
                },
                {
                    path:"/savedestate",
                    element: <PrivateRoute><SavedEstate></SavedEstate></PrivateRoute>
                },
                {
                    path: "/updateprofile",
                    element:<PrivateRoute> <UpdateProfile></UpdateProfile></PrivateRoute>
                },
                {
                    path: "/profile",
                    element:<PrivateRoute><Profile></Profile></PrivateRoute>
                },
                {

                }
            ]
        }
    ]);
export default Routes;