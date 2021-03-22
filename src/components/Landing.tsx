import {Dispatch, SetStateAction, useState, useContext} from 'react';
import {StatusContext} from '../controller/context';
import {request} from '../controller/request';
import {IEvent, login_status} from '../models/models';
interface ILandingProp {
  logged: login_status;
  setEventData: Dispatch<SetStateAction<IEvent>>;
  setLogged: Dispatch<SetStateAction<login_status>>;
}
function Landing({setEventData, setLogged, logged}: ILandingProp) {
  const {status, setNewStatus} = useContext(StatusContext);
  console.log(status);
  const [passcode, setPassCode] = useState('');
  const [hostName, setHostName] = useState('');
  return (
    <div className='Landing'>
      <div className='Landing__form'>
        <h1>口說團 活動助手 v1</h1>
        <div>
          <label>Name:</label>
          <input
            placeholder='Enter Name here'
            value={hostName}
            onChange={(event) => {
              setHostName(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Passcode:</label>
          <input
            placeholder='Enter Code Here'
            value={passcode}
            onChange={(event) => {
              setPassCode(event.target.value);
            }}
          ></input>
        </div>

        <button
          onClick={async (evt) => {
            const result = await request.getParticipants({
              Code: passcode,
              HostName: hostName,
            });
            //see if passcode is correct
            if (result.passCode == passcode && setNewStatus) {
              setEventData(result);
              setNewStatus(login_status.host);
            }
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Landing;
