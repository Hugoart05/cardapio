import '@/app/globals.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className='w-[100vw] h-[100vh] bg-zinc-100 flex justify-center items-center'>
          {children}
        </div>
      </body>
    </html>
  );  
}
