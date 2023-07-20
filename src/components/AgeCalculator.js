import React from 'react'
import IconArrow from '../images/icon-arrow.svg'
import '../styles/age_calculator.css'

const AgeCalculator = () => {
  return (
    <div className="main-container">
        <div className="age-card-container">
            <div className="upper-container">
                <div className="day-container">
                <label htmlFor="day">DAY</label> <br />
                <input type="number" id='day' name='day' placeholder='DD'/>
                </div>
               <div className="month-container">
               <label htmlFor="month">MONTH</label> <br />
                <input type="number" id='month' name='month' placeholder='MM'/>
               </div>
                <div className="year-container">
                <label htmlFor="year">YEAR</label> <br />
                <input type="number" id='year' name='year' placeholder='YY'/>
                </div>
            </div>
            <div className="middle-container">
                <hr />
                <img src={IconArrow} alt="icon arrow" />
            </div>

            <div className="lower-container">
                <p><span className='years'>38</span> years</p>
                <p><span className='months'>3</span> months</p>
                <p><span className='days'>26</span> days</p>
            </div>
        </div>
    </div>
  )
}

export default AgeCalculator