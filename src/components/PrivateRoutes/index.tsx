import { AppRoutes } from "@/contants/protected-routes";
import { checkUserAuthenticated } from "@/utils/check-user-authentication";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface PrivateRouteProps{
    children:ReactNode
}
export function PrivateRoute({children}:PrivateRouteProps ){
    const {push} = useRouter();
    const isUserAuthenticated = checkUserAuthenticated();
    useEffect(()=>{
        if(!isUserAuthenticated){
            push(AppRoutes.public.login);
        }
    },[isUserAuthenticated, push])

    return(
        <>
            {!isUserAuthenticated && null}
            {isUserAuthenticated && children}
        </>
    )
}