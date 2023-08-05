import { useInput } from '@/hooks/components/useInput';
import classnames from 'classnames'
import { FC, ReactNode, useEffect } from 'react'
import { UseFormRegister} from 'react-hook-form';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string,
	name: string,
	placeholder?: string
	className?: string
	type?: string
	disabled?: boolean
	readOnly?: boolean
	hasPrefix?: boolean
	hasSuffix?: boolean
	classes?: object
	label?: ReactNode
	defaultValue?: string;
	register: UseFormRegister<any>
	onChange?: (...event: any[]) => void
	onBlur?: (...event: any[]) => void
}

const Input: FC<IInput> = (props) => {
	const {
		id,
		name,
		placeholder,
		type,
		disabled,
		readOnly,
		hasPrefix,
		hasSuffix,
		className: classNameProps,
		defaultValue,
		register,
		...otherProps
	} = props

	const { value, onChange } = useInput({defaultValue});

	useEffect(() => {
		register(id, { value: value });
	}, [id, value, register]);

	return (
		<input
			id={id}
			type={type}
			placeholder={placeholder ? placeholder : undefined}
			value={value}
			className={classnames(
				classNameProps,
				`focus:ring-opacity-1 rounded-md border border-black-20 p-[0.3rem] hover:border-blue-primary focus:outline-none focus:ring-1 focus:ring-blue-primary `,
			)}
			{...register(id, { required: true })}
			name={name}
			onChange={onChange}
			{...otherProps}
		/>
		
	)
}

export { Input }