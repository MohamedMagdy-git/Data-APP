import React, {useState} from "react";
import Form from "../Layout/Form";
import style from "./AddUser.module.css"



const AddUser = ({AddUserHandeler, toggleStateFuncHideForm}) => {
   let [input, setInput] = useState({
    name: "",
    age: "",
    phone: "",
    adress: "",
    gender: "",
   });

   
   let inputHandler = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    setInput({ id: Math.trunc(Math.random()*1000), ...input, [key]: value});
   }
   
   const submitHandeler = (e)=>{
       e.preventDefault();
       AddUserHandeler(input)
    }
    
    
   
    
    return ( 
    <>
    <Form onSubmit={submitHandeler}>
      
            <div style={{marginBottom: "15px"}}>
                    <label style={{marginRight: "12px",marginBottom: "15px"}} htmlFor="name">Name</label>
                    <input type="text" onChange={inputHandler} name="name" id="name" required value={input.name} placeholder="Enter Name Here" className={style.inputData}/>
            </div>
            
            <div style={{marginBottom: "15px"}}> 

                    <label style={{marginRight: "24px"}} htmlFor="age">Age</label>
                    <input type="text" name="age" id="age" required value={input.age} onChange={inputHandler} placeholder="Enter Age Here" className={style.inputData}/>
            </div>
             
          
            <div style={{marginBottom: "15px"}}>
                
                <label style={{marginRight: "10px"}} htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" required value={input.phone} onChange={inputHandler} placeholder="Enter Phone Here" className={style.inputData}/>
            </div>

            <div style={{marginBottom: "15px"}}>
                
                <label style={{marginRight: "10px"}} htmlFor="adress">Adress</label>
                <input type="adress" name="adress" id="adress" required value={input.adress} onChange={inputHandler} placeholder="Enter adress Here" className={style.inputData}/>
            </div>  

            <div className={style.gander}>
                <span className={style.ganderLable}>Gander</span>

                <div className={style.type} >
                <label style={{marginRight: "10px"}} htmlFor="Male">Male</label>
                <input type="radio" name="gender"  id="Male" value="Male" onChange={inputHandler} />
                </div>

            
            

                <div className={style.type} >
                <label style={{marginRight: "10px"}} htmlFor="Female">Female</label>
                <input type="radio" name="gender"  id="Female" value="Female" onChange={inputHandler}/>
                </div>

            </div>    
            
            
                <button className={style.btnFormSave} onClick={toggleStateFuncHideForm}>Save</button>
                <button className={style.btnFormCancel} type='reset'>Cancel</button>
            
        
        </Form>
    </>
)}


export default AddUser;
