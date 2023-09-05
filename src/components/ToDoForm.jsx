import {  useRef } from "react"
import useRequest from "../hooks/useRequest";
import {useNavigate} from "react-router-dom"
import Style from "../styles/ToDoForm.module.css"


const ToDoForm = ({toDoNameProp, firstNameProp, lastNameProp, dueDateProp, priorityProp, directToProp, urlProp="/api/v1/todolist", methodProp="POST"}) => {
    const todoRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const dueDateRef = useRef()
    const priorityRef = useRef()
    const {sendRequest} = useRequest({urlProp, methodProp})
    const navigate = useNavigate()
   
    const onSubmit = (e) => {
        e.preventDefault()
        if(todoRef.current.value.trim() === "") return //if no value vas entered return

        //Based on API requirements if we post we need array 
        if(methodProp==="POST"){
            sendRequest([{
                name:todoRef.current.value,
                firstName:firstNameRef.current.value,
                lastName:lastNameRef.current.value,
                dueDate:dueDateRef.current.value,
                priority:priorityRef.current.value,
                isCompleted:false,
            }])
        //if we change PUT we need obj    
        }else{
            sendRequest({
                name:todoRef.current.value, 
                firstName:firstNameRef.current.value,
                lastName:lastNameRef.current.value,
                dueDate:dueDateRef.current.value,
                priority:priorityRef.current.value,
                isCompleted:false,
            })
        }
        navigate(directToProp)  
    }
 
    return (
        <div className={Style.wrapper}>
            <form className={Style["add-from"]}  onSubmit={onSubmit } >
                {methodProp==="POST"? <h1>Add To-Do Task</h1> : <h1>Change To-Do Task</h1>} 
                <textarea type="text" name="to-do" ref={todoRef} placeholder="Add To-Do" defaultValue={toDoNameProp}/>
                <input type="text" name="user-name" ref={firstNameRef} placeholder="Name" defaultValue={firstNameProp}/>
                <input type="text" name="user-lastname" ref={lastNameRef} placeholder="Last Name" defaultValue={lastNameProp} />
                <input type="date" name="Due-date" ref={dueDateRef}  defaultValue={dueDateProp}/>
                <div className={Style["priority-wrapper"]} >
                    <label htmlFor="priority">Task Priority</label>
                    <select name="priority selector" className={Style["priority-select"]} ref={priorityRef} id="priority" defaultValue={priorityProp} >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="H    ight">Hight</option>
                    </select>
                </div>
                <button className={Style["add-btn"]}>
                    {methodProp==="POST"? "Add" :"Change"}
                </button>
            </form>
        </div>
    )
}

export default ToDoForm