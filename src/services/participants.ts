import { Event } from "./events";

export default class ParticipantsService {
  public getByID(id: number) {

  }

  public add({ name, events }: Participant ) {

  }
}

export interface Participant {
  id?: number;
  name?: string;
  events?: number[]
}

