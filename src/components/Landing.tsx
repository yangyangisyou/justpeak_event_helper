import {Dispatch, SetStateAction, useState} from 'react';
import {request} from '../controller/request';
import {IEvent} from '../models/models';
interface ILandingProp {
  logged: boolean;
  setEventData: Dispatch<SetStateAction<IEvent>>;
  setLogged: Dispatch<SetStateAction<boolean>>;
}
function Landing({setEventData, setLogged, logged}: ILandingProp) {
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
          type='submit'
          onClick={async () => {
            const result = await request.getParticipants({
              Code: passcode,
              HostName: hostName,
            });
            //see if passcode is correct
            if (result.passCode == passcode) {
              setEventData(result);
              setLogged(!logged);
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
