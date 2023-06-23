import React, {useState} from "react";
import style from "./App.module.css";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import Model from "../components/Model/Model";
import Footer from "../components/Footer/Footer";
import AddUser from "../components/AddUser/AddUser";

const App = () => {
    // const inputData = useRef()
    const [showModal,setShowModal] = useState(false);
    const [filterSerch,setFilter] = useState([]);
    const [cardToggle, setCardToggle] = useState(true);
    const [names, setStateB] = useState([
        {
            id: 10000,
            name: "Tawfiq ",
            age: "30",
            phone: "01125890341",
            adress: "Giza",
            gender: "Male"
        },
        
        {
            id: 20000,
            name: "Hossam",
            age: "22",
            phone: "01025433092",
            adress: "alsharqia",
            gender: "Male"
        },
        
        {
            id: 300000,    
            name: "Rayan",
            age: "18",
            phone: "011334330034",
            adress: "Mansoura",
            gender: "Male"
        },

        {
            id: 700000,    
            name: "Zayn ",
            age: "18",
            phone: "011334560034",
            adress: "Aswan",
            gender: "Male"
        },
        
        {
            id: 400000,
            name: "Mecca",
            age: "21",
            phone: "01125890091",
            adress: "Alexandria",
            gender: "Female"
        },
        
        {
            id: 500000,
            name: "Rana",
            age: "28",
            phone: "01122325309",
            adress: "Ismailia",
            gender: "Female"
        },
        
        {
            id: 600000,
            name: "Alaa",
            age: "23",
            phone: "01134340091",
            adress: "Damietta",
            gender: "Female"
        },
        ]);
            // method add data to state [prevState + data]
            let AddUserHandeler = (data) => {
                console.log(data);
                setStateB((prevState) => ([...prevState, data]));
            }

            let deleteHandler = (e, idClick) => {
            //    let IndexStateWithoutClick = Boys.filter((el,idx) => idx !== idxClick);
            //    console.log(IndexStateWithoutClick);
            //    setState(IndexStateWithoutClick)
            setStateB((prevState) => {
                return prevState.filter((el, id)=> id !== idClick)
            });
            };

            // for event on button  card
            let ToggleHandler = () => {
                setCardToggle(!cardToggle);
            }
            // for event on button modal
            let modalShowHandler = () => {
                setShowModal(!showModal);
            }
            
            // let inputHandler = () => {
            //     console.log(inputData.current.value)
            // }
            
            // let onclick = () => {
            //     inputData.current.focus(); 
            // }
            
            let filterName = (namess) => {
                setFilter(namess);
            }

            let nameHandler = () => {
                if (filterName.length > 0) {
                    return names.filter((el) => el["name"].includes(filterSerch));
                }
                
            }

            let darkHandler = (e) => {
                console.log(e.target.checked)
                if (e.target.checked) {
                  document.body.style="background-color: #40484f";
                  document.querySelector(".titleData").style = "color: #f9f9f9;"
                  document.querySelector(".footer").style = "color: #f9f9f9"
                  document.querySelector(".footer a").style = "color: #f9f9f9"
                } else {
                    document.body.style="background-color: #F2F2F2";
                    document.querySelector(".titleData").style = "color: #7788998b;"
                    document.querySelector(".footer").style = "color: #607d8b"
                  document.querySelector(".footer a").style = "color: #607d8b"
                }
            }
            
    return <>
        <div className={style.Card}>
            {/* use props */}
                {/* darkMode Btn */}
    <div className='darkContiner'>
    <div className="btn-container">
      <i className="fa fa-sun-o" aria-hidden="true"></i>
        <label className="switch btn-color-mode-switch">
              <input type="checkbox" name="color_mode" id="color_mode" onChange={darkHandler}/>
              <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
          </label>
      <i className="fa fa-moon-o" aria-hidden="true"></i>
	  </div>
    </div>

    <h1 className='titleHeder'>Welcome</h1>
            <h2 className="titleData">To Data Collector</h2>
            
            {/* bttn for show and hide */}
            <div className={style.containerButtonHeader}>
                <button className={style.showBtn} onClick={()=> ToggleHandler()}>{cardToggle? "Hide Names" : "Show Names"}</button>
                <button className={style.showModalButton} onClick={()=> modalShowHandler()}>Add Data</button>
            </div>
            <div style={{transition: "0.3s"}} className={cardToggle? style.Show : style.hide}>
       
                <Filter exportNamefiltr={filterName} ></Filter>
                <Card nameList={nameHandler()}  deletefunc={deleteHandler}></Card>
            </div>
        </div>
        <Model showAndHide = {showModal} hideModelFromBack = {modalShowHandler}>
            <AddUser AddUserHandeler={AddUserHandeler} ></AddUser>
        </Model>
        
       
        
        <Footer/>
    </>
};

export default App;
