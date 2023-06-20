import React from "react";
import style from "./Card.module.css";


const Card = ({nameList, deletefunc})=> {
    

    const cards = nameList.map(({name, age, phone, adress, gender}, id) => (
            <div className={style.card} key={id} style={{backgroundColor: "white", color: "black"}}>
                <div><span className={style.titleCard}>Name</span>: <span style={{color: gender === "Male"? "#00B0FF": "#ff8da1", fontWeight: "500"}}>{name}</span></div>
                <div><span className={style.titleCard}>Age </span>: {age}</div>
                <div><span className={style.titleCard}>Phone</span>: {phone}</div>
                <div><span className={style.titleCard}>Adress</span>: {adress}</div>
                <div className={style.closeBttn} onClick={(e) => deletefunc(e,id)}>X</div>
            </div>
      
    ))

    return (
    <>
        {/* <div className={style.gridCards}> */}
            {cards}
        {/* </div> */}
    </>)
};


export default Card;