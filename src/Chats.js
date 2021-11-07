import React from "react";
import "./Chats.css";
import Chat from "./Chat";

//rfce for shortcut
function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sara"
        message="hey! How are you"
        timestamp="35 minutes ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sarah_Paulson_%2842754338105%29_%28cropped%29.jpg/902px-Sarah_Paulson_%2842754338105%29_%28cropped%29.jpg"
      />
      <Chat
        name="Ellen"
        message="hey! What's up"
        timestamp="55 minutes ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMzE3ODExMjc5NjY5MTAw/gettyimages-1052566600.jpg"
      />
      <Chat
        name="Sara"
        message="Ola"
        timestamp="3 days ago"
        profilePic="https://www.biography.com/.image/t_share/MTc5OTUwNjI0MDU2NTUwNTIy/gettyimages-1074346390-square.jpg"
      />
      <Chat
        name="Natasha"
        message="hey! How are you"
        timestamp="1 week ago"
        profilePic="https://en.wikipedia.org/wiki/Pink_(singer)#/media/File:Pink_2019-07-27_Munich_(cropped).jpg"
      />
    </div>
  );
}

export default Chats;
