'use server'
 
import { cookies } from 'next/headers'
 
export const LoginCookies= (data)=> {
  cookies().set('isWalletConnected', data)
  // or
  // cookies().set('name', 'lee', { secure: true })
  // or
  // cookies().set({
  //   name: 'name',
  //   value: 'lee',
  //   httpOnly: true,
  //   path: '/',
  // })
}