export default async function getData(data, urlParam) {
  let result = fetch(`${process.env.REACT_APP_BACKENDURL}/${urlParam}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  let info = await ((await result).json())
  return info
}