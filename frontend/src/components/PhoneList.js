import React from 'react'
import PhoneCard from './PhoneCard'
function PhoneList({phones}) {
    

    return (
        <div style={{backgroundColor:"#E6D2CD"}}>
            {phones.map((el) =>{
                const {name,imageFileName,price,_id,description, manufacturer,screen,processor,ram,getPhones} = el
                return (
                    <PhoneCard key ={_id} name={name} image={imageFileName} price={price} 
                    id={_id} description={description} manufacturer={manufacturer}
                    screen={screen} processor={processor} ram={ram} getPhones={getPhones}
                    ></PhoneCard>
                )
            })}
        </div>
    )
}

export default PhoneList
