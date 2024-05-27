import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'
import { AnimatedCounter } from '../AnimatedCounter'

const TotalBalanceBox = ({accounts = [], totalBanks, totalCurrentBalance }:TotlaBalanceBoxProps) => {


  return (
    <section className='total-balance'>
    <div className='total-balance-chart'>
        { /* Doughnut chart */ }
    </div>
    <div className='flex flex-col flex-center gap-6'>
        <h2 className='header-2'>
            Bankszámlák: {totalBanks}
            
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label flex-center'>
            Egyenleg
          </p>
          <p className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={totalCurrentBalance} />
            
          </p>
        </div>

    </div>
    </section>
  )
}

export default TotalBalanceBox