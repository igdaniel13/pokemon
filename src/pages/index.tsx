import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import Login from "./Login";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />}/>
            {/* <Route path="" />
            <Route path="" />
            <Route path="" /> */}
        </Route>
    )
)

const Routes = () =>{

    return <RouterProvider router={route} />
}

export default Routes   