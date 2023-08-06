// import { LinkProps } from '@nextui-org/react'
import classnames from 'classnames'
import NextLink, { LinkProps } from 'next/link'
import { FC } from 'react'
import { Url } from 'url'

export interface ILink extends LinkProps {
	id: string
	href: Url | string
	label: string
	underline?: boolean
	isActived?: boolean
	children?: React.ReactNode
	className?: string
}

const Link: FC<ILink> = (props) => {
	const {
		id,
		href,
		label,
		children,
		underline,
		isActived,
		className: classNameProps,
		...otherProps
	} = props
	return (
		<NextLink
			id={id}
			href={href}
			className={classnames(
				classNameProps,
				`${
					isActived
						? ' text-black-30 hover:text-black-50'
						: 'text-deepSea-20 hover:text-deepSea-50'
				} ${underline ? 'underline underline-offset-[0.15rem]' : ''}  
                transition duration-500 ease-in-out `,
			)}
			{...otherProps}
		>
			{label || children}
		</NextLink>
	)
}

export { Link }
