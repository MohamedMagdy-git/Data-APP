import React, {useState} from "react";
import Form from "../Layout/Form";
import style from "./AddUser.module.css"



const AddUser = ({AddUserHandeler}) => {
   let [input, setInput] = useState({
    name: "",
    age: "",
    phone: "",
    adress: "",
    gender: "",
   });

   let validation = ()=> {
    let name = input.name;
    let age = input.age;
    let phone = input.phone;
    let adress = input.adress;
    let gender = input.gender;
    if(name === ""){
        alert("Name is required");
        return false;
    }
    if(age === ""){
        alert("Age is required");
        return false;
    }
    if(phone === ""){
        alert("Phone is required");
        return false;
    }
    if(adress === ""){
        alert("Adress is required");
        return false;
    }
    if(gender === ""){
        alert("Gender is required");
        return false;
    }
    return true;
}

   
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
                    <input type="text" onChange={inputHandler} name="name" id="name" value={input.name} required placeholder="Enter Name Here" className={style.inputData}/>
            </div>
            
            <div style={{marginBottom: "15px"}}> 

                    <label style={{marginRight: "24px"}} htmlFor="age">Age</label>
                    <input type="text" name="age" id="age" value={input.age} onChange={inputHandler} required placeholder="Enter Age Here" className={style.inputData}/>
            </div>
             
          
            <div style={{marginBottom: "15px"}}>
                
                <label style={{marginRight: "10px"}} htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" value={input.phone} onChange={inputHandler} required placeholder="Enter Phone Here" className={style.inputData}/>
            </div>

            <div style={{marginBottom: "15px"}}>
                
                <label style={{marginRight: "10px"}} htmlFor="adress">Adress</label>
                <input type="adress" name="adress" id="adress" value={input.adress} onChange={inputHandler} required placeholder="Enter adress Here" className={style.inputData}/>
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
            
            
                <button className={style.btnFormSave} onClick={()=> validation()}>Save</button>
                <button className={style.btnFormCancel} type='reset'>Cancel</button>
            
        
        </Form>
    </>
)}


export default AddUser;
