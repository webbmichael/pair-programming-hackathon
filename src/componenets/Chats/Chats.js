import React from "react";
import Chat from "../Chat.js/Chat";


function Chats() {
    return <div className="chats">
        <Chat 
            name = "Mark"
            message = "you whats up"
            timestamp = "40 seconds ago"
            profilepic=""
            />
        </div>
}
export default Chats;