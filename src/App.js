import React, { useState } from 'react';
import './App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const App =()=>{
  const [setvalue,newsetvalue] = useState(0)
  
const increment=()=>{
  newsetvalue(setvalue+1)
}
const decrement=()=>{
  console.log("decrement")
  if(setvalue!=0){
  newsetvalue(setvalue-1)
  }
}
return(
  <>
    <div className='container'>
<div className="box1">
<h1>Count</h1>
<div className="countbox">

  <h1 className='counter'>{setvalue}</h1>
  <button onClick={increment}><span>
    <AddIcon/>
  </span></button>
  <button onClick={decrement}>
<DeleteIcon/>

  </button>
</div>
</div>
    </div>
  </>
)

}

export default App