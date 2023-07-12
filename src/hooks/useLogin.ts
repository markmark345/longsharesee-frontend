import { useUserContext } from '@/contexts'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

interface ILoginForm {
	email: string
	password: string
}

export const useLogin = () => {
	const [state, api] = useUserContext()
	const { register, handleSubmit, watch } = useForm<ILoginForm>()
	const { logIn } = api.asyncActions

	const onSubmit = useCallback(async () => {
		const email = watch('email')
		const password = watch('password')

		await logIn({ email, password })
	}, [logIn, watch])

	return {
		onSubmit,
		register,
		handleSubmit,
	}
}
