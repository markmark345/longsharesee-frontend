'use client'

import { useHome } from '@/hooks'
import dynamic from 'next/dynamic'

const Button = dynamic(
	() => import(`@/components/common`).then((mod) => mod.Button),
	{ ssr: false },
)

const Home = () => {
	const { onSubmit } = useHome()
	return (
		<div className="m-10">
			<button onClick={onSubmit} className=" mr-2">
				Button go to login
			</button>
			<Button id="button" text="Button" />
		</div>
	)
}

export default Home
