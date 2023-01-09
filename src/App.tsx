import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyProducts from './components/MyProducts';
import data from './data.json'

function App() {

  var num=10,isLoggedIn=true
  return (
    <div className="App">
      <h2>3. React app with typescript</h2>
      <MyComponent name='Anshika Chaurasiya' num={num} isLoggedIn={isLoggedIn}/>
      <h2>4. Pass product details and print</h2>
      <div className='items'>
      {data.map((item)=>{
        return (
          <MyProducts id={item.id} title={item.title} price={item.price} rating={item.rating} images={item.images}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
