'use client'

import { UserContextProvider } from '@/contexts'
import { NextUIProvider } from '@nextui-org/react'
import { FC } from 'react'

interface IContextProvider {
	children: React.ReactNode
}

const contextProviders = [UserContextProvider]

const ContextProvider: FC<IContextProvider> = ({ children }) => {
	return contextProviders.reduceRight((memo, Provider) => {
		return (
			<Provider>
				<NextUIProvider>{memo}</NextUIProvider>
			</Provider>
		)
	}, children)
}

export default ContextProvider
