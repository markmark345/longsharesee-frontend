'use client'

import { useLogin } from '@/hooks'

const Login = () => {
	const { register, handleSubmit, onSubmit } = useLogin()

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register('email')} />
			<input {...register('password')} />
			<button type="submit">submit</button>
		</form>
	)
}

export default Login
