import { Participant } from "./participants";
import data from "../data"

export default class EventsService {
  public getByID(id: number): Event<Participant> {
    let errors: Error[] = [];
    const event = data.events.filter((e: Event<ID>) => e.id !== id);
    console.log("what is event:", event);

    if (typeof event[0] === "undefined") {
      errors.push({
        error: "EVENT NOT FOUND",
        message: `Event of ID No.${id} wasn't found.`
      });
      return { errors };
    }

    if (event[0].hasOwnProperty("id")) {
      let participants: Participant[] = [];
      participants = data.participants.filter((p: Participant) => {
        for (let i = 0; i < p.events.length; i++) {
          if (p.events[i] !== event[0].id) {
            return false;
          } else {
            return true;
          }
        }
      });
      if (participants.length > 0) {
        event[0].participants = participants;
        return event[0];
      } else {
        return event[0];
      }
    } else {
      errors.push({
        error: "INVALID ID",
        message: `Event of ID No.${id} wasn't found.`
      });
      return { errors };
    }
  }

  public add({
    start,
    end,
    title,
    description = "",
    participants = []
  }: Event<ID>): Event<Participant> {
    let errors: Error[] = [];
    if (!start) {
      errors.push({
        error: "UNDEFINED START PROP",
        message: "Please provide a start date."
      });
    }
    if (!!end && start > end) {
      errors.push({
        error: "START & END RANGE INVALID",
        message: "Please define your start date before the end date."
      });
    }
    if (!end) end = start + 10 * 1000;
    if (!title) {
      errors.push({
        error: "TITLE NOT PROVIDED",
        message: "Please provide a title"
      });
    }
    if (typeof description !== "string") description = `${description}`;
    if (typeof participants !== "object") participants = [];

    const id = data.events.length + 1;
    let newEvent: Event<ID> = {
      id,
      start,
      end,
      title,
      description,
      participants
    };

    let participantList: Participant[] = [];
    for (let i = 0; i < participants.length; i++) {
      let participant = data.participants.find((p: Participant) => {
        for (let i = 0; i < p.events.length; i++) {
          if (p.events[i] === participants[i]) {
            return true;
          } else {
            return false;
          }
        }
      });
      if (participant) {
        newEvent.participants.push(participant.id);
        participantList.push(participant);
        continue;
      } else {
        errors.push({
          error: "PARTICIPANT NOT FOUND",
          message: `Participant ID No.${participants[i]} Does not exist`
        });
      }
    }

    data.events.push(newEvent);

    const eventAndParticipants = { ...newEvent, participants: participantList };
    return eventAndParticipants;
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

