/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"
import { checkOtp } from "../../services/auth"
import { setCookie } from "../../utils/cookie"
import { useQuery } from "@tanstack/react-query"
import { getProfile } from "../../services/user"

import styles from "./CheckOtpForm.module.css"


function CheckOtpForm({code , setCode , mobile , setStep}) {

  const navigate = useNavigate()
  const {refetch} = useQuery(["profile"], getProfile)

    const submitHandler=async event=>{
        event.preventDefault()
        // console.log({code , mobile})
        if(code.length !==5) return

        const {response , error} = await checkOtp(mobile , code)

        if(response) {
            // console.log(response)
            setCookie(response.data)
            navigate("/")
            refetch()
        }
        if(error) console.log(error.response.data.message)
    }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
        <p>تایید کد اس  ام اس شده</p>
        <span>کد تایید به شماره({mobile})پیامک شده است</span>
        <label htmlFor="input">شکد تایید را وارد کنید.</label>
        <input type="text"  id="input"
               placeholder="کد تایید"
               value={code}
               onChange={e=>setCode(e.target.value)}
        />
        <button type="submit">ورود</button>
        <button onClick={()=>setStep(1)} className={styles.back}>تغییر شماره موبایل</button>

    </form>
  )
}

export default CheckOtpForm