import React,{useReducer,useState,useEffect} from 'react';
import { ReducerFunction,InitialValue } from './ReducerComponent';

export const Component  = () => {

    const [state,dispatch]=useReducer(ReducerFunction,InitialValue)
    const [form,setForm]=useState({name:"",mobile:"",email:""})
    const[isEdit,setIsEdit]=useState(false)
    const[editIndex,setEditIndex]=useState(null)




   
   
    const handleChange=(e)=>{
           const{name,value}=e.target 
           setForm({...form,[name]:value})
    }
   const handleSubmit=async(e)=>{
          e.preventDefault();

          
          if(isEdit){
            dispatch({type:"UpdateUser",payload:{index:editIndex,user:form}});
            setIsEdit(false);
            setEditIndex(null);

          }else{
            dispatch({type:"AddUser",payload:form})
           console.log(dispatch)
          }
          
   }

   const handleEdit=(index)=>{
      setEditIndex(index);
      setForm(state.User[index]);
      setIsEdit(true)
   }
   const handleDelete=(index)=>{
     dispatch({type:"DeleteUser",payload:index})
   }
   
  return(
    <div>
                <form>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="User Name"
                />
                <input
                    type="text"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                />
                <input
                    type="email"
                    name="email"
                  value={form.email}
                  onChange={handleChange}
                    placeholder="Email"
                />
            </form>
       
  <div>
    <button type="button" onClick={handleSubmit}>
    {isEdit ? "Update User" : "Add User"}
    </button>
    </div>

    <div>
      <ul>
        {state.User.map((user,index)=>(
            <li key={index}>
                {user.name}-{user.mobile}-{user.email}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>delete</button>
            </li>
        ))}
      </ul>

    </div>
    
</div>
   )

 }
