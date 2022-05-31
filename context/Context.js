import { createContext, useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis';
import { useMoralisQuery } from 'react-moralis';

import {
  dogeAbi,
  daiAbi,
  usdcAbi,
  linkAbi,
  dogecoinAddress,
  linkAddress,
  daiAddress,
  usdcAddress
}from '../lib/constants'

export const CoinMarketContext = createContext();

export const CoinMarketProvider = ({children}) => {

    const { isAuthenticated,user,Moralis}  = useMoralis()

    const [currentAccount, setCurentAccount] = useState('')
    const [openBuyCrptoModal, setOpenBuyCrptoModal] = useState('')
    const [fromToken, setFromToken ] = useState('')
    const [toToken, setToToken] = useState('')
    const [amount, setAmount ] = useState('')

    useEffect(() => {
      if(isAuthenticated){
        const account = use.get('ethAddres');
        setCurrentAcount(account);
      }    
    }, [isAuthenticated])
    
    const getToAddress = () => {
       if(fromToken === 'Dai') return daiAddress
       if(fromToken === 'Dogecoin') return dogecoinAddress
       if(fromToken === 'Link') return linkAddress
       if(fromToken === 'Usdc') return usdcAddress
    }
    const getToAbi = () => {
      if(fromToken === 'Dai') return daiAbi
      if(fromToken === 'Dogecoin') return dogeAbi
      if(fromToken === 'Link') return linkAbi
      if(fromToken === 'Usdc') return usdcAbi
   }

   const mint = async () => {
     try {
        if(fromToken === 'ETH'){
          if(!isAuthenticated) return

          await Moralis.enableWeb3()
          const getContractAddress = getToAddress()
          const abi = getToAbi()

          let option = {
            contractAddress: contractAddress,
            functionName: 'mint',
            abi: abi,
            params: {
              to: currentAccount,
              amount: Moralis.Units.Token(amount)
            }
          }
          sendEth()
        }
     } catch (error) {
       console.error(error.message)
     }
   }

   const sendEth = () => {
     if(!isAuthenticated) return
     const contractAddress = getToAddress();
     let options = {
       type: 'native', 
       amount: Moralis.Units.ETH('0.01'),
       receiver: contractAddress,
     }
   }

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