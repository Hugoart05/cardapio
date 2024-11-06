'use client'
import { signUp } from "@/app/actions"

export function useSignUp(){
    async function handleSubmit(formData:FormData){
        const response = await signUp(formData)
        if(response){

        }
    }
    return{
        handleSubmit
    }
}