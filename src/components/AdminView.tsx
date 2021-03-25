import {useContext, useEffect, useState} from 'react';
import {StatusContext} from '../controller/contexts/statusContext';
import {request} from '../controller/request';
import {IEvent} from '../models/models';
import {Link} from 'react-router-dom';

interface IAdminEvent extends IEvent {
  index: number;
}

function Event({
  week,
  eventId,
  index,
  eventName,
  hostName,
  passCode,
  participantNumber,
}: IAdminEvent) {
  console.log(eventId);

  return (
    <Link
      className={`Admin__event ${index % 2 === 0 ? 'darkgrey' : 'grey'}`}
      to={`/host/${hostName}/${passCode}`}
    >
      <tr>
        <td className='week'>{week}</td>
        <td className='topic'>{eventName}</td>
        <td className='people'>{participantNumber}</td>
      </tr>
    </Link>
  );
}

function AdminView() {
  const {status, userName, setNewStatus, setUserName} = useContext(
    StatusContext
  );
  const [eventList, setEventList] = useState<Array<IEvent> | []>([]);
  useEffect(() => {
    async function getEventList() {
      const result = await request.adminGetAllEvent();
      const eventList = result.data;
      if (result.status == 200) {
        setEventList(eventList);
      } else {
        console.log(result);
      }
    }

    getEventList();
  }, []);
  const eventListView = eventList
    .sort((a: IEvent, b: IEvent) => {
      return b.week - a.week;
    })
    .map((event: IEvent, index: number) => {
      return (
        <Event
          passCode={event.passCode}
          eventDate={event.eventDate}
          hostName={event.hostName}
          index={index}
          eventId={event.eventId}
          week={event.week}
          eventName={event.eventName}
          participantNumber={event.participantNumber}
        />
      );
    });
  return (
    <div className='Admin'>
      <h1>Welcome {userName} !</h1>

      <div className='Admin__container'>
        <div className='Admin__info'>
          <p>Total Events : {eventList.length} </p>
          <p>Total Participants :</p>
        </div>
        <table className='Admin__EventList'>
          <tr className='Admin__event'>
            <th className='week'>week</th>
            <th className='topic'>Topic</th>
            <th className='people'>People </th>
          </tr>
          {eventListView}
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
