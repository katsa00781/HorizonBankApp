import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { secureHeapUsed } from 'crypto'
import React from 'react'

const Home = () => {

    const loggedIn = {firstName: 'Zsolt'}
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
        </div>
    </section>
  )
}

export default Home