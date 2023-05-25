import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";


const RootLayout = lazy(()=> import( "../components/layouts/RootLayout"));
const Home = lazy(()=> import( "./Home"));

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={< RootLayout />}>
            <Route index element={<Home/> } />
            <Route path="" />
            <Route path="" />
        </Route>
    )
)

const Routes = () =>{

    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={route} />
        </Suspense>
    )
}

export default Routes   