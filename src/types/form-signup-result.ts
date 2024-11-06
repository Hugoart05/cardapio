import z from 'zod'
export interface CreateUsuarioResult{
    success:boolean
    messages?:z.ZodError,
}