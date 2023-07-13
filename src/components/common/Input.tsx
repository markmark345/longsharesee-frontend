import { mergeClasses } from '@/utils'
import classnames from 'classnames'
import { FC, ReactNode } from 'react'

export interface IInput {
	id: string
	placeholder: string
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
		className: classNameProps,
		...otherProps
	} = props

	return (
		<input
			placeholder={placeholder}
			prefix={'hello'}
			type={type}
			className={classnames(
				classNameProps,
				`rounded-md border border-black-20 p-[0.3rem] hover:border-blue-primary focus:shadow-sm focus:shadow-indigo-500/40 focus:outline-none`,
			)}
		/>
	)
}

export { Input }
