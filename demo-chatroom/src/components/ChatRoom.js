import { useContext } from "react";
import ChatRoomContext from "../context/ChatRoomContext";
import { convertMessageToString } from "../utils/utils";


export default function ChatRoom() {

    const {messages} = useContext(ChatRoomContext);

    const messageHTML = messages.map((message, index) => <li key={index}>{convertMessageToString(message)}</li>)

    return (
        <div style={{ backgroundColor:'white', minHeight:'450px' }}>
            <h1>ChatRoom space</h1>

            <ul>
                {messageHTML}
            </ul>
        </div>
    )
}