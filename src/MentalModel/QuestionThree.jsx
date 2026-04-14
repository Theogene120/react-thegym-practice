import { useState, useEffect } from 'react'

function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {

        let isMounted = true
        // start loading
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false) // done loading
            })
        
        return () => {     // Function for cleaning up and avoid memory leaks
            isMounted = false
        }
    }, [refresh]) // ← re-runs every time refresh changes

    return (
        <div className='p-5'>
            <h1 className='text-3xl font-bold mb-4'>Posts</h1>

            <button
                onClick={() => setRefresh(prev => prev + 1)}
                className='mb-5 px-4 py-2 bg-purple-600 text-white rounded'
            >
                Refresh
            </button>

            {/* loading indicator */}
            {loading && <p className='text-center text-lg'>Loading...</p>}

            {/* posts list */}
            {!loading && (
                <ul>
                    {posts.map(post => (
                        <li key={post.id} className='mb-3 border p-3 rounded'>
                            <h2 className='font-semibold'>{post.title}</h2>
                            <p className='text-sm'>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Posts