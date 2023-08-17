import { FC } from 'react'

interface INavbar {}

const Navbar: FC<INavbar> = () => {
	return (
		<div className="relative z-[99] flex flex-row space-x-2 justify-between con w-full px-6 h-[3.5rem] bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.05)]">
			Navbar
		</div>
	)
}

export { Navbar }
