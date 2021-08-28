import React from 'react'
import "./ConfirmedRegistration.css"

function ConfirmedRegistration() {
    return (
        <div>
            <div class="Background"> 
            <div className="Confirm">
              <div className="Title">
                <h2>Hi NAME</h2>
                <h3>Please chose a Password</h3>
              </div>
              <div className="id_password">
                <div>
                  <label>Password</label>
                  <input type="password"></input>
                </div>
                <div>
                  <label>Eamil id</label>
                  <input type="text"></input>
                </div>
                <div className="submit_button">
                  <button onClick={()=>window.location.assign("/search")}>
                    search
                  </button>
                </div>
              </div>
            </div>
        </div>
        </div>
    )
}

export default ConfirmedRegistration
