import {Component, useState, useContext} from 'react';
import './App.css';
import Landing from './components/Landing';
import HostView from './components/HostView';
import AdminView from './components/AdminView';
import {IEvent, login_status} from './models/models';
import {StatusContext} from './controller/context';

// import dotenv from 'dotenv';
// dotenv.config();

function App() {
  console.log(process.env);
  const {status, setNewStatus} = useContext(StatusContext);
  const eventIni: IEvent = {
    eventId: 0,
    eventName: '',
    hostName: '',
    passCode: '',
    eventDate: '',
    participantNumber: 0,
    participants: [],
  };
  const [eventData, setEventData] = useState<IEvent>(eventIni);
  const [logged, setLogged] = useState<login_status>(login_status.default);
  function RenderLogin(logged: login_status) {
    switch (status) {
      case 'host':
        return <HostView eventData={eventData} setLogged={setLogged} />;
      case 'admin':
        return <AdminView adminName={'Darren'} />;
      default:
        return (
          <Landing
            setEventData={setEventData}
            setLogged={setLogged}
            logged={logged}
          />
        );
    }
  }
  return <div className='App'>{RenderLogin(logged)}</div>;
}

export default App;
