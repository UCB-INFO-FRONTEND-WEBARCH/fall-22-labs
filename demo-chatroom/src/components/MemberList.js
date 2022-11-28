import { useContext } from "react";
import ChatRoomContext from "../context/ChatRoomContext";

export default function MemberList() {

    const {members} = useContext(ChatRoomContext);

    const membersHTML = members.map((member, index) => <li key={index}>{member.name}</li>)

    return (
        <div style={{ backgroundColor:'red', minHeight:'450px' }}>
            <h1>MemberList space</h1>

            <ul>
                {membersHTML}
            </ul>
        </div>
    )
}