import React from 'react'
import {useLocation} from 'react-router-dom';

function DetailsPhone() {
    const location = useLocation()
    
    return (
        <div style={{position:"absolute",height:"100%",width:"100%",backgroundColor:"#E6D2CD"}}>
            <img style={{height: "70%",marginLeft: "10%",width: "30%",marginTop: "10%", border:"solid"}}src={location.state.props.image}></img>
            <div >
                <text style={{position: "absolute",left: "50%",bottom: "75%",fontSize:"30px",fontWeight:"bold"}}>  Name: {location.state.props.name}</text>
                <text style={{position: "absolute",left: "50%",bottom: "65%",fontSize:"30px",fontWeight:"bold"}}> Manufacturer: {location.state.props.manufacturer}</text>
                <text style={{position: "absolute",left: "50%",bottom: "55%",fontSize:"30px",fontWeight:"bold"}}> Price: {location.state.props.Price}</text>
                <text style={{position: "absolute",left: "50%",bottom: "45%",fontSize:"30px",fontWeight:"bold"}}> Description: {location.state.props.description}</text>
                <text style={{position: "absolute",left: "50%",bottom: "35%",fontSize:"30px",fontWeight:"bold"}}> Ram: {location.state.props.ram}</text>   
                <text style={{position: "absolute",left: "50%",bottom: "25%",fontSize:"30px",fontWeight:"bold"}}> Screen: {location.state.props.description}</text>
                <text style={{position: "absolute",left: "50%",bottom: "15%",fontSize:"30px",fontWeight:"bold"}}> processor: {location.state.props.processor}</text>   
            </div>
        </div>
    )
}

export default DetailsPhone
