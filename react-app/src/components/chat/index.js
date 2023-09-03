import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from 'socket.io-client';
import './chat.css'
import logo from './favicon.ico'
let socket;

const Chat = () => {
    const [chatInput, setChatInput] = useState("");
    const [messages, setMessages] = useState([]);
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        // open socket connection
        // create websocket
        socket = io();

        socket.on("chat", (chat) => {
            setMessages(messages => [...messages, chat])
        })
        // when component unmounts, disconnect
        return (() => {
            socket.disconnect()
        })
    }, [])

    const updateChatInput = (e) => {
        setChatInput(e.target.value)
    };

    const sendChat = (e) => {
        e.preventDefault()
        socket.emit("chat", { user: user.username, msg: chatInput });
        setChatInput("")
    }

    return (user && (
        <div id='chat-outter-div-chat'>

            <div id='chat-top-div-chat'>
                  <div id='itsy-logo-chat'>
                        <img src={logo} />
                  </div>
                  <div id='welcome-title-chat'>
                        <div id='welcome-top-line-chat'>Welcome to the Itsy Chatroom</div>
                        <div id='welcome-bottom-line-chat'>Available 24 hours everyday</div>
                  </div>
                  {/* <i id='x-chat' class="fa-solid fa-x fa-xl"></i> */}
            </div>

            <div id='chat-middle-div-chat'>

                  <div>
                  {messages.map((message, ind) => (
                        <div key={ind}>{`${message.user}: ${message.msg}`}</div>
                  ))}
                  </div>

            </div>

            <div id='chat-bottom-div-chat'>

                  <form onSubmit={sendChat}>
                  <input id='chat-input-chat'
                        value={chatInput}
                        placeholder="Write a message"
                        onChange={updateChatInput}
                  />
                  <button id='chat-butt-chat' type="submit">⇡</button>
                  </form>



            </div>
        </div>
    )
    )
};


export default Chat;
