import { useState } from "react";

const useRequest = ({urlProp, methodProp}) => {
    const [loading, setLoading] = useState(false)

    const sendRequest = async (body) => {
        setLoading(true)
        const res = await fetch(urlProp,{
            method:methodProp,
            headers:{
                "Content-Type":"aplication/json",
                "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
            },
            body: !!body && methodProp !== "GET" ? JSON.stringify(body) : undefined
        })
        const data = await res.json();
        setLoading(false)
        return data
    }
    
    return {loading, sendRequest}
}

export default useRequest