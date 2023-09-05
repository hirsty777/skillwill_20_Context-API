import { useEffect, useState } from "react"

//wasDeleted prop is used to rerender main page
const useFecth = ({url, method, wasDeleted=false}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoadig] = useState(false)
    
    useEffect(() => {
        setLoadig(true)
        fetch(url,{
            method,
            headers:{
                "Content-Type":"aplication/json",
                "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
            }
        })
        .then(res => {
            if(!res.ok) throw new Error("Response Failed")
            return res.json()
        })
        .then(data => setResponse(data))
        .catch(err => setError(err))
        .finally(() => setLoadig(false))

        return () => {
            setResponse(null)
            setError(null)
            setLoadig(false)
        }

    }, [url, method, wasDeleted])

    return {response, error, loading}
}

export default useFecth