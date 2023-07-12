import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export const useHome = () => {
	const router = useRouter()

	const onSubmit = useCallback(() => {
		router.push('/login')
	}, [router])

	return {
		onSubmit,
	}
}
