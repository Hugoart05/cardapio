import React from 'react'
import css from '@/css/telaInicial.module.css'
import Button from './button'

export default  function ListaPedidos() {
    return (
        <div className={css.container_pedidos}>
            <div className={css.lista_items}>
                <span className='text-zinc-300'>Você ainda nao pediu nada</span>
                <span className='text-zinc-300'>Peça já</span>
            </div>
            <div className={css.container_conta}>
                <div>
                    <span>Total: </span>
                    <span>R$Dinheiros</span>
                </div>
                <Button>Checkout</Button>
            </div>
        </div>
    )
}
