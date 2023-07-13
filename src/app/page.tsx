'use client'

import { useHome } from '@/hooks'

const Home = () => {
	const { onSubmit } = useHome()
	return (
		<>
			<button onClick={onSubmit}>Button</button>
			<h1>Hiiiiiii woaas</h1>
			<h1>กกฟหไไไกไกไสฟสฟย ฟาหฟ</h1>
		</>
	)
}

export default Home
