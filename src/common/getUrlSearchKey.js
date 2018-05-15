class GetUrl {
  constructor() {
    this.urlObj = {}
    this.arr = []
  }

  getUrlSearchKey(search, key) {
    const str = search.split('?')[1]
    const arr = str.split('&')
    arr.forEach((item, index) => {
      var k = arr[index].split('=')[0]
      var value = arr[index].split('=')[1]
      this.urlObj[k] = value
    })
    if(key === undefined) return this.urlObj
    return this.urlObj[key]
  }

  // getUrlKeyArr(search) {
  //   var obj = this.getUrlSearchKey(search)
  //   for (var k in obj) { this.arr.push(k) }
  //   return this.arr[this.arr.length - 1]
  // }
}
var getUrl = new GetUrl()
export default getUrl
