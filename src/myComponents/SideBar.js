import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../FireBase";
import "./SideBar.css";
import SideBarChat from "./SideBarChat";

function SideBar() {
  const [rooms, setRooms] = useState([]);
  

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(rooms);
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <input
            type="text"
            name=""
            placeholder="Search or start a new chat"
            id=""
          />
        </div>
      </div>
      <div className="sidebar_chats">
        <SideBarChat addNewChat />
        {rooms.map((room) => (
          <SideBarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
