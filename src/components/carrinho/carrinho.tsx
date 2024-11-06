'use client'
import React from 'react'
import css from '@/css/telaInicial.module.css'
import Perfil from '../Perfil'
import ListaPedidos from '../listapedidos'

interface props{hidde?:boolean}
export default function Carrinho({hidde}:props) {
  return (
    <section className={css.container_itens} style={ hidde ? {display:'flex'} : {}}>
          <div className={css.comanda}>
            <div className={css.perfil}>
              <Perfil/>
            </div>
            <h3 className={css.meuspedidostitulo}>Meus pedidos</h3>
            <ListaPedidos/>
          </div>
    </section>
  )
}
