import React, { useState } from 'react'
import Modal from '../modal/modal'
import {  ShoppingCart } from 'lucide-react'
import css from './tab-bar.module.css'
import Perfil from '../Perfil'
import ListaPedidos from '../listapedidos'

export default function CarrinhoModal() {
    const [show, setShow] = useState<boolean>(false)
    function handleClose() {
        setShow(false)
    }

    return (
        <>
            <Modal
                show={show} titulo='Meu modal'
                onClose={handleClose}
                id='modal-teste'
            >
                <div className={css.mobile_pedido}>
                    <h3>Carrinho</h3>
                    <Perfil />
                    <ListaPedidos />
                </div>
            </Modal>
            <div onClick={() => { setShow(true) }}>
                <ShoppingCart />
            </div>
        </>
    )
}
