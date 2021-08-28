import React from 'react'
import "./LoginPage.css"

function LoginPage() {
    return (
        <div class="background"> 
            <div className="login">
              <div className="title">
                <h2>Login to your page</h2>
              </div>
              <div className="login_details">
                <div>
                  <label>Admission Number</label>
                  <input type="text"></input>
                </div>
                <div>
                  <label>Password</label>
                  <input type="password"></input>
                </div>
                <div className="login_button">
                  <button onClick={()=>window.location.assign("/search")}>
                    search
                  </button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default LoginPage


