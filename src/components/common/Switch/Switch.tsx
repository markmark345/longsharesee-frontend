import { Switch as SwitchNextUi, SwitchProps, cn } from '@nextui-org/react'
import classnames from 'classnames'
import { FC } from 'react'

export interface ISwitch extends SwitchProps {
	id: string
	className?: string
	base?: string
	wrapper?: string
	thumb?: string
	children?: React.ReactNode
}

const Switch: FC<ISwitch> = (props) => {
	const {
		id,
		children,
		base,
		wrapper,
		thumb,
		className: classNameProps,
		...otherProps
	} = props
	return (
		<SwitchNextUi
			className={classnames(classNameProps)}
			classNames={{
				base: cn(base),
				wrapper: cn(wrapper, ' group-data-[selected=true]:!bg-deepSea-10'),
				thumb: cn(thumb),
			}}
			{...otherProps}
		>
			{children}
		</SwitchNextUi>
	)
}

export { Switch }
