'use client'

import { useLogin } from '@/hooks'
import dynamic from 'next/dynamic'

const Input = dynamic(() =>
	import('@/components/common').then((mod) => mod.Input),
)

const Login = () => {
	const { register, handleSubmit, onSubmit, reset, errors } = useLogin()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				id={'email'}
				name='email'
				label="email"
				type='text'
				className="m-4 p-[0.5rem] border-1 font-medium text-black"
				register={register} // Pass the register function from react-hook-form
				placeholder='Enter email'
				defaultValue=""
			/>
			{errors.email && <p className=" text-red-500">Email is required</p>}
			<Input
				id={'password'}
				name='password'
				label='password'
				type='password'
				register={register}
				className="m-4 p-[0.5rem] border-1 font-medium text-black"
				placeholder='Enter password'
				defaultValue=""
			/>
			<button type="submit">Login</button>
		</form>
	)
}

export default Login
