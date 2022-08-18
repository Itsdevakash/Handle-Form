import './App.css';
import React,{useState} from 'react'
import Profile from './Profile';
import Base_validation from './Base_validation';
function App() {

  



  const [name,setName] = useState('');
  const [tnc,setTnc] = useState(false);
  const [interest,setInterest] =useState("");

   function getFormData(e){
   e.preventDefault()  //form submit  krne se rokta hangingPunctuation: 
   console.log(name,tnc,interest)
  }
  return (
<>
       <div className="App">
     <h1>Handle Form</h1>
     </div>
     <div className='container'>
     <div className='row'>
     <div className='col-lg-3'></div>
      <div className='col-lg-6'>
     <div className="card">
  <div className="card-body">
    <form onSubmit={getFormData}>
      <input type="text" class="form-control" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)  }/><br></br>
      <select className="form-select"  onChange={(e)=>setInterest(e.target.value)  }>
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select><br></br>
    <input type="checkbox" className="form-check-input" placeholder='Enter Name' id="exampleCheck1" onChange={(e)=>setTnc(e.target.checked)  }/>Check me out
   <br></br>    
   <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
   <button className="btn btn-primary">Clear</button>
   
    </form>
  </div>
</div>
</div>
<div className='col-lg-3'></div>
</div>
<br></br>
<Profile/>
<br></br><hr></hr>
<Base_validation/>
     </div>
     </>
  );
}

export default App;
