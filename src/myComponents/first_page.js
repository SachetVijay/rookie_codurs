import React from "react";
import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import "./firstPage.css";
function First() {
  const [value, setValue]=useState('');
  const submit=()=> {
    localStorage.setItem("id",value);
    window.location.assign('/search')
  }
  return (
    <div class="first_body">
      <div className="welcome_first">
        <div className="welcome_first_nav">
          <div>
            <i class="fas fa-search"></i>
          </div>
          <div>
            <i class="far fa-registered"></i>
          </div>
          <div>
            <i class="fas fa-comments"></i>
          </div>
        </div>
        <h2>Hello visitor Welcome To the IIIT SUART ALUMNI website</h2>
        <div className="instruction_first">
          <h3>
            Instructions ! <i class="fas fa-graduation-cap"></i>
          </h3>
          <ol>
            <li>
              If you want to register as an alumni then go down to the alumni
              section and register your self.
            </li>
            <li>
              If you want to search for any alumni details then go down to
              search alumni section and enter detail.
            </li>
          </ol>
        </div>
      </div>
      <div className="second_first">
        <div className="search_alumni">
          <div className="search_alumni_head">
            <h2>Sreach Alumni</h2>
          </div>
          <div className="input_search_alumni">
            <div>
              <label>Student Id</label>
              <input type="text"
              className="searchBar" onChange={(event) => setValue(event.target.value)} value={value}></input>
            </div>
            <div>
              <label>Batch</label>
              <input type="number"></input>
            </div>
            <div>
              <label>Name</label>
              <input type="text"></input>
            </div>
            <div className="alumni_search">
              <button onClick={submit}>
                search
              </button>
            </div>
          </div>
        </div>
        <div className="alumni_section">
          <div>
            <h2>Register / Login Here</h2>
          </div>
          <div className="alumni_search cc">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
