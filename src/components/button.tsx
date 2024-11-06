import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    backgroundcolor?:string | 'black'
    fontWeith?: "500" | '600' | '700'
    color?:string | 'white'
}

export default function Button({backgroundcolor= "black", color ,fontWeith, ...props}:ButtonProps) {
  const {pending} = useFormStatus()
  return (
    <button
        style={{
            width:"100%",
            height:'40px',
            borderRadius:'10px',
            fontWeight:fontWeith,
            backgroundColor:backgroundcolor,
            color: color ? color : 'white'
        }}
        {...props}
        disabled={pending}
    />
  )
}
