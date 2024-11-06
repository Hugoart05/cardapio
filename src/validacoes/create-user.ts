import z from 'zod'
export const schemaCriaUsuario  = z.object({
    nome: z.string({
        required_error:"o campo nome é obrigatório",
    }),
    email:z.string({
        invalid_type_error:"Digite um email valido",
        required_error:"O campo email é obrigatório",
    }),
    password:z.string({
        required_error:"Digiste uma senha válida de no minimo 6 digitos"
    })
})