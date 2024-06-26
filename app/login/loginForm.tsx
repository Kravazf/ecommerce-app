'use client';

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return ( 
    <>
      <Heading title='Sun in to E-Shop' />
      <Button 
        outline
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr
        className='
          bg-slate-300
          w-full
          h-px
        '
      />
      <Input 
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input 
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button
        label = {isLoading ? 'Loading' : 'Login'}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        Do not have an account?
        <Link
          href='/register'
          className="
            underline
            text-green-700
            font-semibold
            pl-3
          "
        >
          Sign Up
        </Link>
      </p>
    </>
   );
};
 
export default LoginForm;
