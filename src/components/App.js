import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const[marco,setMarco]=useState('Marco');
  const[polo,setPolo]=useState('Polo');
  const toggle=()=>{
    polom();
  }
  const polom=()=>{
    if(marco==="Marco"){
      setMarco('Polo')
      setPolo("Marco")
    
    //   setMarco('Marco')
    //   setPolo("Polo")
    // 
    console.log('w,jcn')
    }else{
      setMarco('Marco')
      setPolo("Polo")
    }
  }
  return (
    <div id="main">
      <h1 id="marco-polo" >{marco}</h1>
      <button  id="marco-polo-toggler" onClick={toggle}>{polo}</button>
    </div>
  )
}


export default App;
