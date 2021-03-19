import axios, {AxiosResponse} from 'axios';
import {IEvent, IParticipant, IPassCode} from '../models/models';

const host = process.env.REACT_APP_APIHOST;
type EventInfo = IEvent;
export const request = {
  getParticipants: async function (PassCode: IPassCode): Promise<EventInfo> {
    try {
      const result: AxiosResponse<any> = await axios.post(
        `${host}/login`,
        PassCode
      );
      return result.data;
    } catch (error) {
      console.log(error.response);
      return error.message;
    }
  },
  upDatePaid: async function (
    eventData: IEvent,
    participants: Array<IParticipant>
  ) {
    const event = eventData;
    event.participants = participants;
    try {
      const result: AxiosResponse<any> = await axios.post(
        `${host}/updateParticipants`,
        event
      );
      console.log(result);
      return event;
    } catch (error) {
      console.log(error);
    }
  },
};
