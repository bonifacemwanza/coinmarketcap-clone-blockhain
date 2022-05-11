import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'
import ChevronUp from '../../assets/svg/chevronUp'

const styles = {
    rate: `rate flex items-center`,
    red: `ml-2 text-[#EA394]`,
    green: `ml-2 ttext-[#17C784]`
}
const Rate = ({isIncreament, rate}) => {
  return (
    <div className={styles.rate}>
        {isIncreament? <ChevronUp  fill='#17C784'/> : <ChevronDown fill='#EA3943' />}
        <p className={isIncreament ? styles.green : styles.red}>{rate}</p>
    </div>
  )
}

export default Rate