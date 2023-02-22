import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "./Col";


export default function Cards(props){

    
      
     
         return (  
          data.map((data)=>{
            return(
          
                  <div style={{display:'inline-block'}}>
                      
    <Card style={{ width: '18rem', border:'1px solid black', margin:'8px'}} key={data.id}>
      <Card.Img style={{ width: '18rem'}} variant="top" src="College-Selector-Android.jpg" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <div style={{display:'flex'}}>
         <div className='fees' style={{borderRight:'1px solid black',height:'45px', paddingLeft:'20px',marginRight:'30px', marginLeft:'20px', paddingRight:'30px'}}> Fees: {data.fees} </div>
         <div className='rating'style={{ position:'relative', right:'10px', top:'8px',float:'right', marginRight:'10px', width:'110px'}}> Rating: {data.rating}</div>
         
        </div>
        <hr></hr>
        <br></br>
        <div style={{display:'flex'}}>
          <div style={{ border:'1px solid black',backgroundColor:'lightblue', padding:'4px', width:'300px'}}>
            Admission 2023 Reviews Courses & Fees
          </div>
          </div>
        </Card.Text>
        <br></br>
        <div style={{display:'flex'}}>
          <Button style={{width:'200px'}} variant="primary">ApplyNow</Button>
        <Button style={{width:'200px'}} variant="primary">Brochure</Button>
        </div>
      </Card.Body>
    </Card>
    
    </div>
         )
  }
    )
         )
          
          }
        
    
   

         

