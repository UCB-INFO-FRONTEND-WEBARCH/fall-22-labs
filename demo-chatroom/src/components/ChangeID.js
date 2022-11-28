import { useState, useContext } from "react";
import ChatRoomContext from "../context/ChatRoomContext";

export default function ChangeID() {
    const {switchID, id} = useContext(ChatRoomContext);
    const [changeIdText, setChangeIdText] = useState(id.name);

    const changeSubmitForm = (event) => {
        event.preventDefault();
        switchID(changeIdText);
    }

    return (
        <div style={{ backgroundColor:'orange', marginTop:'10px' }}>
            <h1>Change ID space</h1>

            <form onSubmit={changeSubmitForm}>
                <input type="text" value={changeIdText} onChange={(event) => {setChangeIdText(event.target.value)}} />
                <input type="submit" />
            </form>
        </div>
    )
}