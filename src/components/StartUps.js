import React,{useState} from 'react';
import StartUp from './StartUp';
import {Link} from 'react-router-dom';
import {Badge,Button,Alert} from 'react-bootstrap';

const StartUps= props=>{
    props.changeState('false');
    let [startUp,setStartUp]=useState([]);
    let [fetchStartUps,setFetchStartUps]=useState('true');
        const run=async props=>{
            
            try{
                if(fetchStartUps==='true'){
        const startUps=await fetch('http://localhost:8000/get-route',{
            method:'GET'
        });
        const finalResult=await startUps.json();
        if(finalResult.startUps.length>0){
        let startUpList=[];
        for (let startup of finalResult.startUps){
            startUpList.push({startUpName:startup.name,
            location:startup.location});
        }
        setStartUp(startUpList);
        setFetchStartUps('false');
    }}
    console.log(startUp);
    }
    
   catch(err){
       console.log('Error getting the startups',err);
   }
}
run();
let companies=null;
if(startUp.length>0){
    companies=startUp.map((company,index)=>{
        return(
            <StartUp key={index} name={company.startUpName} location={company.location}/>
        );
})
}

    return(
        <div>
            <Alert  variant='danger'>
    Welcome to StartUp World!
             </Alert>
            <h1><Badge variant="secondary">List of StartUps!</Badge></h1>
            <ol>
            {companies!=null?companies:null}
            </ol>
            <Link to='/create'>
            <Button variant="warning">CREATE NEW</Button>{' '}
            </Link>
        </div>
    )
}


export default StartUps;