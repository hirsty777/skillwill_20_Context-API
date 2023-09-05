import { useLocation } from "react-router-dom";
import ToDoForm from "../components/ToDoForm";


const EditToDo = () => {
    const {state:{name,  firstName, lastName, dueDate, priority,  id}} = useLocation()

    return (
        <ToDoForm  urlProp={`/api/v1/todolist/${id}`} methodProp={"PUT"}
        directToProp={"/"} 
        toDoNameProp={name}
        firstNameProp={firstName}
        lastNameProp={lastName}
        dueDateProp={dueDate}
        priorityProp={priority}
        />
    )
}

export default EditToDo