'use client'

import { noopPromise, setCookie } from '@/utils'
import {
	FC,
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

interface IAsyncActions {
	logIn: (payload: { email: string; password: string }) => Promise<void>
	logOut: () => Promise<void>
}

interface IUserApi {
	asyncActions: IAsyncActions
}

const initialState: IUserState = {
	isLoggedIn: false,
	isLoggedOut: false,
}

const initialApi: IUserApi = {
	asyncActions: {
		logIn: noopPromise,
		logOut: noopPromise,
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
			// console.log('ssss', payload.email)
			console.log("Crdentials: Email: ", payload.email);
			console.log("Crdentials: Password: ", payload.password);
			
			setCookie('email', payload.email, true)
		},
		[],
	)
	//payload: { email: string; password: string }
	const logOut = useCallback(() => {
		setState((prevState) => ({
			...prevState,
			isLoggingOut: true,
		}))
		window.location.href = '/login'
	}, [])

	const api = useMemo(() => {
		return {
			asyncActions: {
				logIn,
				logOut,
			},
		}
	}, [logIn, logOut])

	const contextValue = useMemo(() => {
		return [
			{
				...state,
			},
			api,
		] as unknown as [IUserState, IUserApi]
	}, [api, state])

	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	)
}

export const useUserContext = () => useContext(UserContext)
