import React,{ useState} from 'react'
import "./Calculator.css"
import data from "./Data"
import { evaluate } from 'mathjs';


function Calculator() {

  const [number , setNumber] = useState('');
  const  result=(num)=>{
    if (num==="AD"){
     setNumber("")
    }
    else if (num === "DE"){
      setNumber(number.slice(0, -1))
    }
    else if (num === "="){
      try {
        let answer = evaluate(number).toString();
        if (answer.length>10){
          answer = Number(answer).toPrecision(9);
        }
        setNumber(answer)
      } catch (error) {
        setNumber("Error")
        console.error("Incorrect validations " , (error))
      }
    }
    else {
      setNumber(number +  num)
    }
  }

  return (
    <> 
    <div className="container">
      <div className="calculator">
        <div className="inputfield">
          <input type="text"
          value={number}
          onChange={(e)=>setNumber(e.target.value)}
           />
        </div>
        <div className="row">
          {data[0].row1.map((val ,id)=>(
            <button 
            key={id}
            onClick={()=>result(val)}
            >{val} </button>
          ))}
        </div>
        <div className="row">
         {data[0].row2.map((val , id)=>(
          <button 
          key={id}
          onClick={()=>result(val)}>{val}</button>
         ))}
        </div>

        <div className="row">
          {data[0].row3.map((val , id)=>{
            return <button 
            key={id}
            onClick={()=>result(val)}>{val} </button>
          })}
        </div>

        <div className="row">
          {data[0].row4.map((val , id)=>(
            <button  
            key={id}
            onClick={()=>result(val)}>{val} </button>
          ))}
        </div>
        <div className="row">
          {data[0].row5.map((val , id)=>(
            <button 
            key={id}
            onClick={()=>result(val)}>{val}</button>
          ))}
        </div>
      </div>
    </div>
   </>

  )
}

export default Calculator