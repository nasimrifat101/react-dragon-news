import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import Error from "../pages/error/Error";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=>fetch('/news.json')
        },
        {
            path:'/login',
            element: <Login></Login>,
        },
        {
            path:'/signup',
            element:<Register></Register>,
        },
        {
            path:'/news/:id',
            element:<PrivateRoute><News></News></PrivateRoute>,
        },
      
      ]
    },
  ]);

  export default router;