'use client'
import { useRouter } from "next/router"

const tokenKey = "TOKEN_KEY"
export function checkUserAuthenticated(){
    const token = localStorage.getItem(tokenKey)
    return !!token
}

export function setAuthenticatedUserToken(token:string){
    localStorage.setItem(tokenKey, token)
}