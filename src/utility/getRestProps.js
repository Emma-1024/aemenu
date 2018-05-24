function getRestProps(origin, ...removedProps) {
  var obj = {}
  for (var prop in origin) {
    if (removedProps.indexOf(prop) !== -1) continue
    obj[prop] = origin[prop]
  }
  return obj
}

export default getRestProps
