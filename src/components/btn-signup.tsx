"use client"
import React from 'react'
import CustomButon from './CustomButon'
import { useFormStatus } from 'react-dom'

export default function ButtonSignUp() {
    const { pending } = useFormStatus()
    return (
        <CustomButon>
            {pending ? "Aguarde..." : "Cadastrar"}
        </CustomButon>
    )
}
