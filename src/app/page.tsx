'use client'

import { useHome } from '@/hooks'

const Home = () => {
	const { onSubmit } = useHome()
	return (
		<>
			<button onClick={onSubmit}>Button</button>
		</>
	)
}

export default Home
