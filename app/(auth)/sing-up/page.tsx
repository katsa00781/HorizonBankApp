import AuthForm from '@/components/ui/AuthForm'
import React from 'react'

const SingUp = () => {
  return (
    <section className='flex flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up'/>
    </section>
  )
}

export default SingUp