import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./myComponents/Chat";
import First from "./myComponents/first_page";
import Login from "./myComponents/Login";
import Search from "./myComponents/Search";
import SideBar from "./myComponents/SideBar";

import Profile from "./myComponents/profile";

function App() {
  const [user, setUser] = useState(true);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <First />
          </Route>
          <Route exact path="/profile">
              <Profile/>
          </Route>
          <Route exact path="/register">
            {" "}
          </Route>
          <Route exact path="/login">
            {" "}
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
      {/* <div className="app_body"> */}
      {/* <Router>
        <Switch>
          <Route path="/rooms/:roomId">
            <SideBar />
            <Chat />
          </Route>
          <Route path="/rooms">
            <SideBar />
          </Route>
          <Route path="/">
            <First />
          </Route>
        </Switch>
      </Router> */}
      {/* </div> */}
    </div>
  );
}

export default App;
