import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from './components/Heading';
import ChatRoom from './components/ChatRoom';
import MemberList from './components/MemberList';
import SendMessageForm from './components/SendMessageForm';
import ChangeID from './components/ChangeID';
import { ChatRoomProvider } from './context/ChatRoomContext';

function App() {
  return (
    <ChatRoomProvider>
      <Container fluid>
        <Row>
          <Col sm={12}><Heading /></Col>
        </Row>
        <Row>
          <Col sm={8}><ChatRoom /></Col>
          <Col sm={4}><MemberList /></Col>
        </Row>
        <Row>
          <Col sm={8}><SendMessageForm /></Col>
          <Col sm={4}><ChangeID /></Col>
        </Row>
      </Container>
    </ChatRoomProvider>
  
  );
}

export default App;
