'use client'
import React, { useEffect, useState } from 'react'
import Modal from '../modal/modal'
import { Search } from 'lucide-react'

export default function Buscar() {
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
                <p>teste</p>
            </Modal>
            <div onClick={() => { 
                    console.log("clicker")
                setShow(true) }}>

                <Search />
            </div>
        </>
    )
}
