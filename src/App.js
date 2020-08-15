import React,{ useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import CreateStartUps from './components/Create';
import StartUps from './components/StartUps';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let [createState,setCreateState]=useState('false');
  const handleCreateStartUp=async event=>{
      event.preventDefault();
      // const data = {
      //   name:event.target.name.value,
      //   location:event.target.location.value
      // }
      const data=new FormData(event.target);
      //console.log(data)
      try{
        const result=await fetch(`http://localhost:8000/create-route/?name=${event.target.name.value}&location=${event.target.location.value}`, {
          method: 'POST',
          body:JSON.stringify( 
            data
          ),
        });
    
        const finalResult=await result.json();
        console.log(finalResult);
        setCreateState('true');
      }
      catch(err){
        console.log('error fetching data!',err);
      }
        
  }

  const changeStateHandler=newState=>{
    setCreateState(newState);
    console.log(createState);
  }

  return (
    <div className="App">
      <Router>
      <Switch>
      
        <Route path="/" exact>
          <StartUps changeState={changeStateHandler}/>
        </Route>
        {createState==='true'?<Redirect to="/" />:null}
        <Route path="/Create/" exact>
          <CreateStartUps handleSubmit={handleCreateStartUp}/>
        </Route>
    
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
