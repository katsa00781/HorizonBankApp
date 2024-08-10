import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName : "Zsolt"}
  return (
    <div className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type= "greeting" 
                title= "Welcome"
                user= {loggedIn?.firstName || 'Vendég'}
                subtext= "Lépj be és manageld hatékonyan a fiókod és a tranzakcióidat! "/>
            </header>
            <TotalBalanceBox
            accounts= {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}/>
        </div>
    </div>
  )
}

export default Home