import React from 'react'

const Condition = () => {
    let welcomeRole ={
        admin:"hi admin",
        user:"hi user",
        customer:"hello how are you??"
    }
  let user ={
    role:"customer",
     name:"youth it",
     isAuth:true
  }
  const {role,name,isAuth}=user

  return (
    <>
 
        <div >
            {welcomeRole[role]}
         
        </div>
      
      <div>
          {!isAuth && <button className='border p-2 bg-red-300 rounded-2xl'>login</button>}
      </div>
        
        </> //ternary operator
  )
}

export default Condition