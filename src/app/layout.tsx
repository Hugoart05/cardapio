'use client'
import { PrivateRoute } from '@/components/PrivateRoutes';
import './globals.css'
import css from '@/css/telaInicial.module.css'
import { checkPublicRoute } from '@/functions/check-public-routes';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = usePathname()
  const isPublicRoute = checkPublicRoute(path)

  return (
    <html lang="en">
      <body className={css.bodyestilo} >
          {isPublicRoute && children}
          {!isPublicRoute && (
            <PrivateRoute>
              {children}
            </PrivateRoute>
          )}
      </body>
    </html>
  );
}
