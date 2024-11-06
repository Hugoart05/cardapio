import { prisma } from "@/providers/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    
    return NextResponse.json({
        nome:"sapato",
        categoria:'calçado'
    })
}

export async function POST(request:NextRequest) {
    
}
