import { Link,} from "react-router-dom"
import useRequest from "../hooks/useRequest"
import Style from "../styles/ShowToDoList.module.css"
import EditIcon from "../assets/edit.svg"
import DeleteIcon from "../assets/delete.svg"

const ShowToDoList = ({name, firstName, lastName, dueDate, priority, isCompleted, id, deleted}) => {
    const {sendRequest:changeToDo} = useRequest({urlProp:`/api/v1/todolist/${id}`, methodProp:"PUT"})
    const {sendRequest:deleteToDo} = useRequest({urlProp:`/api/v1/todolist/${id}`, methodProp:"DELETE"})

    //checkbox 
    const onChange = (e) => {
        changeToDo({
            isCompleted:e.target.checked,
        })
    }
    const onDelete = () => {
        deleteToDo({}).then(() => deleted())
    }

    return (
        <div className={Style.todo}>
            <div className={Style["todo-data"]}>
                <span className={Style["todo-user"]}><b>User:</b>{`${firstName} ${lastName}`}</span>
                <span className={Style["todo-date"]}><b>Due Date:</b>{dueDate}</span>
                <span className={Style["todo-priority"]}><b>Priority:</b>{priority}</span>
                <span className={Style["todo-task"]}><b>Task:</b>{name}</span>
            </div>
            <Link className={Style["todo-edit"]} to={`/edit/${id}`} state={{name, firstName, lastName, dueDate, priority, id}} >
                <img src={EditIcon} className={Style["edit-icon"]} alt="edit" />
            </Link>
            <button className={Style["todo-delete"]} onClick={onDelete}>
                <img src={DeleteIcon} className={Style["delete-icon"]} alt="delete" />
            </button>
            <input className={Style["todo-checkbox"]} type={"checkbox"} onChange={onChange}  defaultChecked={isCompleted}/>
        </div>
    )
}

export default ShowToDoList