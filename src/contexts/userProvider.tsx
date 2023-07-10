'use client'

import noop, { noopPromise } from '@/utils/noop'
import {
	FC,
	ReactElement,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react'

interface IUserContextProvider {
	children: React.ReactNode
}

interface IUserState {
	isLoggedIn: boolean
	isLoggedOut: boolean
}

interface IApiActions {
	logOut: () => void
}

interface IAsyncActions {
	logIn: (payload: { email: string; password: string }) => Promise<void>
}

const initialState: IUserState = {
	isLoggedIn: false,
	isLoggedOut: false,
}

interface IUserApi {
	actions: IApiActions
	asyncActions: IAsyncActions
}

const initialApi: IUserApi = {
	actions: {
		logOut: noop,
	},
	asyncActions: {
		logIn: noopPromise,
	},
}

const UserContext = createContext<[IUserState, IUserApi]>([
	initialState,
	initialApi,
])

export const UserContextProvider: FC<IUserContextProvider> = (props) => {
	const { children } = props
	const [state, setState] = useState<IUserState>(initialState)

	const logIn = useCallback(
		async (payload: { email: string; password: string }) => {
			if (payload.email && payload.password) {
				setState((prevState) => ({
					...prevState,
					isLoggedIn: true,
				}))
			}
		},
		[],
	)

	const logOut = useCallback(() => {
		setState((prevState) => ({
			...prevState,
			isLoggingOut: true,
		}))
		window.location.href = '/login'
	}, [])

	const api = useMemo(() => {
		return {
			actions: {
				logOut,
			},
			asyncActions: {
				logIn,
			},
		}
	}, [logIn, logOut])

	const contextValue = useMemo(() => {
		return [
			{
				...state,
			},
			api,
		] as [IUserState, IUserApi]
	}, [api, state])

	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	)
}

export const useUserContext = () => useContext(UserContext)
