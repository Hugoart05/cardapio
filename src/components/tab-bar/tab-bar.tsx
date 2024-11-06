'use client'

import React from 'react'
import css from './tab-bar.module.css'
import { Carrot, Home, LogIn, Search, ShoppingBag, ShoppingCart } from 'lucide-react'
import Modal from '../modal/modal'
import Buscar from './icone-bar'
import CarrinhoModal from './modal-carrinho'
export default function TabBar() {
  return (
    <div className={css.tab_bar__container}>
      <Home />
      <Buscar/>
      <CarrinhoModal />
      <LogIn />
    </div>
  )
}
