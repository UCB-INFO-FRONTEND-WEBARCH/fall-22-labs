import React, { createContext, useState } from "react";
import {v4} from "uuid";


const ChatRoomContext = createContext();

export function ChatRoomProvider ({ children }) {
  
  // set to all of the messages in the chatroom
  const [messages, setMessages] = useState([]);

  // provides and changes the current id of the user in the chatroom
  const [id, setID] = useState({name: v4()});

  // provides and sets current members
  const [members, setMembers] = useState([id]);

  // adds a new message to the chatroom
  const sendRequest = (changeId, message) => {
    const timestamp = new Date().toDateString();
    const messageObject = {
                            timestamp: timestamp,
                            changeId: id,
                            message: message};
    setMessages([...messages, messageObject]);
  }

  const switchID = (newId) => {
    const newIdObj = {name: newId};
    const newMessages = messages.map((messageObj) => {
      if (messageObj.changeId === id) {
        return  {
          timestamp: messageObj.timestamp,
          changeId: newIdObj,
          message: messageObj.message
        }
      }
      return  {messageObj};
    });

    const newMembers = members.map((memberObj) => {
      return (memberObj === id) ? newIdObj : memberObj;
    });

    setMessages(newMessages);
    setMembers(newMembers);
    setID(newIdObj);
  }
  

  const makeCurrentUserOffline = () => {

  }

  return (
    <ChatRoomContext.Provider value={{messages, sendRequest, members, id, switchID, makeCurrentUserOffline }}>
      {children}
    </ChatRoomContext.Provider>
  );
};

export default ChatRoomContext;