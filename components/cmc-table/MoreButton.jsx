import React from 'react'
import RightArrow from '../../assets/svg/rightArrow'

const styles = {
    button: `textt-[#6188FF] flex items-center cursor-poitner whitespace-nowrap justify-spacce-between`,
}
const MoreButton = () => {
  return (
    <div  className={styles.button}>More <RightArrow /></div>
  )
}

export default MoreButton