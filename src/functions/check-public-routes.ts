/**
 * @param asPath
 * @returns boolean
 */

import { AppRoutes } from "@/contants/protected-routes";

export function checkPublicRoute(asPath:string):boolean{
    const appPublicRoutes = Object.values(AppRoutes.public);
    return appPublicRoutes.includes(asPath)
}