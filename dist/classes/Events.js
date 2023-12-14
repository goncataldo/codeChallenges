"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
class Events {
    constructor() {
        this.eventList = [];
    }
    addEvent(eventType, payload) {
        const event = {
            eventType: eventType.toUpperCase(),
            payload,
        };
        this.eventList.push(event);
    }
    getEvents() {
        return this.eventList;
    }
}
exports.Events = Events;
//# sourceMappingURL=Events.js.map