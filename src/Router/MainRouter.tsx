import {createBrowserRouter } from "react-router-dom"
import Layout from "../components/LayoutHolder/Layout"

export const MainRouter =  createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout/>
        },
    ]
)