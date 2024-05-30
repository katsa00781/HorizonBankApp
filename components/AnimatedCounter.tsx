'use client'
import React from 'react'
import CountUp from 'react-countup'


export const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <CountUp start={0} end={amount} duration={2.75} decimal='.' decimals={2} prefix='HUF' /> 
    </div>
  )
}
