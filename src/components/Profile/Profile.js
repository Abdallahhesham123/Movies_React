import React from 'react'
import profileStyle from "./profile.module.css"

const Profile = () => {

  return (
    <div className='container py-5'>
    <div className="row py-5 justify-content-center align-items-center vh-100">
    <h1 className={`${profileStyle.text}`}>    Profile Page Welcome
    

     
     
     
     </h1>
    <button className={`btn btn-outline-danger w-25`} >Logout</button>
    </div>
    </div>
  )
}

export default Profile