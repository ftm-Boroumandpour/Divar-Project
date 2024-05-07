import api from "../config/api"
// import { getCookie } from "../utils/cookie"

// const token = getCookie("accessToken")
// console.log(token)

// const getProfile =()=>api.get("user/whoami" , {headers:{Authorization:`bearer ${token}`}})

const getProfile =()=> api.get("user/whoami").then(res=> res || false)

const getPosts =()=> api.get("post/my")

const getAllPosts=()=>api.get("")


export {getProfile , getPosts ,getAllPosts}