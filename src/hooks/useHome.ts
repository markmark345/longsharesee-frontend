import { useUserContext } from '@/contexts'
import { useCallback, useContext } from 'react'

export const useHome = () => {
	const [state, api] = useUserContext()
	// const {state, api} = useContext(UserContextProvider)
	const { logIn } = api.asyncActions

	const onSubmit = useCallback(
		async ({ email, password }: { email: string; password: string }) => {
			await logIn({ email, password })
		},
		[logIn],
	)

	return {
		onSubmit,
	}
}
