export default async function isAuthenticated() {
  let res = await fetch(`${process.env.REACT_APP_BACKENDURL}/isAuthenticated`, {
    credentials: 'include',
  })
  let data = await res.json()
  return data
}
