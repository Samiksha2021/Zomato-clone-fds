import React from 'react'
import './AddResto.css'

const AddRestro = () => {
  return (
    <div className='restro-img'>
     <img src='https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp'/>
     <div className='navbar'>  
        <div className='navbar_left'>
         <span className='business'><img src="https://b.zmtcdn.com/web/merchant/advertize/3d432595dac7d2bda0b4cc41f6afe6ef1564646824.png"/></span>
        </div>
      
        <div className='navbar_right'>
          <span>Advertise </span>
          <span>Login </span>
          <span>Create account </span>
        </div>

     </div>
    </div>
  )
}

export default AddRestro