import Button from "react-bootstrap/esm/Button"
import AddMedicine from "./AddMedicine"
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

function MoreMedicine(){
    let navigate = useNavigate();
    const [visible, setVisible] = useState(true)
    const [moreMedicine, setMoreMedicine]= useState(false)

    function handleClick(){
        setVisible(false)
        setMoreMedicine(true)
    }
    function handlePush(){
        navigate("/home")
    }
    
    return(
        <div>
            <h2>Do you have more medicine to add?</h2>
            {visible ? <div> <Button onClick={handleClick}>Yes</Button><Button onClick={handlePush}>No</Button> </div> : <Button onClick={handlePush}>No</Button>}
            {moreMedicine ? <AddMedicine></AddMedicine>: null}
        </div>
    )
}

export default MoreMedicine