'use server'

import { cookies } from 'next/headers'

export const setCookie = (
	key: string,
	value: string,
	isExpires?: boolean | Date,
) => {
	const expires = new Date()
	expires.setTime(expires.getTime() + 3600 * 1000)

	const options = isExpires ? { expires, path: '/' } : { path: '/' }
	console.log(options)
	cookies().set(key, value, options)
}

export const removeCookie = (key: string) => {
	cookies().delete(key)
}

export const getCookie = (key: string) => {
	cookies().get(key)
}
