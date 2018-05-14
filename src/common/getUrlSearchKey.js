function gerUrlSearchKey(search){
  const str = search.split('?')[1]
  const arr = str.split('&')
  const obj = {}
  arr.forEach((item,index)=>{
    var key = arr[index].split('=')[0]
    var value = arr[index].split('=')[1]
    obj[key] = value
  })
  return obj
}
export default gerUrlSearchKey