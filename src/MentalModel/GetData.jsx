import useFetch from "./useFetch"

function GetData() {
    const [getData, loading, error] = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <div>
            {loading && <p>Loading....</p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!loading && !error && getData.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}

export default GetData