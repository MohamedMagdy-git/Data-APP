import React, {useState} from "react";
import style from "./Filter.module.css";

const Filter = ({exportNamefiltr}) => {
    const [filter, setFilter] = useState();

    let filterHandler = (e) => {
        let namees = e.target.value
        setFilter(namees);
        exportNamefiltr(namees);
    };
    
    return <>
        <div className={style.divfilter}>
            <input type="text"
            placeholder="Search on Data | By Name"
            value={filter}
            onChange={filterHandler}
              ></input>
        </div>    
    </>
};


export default Filter;