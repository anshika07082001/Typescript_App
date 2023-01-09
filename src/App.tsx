import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  var num=10,isLoggedIn=true
  return (
    <div className="App">
      <h2>3. React app with typescript</h2>
      <MyComponent name='Anshika Chaurasiya' num={num} isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
