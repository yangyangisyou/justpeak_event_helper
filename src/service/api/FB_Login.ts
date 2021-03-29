import axios, {AxiosResponse} from 'axios';

interface IFBInfo {
  id: string;
  name: string;
  email: string;
}
interface IFBMember extends IFBInfo {
  link: string;
  name_eng: string;
  name_zht: string;
}
const host =
  process.env.REACT_APP_MODE == 'DEV'
    ? process.env.REACT_APP_DEVHOST
    : process.env.REACT_APP_PRODHOST;
export const FB_Login = {
  //check if member is registered
  CheckMember: async (info: IFBInfo) => {
    try {
      const result = await axios.get(
        `${host}/login?id=${info.id}&name=${info.name}&email=${info.email}`
      );
      return result;
    } catch (error) {
      return error;
    }
  },
  //Create member to Database by using FB api
  CreateMember: async (Member: IFBMember) => {
    try {
      const result = axios.post(`${host}/member/createMember`, Member);
      return result;
    } catch (error) {
      return error;
    }
  },
};
