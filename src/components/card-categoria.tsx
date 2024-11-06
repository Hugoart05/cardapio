'use client'
import React from 'react'
import css from '@/css/telaInicial.module.css'
import { useCategoria } from '@/context/CategoriaContexto/CategoriaContextType'

export default function CardCategoria() {
  const {selecionaCategoria} = useCategoria()
  return (
    <div className={css.card_categoria} onClick={()=>{selecionaCategoria}} >
      <img src="https://cdn-icons-png.flaticon.com/512/10366/10366416.png" alt="" />
    </div>
  )
}
