import TabBar from '@/components/tab-bar/tab-bar'
import { CarrinhoProvider } from '@/context/CarrinhoContext'
import { CategoriaProviderClient } from '@/providers/Providers'
import React, { ReactNode } from 'react'

export default function PublicLayout({children}:{children:ReactNode}) {
    return (
        <CarrinhoProvider>
            <CategoriaProviderClient>
                {children}
                <TabBar />
            </CategoriaProviderClient>
        </CarrinhoProvider>
    )
}
