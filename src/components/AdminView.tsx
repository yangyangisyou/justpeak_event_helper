import {useContext} from 'react';
import {StatusContext} from '../controller/contexts/statusContext';

interface IAdminEvents {
  week: number;
  topic: string;
  people: number;
}
function Event({week, topic, people}: IAdminEvents) {
  return (
    <tr className={`Admin__event ${week % 2 === 0 ? 'darkgrey' : 'grey'}`}>
      <td className='week'>{week}</td>
      <td className='topic'>{'topic'}</td>
      <td className='people'>{people}</td>
    </tr>
  );
}

function AdminView() {
  const {status, userName, setNewStatus, setUserName} = useContext(
    StatusContext
  );
  return (
    <div className='Admin'>
      <h1>Welcome {userName} !</h1>

      <div className='Admin__container'>
        <div className='Admin__info'>
          <p>Total Events : </p>
          <p>Total Participants :</p>
        </div>
        <table className='Admin__EventList'>
          <tr className='Admin__event'>
            <th className='week'>week</th>
            <th className='topic'>Topic</th>
            <th className='people'>People </th>
          </tr>
          <Event week={1} topic={'gay marriage'} people={5} />
        </table>
      </div>

      <div className='Admin__buttons'>
        {/* <button className='text'>Generate text</button> */}
        <button
        // ref={confirmRef}
        >
          Return
        </button>
      </div>
    </div>
  );
}

export default AdminView;
