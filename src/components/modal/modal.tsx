import { X } from 'lucide-react'
import css from './modal.module.css'
import React, { ReactNode, useEffect, } from 'react'

interface ModalProps { show: boolean, children: ReactNode, titulo: string, onClose: () => void, id: string }
export default function Modal({ children, show, titulo, id, onClose }: ModalProps) {
    
    return (
        <div className={css.container_modal}
            style={
                show ? { transition:'0.2s ease',display: "flex", opacity: 1 } : { display: 'none' }}
        >
            <div className={css.modal} id={id}>
                <span className={css.botao_fechar} onClick={onClose}> <X /> </span>
                {children}
            </div>
        </div>
    )
}
