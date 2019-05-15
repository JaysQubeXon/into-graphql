import { Event, ID } from "../services/events";
import { EventsService } from "../services";
import { Participant } from "../services/participants";

export default {
  Query: {
    async getEventByID(root: any, { id }: Event<ID>): Promise<Event<Participant>> {
      const eventsService = new EventsService();
      const event = await eventsService.getByID(id);
      return event;
    }
  },
  Mutation: {
    async addEvent(_: any, args: Event<ID>): Promise<Event<Participant>> {
      const eventsService = new EventsService();
      const event = await eventsService.add(args);
      console.log("Added event:", event);
      return event;
    }
  }
};