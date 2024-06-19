import HeaderBox from '@/components/ui/HeaderBox'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { secureHeapUsed } from 'crypto'
import React from 'react'

const Home = () => {

    const loggedIn = {firstName: 'Zsolt', lastName: 'Kacsor', email: 'katsa00781@gmail.com'}
  return (
    <section className='home'>
        <div className='home-content'>
         <header className='home-header'>
            <HeaderBox
            type= 'greeting'
            title= 'Szia'
            user= {loggedIn.firstName || 'Guest'}
            subtext= 'Hozzáférés és a tranzakciók kezelése' />
            < TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.5} />
         </header>

          RECENT TRANSACTION

        </div>

        <RightSidebar
        user={loggedIn}
        transactions= {[]}
        banks={[{currentBalance: 1250000}, {currentBalance: 1210}]} />
    </section>
  )
}

export default Home