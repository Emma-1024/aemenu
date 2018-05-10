class EventManager {
  constructor() {
    this.eventList = {}
  }

  subscribe(eventName, handler) {
    if (this.eventList[eventName] == null) {
      this.eventList[eventName] = []
    }
    if (typeof handler) this.eventList[eventName].push(handler)
    else console.error('Event handler must be a function!')
  }

  removeSubscriber(eventName, handler) {
    if (this.eventList[eventName] == null) return
    var arr = this.eventList[eventName]
    var index = arr.indexOf(handler)
    if (index < 0) return
    arr.splice(index, 1)
  }

  removeAll(eventName) {
    this.eventList[eventName] = undefined
  }

  publish(eventName, eventParams) {
    return this.eventList[eventName] ?
      this.eventList[eventName].forEach(handler => handler(eventParams)) : null
  }
}

var eventManager = new EventManager()
export default eventManager
