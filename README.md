# EVENT PLANNER SERVER APPLICATION

This project was deployed with Herocu - [Link](https://floating-spire-28797-0031414f3322.herokuapp.com/).

# API Endpoints

## Events

Retrieve the list of events.

- **URL:** [https://floating-spire-28797-0031414f3322.herokuapp.com/api/events](https://floating-spire-28797-0031414f3322.herokuapp.com/api/events)
- **Description:** Fetches all the events.

## Registration

Register for a specific event.

- **URL:** (https://floating-spire-28797-0031414f3322.herokuapp.com/api/events/:eventId)
- **Description:** Registers a participant for the specified event.

## Participants

Retrieve participants list of event.

- **URL:** (https://floating-spire-28797-0031414f3322.herokuapp.com/api/events/:eventId/participant)
- **URL Parameters:**
  - `eventId` (string) - The ID of the event.
- **Description:** Check participants in event.
