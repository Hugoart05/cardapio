'use client'
import { signUp } from "@/app/actions";
import { CustomInput } from "../CustomInput";
import ButtonSignUp from "../btn-signup";
import { useSignUp } from "./use-signup";

export default function FormSignUp() {
  const { handleSubmit } = useSignUp()
  return (
    <form className="flex flex-col gap-4" action={(formData)=>{
      signUp(formData)
    }}>
        <CustomInput
            name="nome"
            placeholder="Nome"
        />
        <CustomInput
            name="email"
            placeholder="Email"
        />
        <CustomInput
            name="password"
            placeholder="Password"
            type="password"
        />
       <ButtonSignUp/>
    </form>
  )
}
