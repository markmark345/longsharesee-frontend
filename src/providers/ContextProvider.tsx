import { UserContextProvider } from '@/contexts'
import { FC, ReactElement } from 'react'

interface IContextProvider {
	children: React.ReactNode
}

const contextProviders = [UserContextProvider]

const ContextProvider: FC<IContextProvider> = ({ children }) => {
	return contextProviders.reduceRight((memo, Provider) => {
		return <Provider>{memo}</Provider>
	}, children)
}

export default ContextProvider
