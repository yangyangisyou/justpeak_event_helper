import {Dispatch, SetStateAction, useState, useContext, useEffect} from 'react';
import {StatusContext} from '../controller/contexts/statusContext';
import {AuthContext} from '../controller/contexts/authContext';
import {HostContext} from '../controller/contexts/hostContext';
import FacebookLogin from 'react-facebook-login';
import {request} from '../controller/request';
import {FB_Login} from '../service/api/FB_Login';
import {IEvent, login_status} from '../models/models';
import {Link} from 'react-router-dom';

function Landing() {
  const {status, userName, setUserName, setNewStatus} = useContext(
    StatusContext
  );
  const {setAuth} = useContext(AuthContext);
  const {hostInfo, setHostInfo} = useContext(HostContext);
  const {CreateMember, CheckMember} = FB_Login;
  //TODO add useEffect to check Login at first
  // console.log(status);
  // const [passcode, setPassCode] = useState('');
  // const [hostName, setHostName] = useState('');
  // const [adminWarning, setAdminWarning] = useState(false);
  // parse XFBML to the page

  return (
    <div
      className='Landing'
      onClick={async () => {
        const result = await CheckMember({id: '334578'});
        if (result.status !== 200) {
          console.log('register function');
        }
      }}
    >
      <div className='Landing__form'>
        <h1>
          {status == login_status.admin
            ? '口說團 管理員助手 v1'
            : '口說團 活動助手 v1'}
        </h1>

        <FacebookLogin
          appId='2218447721622502'
          icon='fa-facebook'
          autoLoad={true}
          callback={() => {
            // FB.api(
            //   '/me',
            //   'get',
            //   {fields: 'id'},
            //   //TODO check if database has this info
            //   function (response: any) {
            //     const result = CheckMember(response.id);
            //     console.log(result);
            //     // Insert your code here
            //   }
            // );
            setAuth(true);
          }}
        />
      </div>
    </div>
  );
}

export default Landing;
