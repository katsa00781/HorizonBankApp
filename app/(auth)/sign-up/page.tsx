import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const SingUp = async () => {

  return (
    <div className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up' />
    </div>
  )
}

export default SingUp