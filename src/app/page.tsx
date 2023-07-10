'use client'

import { useUserContext } from '@/contexts'
import { useHome } from '@/hooks'

const Home = () => {
	const [state] = useUserContext()
	console.log('Before: ', state.isLoggedIn)
	const { onSubmit } = useHome()
	return (
		<>
			<button onClick={() => onSubmit({ email: 'xxx', password: 'xxx' })}>
				Button
			</button>
		</>
	)
}

export default Home
