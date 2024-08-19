import React,{useState} from "react"

function TodoList(){
    const [task,setTask] = useState([]);
    const [newTask,setNewTask] = useState("");

    const updateTask = e=>{
        setNewTask(e.target.value);
    };
    const addTask = _=>{
        setTask(newTask.trim()!=""?prevTask=>[...prevTask,newTask]:task);
        setNewTask("")
    };
    const deleteTask = i=>setTask(task.filter((_,index)=>i!=index));
    const PriorityUp = i=>setTask(prevTask => i > 0 ? [...prevTask.slice(0, i-1), prevTask[i], prevTask[i-1], ...prevTask.slice(i+1)] : prevTask);

    //!We can also do this using Array Destructuring like below:
        // if(i>0){
        //     const updatedTask = [...task];
        //     console.log(updatedTask);
        //     [updatedTask[i],updatedTask[i-1]]=[updatedTask[i-1],updatedTask[i]];
        //     setTask(updatedTask);
        // }
   
    const PriorityDown = i=>setTask(prevTask=>i<prevTask.length-1?[...prevTask.slice(0,i),prevTask[i+1],prevTask[i],...prevTask.slice(i+2)]:prevTask);

        // if(i<task.length-1){
        //     const updatedTask = [...task];
        //     [updatedTask[i],updatedTask[i+1]]=[updatedTask[i+1],updatedTask[i]];
        //     setTask(updatedTask);
        // }

    return(<div className="MainDiv">
        <h1>To-Do List</h1>
        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={updateTask}/>
            <button onClick={addTask} className="AddButton">Add</button>
            <p>TASK: {newTask}</p>
            <br />
        </div>
        <ol>
            {task.map((element,index)=><li key={index}><span>{element}</span><button onClick={_=>deleteTask(index)} className="deleteButton">Delete</button><button onClick={_=>PriorityUp(index)} className="priority">👆</button> <button className="priority" onClick={_=>PriorityDown(index)}>👇</button></li>)}
        </ol>
    </div>)

}

export default TodoList