import { useEffect, useState } from "react";

const useGetUserById = (id) => {

    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError('')

            try {
                const [usersRes, postsRes] = await Promise.all([
                    fetch('https://jsonplaceholder.typicode.com/users'),
                    fetch('https://jsonplaceholder.typicode.com/posts')
                ])

                if (!usersRes.ok || !postsRes.ok) throw new Error('Unknown Error!')

                const [usersData, postsData] = await Promise.all([
                    usersRes.json(),
                    postsRes.json()
                ])

                setUser(usersData.find(u => u.id === id))

                setPosts(postsData.filter(p => p.userId === id))

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [id])

    return { user, posts, loading, error }
}

export default useGetUserById;