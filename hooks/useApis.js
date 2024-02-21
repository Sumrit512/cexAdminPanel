import axios from "axios"

export const useFetchUsers = async () => {
    try{
     const {data} = await axios.get(`/api/fetch-users`)
     return data
    } catch(e) {
        console.log('[FETCH_USERS_HOOK]', e)
    }
}