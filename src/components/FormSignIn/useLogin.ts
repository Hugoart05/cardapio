'use client'
import { Login } from "@/app/api/account/route"
import { setAuthenticatedUserToken } from "@/utils/check-user-authentication"
import { useRouter } from "next/navigation"
import React, { ChangeEvent, useState } from "react"

export function useLogin(){
    const [credenciais, setCredenciais] = useState<Login >({email:'', password:''} as Login)
    const {push} = useRouter()
    function handleChange(event:ChangeEvent<HTMLInputElement>, name:string){
        const text = event.target.value
        setCredenciais({...credenciais,[name]:text})
    }

    async function signIn(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault()
        try{
            const response = await fetch("http://localhost:3000/api/account", {
                method:"POST",
                body:JSON.stringify(credenciais)
            })
            const data = await response.json()
            console.log(data.token)
            setAuthenticatedUserToken(data.token)
            push('/dashboard')
        }catch(error){
            console.log(error)
        }
    }

    return{
        signIn,
        credenciais,
        handleChange
    }
}