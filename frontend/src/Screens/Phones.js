import React, { useEffect, useState } from 'react';
import { fetchPhones } from '../apiService';
import PhoneList from '../components/PhoneList';
import { Button, Card,Row,Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Phones() {

    const [phones,setPhones] = useState([])
  
    const getPhones = async() => {
      const result = await fetchPhones()
      setPhones(result)
    }
  
    useEffect(() => {
      getPhones()
    },[phones])
  
    return (
      <div className="Phones">
        <PhoneList phones={phones} ></PhoneList>
      </div>
    );
  }
  
  export default Phones;