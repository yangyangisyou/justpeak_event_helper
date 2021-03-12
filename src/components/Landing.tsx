import {useState} from 'react';
function Landing() {
  const [passcode, setPassCode] = useState('');
  return (
    <div className='Landing'>
      <div className='Landing__form'>
        <h1>System</h1>
        <div>
          <label>Enter Passcode</label>
          <input
            placeholder='Enter Code Here'
            value={passcode}
            onChange={(event) => {
              setPassCode(event.target.value);
            }}
          ></input>
        </div>

        <button>Submit</button>
      </div>
    </div>
  );
}

export default Landing;
