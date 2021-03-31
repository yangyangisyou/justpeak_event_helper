import {Dispatch, SetStateAction, useState, useContext, useEffect} from 'react';
import {StatusContext} from '../controller/contexts/statusContext';
import {AuthContext} from '../controller/contexts/authContext';
import {HostContext} from '../controller/contexts/hostContext';
import FacebookLogin from 'react-facebook-login';
import {request} from '../controller/request';
import {FB_Login} from '../service/api/FB_Login';
import {IEvent, login_status} from '../models/models';
import {Link} from 'react-router-dom';
import {useForm} from './hooks/useForm';

function RegisterForm() {
  //type memberInfo
  const [memberInfo, SetMemberInfo] = useForm({});
  useEffect(() => {
    FB.api(
      '/me',
      'get',
      {fields: 'id,name,email,link'},
      //TODO check if database has this info
      async function (response: any) {
        const {id, name, email, link} = response;
        SetMemberInfo('Email', email);
        SetMemberInfo('MemberId', id);
        SetMemberInfo('FbLink', link);
        SetMemberInfo('NameFb', name);

        //if result is goood set auth
        // Insert your code here
      }
    );
  }, []);

  return (
    <form className='Register'>
      <input id='Email' disabled defaultValue={memberInfo.Email}></input>{' '}
      <input
        id='name_Eng'
        onChange={(evt) => {
          SetMemberInfo(evt.target.id, evt.target.value);
          console.log(memberInfo);
        }}
      ></input>{' '}
      <input
        id='name_Zht'
        onChange={(evt) => {
          SetMemberInfo(evt.target.id, evt.target.value);
          console.log(memberInfo);
        }}
      ></input>{' '}
      <button
        onSubmit={() => {
          //send data to backend and if success set auth
        }}
      >
        Register
      </button>
    </form>
  );
}
function Landing() {
  const {status, userName, setUserName, setNewStatus} = useContext(
    StatusContext
  );
  const {setAuth} = useContext(AuthContext);
  const {hostInfo, setHostInfo} = useContext(HostContext);
  const {CreateMember, CheckMember} = FB_Login;
  const [showRegister, setShowRegister] = useState(false);

  //TODO add useEffect to check Login at first
  // console.log(status);
  // const [passcode, setPassCode] = useState('');
  // const [hostName, setHostName] = useState('');
  // const [adminWarning, setAdminWarning] = useState(false);
  // parse XFBML to the page

  return (
    <div
      className='Landing'
      // onClick={async () => {
      //   const result = await CheckMember({id: '334578'});
      //   if (result.status !== 200) {
      //     console.log('register function');
      //   }
      // }}
    >
      {showRegister ? <RegisterForm /> : ''}
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
            FB.api(
              '/me',
              'get',
              {fields: 'id'},
              //TODO check if database has this info
              async function (response: any) {
                const result = await CheckMember({id: response.id});
                //if result is goood set auth
                if (result.status === 200) {
                  console.log(result);
                  setAuth(true);
                } else {
                  setShowRegister(true);
                }
                // Insert your code here
              }
            );
          }}
        />
      </div>
    </div>
  );
}

export default Landing;
