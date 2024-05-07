import { useState } from "react"
import styles from "./CategoryForm.module.css"
import { useMutation , useQueryClient} from "@tanstack/react-query"
import { addCategory } from "../../services/admin"

function CategoryForm() {
    const queryClient =useQueryClient()
    const [form , setForm]=useState({name:"", slug:"" , icon:""})

    const {mutate, data , isLoading , error} = useMutation(addCategory ,{
        onSuccess : ()=>queryClient.invalidateQueries("get-cateories")
    })
    console.log({data , isLoading , error})

    const changeHandler =event=>{
        setForm({...form , [event.target.name]:event.target.value})
    }
    const submitHandler=event=>{
        event.preventDefault()
        // console.log(form)
        if(!form.name || !form.slug || !form.icon) return

        mutate(form)
        setForm({name:"", slug:"" , icon:""})
    }
  return (
    <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
        <h3>ایجاد دسته بندی</h3>
        {data?.status===201 && <p>دسته بندی با موفقیت ایجاد شد</p>}
        {!!error && <p>مشکلی پیش آمده است</p>}
        <label htmlFor="name">اسم دسته بندی</label>
        <input type="text" name="name" id="name" value={form.name} />
        <label htmlFor="slug">اسلاگ  </label>
        <input type="text" name="slug" id="slug" value={form.slug} />
        <label htmlFor="icon">آیکون  </label>
        <input type="text" name="icon" id="icon" value={form.icon} />
        <button type="submit" disabled={isLoading}>ایجاد</button>
    </form>
  )
}

export default CategoryForm