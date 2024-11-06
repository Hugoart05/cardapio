import { prisma } from "@/providers/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import { PrismaClientValidationError } from "@prisma/client/runtime/library";

export interface Login {email:string, password:string}
export async function POST(req:NextRequest) {
    try{
        const {email, password} = await req.json() as Login
        const user = await prisma.usuario.findFirst({where:{email}})
        if(user && user.password === password){
            const userDTO = {
                nome:user.nome,
                email:user.email,
                id:user.id
            }
            const token =  await jwt.sign(userDTO,"validameutoken",{
                expiresIn:'8h',
            })

            return NextResponse.json({
                user:userDTO,
                token:token,
                success:true
            })
        }
        return NextResponse.json({
            message:"usuario e ou senha inválidos",
            success:false
        })
    }catch(error){
        if(error instanceof PrismaClientValidationError){
            return NextResponse.json({
                message:"usuario e ou senha inválidos",
                success:false
            })
        }
        return NextResponse.json({
            message:"usuario e ou senha inválidos",
            success:false
        })
    }
}