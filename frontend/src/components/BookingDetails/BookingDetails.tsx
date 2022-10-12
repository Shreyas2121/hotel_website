import React from 'react'
import './bookingdetails.css';

export const BookingDetails = () => {
  return (
    <section class="tm-booking">
    
    <form>
        <div class="tm-form1">
            <input type="text" name="name" placeholder="Name"/>  
            <input type="email" name="email" placeholder="E-mail"/> 
            
            <div class="tm-num1" id="handleCounter1">    
                <label for="number1" >Number of Rooms</label><br/>
                <button type="button" class="counter-minus btn btn-primary">- </button>
                <input type="text" name="number1" id="number1" value="1"/>
                <button type="button" class="counter-plus btn btn-primary">+  </button>
            </div>

            <div class="tm-num2" id="handleCounter2">      
                <label for="number2">Number of Guests</label><br/>
                <button type="button" class="counter-minus btn btn-primary">-</button>
                <input type="text" name="number2" id="number2" value="1"/>
                <button type="button" class="counter-plus btn btn-primary">+</button>
            </div>

         </div>
        
        <div class="vertical-line"> </div>
        
        <div class="tm-form2">
            <div class="tm-cl">
                <label for="date1" class="arrival">Visiting Dates from Arrival to Departure</label>

                <input type="text" name="date1" class="range" readonly="readonly"/> 
                
                <input type="submit" id="sub" value="Proceed"/>
            </div>
        </div>

    </form>

  </section>
  
  );
};

export default BookingDetails;