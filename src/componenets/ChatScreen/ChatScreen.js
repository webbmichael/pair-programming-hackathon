import React, { useState } from 'react'
import "./ChatScreen.scss";
import Avatar from "@material-ui/core/Avatar"

function ChatScreen(){
    const[messages, setMessages] =useState([
        {
            name:"Ellen",
            image:"",
            message:"hi",
        },
        {
            
            image:"",
            message:"hi",
        },
        {
            name:"Ellen",
            image:"",
            message:"hi",
        }
    ]);
    return (
        <div className="">
            <p className="chatScreen__timestamp"> YOU MATCHED</p>
            {messages.map((message) => 
            message.name ? (
            <div className='chatScreen__message'>
            <Avatar className="chatScreen__image" alt="name" src={message.image}/>

                <p className='chatScreen__text'>{message.message}</p>
            </div>
            ):(
                <div className='chatScreen__message'>

                <p className='chatScreen__textUser'>{message.message}</p>
            </div>

            )
            )}
        
               <form className='chatScreen_input'>
               <input className="chatScreen__inputField" type ="text"/>
               <button className='chatScreen__inputButton'>SEND</button>
               </form>
    
        </div>
    )
}
export default ChatScreen;
