import React from "react";
import style from "./Form.module.css";


const Form = (props) => {
    return <form onSubmit={props.onSubmit} className={style.Form}>{props.children}</form>
}




const Controller = (props) => {
    return (
        <>
            <Form >{props.children}</Form>
        </>
    )
}

Form.Controller = Controller;

export default Form;