import { ReactNode, useState } from "react";
import { CategoriaContext } from "./CategoriaContextType";

interface props{children:ReactNode}
export function CategoriaProvider({children}:props){
    const [categoriaSelecionada, setCategoriaSeleciona] = useState<string>('')

    function selecionaCategoria(nomeCategoria:string){
        setCategoriaSeleciona(nomeCategoria)
    }
    return(
        <CategoriaContext.Provider value={{categoriaSelecionada, selecionaCategoria}}>
            {children}
        </CategoriaContext.Provider>
    )
}