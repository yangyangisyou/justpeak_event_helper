import {useState} from 'react';
export interface IMember {
  index: number;
  name: string;
  paid: boolean;
  isAdmin: boolean;
}
function useMember(initialVal: Array<IMember>) {
  const [members, setMember] = useState(initialVal);
  function setPaid(index: number): void {
    let temp = [...members];

    temp[index].paid = !temp[index].paid;
    console.log(temp[index].paid);
    setMember(temp);
    // console.log(temp);
  }
  return {members, setPaid};
}
export default useMember;
