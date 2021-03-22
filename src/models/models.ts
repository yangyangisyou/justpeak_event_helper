export interface IEvent {
  eventId: number;
  eventName: string;
  hostName: string;
  passCode: string;
  eventDate: string;
  participantNumber: number;
  participants: Array<IParticipant>;
}
export interface IParticipant {
  participantId: number;
  paid: boolean;
  eventName: string;
  isAdmin: boolean;
  participantName: string;
  eventId: number;
}

export interface IPassCode {
  Code: string;
  HostName: string;
}

export enum login_status {
  admin = 'admin',
  host = 'host',
  default ='',
}
