import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../FireBase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user.bc.displayName);
        localStorage.setItem("name", result.user.bc.displayName);
        window.location.assign("/rooms");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png"
          alt=""
        />
        <div className="login_text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
