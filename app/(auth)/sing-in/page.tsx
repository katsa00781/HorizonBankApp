import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SingIn = () => {
  return (
    <section className='flex flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-in'/>
    </section>
  )
}

export default SingIn