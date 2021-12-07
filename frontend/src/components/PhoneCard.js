import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteById } from '../apiService'
import { Button, Card,Row,Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function PhoneCard(props) {

    const navigate = useNavigate();
  
    const handleRoute = () =>{ 
        navigate("/phoneDetails", {state:{props}});
    }

  
    return (
        <Container >
            <Row>
            <Col xs={{ order: 10 }}></Col>
            <Card style={{ width: '18rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 30,
                            margin:"70px",
                            paddingTop: 10,
                            backgroundColor: '#CAC1BE'}}>
            <Card.Img style={{height: 275,width: 307,resizeMode: 'contain',borderRadius: 30,padding: 10}} variant="top" src={props.image} />
            <Card.Body>
                <Card.Title style={{marginLeft:"40px"}}>{props.name}</Card.Title>
            <Button style={{margin:10}} variant="dark" onClick={() =>{deleteById(props.id)}}>✘</Button>
            <Button variant="dark"  onClick={handleRoute}>Details</Button>
            </Card.Body>
            </Card>
        <Col ></Col>
      </Row>
    </Container>

    
    )
}

export default PhoneCard
