import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import TodoList from './TodoList'
const TodoForm = () => {
    const [name,setName]=useState("")
    const [todo,setTodo]=useState([])
    const [updateUi,setUpdateUi]=useState(false)
    const [updateId, setUpdateId] = useState(null);
    
    const handleSubmit=async(e)=>{
        e.preventDefault()

        const payload={
            name
        }
        axios.post("http://localhost:8000/api/add",payload)
        .then((res)=> {
            alert("Add Data Successfully")
            setName("")
            setUpdateUi((prevState) => ! prevState);
        })
        .then((err) =>console.log(err))
        
    }
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/get")
        .then((res) =>{
            setTodo(res.data)
            
        })
        .catch((err)=>console.log(err))
    },[updateUi])

    const handleEdit=(id,text)=>{
    setName(text);
    console.log()
    setUpdateId(id);
    }

const handleUpdate=()=>{
  const payload={
    name
}
axios.put(`http://localhost:8000/api/update/${updateId}`, payload).then((res) => {
  console.log(res.data);
  setUpdateUi((prevState) => !prevState);
  setUpdateId(null);
  setName("");
  console.log(name)
});
}


  return (
    <>
      {/* <form onSubmit={updateId ? handleUpdate : handleSubmit }> */}
      <div className="input_holder">
        <input type='text'  placeholder='Enter Todo' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'  onClick={updateId ? handleUpdate : handleSubmit}>
          {updateId ? "Update" : "Add Todo"}
          </button>
      {/* </form> */}
    </div>

     {todo.length > 0 && todo.map((item)=>(
         <TodoList key={item._id} 
         id={item._id}
         name={item.name}
         Author={item.Author}
         Added={item.Added}
         setUpdateUi={setUpdateUi}
         handleEdit={handleEdit}
         />
      ))}
    </>
  )
}

export default TodoForm
