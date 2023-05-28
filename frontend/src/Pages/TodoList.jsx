import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const TodoList = ({ id, name, Author, Added, setUpdateUi ,handleEdit}) => {


  const TodoDelete = () => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
      .then((res) => {
        console.log(res)
        setUpdateUi((prevState) => !prevState);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <li key={id}>
     <h3> {name}  </h3> <br/>
     <p>   {Author} </p>  
     <p>  {Added}  </p>     
        
       
        <div className='icon_holder'>
          <BiEditAlt  className="icon"  onClick={() => handleEdit(id, name)}/>
          
            <BsTrash  className="icon" onClick={TodoDelete} />
          

        </div>
      </li>


    </div>
  )
}

export default TodoList
