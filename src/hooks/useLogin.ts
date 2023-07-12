import { useUserContext } from '@/contexts'
import { useCallback, useContext } from 'react'

export const useLogin = () => {
	const [state, api] = useUserContext()
	const { logIn } = api.asyncActions

	const onSubmit = useCallback(
		async ({ email, password }: { email: string; password: string }) => {
			console.log(email, password)
			await logIn({ email, password })
		},
		[logIn],
	)

	return {
		onSubmit,
	}
}
