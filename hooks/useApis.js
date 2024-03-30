import axios from "axios"

export const useFetchUsers = async () => {
    try{
     const {data} = await axios.get(`/api/fetch-users`)
     return data
    } catch(e) {
        console.log('[FETCH_USERS_HOOK]', e)
    }
}

export const useFetchTokens = async () => {
    try{
        const{data} = await axios.get(`/api/fetch-token-list`)
        return data
        
    } catch(e) {
        console.log('[FETCH_TOKEN_LIST]',e)
    }
}

export const useFetchOrders = async () => {
    try {
        const {data} = await axios.get(`/api/fetch-orders`)
        return data
    } catch(e) {
        console.log('[FETCH_ORDERS]',e)
    }
}
export const useFetchTrades = async () => {
    try {
        const {data} = await axios.get(`/api/fetch-trades`)
        return data
    } catch(e) {
        console.log('[FETCH_ORDERS_HOOK]',e)
    }
}

export const useFetchKycData = async () => {
    try{
         const {data} = await axios.get(`/api/fetch-kyc-data`)
         return data
    } catch(e){
        console.log('[FETCH_KYC_HOOK]',e)
    }
}

export const useFetchWallets = async () => {
    try{
     
        const {data } = await axios.get(`/api/fetch-wallets`)
        return data

    } catch(e){
        console.log('[FETCH_WALLETS_HOOK]', e)
    }
}

export const useCryptocurrencyWithdrawals = async () => {
    try {
        const {data } = await axios.get(`/api/fetch-withdrawals?type=cryptocurrency`)
        return data
    }catch(e) {
        console.log(e)
    }
}
export const useInrWithdrawals = async () => {
    try {
        const {data } = await axios.get(`/api/fetch-withdrawals?type=inr`)
        return data
    }catch(e) {
        console.log(e)
    }
}