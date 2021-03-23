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
  const {status, userName, setUserName, setNewStatus} = useContext(
    StatusContext
  );
  const {hostInfo, setHostInfo} = useContext(HostContext);
  // console.log(status);
  const [passcode, setPassCode] = useState('');
  const [hostName, setHostName] = useState('');
  const [adminWarning, setAdminWarning] = useState(false);
  return (
    <div className='Landing'>
      {adminWarning ? (
        <span
          className='Landing__Warning'
          onClick={() => {
            setAdminWarning(false);
          }}
        >
          請確認您是否是管理員 <br />
          如果不是的話請續點左下角回至host登入頁面
          <br />
          <br />
          點擊我消失
        </span>
      ) : (
        ''
      )}
      <button
        className='Landing__Admin'
        onClick={() => {
          if (status == login_status.default) {
            setAdminWarning(true);
            setNewStatus(login_status.admin);
          } else {
            setNewStatus(login_status.default);
          }
        }}
      >
        Admin
      </button>
      <div className='Landing__form'>
        <h1>
          {status == login_status.admin
            ? '口說團 管理員助手 v1'
            : '口說團 活動助手 v1'}
        </h1>
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
          <label>
            {status == login_status.admin ? 'Password' : 'PassCode'}
          </label>
          <input
            placeholder='Enter Code Here'
            value={passcode}
            onChange={(event) => {
              setPassCode(event.target.value);
            }}
          ></input>
        </div>

        {status == login_status.default ? (
          <Link to='/host'>
            <button
              onClick={() => {
                if (setNewStatus && setHostInfo) {
                  setNewStatus(login_status.host);
                  setUserName(hostName);
                  setHostInfo({HostName: hostName, Code: passcode});
                }
              }}
            >
              Submit
            </button>
          </Link>
        ) : (
          <Link to='/admin'>
            <button
              onClick={async () => {
                const result = await request.adminLogin({
                  AdminName: hostName,
                  Password: passcode,
                });
                if (result?.status !== 200) {
                  setNewStatus(login_status.default);
                } else {
                  setUserName(hostName);
                }
              }}
            >
              Submit
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Landing;
