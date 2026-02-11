export default function Joke(props) {
    return (
        <>
            <p className="m-5 font-bold text-purple-500">Setup: {props.setup}</p>
            <p className="m-5 mx-10 font-semibold">Punchline: {props.punchline}</p>
            <hr />
        </>
    )
}