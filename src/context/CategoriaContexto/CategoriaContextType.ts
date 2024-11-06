import { createContext, useContext } from "react"

export interface CategoriaContextType{
    categoriaSelecionada:string
    selecionaCategoria(nomeCategoria:string):void
}

export const CategoriaContext = createContext<CategoriaContextType | undefined>(undefined)

export function useCategoria(){
    const context = useContext(CategoriaContext)
    if(context == undefined){
        throw new Error("Falha ao acessar o contexto de categoria")
    }
    return context;
}