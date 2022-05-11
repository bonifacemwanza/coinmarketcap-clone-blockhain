import { createContext, useState, useEffect } from 'react'

export const CoinMarketContext = createContext();
export const CoinMarketProvider = ({children}) => {

    const getTopTenCoins = async () => {
        try {
             const data = await fetch('api/getTopTen').then(result => {return result.json()}).catch(e => console.log(e.message))
            
             return data?.data?.data
        } catch(e) {
           console.log(e.message)
        }
    }
    return (
        <CoinMarketContext.Provider
          value = {{
            getTopTenCoins
          }}
        >
            {children}
        </CoinMarketContext.Provider>
    )
}