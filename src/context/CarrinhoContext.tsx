'use client'
import { ReactNode, useState } from "react";
import { CarrinhoContext } from "./CarrinhoContextType";

interface props{
    children:ReactNode
}
export function CarrinhoProvider({children}:props){
    const [recarregar, setRecarregar] = useState<boolean>(false)

    async function addProduto():Promise<void>{
        console.log("adiconou")
    }

    function reload(){
        setRecarregar(!recarregar)
    }
    async function removeProduto():Promise<void>{

    }


    return (
        <CarrinhoContext.Provider value={{recarregar,addProduto,reload,removeProduto}}>
            {children}
        </CarrinhoContext.Provider>
    )
}


// recarregar:boolean
// reload():void
// addProduto():void
// removeProduto():void