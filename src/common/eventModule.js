import events from './event'

class EventManager {
  constructor() {
    this.eventList = {}
  }

  subscribe(eventName, ...handlers) {
    if (this.eventList[eventName] == null) {
      this.eventList[eventName] = []
    }
    handlers.forEach(element => {
      if (typeof element === 'function') {
        this.eventList[eventName].push(element)
      }
      else console.warn('Event handler must be a function!')
    })
  }

  removeSubscriber(eventName, ...handlers) {
    if (this.eventList[eventName] == null) return
    var arr = this.eventList[eventName]
    handlers.forEach(element => {
      var index = arr.indexOf(element)
      if (index >= 0) {
        arr.splice(index, 1)
      }
      else console.warn('Unable to remove non-exist handler: ', element)
    })
  }

  removeAll(...eventNames) {
    eventNames.forEach(name => {
      this.eventList[name] = undefined
    })
  }

  publish(eventName, ...eventParams) {
    return this.eventList[eventName] ?
      this.eventList[eventName].forEach(handler => handler(...eventParams)) : null
  }
}

var eventManager = new EventManager()

export default eventManager
export { events }