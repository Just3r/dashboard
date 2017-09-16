import input from "./Input"

const loadUserProfile = () => {
  let response = input || {}
  return new Promise((res,rej) => {
    setTimeout(res(response), 100)
  })
}


export  default loadUserProfile;