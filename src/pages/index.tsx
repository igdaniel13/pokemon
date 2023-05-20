import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Login from "./Login";
import HomeLayout from "../components/layouts/HomeLayout";
import Home from "./Home";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />}/>
            <Route path="home" element={< HomeLayout />}>
                <Route path="home" element={<Home/> } />
                <Route path="" />
                <Route path="" />
            </Route>
        </Route>
    )
)

const Routes = () =>{

    return <RouterProvider router={route} />
}

export default Routes   