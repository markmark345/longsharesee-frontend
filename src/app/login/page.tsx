'use client'

import { useLogin } from '@/hooks'
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
				className=" mx-5"
				{...register('email', { required: true })}
			/>
			{errors.email && <p className=" text-red-500">First name is required</p>}

			<input
				{...register('password')}
				className=" bg-sky-700 hover:bg-sky-800 px-4 py-2 text-white sm:px-8 sm:py-3"
			/>
			<button type="submit">submit</button>
		</form>
	)
}

export default Login
