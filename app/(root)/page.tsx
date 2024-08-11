import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName : "Kácsor", lastName : "Zsolt", email : "katsa007@gmail.com"}
  return (
    <div className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type= "greeting" 
                title= "Welcome"
                user= {loggedIn?.firstName || 'Vendég'}
                subtext= "Lépj be és manageld hatékonyan a fiókod és a tranzakcióidat! "/>
                <TotalBalanceBox
            accounts= {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.35}/>
            </header>
            
            RECENT TRANSTACTIONS

        </div>

        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 1250.35}, {currentBalance: 1250.35}]}  
        account = {false}
         />
    </div>
  )
}

export default Home