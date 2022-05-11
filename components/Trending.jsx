import React, {useState} from 'react'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'
import Rate from './cmc-table/Rate'
import TrendingCard from './TrendingCard'

const styles = {
    trendingWrapper:`mx-auto max-w-screen-2xl`,
    h1:`text-3xl text-white`,
    flexCenter: `flex items-center`
}
const trendingdata = [
    {
        number:1,
        symbol: "BTC",
        name: "Bitcoin",
        icon: btc,
        isIncreament: true,
        rate: "23.1%"
    },
    {
        number:2,
        symbol: "USDT",
        name: "Tether",
        icon: btc,
        isIncreament: false,
        rate: "3.1%"
    },
    {
        number:3,
        symbol: "BTC",
        name: "Bitcoin",
        icon: btc,
        isIncreament: true,
        rate: "23.1%"
    }
]
const Trending = () => {
    const [checked, setChecked] =  useState(false)
  return (
    <div className='text-white'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}>Todays Crypto curency prices by Market</h1>
                <div className='flex'>
                <p className='text-gray-400'>Hightlights &nbsp;</p>
                <ReactSwitch checked={checked} onChange={() => setChecked(!checked)} />
            </div>
            </div>
            
        </div>
        <br/>
        <div className="flex">
            <p className='text-gray-400'> The global market cap is $2.90T </p>
            <span>
                <Rate isIncreament={true} rate='0.23%'/>
            </span> 
            <p>&nbsp; decrease over the lasat  day. <span className=''>Click to view more</span></p>
        </div>
        <br/>

        <div className={styles.flexCenter}>
    
          <TrendingCard title='Trending' icon={fire} trendingData={trendingdata}/> 
          <TrendingCard title='Biggest Gainers' icon={gainers} trendingData={trendingdata}/> 
          <TrendingCard title='Recently Added' icon={recent} trendingData={trendingdata}/> 
          
        </div>
        

    </div>
  )
}

export default Trending