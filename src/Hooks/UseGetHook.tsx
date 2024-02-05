import { useState } from 'react'
import config from '../Helpers/Config.json'

const UseGetHook = () => {
    const [Data, setData] = useState<any>([])
    const fetchAllInvoice = () => {
        fetch(`${config.BaseURL}/getAllInvoice`, {
            method: "GET",
            headers: { 'content-type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(res => {
            if (res.response.status === 200) {
                let temp: any = []
                temp = res.response.data;
                setData([...temp])
                console.log(temp, 'dataaa')
            }
            else {
                console.log(res.error.message)
            }
        }).catch(err => console.log(err, 'error'))
    }

    return {
        fetchAllInvoice,
        Data
    }
}

export default UseGetHook