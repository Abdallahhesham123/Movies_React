import React, { useContext } from 'react'
import { AuthContext } from '../../Context/Store'
import profileStyle from "./profile.module.css"
import {Helmet} from "react-helmet";
const Profile = () => {

  const {Userdata} = useContext(AuthContext)

  return (
    <div className='container py-5'>
               <Helmet>
                <meta charSet="utf-8" />
                <title>Profile Page</title>
                
            </Helmet>
    <div className="row py-5 justify-content-center align-items-center vh-100">
<div className= {`${profileStyle.profile} w-50  py-4 my-4 m-auto text-center rounded-2`}>
<h1 className={`${profileStyle.header}`}>Profile Page</h1>
<h3 className={`${profileStyle.text}`}>  Welcome:<span className='text-dark'>{Userdata?.first_name } {Userdata?.last_name }</span>  </h3>
<h3 className={`${profileStyle.text}`}>  Age: <span className='text-dark'>{Userdata?.age}</span> </h3>
<h3 className={`${profileStyle.text}`}>  email:<span className='text-dark'>{Userdata?.email}</span>  </h3>

</div>
    
  
 
    </div>
    </div>
  )
}

export default Profile