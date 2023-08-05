import { Button as ButtonNextUi, ButtonProps } from '@nextui-org/react'
import classnames from 'classnames'
import { FC } from 'react'

export interface IButton extends ButtonProps {
	id: string
	text?: string
	classNames?: string
	prefixContent?: React.ReactNode
	suffixContent?: React.ReactNode
}

const Button: FC<IButton> = (props) => {
	const {
		id,
		text,
		prefixContent,
		className: classNameProps,
		suffixContent,
		children,
		variant,
		...otherProps
	} = props

	return (
		<ButtonNextUi
			id={id}
			className={classnames(
				classNameProps,
				`${
					variant === 'light' || variant === 'ghost'
						? ' text-black'
						: ' text-white bg-deepSea-10'
				} rounded hover:opacity-50 `,
			)}
			variant={variant}
			startContent={prefixContent}
			endContent={suffixContent}
			{...otherProps}
		>
			{text || children}
		</ButtonNextUi>
	)
}

export { Button }
