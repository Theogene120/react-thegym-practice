import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)  
    const [error, setError] = useState(null)       

    useEffect(() => {
        setLoading(true)
        setError(null)

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch') // catch bad responses
                return res.json()
            })
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message) // store error message
                setLoading(false)
            })
    }, [url])

    return [data, loading, error] // return all three
}

export default useFetch