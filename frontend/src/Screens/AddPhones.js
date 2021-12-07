import React, {useState,updateState} from 'react'
import {addNewPhones} from "../apiService"
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function AddPhones() {

  const [state, setState] = useState({
        name: '',
        manufacturer: '',
        description: '',
        price: undefined,
        imageFileName: '',
        screen: '',
        processor: '',
        ram: undefined,
      });

    const [newState,setNewstate] = useState(null)

    const [image,setImage] = useState("")

    const input = {
      padding: 15,
      marginVertical: 0,
      fontSize: 16,
      height: 50,
      backgroundColor: '#A19A97',
      borderRadius: 30,
      marginTop: 40,
      paddingLeft: 20,
    }

    const form =  {
      borderRadius: 10,
      position: "relative",
      left : "35%",
      float: "left",
      marginTop : "10%",
    }

    const button = {
      height: 40,
      width: '50%',
      borderRadius : 20,
      justifyContent: 'center',
      marginTop : "20px"
    }

    const buttonText= {
      color: 'black',
      alignSelf: 'center',
      fontSize: 16,
    }

    const list = {
      backgroundColor: '#E6D2CD',
      position: "absolute",
      height :"130%",
      width : "100%"
    }

    const heading = {
      color: '#A19A97',
      fontSize: 30,
      marginLeft : "14%",
      fontWeight: 'bold',
      marginTop: "40px",
    }

    

    const addNewPhone = async( event) => {      
        event.preventDefault()
        console.log("executing the upload image")
        console.log(Date.now())
        uploadImage(image)
    }



    const uploadImage = async (img) => {
        
        const formData = new FormData()
        formData.append("file",img)
        formData.append("upload_preset","tuukncuo")
        let apiUrl = 'https://api.cloudinary.com/v1_1/dxrh21mkj/image/upload';
    
        await fetch(apiUrl, {
          body: formData,
          method: 'POST',
        })
        .then(resp => resp.json())
        .then(data => {
        const newState = {...state, imageFileName: data.url};
        setState(newState);
        const working =  addNewPhones(newState)
        })
          .catch((err) => console.log(err));
    }
    

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setState((prevState) =>{
          return{
            ...prevState,
            [name]:value
          }
        })
        console.log(state)
      }




    return (
      <div style={list}>
        
        <form style={form} className="form-group">
        <div>
        <text style={heading}>Add a new phone</text>
        <input style={input} className="form-control" value={state.name} name="name" type="text" placeholder="name" onChange={handleChange}></input>
        <input style={input} className="form-control" value={state.manufacturer} name="manufacturer" type="text" placeholder="manufacturer" onChange={handleChange}></input>
        <input style={input} className="form-control" value={state.description} name="description" type="text" placeholder="description" onChange={handleChange}></input>
        <input style={input} className="form-control" value={state.price} name="price" type="text" placeholder="price" onChange={handleChange}></input>
        <input style={input} className="form-control" value={state.screen} name="screen" type="text" placeholder="screen" onChange={handleChange}></input>
        <input style={input} className="form-control" value={state.processor} name="processor" type="text" placeholder="processor" onChange={handleChange}></input>
        <input style={input} className="form-control" value={state.ram} name="ram" type="text" placeholder="ram" onChange={handleChange}></input>
        <input style={input} className="form-control" type="file" 
        onChange={(event) => {setImage(event.target.files[0])}}></input>
        </div>
        <div style={button}>
        <Button variant="btn btn-secondary" style={buttonText} onClick={addNewPhone} type="submit">Create New phone</Button>
        </div>
        </form>
      </div>
    )
}

export default AddPhones
