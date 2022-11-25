import React from 'react'
import profileStyle from "./profile.module.css"

const Profile = ({UserData}) => {

  return (
    <div className='container py-5'>
    <div className="row py-5 justify-content-center align-items-center vh-100">
<div className= {`${profileStyle.profile} w-50  py-4 my-4 m-auto text-center rounded-2`}>
<h1 className={`${profileStyle.header}`}>Profile Page</h1>
<h3 className={`${profileStyle.text}`}>  Welcome:<span className='text-dark'>{UserData?.first_name } {UserData?.last_name }</span>  </h3>
<h3 className={`${profileStyle.text}`}>  Age: <span className='text-dark'>{UserData?.age}</span> </h3>
<h3 className={`${profileStyle.text}`}>  email:<span className='text-dark'>{UserData?.email}</span>  </h3>

</div>
    
  
 
    </div>
    </div>
  )
}

export default Profile