import React from "react";
import Chat from "../Chat.js/Chat";


function Chats() {
    return <div className="chats">
        <Chat 
            name = "Mark"
            message = "you whats up"
            timestamp = "40 seconds ago"
            profilepic="src\assets"
            />
        <Chat 
            name = "Mark"
            message = "you whats up"
            timestamp = "40 seconds ago"
            profilepic="src\assets"
            /><Chat 
            name = "Mark"
            message = "you whats up"
            timestamp = "40 seconds ago"
            profilepic="src\assets"
            /><Chat 
            name = "Mark"
            message = "you whats up"
            timestamp = "40 seconds ago"
            profilepic="src\assets"
            />
        </div>
        
}
export default Chats;