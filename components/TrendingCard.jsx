import React from 'react'
import Image from 'next/image'
import MoreButton from './cmc-table/MoreButton'
import TrendingCardRow from './cmc-table/TrendingCardRow'

const styles = {
    tradingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
    trendingCardWrapper: `flex items-center justify-between`
}
const TrendingCard = ({icon,trendingData,title}) => {
  return (
    <div className={styles.tradingCard}>
        <div className={styles.trendingCardWrapper}>
           <div className="flex">
               {icon && <Image src={icon} width={27} height={27} alt="icon"/>} 
               &nbsp;

               <p className='font-bold'>{title}</p>
           </div>
           <MoreButton />
        </div>  
        <br />
        {trendingData?.map((item,index) => {
          const {number,symbol,name,icon,isIncrement,rate} = item;
          return (
            <TrendingCardRow  key={index} number={number} symbol={symbol}  isIncrement={isIncrement} rate={rate} name={name} icon={icon}/>
          )
        }) }
    </div>
  )
}

export default TrendingCard