import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { delCategory, getCategory } from "../../services/admin"
import Loader from "../modules/Loader"

import styles from './CategoryList.module.css'


function CategoryList() {

    const {data , isLoading}=useQuery(["get-cateories"], getCategory)
    console.log({data , isLoading})


    const queryClient=useQueryClient()
    const {mutate} = useMutation(delCategory ,{
        onSuccess : ()=>queryClient.invalidateQueries("get-cateories")
    })

    const deleteHandler=(id)=>{
        // delCategory(id)
        mutate(id)
    }

  return (
    <div className={styles.list}>
        {isLoading ?(<Loader/>):(
            data.data.map(i=>(
                <div key={i._id}>
                    <img src={`${i.icon}.svg`} />
                    <h5>{i.name}</h5>
                    <button onClick={()=>deleteHandler(i._id)}>حذف</button>
                    <p>slug:{i.slug}</p>
                </div>
            ))
        )}
    </div>
  )
}

export default CategoryList