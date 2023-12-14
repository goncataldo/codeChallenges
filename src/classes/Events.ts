interface Event {
  eventType: string;
  payload: Record<string, any>;
}

export class Events {
  private eventList: Event[] = [];

  addEvent(eventType: string, payload: Record<string, any>): void {
    const event: Event = {
      eventType: eventType.toUpperCase(),
      payload,
    };

    this.eventList.push(event);
  }

  getEvents(): Event[] {
    return this.eventList;
  }
}
