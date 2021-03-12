import {useState} from 'react';
import useMember, {IMember} from './hooks/useMember';
import * as uuid from 'uuid';

interface member extends IMember {
  key: string;
  setPaid: (index: number) => void;
}
const data = [
  {name: 'Darren', paid: false, isAdmin: false},
  {name: 'Johnson2', paid: true, isAdmin: true},
  {name: 'Darren1', paid: false, isAdmin: false},
  {name: 'Johnsosn', paid: true, isAdmin: false},
  {name: 'Darr1en', paid: false, isAdmin: false},
  {name: 'Johns2on', paid: true, isAdmin: false},
];
function Member({key, index, name, paid, setPaid}: member) {
  return (
    <div className={`List__member ${index % 2 == 0 ? 'darkgrey' : 'grey'}`}>
      <h2>{name}</h2>
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

function List() {
  //TODO backend
  const rawData = data.map((data, index) => {
    return {...data, index: index};
  });
  //TODO change DATA
  const {members, setPaid} = useMember(rawData);

  //calculate expected_money
  const expected_money = members.length * 200;
  //find how many Admins
  const admins = members.filter((member, i) => {
    return member.isAdmin == true;
  });
  //Show Collected money
  let collected = members.filter((member, i) => {
    return member.paid === true;
  });
  return (
    <div className='List'>
      <h1>Welcome! Host</h1>

      <div className='List__container'>
        <div className='List__info'>
          <p>Participants : {members.length}</p>
          <p>Admins : {admins.length}</p>
        </div>
        <div className='List__List'>
          {members.map((data, index) => {
            return (
              <Member
                setPaid={setPaid}
                name={data.name}
                index={index}
                paid={data.paid}
                key={uuid.v4()}
                isAdmin={data.isAdmin}
              />
            );
          })}
        </div>

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

      <div className='List__buttons'>
        <button className='text'>Generate text</button>
        <button className='submit'>Submit</button>
      </div>
    </div>
  );
}

export default List;
