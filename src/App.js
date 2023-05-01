import './App.css';
import React,{useEffect,useState} from 'react';
import MoveItem from './components/MoveItem';
import Button from './components/Button';
import truck from "./Assets/Icons/truck.svg"

function App() {
  const [data,setData] = useState({});

  useEffect(() => {
     fetch("http://test.api.boxigo.in/sample-data/").then((data)=>data.json()).then((
      data
     ) => {
      console.log(data)
      setData(data)
     } 
     ).catch((e) => {
      console.log(e);
     })
  },[])

  return (
    <div className="App">
      <div style={{display:"flex",flexDirection:"column",width:"20%"}}>
         <Button text={"My Moves"} icon={truck}></Button>
         <Button text={"My Moves"} icon={truck}></Button>
         <Button text={"My Moves"} icon={truck}></Button>
         <Button text={"My Moves"} icon={truck}></Button>
      </div>
      <div style={{width:"80%",display:"flex",flexDirection:"column",justifyContent:"space-between",alignContent:"start"}}>
      <h2 style={{margin:"10px auto"}}>My Moves</h2>
      {
        data.Customer_Estimate_Flow?.map((data) => {
          return(
            <MoveItem data={data}></MoveItem>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
