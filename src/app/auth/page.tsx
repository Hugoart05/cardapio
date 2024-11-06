import FormSignIn from '@/components/FormSignIn/form-sign-in'
import React from 'react'

export default function LoginPage() {
  return (
    <div className='flex flex-col gap-5'>
      <div className=' bg-white h-auto w-full  p-5 flex flex-col items-center gap-5 rounded-lg shadow-sm'>
        <h1 className='text-lg'>Cardapio<span className='font-bold text-orange-400 text-center'>Facil</span></h1>
        <FormSignIn/>
      </div>
      <div className='w-[300px] h-auto p-5 bg-white rounded-lg flex flex-col items-center justify-center'>
        <button className='bg-emerald-400 p-2 rounded-lg w-full'>Registe-se aqui</button>
        <span className='text-sm mt-2 text-zinc-500 '>Vamos lá :)</span>
      </div>
    </div>
  )
}
