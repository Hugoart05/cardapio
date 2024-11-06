import React from 'react'
import css from '@/css/telaInicial.module.css'
export default function Perfil() {
    const nome = 'hugo'
    return (
        <div className={css.conteudo_perfil}>
            <div className={css.avatar_perfil}>
                <img src="https://avatarfiles.alphacoders.com/375/thumb-1920-375571.png" alt="" />
            </div>
            <span>{nome} </span>
        </div>
    )
}
