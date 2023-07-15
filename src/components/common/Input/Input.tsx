import classnames from 'classnames'
import { FC, ReactNode } from 'react'

export interface IInput {
	id: string
	placeholder?: string
	className?: string
	type?: string
	disabled?: boolean
	readOnly?: boolean
	prefix?: boolean
	suffix?: boolean
	classes?: object
	label?: ReactNode
	onChange?: (...event: any[]) => void
	onBlur?: (...event: any[]) => void
}

const Input: FC<IInput> = (props) => {
	const {
		id,
		placeholder,
		type,
		disabled,
		readOnly,
		prefix,
		suffix,
		className: classNameProps,
		...otherProps
	} = props

	console.log(disabled)
	return (
		<input
			placeholder={placeholder ? placeholder : undefined}
			type={type}
			disabled={disabled}
			readOnly={readOnly}
			className={classnames(
				classNameProps,
				`focus:ring-opacity-1 rounded-md border border-black-20 p-[0.3rem] hover:border-blue-primary focus:outline-none focus:ring-1 focus:ring-blue-primary `,
			)}
			
			{...otherProps}
		/>
	)
}

export { Input }
