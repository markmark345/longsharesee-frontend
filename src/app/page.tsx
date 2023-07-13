'use client'

import { useHome } from '@/hooks'

const Home = () => {
	const { onSubmit } = useHome()
	return (
		<>
			<button onClick={onSubmit}>Button go to login</button>
		</>
	)
}

export default Home
