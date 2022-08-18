import React,{useState} from 'react'

export default function Base_validation() {
  const [user,setUser]=useState('')
  const [password,setPassword]=useState('')
  const[usererror,setUsererror]=useState(false)
  const[userpassword,setUserpassword]=useState(false)
    function getFormData(e){
  if(user.length<3 || password.length<8  ){
    alert('type correct Value')
  }else{
    alert('All Good')
  }
        e.preventDefault()  //form submit  krne se rokta hangingPunctuation:
       }


       function  userHandleer(e){
        let item =e.target.value;
        if(item.length<3){
          setUsererror(true)
         // console.log('inv')
        }else{
          setUsererror(false)
        }
        setUser(item)

       }

       function Password(e){
        let item =e.target.value;
        if(item.length<8){
          setUserpassword(true)
         // console.log('inv')
        }else{
          setUserpassword(false)
        }

        setPassword(item)

       }
  return (
    <div>
        <ul><h1>Form Validation</h1></ul>
        <form onSubmit={getFormData}>
      <input type="text" class="form-control" placeholder='Enter Name' onChange={userHandleer} required/><br></br>
     {usererror?"user Not Found":""}
      <input type="password" class="form-control" placeholder='Enter Password' onChange={Password} required/><br></br>
      {userpassword?"Password invalid Found":""}
      <br></br>    
   <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
   <button type='clear' className="btn btn-primary">Clear</button>
      </form>
    </div>
  )
}
