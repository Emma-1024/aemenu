export default async function isLogin() {
  let result = fetch(`${process.env.REACT_APP_BACKENDURL}/isLogin`,{
    credentials: 'include',
  })
  let res = await result
  let info = (await res.json()).success
  return info
}

// export default function isLogin() {
//   return fetch(`${process.env.REACT_APP_BACKENDURL}/isLogin`,{
//     credentials: 'include',
//   })
//   .then(res=>res.json())
//   .then(info=>{
//     return info.success
//   })
// }
