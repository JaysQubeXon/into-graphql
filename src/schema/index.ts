import { gql } from "apollo-server-express";

export default gql`
  scalar Time

  type Query {
    getEventByID(id: ID!): Event
  }
  
  type Mutation {
    addEvent(
      start: Time!
      end: Time
      title: String!
      description: String
      participants: [ID]
    ): Event
  }

  type Event {
    id: ID
    start: Time
    end: Time
    title: String
    description: String
    participants: [Participant]
    errors: [Error]
  }

  type Participant {
    id: ID
    name: String
    events: [Event]
    errors: [Error]
  }

  type Error {
    error: String
    message: String
  }
`;
