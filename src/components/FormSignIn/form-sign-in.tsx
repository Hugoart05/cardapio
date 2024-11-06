'use client'

import React from 'react'
import { CustomInput } from '../CustomInput'
import CustomButon from '../CustomButon'
import { useLogin } from './useLogin'

export default function FormSignIn() {
    const { signIn, credenciais, handleChange } = useLogin()
    return (
        <form className='flex flex-col gap-4 w-full'>
            <div className=' flex flex-col gap-4 '>
                <CustomInput
                    placeholder='Email'
                    name='email'
                    value={credenciais.email}
                    type='email'
                    onChange={(event) => { handleChange(event, 'email') }}
                />
                <CustomInput
                    placeholder='Password'
                    onChange={(event) => { handleChange(event, 'password') }}
                    value={credenciais.password}
                    type='password'
                />
            </div>
            <div>
                <CustomButon onClick={(event) => { signIn(event) }}>Entrar</CustomButon>
            </div>
        </form>
    )
}
