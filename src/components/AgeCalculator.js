import React from 'react'
import IconArrow from '../images/icon-arrow.svg'

const AgeCalculator = () => {
  return (
    <div className="main-container">
        <div className="age-card-container">
            <div className="upper-container">
                <div className="day-container">
                <label htmlFor="day">Day</label> <br />
                <input type="number" id='day' name='day'/>
                </div>
               <div className="month-container">
               <label htmlFor="month">Month</label> <br />
                <input type="number" id='month' name='month'/>
               </div>
                <div className="year-container">
                <label htmlFor="year">Year</label> <br />
                <input type="number" id='year' name='year'/>
                </div>
            </div>
            <div className="middle-container">
                <hr />
                <img src={IconArrow} alt="icon arroww" />
            </div>

            <div className="lower-container"></div>
        </div>
    </div>
  )
}

export default AgeCalculator