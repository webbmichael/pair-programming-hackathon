import React from "react";
import Avatar from "@material-ui/core/Avatar"

function Chat(props) {
    return <div className="chat">
            <Avatar className="chat__image" alt="name" src={props.profilepic}/>
                        </div>;
}

export default Chat;