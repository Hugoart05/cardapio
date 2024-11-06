import { prisma } from '@/providers/prisma-client'
import {NextResponse, NextRequest} from 'next/server'

interface user{
    nome:string
}

export async function GET(request:NextRequest, res:NextResponse){
    const user = await prisma.usuario.findUnique({where:{id:3}})
    // const user = await prisma.usuario.create({data:{
    //     nome:"Hugo",
    //     email:"mail@mail.com",
    //     password:'123456',
    // }})
    return Response.json(user);
}

