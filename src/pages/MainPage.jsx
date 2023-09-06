import ShowToDoList from "../components/ShowToDoList"
import useFecth from "../hooks/useFetch"
import { useState } from "react"
import Style from "../styles/MainPage.module.css"
import Loading from "../components/Loading"
import Error from "../components/Error"
import  { useLenguageContext, LenguageArr }  from "../contexts/LenguageContext"

const MainPage = () => {
    const {lenguage,changeLenguage} = useLenguageContext()
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
                <h1>{LenguageArr[lenguage].title}</h1>
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