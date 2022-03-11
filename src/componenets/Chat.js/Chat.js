import React from "react";
import Avatar from "@material-ui/core/Avatar"
import './Chat.scss'
import { Route, Switch, Link } from "react-router-dom";

function Chat(props) {
    return (
    <Link to={`/chat/${props.name}`}>
    <div className="chat">
            <Avatar className="chat__image" alt="name" src={props.profilepic}/>
            <div className="chat__details">
                <h2>{props.name}</h2>
                <p>{props.message}</p>
            </div>
            <p>{props.timestamp}</p>
                        </div>
    </Link>
    );
}

export default Chat;