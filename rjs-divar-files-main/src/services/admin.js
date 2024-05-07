import api from "../config/api";


const addCategory = (data)=> api.post("category", data)

const getCategory = () => api.get("category")

const delCategory = (id) => api.delete(`category/${id}`)

export {addCategory , getCategory , delCategory}