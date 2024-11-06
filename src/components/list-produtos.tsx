'use client'
import { CarfapioOpcoes } from '@/types/CardapioOpcoes'
import React, { useEffect, useState } from 'react'
import CardProduto from './card-produto'
import { useCategoria } from '@/context/CategoriaContexto/CategoriaContextType'

export default function ListaProdutos() {
    const [produtos, setOpcoes] = useState<CarfapioOpcoes[]>([])
    const { categoriaSelecionada } = useCategoria()

    const produtosFiltrados = produtos.filter(produto => produto.categoria == categoriaSelecionada)

    return (
        <>
            {produtosFiltrados.length === 0 && <p>Nenhum produto disponivel</p>}
            {produtosFiltrados.length > 0 &&
                produtosFiltrados.map((item, index) => (
                    <CardProduto
                        key={index}
                        produto={item}
                    />
                ))
            }
        </>
    )
}
