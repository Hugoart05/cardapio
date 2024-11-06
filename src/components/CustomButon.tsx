import React, { ButtonHTMLAttributes } from 'react'

interface props extends ButtonHTMLAttributes<HTMLElement>{}
export default function CustomButon({...rest}:props) {
  return (
    <button 
    className='w-full h-10 bg-zinc-800 rounded-lg text-white'
        {...rest}
    />
  )
}
