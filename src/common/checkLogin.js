export default async function checkLogin(param) {
  let result = fetch(`${process.env.REACT_APP_BACKENDURL}/${param}`,{
    credentials: 'include',
  })
  let res = await result
  let info = await res.json()
  return info
}