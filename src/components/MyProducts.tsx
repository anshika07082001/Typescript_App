import React from 'react'

interface MyProps {
  id:number,
  title:string,
  price:number,
  rating:number,
  images:string[],
}

const MyProducts = (props:MyProps) => {
  return (
    <div className='item'>
      <p>{props.id}</p>
      <p><b>{props.title}</b></p>
      <p>Price: {props.price}</p>
      <img src={props.images[0]} alt=''/>
      <p>Rating: <label style={{color:'#ff8300'}}> {props.rating} </label></p>
    </div>
  )
}

export default MyProducts