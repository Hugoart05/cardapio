import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLElement> { }
export function CustomInput({ ...rest }: Props) {
    return (
        <input
            {...rest}
            className="p-3 border rounded-lg text-zinc-800 outline-none"
        />
    )
}