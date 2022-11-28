import { useState, useContext } from "react";
import ChatRoomContext from "../context/ChatRoomContext";

export default function SendMessageForm() {
    const [sendMessageText, setSendMessageText] = useState("")
    const {sendRequest, id} = useContext(ChatRoomContext);

    const changeSubmitForm = (event) => {
        event.preventDefault();
        sendRequest(id, sendMessageText);
        setSendMessageText("");
    }

    return (
        <div style={{ backgroundColor:'pink', marginTop:'10px' }}>
            <h1>SendMessageForm space</h1>

            <form onSubmit={changeSubmitForm}>
                <input type="text" value={sendMessageText} onChange={(event) => {setSendMessageText(event.target.value)}} />
                <input type="submit" />
            </form>
        </div>
    )
}