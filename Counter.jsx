import React,{useState } from "react";
import { Table,Button } from "react-bootstrap";

export const Counter =()=>{
    const[count, setcount] = useState(0);
     const handleIncrease =()=>{
        setcount(count +1 );
     }
     const  handleDecrease = ()=>{
         setcount(count -1 )
     }
    return(
        <div>
            <Table>
  <thead>
    <tr>
        
      
      <th> <Button onClick={handleIncrease}> - </Button></th>
      <th><p>{count}</p></th>
      <th><Button onClick={ handleDecrease}> + </Button></th>
    </tr>
  </thead>
  
  </Table>
            
        </div>
    )
}