// src/hooks/useSanityClientFetch.js
import { useEffect, useState } from 'react'
import sanityClient from '../sanity/sanityClient'

const useSanityClientFetch = (query, params = {}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let isMounted = true

        sanityClient
            .fetch(query, params)
            .then((res) => {
                if (isMounted) {
                    setData(res)
                    setLoading(false)
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err.message || 'Failed to fetch Sanity data')
                    setLoading(false)
                }
            })

        return () => {
            isMounted = false
        }
    }, [query, JSON.stringify(params)])

    return { data, loading, error }
}

export default useSanityClientFetch
