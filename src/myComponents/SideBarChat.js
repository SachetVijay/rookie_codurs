import { Avatar, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../FireBase";
import "./SideBarChat.css";

export default function SideBarChat({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const createChat = () => {
    const roomName = prompt("Please enter a name for the chat");
    if (roomName) {
      console.log(roomName);
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return !addNewChat ? (
    <>
      <Link to={`/rooms/${id}`}>
        <div className="sidebarchat">
          <IconButton>
            <Avatar
              src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
          </IconButton>
          <div className="sidebarchat_info">
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
          </div>
        </div>
      </Link>
    </>
  ) : (
    <div onClick={createChat} className="sidebarchat">
      <h2>Add New Chat</h2>
    </div>
  );
}
