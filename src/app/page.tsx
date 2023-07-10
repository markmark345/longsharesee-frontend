import { useHome } from '@/hooks'

const Home = () => {
	const { onSubmit } = useHome()
	return (
		<button onClick={() => onSubmit({ email: 'xxx', password: 'xxx' })}>
			Button
		</button>
	)
}

export default Home
