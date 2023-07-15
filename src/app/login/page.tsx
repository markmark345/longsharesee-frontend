'use client'

import { useLogin } from '@/hooks'
import { useInput } from '@/hooks/components/useInput'
import dynamic from 'next/dynamic'

const Input = dynamic(() =>
	import('@/components/common').then((mod) => mod.Input),
)

const Login = () => {
	const { register, handleSubmit, onSubmit, errors } = useLogin()
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				id={'email'}
				className="m-4 p-[0.5rem] border-1 font-medium text-black"
				register={register}
				placeholder='Please enter Username'
				
			/>
			{errors.email && <p className=" text-red-500">First name is required</p>}

			<Input
				id={'password'}
				register={register}
				className="m-4 p-[0.5rem] border-1 font-medium text-black"
				placeholder='Please enter Password'
			/>
			<button type="submit">submit</button>
		</form>
	)
}

export default Login
