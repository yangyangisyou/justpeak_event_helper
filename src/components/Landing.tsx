import {Dispatch, SetStateAction, useState, useContext} from 'react';
import {StatusContext} from '../controller/contexts/statusContext';
import {HostContext} from '../controller/contexts/hostContext';

import {request} from '../controller/request';
import {IEvent, login_status} from '../models/models';
import {Link} from 'react-router-dom';
interface ILandingProp {
  setEventData: Dispatch<SetStateAction<IEvent>>;
  setLogged: Dispatch<SetStateAction<login_status>>;
}
function Landing({setEventData, setLogged}: ILandingProp) {
  const {status, setNewStatus} = useContext(StatusContext);
  const {hostInfo, setHostInfo} = useContext(HostContext);
  // console.log(status);
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

        <Link to='/host'>
          <button
            onClick={() => {
              if (setNewStatus && setHostInfo) {
                setNewStatus(login_status.host);
                setHostInfo({HostName: hostName, Code: passcode});
              }
            }}
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
