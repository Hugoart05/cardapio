import { createContext, useContext } from "react"

export interface ICarrinhoContext{
    recarregar:boolean
    reload():void
    addProduto():Promise<void>
    removeProduto():Promise<void>
}

export const CarrinhoContext = createContext<ICarrinhoContext | undefined>(undefined)

export function useCarrinho(){
    const context = useContext(CarrinhoContext)
    if(context == undefined){
        throw new Error("Falha ao acessar o contexto de carrinho")
    }
    return context;
}