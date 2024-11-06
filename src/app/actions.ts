"use server"
import { prisma } from "@/providers/prisma-client"
import { schemaCriaUsuario } from '@/validacoes/create-user'
import { CreateUsuarioResult } from '@/types/form-signup-result'

export async function signUp(formData: FormData): Promise<CreateUsuarioResult> {
    try {
        const userRegistro = {
            nome: formData.get("nome"),
            email: formData.get("email"),
            password: formData.get("password")
        }
        const isValidData = schemaCriaUsuario.safeParse(userRegistro)
        if (!isValidData.success) {
            return { messages: isValidData.error, success: false }
        }
        const create = await prisma.usuario.create({ data: isValidData.data })
        return { success: isValidData.success, messages: isValidData.error }
        
    } catch (error) {
        return { success: false }
    }
}