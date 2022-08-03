import Sidebar from "./SideBar"
import UserProfile from "./UserProfile"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import {useState} from "react"; 

function Page({user}){
    const [select, setSelect]= useState("profile")
    return(
        <div className="page-header">
            <Row>
            <Col md={2} >
            <Sidebar select={select} setSelect={setSelect}></Sidebar></Col>
            <Col md={10}><UserProfile user={user} select={select}></UserProfile></Col>
            </Row>
        </div>
    )
}

export default Page