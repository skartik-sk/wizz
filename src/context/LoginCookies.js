'use server'
 
import { cookies } from 'next/headers'
 
export const LoginCookies= (data)=> {
  cookies().set('isWalletConnected', data)
  console.log("cookies:", cookies())
  console.log("cookies name:", cookies().get('name'))
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