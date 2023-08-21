'use client'

import { useHome } from '@/hooks'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'

const Button = dynamic(
	() => import(`@/components/common`).then((mod) => mod.Button),
	{ ssr: false },
)
const Link = dynamic(
	() => import(`@/components/common`).then((mod) => mod.Link),
	{ ssr: false },
)
const Navbar = dynamic(() => import(`@/components`).then((mod) => mod.Navbar), {
	ssr: false,
})
const Switch = dynamic(() => import(`@/components`).then((mod) => mod.Switch), {
	ssr: false,
})

const Home = () => {
	const { onSubmit } = useHome()
	const { theme, setTheme } = useTheme()

	return (
		<>
			<Navbar />
			<div className="flex place-content-center gap-4 w-full h-[37.5rem] ">
				<Button id="button" text="Button" className=" self-center" />
				<Link
					id={''}
					href="/login"
					label="login"
					underline
					className=" self-center"
				/>
				<Switch id={''} className=" self-center" />
			</div>
		</>
	)
}

export default Home
