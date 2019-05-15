import { Participant } from "./participants";

export default class EventsService {
  public getByID(id: number): Event<Participant> {

  }

  public add({
    start,
    end,
    title,
    description = "",
    participants = []
  }: Event<ID>): Event<Participant> {

  }
}

export type ID = number;

export interface Event<P> {
  id?: number;
  start?: number;
  end?: number;
  title?: string;
  description?: string;
  participants?: P[];
  errors?: Error[];
}

export interface Error {
  error: string;
  message: string;
}

