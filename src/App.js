import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./myComponents/Chat";
import First from "./myComponents/first_page";
import Login from "./myComponents/Login";
import Search from "./myComponents/Search";
import SideBar from "./myComponents/SideBar";
import StudentInfo from "./myComponents/StudentInfo";

import Profile from "./myComponents/Profile_for_viewer";
import Profilealumni from "./myComponents/Profile_for_alumni";
import AfterSearch from "./myComponents/AfterSearch";

function App() {
  const [user, setUser] = useState(true);
  return (
    <AfterSearch/>
  );
}

export default App;
