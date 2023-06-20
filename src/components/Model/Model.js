import React, {Fragment} from "react";
import style from "./Model.module.css"
import  ReactDOM  from "react-dom";


const BackDrop = ({hideModal, showState})=> {
    return <div className={`${style.backDrop} ${showState? style.showBackDrop: null}`} onClick={() => hideModal()}></div> 
}



const OverLay = ({showState, children})=> {

    return ( 
        <div className={`${style.overLay} ${showState? style.showOverLay: null}`}>
        <h3  className={style.titleForm}>New Data</h3>
        
        {children}

    </div>
)}



const Model = ({showAndHide, hideModelFromBack, children} ) => {
    
    return( 
        // && if (showAndHide) ture { show} false { hide}
        // showAndHide && (
        <Fragment>
            {ReactDOM.createPortal(
                <Fragment>
                <BackDrop hideModal = {hideModelFromBack} showState ={showAndHide}/>
                <OverLay showState ={showAndHide}>{children}</OverLay>
                </Fragment> ,
                document.getElementById("Model")
            )}
            </Fragment>
        // )
    )};

export default Model;