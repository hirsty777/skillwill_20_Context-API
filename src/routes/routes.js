import MainPage from "../pages/MainPage"
import AddToDo from "../pages/AddToDo"
import EditToDo from "../pages/EditToDo"
import ErrorPage from "../pages/ErrorPage"
import AboutPage from "../pages/AboutPage"

const router = [
    {
        element:<MainPage />,
        path:"/"
    },
    {
        element:<AddToDo />,
        path:"/create"
    },
    {
        element:<AboutPage />,
        path:"/about"
    },
    {
        element:<EditToDo />,
        path:"/edit/:toDoId"
    },
    {
        element:<ErrorPage/>,
        path:"*"
    }

]

export default router