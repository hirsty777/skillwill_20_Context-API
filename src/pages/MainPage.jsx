import ShowToDoList from "../components/ShowToDoList"
import useFecth from "../hooks/useFetch"
import { Link } from "react-router-dom"
import { useState } from "react"
import Style from "../styles/MainPage.module.css"
import Loading from "../components/Loading"
import Error from "../components/Error"
import Header from "../components/Header"

const MainPage = () => {
    const [wasDeleted, setWasDeleted] = useState(false)
    const {response, error, loading} = useFecth({url:"/api/v1/todolist", method:"GET", wasDeleted})

    //on delete we change state to make this page rerender
    const onDelete = () => {
        setWasDeleted((prev)=>!prev)
    }
    
    if(loading && !response)return <Loading />
    if(error)return <Error/>
    return (
        <div className={Style.wrapper}>
            <div className={Style["todo-wrapper"]}>
                <Header/>
                <h1>To Do App</h1>
                <div className={Style["todo-list"]}>
                {response && response.items.map((todo)=>(
                <ShowToDoList 
                    key={todo._uuid} 
                    id={todo._uuid} 
                    name={todo.name}
                    firstName={todo.firstName}
                    lastName={todo.lastName}
                    dueDate={todo.dueDate}
                    priority={todo.priority}
                    isCompleted={todo.isCompleted} 
                    deleted={onDelete}
                />
                ))}
                </div>
            </div>
        </div>
    ) 
    
}

export default MainPage