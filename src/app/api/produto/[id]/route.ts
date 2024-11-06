import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";


interface params{
    id:number,
    nome:string,
    test:string
}
export function GET(request:NextRequest,params:params ){
    const {} = params
}