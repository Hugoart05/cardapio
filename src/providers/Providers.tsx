'use client'

import { CarrinhoProvider } from "@/context/CarrinhoContext";
import { CategoriaProvider } from "@/context/CategoriaContexto/CategoriaProvider";
import { Props } from "@/types/global-props";

export function CategoriaProviderClient({children}:Props){
    return (
        <>
            <CategoriaProvider>{children}</CategoriaProvider>
        </>
    )
}


export function CarrinhoProviderClient({children}:Props){
    return(
        <CarrinhoProvider>{children}</CarrinhoProvider>
    )
}