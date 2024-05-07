'use server'
 
import { cookies } from 'next/headers'
 
export const LoginCookies= (data)=> {
  cookies().set('isWalletConnected', data)
}

export const LoginAccountCookies= (data)=> {
  cookies().set('isAccount', data)
}