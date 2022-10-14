import React from 'react'
import Checkbookingdetails from '../components/CheckBooking/checkbookingdetails'

export const Checkbooking = () => {
  return (
    <div>
        <label >Enter Email</label>
        <input type="email" />
       <button>Get Details</button> 
        <Checkbookingdetails />
    </div>
  )
}

export default Checkbooking;
