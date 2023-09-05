import ToDoForm from "../components/ToDoForm"

const AddToDo = () => {

    return (
        <ToDoForm  directToProp={"/"} urlProp={"/api/v1/todolist"} methodProp={"POST"}/>
    )
}

export default AddToDo