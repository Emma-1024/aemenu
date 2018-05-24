export default async function getData(data, urlParam) {
  let res = await fetch(`${process.env.REACT_APP_BACKENDURL}/${urlParam}`, {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  let info = await (res.json())
  return info
}

export async function get(urlParam) {
  let res = await fetch(`${process.env.REACT_APP_BACKENDURL}/${urlParam}`, {
    method: 'GET',
    credentials: 'include',
  })
  let info = await (res.json())
  return info
}
