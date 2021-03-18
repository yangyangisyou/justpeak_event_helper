import {Dispatch, SetStateAction, useState, useRef, useEffect} from 'react';
import useParticipants from './hooks/useParticipants';
import * as uuid from 'uuid';
import {IEvent, IParticipant} from '../models/models';
import {request} from '../controller/request';

interface participant extends IParticipant {
  key: string;
  setPaid: (index: number) => void;
  index: number;
}

interface IListProps {
  eventData: IEvent;
  setLogged: Dispatch<SetStateAction<boolean>>;
}

function Participant({
  key,
  participantId,
  participantName,
  eventId,
  isAdmin,
  index,
  paid,
  eventName,
  setPaid,
}: participant) {
  return (
    <div className={`List__member ${index % 2 === 0 ? 'darkgrey' : 'grey'}`}>
      <h2>{participantName}</h2>
      {paid ? (
        <div>
          <input
            type='checkbox'
            checked
            onChange={() => {
              setPaid(index);
            }}
          ></input>
          <label>Paid</label>
        </div>
      ) : (
        <div>
          <input
            type='checkbox'
            onChange={() => {
              setPaid(index);
            }}
          ></input>
          <label>Unpaid</label>
        </div>
      )}
    </div>
  );
}

function List({eventData, setLogged}: IListProps) {
  const {
    eventId,
    eventName,
    hostName,
    passCode,
    eventDate,
    participantNumber,
  } = eventData;
  const {participants, setPaid} = useParticipants(
    eventData.participants as Array<IParticipant>
  );
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const confirmRef = useRef(null);
  //Reference if Button
  function Confirm(ref: any) {
    useEffect(() => {
      document.addEventListener('click', (evt: any) => {
        if (ref.current && !ref.current.contains(evt.target)) {
          setConfirmSubmit(false);
        }
      });
    }, [ref]);
  }
  Confirm(confirmRef);
  //calculate expected_money find how many Admins and Show Collected money
  const expected_money = participants.length * 200;
  const admins = participants.filter((participant: IParticipant, i: number) => {
    return participant.isAdmin === true;
  });
  let collected = participants.filter(
    (participant: IParticipant, i: number) => {
      return participant.paid === true;
    }
  );
  //Mapping Participants
  const ParticipantsList = participants.map((data, index) => {
    return (
      <Participant
        eventName={data.eventName}
        participantId={data.participantId}
        eventId={data.eventId}
        setPaid={setPaid}
        participantName={data.participantName}
        index={index}
        paid={data.paid}
        key={uuid.v4()}
        isAdmin={data.isAdmin}
      />
    );
  });
  return (
    <div className='List'>
      {success ? (
        <div
          className='List__success'
          onClick={() => {
            setLogged(false);
            setSuccess(false);
          }}
        >
          <div>Successfully Submitted!</div>
        </div>
      ) : (
        ''
      )}
      <h1>Welcome {hostName} !</h1>

      <div className='List__container'>
        <div className='List__info'>
          <p>Participants : {participants.length}</p>
          <p>Admins : {admins.length}</p>
        </div>
        <div className='List__List'>{ParticipantsList}</div>

        <div className='List__money'>
          <div className='left'>
            <p>Shall Recieve:</p>
            <p>${expected_money}</p>
          </div>
          <div className='right'>
            <p>Collected :</p>
            <p>${collected.length * 200}</p>
          </div>
        </div>
      </div>

      <div className='List__buttons' ref={confirmRef}>
        {/* <button className='text'>Generate text</button> */}
        <button
          className={confirmSubmit ? 'confirm' : 'submit'}
          onClick={(evt) => {
            // console.log(evt.target);
            setConfirmSubmit(true);

            if (confirmSubmit == true) {
              const result = request.upDatePaid(eventData, participants);
              if (result) {
                setSuccess(true);
              }
            }
          }}
        >
          {confirmSubmit ? 'Confirm' : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default List;
