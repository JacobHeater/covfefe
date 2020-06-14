
export class EventBus {
  private readonly eventsCache: { [key: string]: Array<(...args: any[]) => any>} = {};

  public subscribe(eventName: string, handler: (...args: any[]) => any) {
    if (eventName && handler) {
      if (!this.eventsCache[eventName]) {
        this.eventsCache[eventName] = [];
      }

      this.eventsCache[eventName].push(handler);
    }
  }

  public unsubscribe(eventName: string, handler?: (...args: any[]) => any) {
    if (eventName && this.eventsCache[eventName]) {
      if (handler) {
        const idx = this.eventsCache[eventName].indexOf(handler);

        this.eventsCache[eventName].splice(idx, 1);
      } else {
        delete this.eventsCache[eventName];
      }
    }
  }

  public raiseEvent(eventName: string, ...args: any[]) {
    if (eventName && this.eventsCache[eventName]) {
      for (let handler of this.eventsCache[eventName]) {
        handler(...args);
      }
    }
  }
}
