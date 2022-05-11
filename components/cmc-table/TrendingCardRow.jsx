import React from 'react'
import Image from 'next/image'
import Rate from './Rate'

const styles = {
    TrendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`
}
const TrendingCardRow = ({number,symbol,name,icon,isIncreament,rate}) => {
  return (
    <div className={styles.TrendingCardRow}>
        <p className='opacity-40'>{number}</p>
        <div className="w-full flex">
          <div className="mx-5">
             {icon && <Image src={icon} width={20} height={20} alt="trending" />}
             <p className='font-bold'>
               {name}
               <span className="text-gray-400">{symbol}</span>
             </p>
          </div>
        </div>
        <Rate isIncreament={isIncreament} rate={rate} />
    </div>
  )
}

export default TrendingCardRow