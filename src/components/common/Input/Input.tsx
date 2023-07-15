import { useInput } from '@/hooks/components/useInput';
import classnames from 'classnames'
import { FC, ReactNode } from 'react'

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string,
	placeholder?: string
	className?: string
	type?: string
	disabled?: boolean
	readOnly?: boolean
	hasPrefix?: boolean
	hasSuffix?: boolean
	classes?: object
	label?: ReactNode
	register: any
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
		hasPrefix,
		hasSuffix,
		className: classNameProps,
		register,
		...otherProps
	} = props

	const { value, onChange } = useInput();

	return (
		<input
			id={id}
			placeholder={placeholder ? placeholder : undefined}
			type={type}
			value={value}
			disabled={disabled}
			readOnly={readOnly}
			className={classnames(
				classNameProps,
				`focus:ring-opacity-1 rounded-md border border-black-20 p-[0.3rem] hover:border-blue-primary focus:outline-none focus:ring-1 focus:ring-blue-primary `,
			)}
			{...register(id, { required: true })}
			onChange={onChange}
			{...otherProps}
		/>
	)
}

export { Input }


// ref
// export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
// 	id: string;
// 	className?: string;
// 	register: any;
// }

// const Input: React.FC<IInputProps> = ({ id, className, register, ...otherProps }) => {
// 	const { value, onChange } = useInput();
// 	return <input id={id} className={className} value={value} {...register(id)} onChange={onChange} {...otherProps} />;
// };