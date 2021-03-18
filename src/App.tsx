import {useState} from 'react';
import './App.css';
import Landing from './components/Landing';
import List from './components/List';
import {IEvent} from './models/models';
function App() {
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
  const [logged, setLogged] = useState(false);
  return (
    <div className='App'>
      {logged === true ? (
        <List eventData={eventData} setLogged={setLogged} />
      ) : (
        <Landing
          setEventData={setEventData}
          setLogged={setLogged}
          logged={logged}
        />
      )}
    </div>
  );
}

export default App;
