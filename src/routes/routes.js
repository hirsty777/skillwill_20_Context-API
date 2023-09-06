import {Outlet} from "react-router-dom"
import MainPage from "../pages/MainPage"
import AddToDo from "../pages/AddToDo"
import EditToDo from "../pages/EditToDo"
import ErrorPage from "../pages/ErrorPage"
import AboutPage from "../pages/AboutPage"
import Header from "../components/Header"
import LenguageContextProvider from "../contexts/LenguageContext"

const router = [
    {
        element: (
            <div>
                <LenguageContextProvider>
                    <Header />
                    <Outlet />
                </LenguageContextProvider>
            </div>
        ),
        path:"/",
        children:[
            {
                element:<MainPage />,
                index:true
            },
            {
                element:<AddToDo />,
                path:"create"
            },
            {
                element:<AboutPage />,
                path:"about"
            },
            {
                element:<EditToDo />,
                path:"edit/:toDoId"
            }
        ]
    },
    {
        element:<ErrorPage/>,
        path:"*"
    }

]

export default router