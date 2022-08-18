import React,{useState} from 'react'

export default function Profile() {



//     const [login,SetLogin]=useState(false)
//     if(login)
//     {
//   return (
//     <div>
//       <h1>Profile Component</h1>
//     </div>
   
//   )
// }
// else{
//     return (
//         <div>
//           <h1>Profile </h1>
//         </div>
       
//       )
    
// }
const [login,setLogin]= useState(2)
return (
        <div>
        {login===1?<h1>Welcome Super Admin</h1>:login===2?<h1>Welcome Admin</h1>:<h1>Welcome  User</h1>}
        </div>
       
      )

}
