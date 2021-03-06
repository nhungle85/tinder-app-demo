import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMzE3ODExMjc5NjY5MTAw/gettyimages-1052566600.jpg",
      message: "What's up",
    },
    {
      name: "Ellen",
      image:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMzE3ODExMjc5NjY5MTAw/gettyimages-1052566600.jpg",
      message: "How's it going",
    },
    {
      message: "Hows it going",
    },
  ]);
  const handleSend = (e) => {
    //prevent reload page
    e.preventDefault();

    if (input === "") return;
    //update messages
    setMessages([...messages, { message: input }]);

    //reset input field
    setInput("");
  };

  return (
    <div className="chatscreen">
      {messages.map((msg) =>
        msg.name ? (
          <div className="chatscreen__message">
            <Avatar
              className="chatscreen__image"
              alt={msg.name}
              src={msg.image}
            />
            <p className="chatscreen__text">{msg.message}</p>
          </div>
        ) : (
          <div className="chatscreen__message">
            <p className="chatscreen__textUser">{msg.message}</p>
          </div>
        )
      )}
      <form className="chatscreen__inputForm">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatscreen__inputField"
          placeholder="Type a message here..."
        ></input>
        <button
          onClick={handleSend}
          type="submit"
          className="chatscreen__sendBtn"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
