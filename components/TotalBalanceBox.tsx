
import React from 'react'
import { formatAmount } from '../lib/utils';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

// a totalbalanceboxnak a props-okat a pages.tsx-ben használjuk fel onnan adjuk át 

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
    return (
        <section className='total-balance'>
            <div className='total-balance-chart'>
                <DoughnutChart accounts={accounts}  />
            </div>

            <div className='flex flex-col gap-6'>
                <h2 className='header-2'>
                    Bankszámla: {totalBanks}
                </h2>
                <div className='flex flex-col gap-2'>
                    <p className='total-balance-label'>
                        Teljes egyenleg
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
