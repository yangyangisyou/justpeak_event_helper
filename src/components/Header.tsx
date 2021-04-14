import React from 'react';
import SignUpLogo from './Assets/SignUpLogo.png';
export default function Header(props: {
  children: React.ReactNode;
  title: string;
}) {
  if (props.title === 'SignUp') {
    //do something, change image here
    //no nav bar and change image
  }
  return (
    <div>
      {props.title === 'SignUp' ? (
        <div className='Header'>
          <div className='Header__Logo'>
            <img src={SignUpLogo} width='100%'></img>
          </div>
        </div>
      ) : (
        ''
      )}
      {props.children}
    </div>
  );
}
