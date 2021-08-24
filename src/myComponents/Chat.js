import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  EmojiEmotionsOutlined,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../FireBase";
import "./Chat.css";
import firebase from "firebase";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .add({
        message: input,
        name: localStorage.getItem("name"),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    setInput("");
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat_header">
        <IconButton>
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        </IconButton>
        <div className="chatheader_info">
          <h3>{roomName}</h3>
          <p>
            {`Last seen at  ${new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}`}
          </p>
        </div>
        <div className="chatheader_right">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        {messages.map((message) => (
          <p
            className={`chat_message ${
              message.name === localStorage.getItem("name") && "chat_reciever"
            }`}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timeStamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <IconButton>
          <EmojiEmotionsOutlined />
        </IconButton>
        <form action="">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name=""
            placeholder="Type a messaage"
            id=""
          />
          <button type="submit" onClick={sendMessage}>
            {" "}
            Send a message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
