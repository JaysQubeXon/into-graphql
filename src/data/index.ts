import { Event, ID } from "../services/events";
import { Participant } from "../services/participants";

export default {
  events: [
    {
      id: 1,
      start: Date.now(),
      end: Date.now() + 24 * 60 * 60 * 1000,
      title: "Stop Thanos",
      description:
        "Battle to prevent Thanos from reducing the universe to mere atoms.",
      participants: [17, 25, 3]
    }
  ] as Event<any>[],
  participants: [
    {
      id: 3,
      name: "Thanos",
      events: [1]
    },
    {
      id: 17,
      name: "Captain America",
      events: [1]
    },
    {
      id: 25,
      name: "Iron Man",
      events: [1]
    },
    {
      id: 8,
      name: "Vision",
      events: []
    },
  ] as Participant[]
};
