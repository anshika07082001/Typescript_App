import React from 'react'

interface MyProps {
    name:string;
    num:number;
    isLoggedIn:boolean;
}

const MyComponent = (props:MyProps) => {
  return (
    <div>
        <h4>Name: {props.name}</h4>
        <h4>Number is {props.num}</h4>
        <h4>Is LoggedIn- {props.isLoggedIn?'true':'false'}</h4>
    </div>
  )
}

export default MyComponent