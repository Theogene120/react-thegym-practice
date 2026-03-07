import React from "react"

function Header() {
    return <p className="text-5xl font-bold opacity-20 text-center">todos</p>
}

function Form(){
    const [todo, setTodo] = React.useState([])
    const [id, setId] = React.useState(1)
    const [completeness, setCompleteness] = React.useState()

    function handleSubmit(formData){
        let work = formData.get('todo')
        let newtodo = {id:id, text: work, completed: false}
        setTodo(prev => {
            return [...prev, newtodo]
        })
        setId(id + 1) // set id for next todo
    }

    function handleCheck(id){
        setTodo(prev => prev.map(item => 
            item.id === id ? {...item, completed: !item.completed} : item
        )
        )
    }

    let todos = todo.map(item => (
        <div >
            <input id={item.id} type="checkbox" onChange={() => handleCheck(item.id)} name={item.text} value={item.text} />
            <label htmlFor={item.id}  className={`${item.completed ? "line-through text-gray-700" : " "}`} >{item.text}</label>
        </div>
    ))

    return(
        <div>
            <form action={handleSubmit} className="mt-10 flex border border-black rounded-full">
                <input className="outline-none w-full rounded-full pl-4" type="text" name="todo" />
                <button className="m-1 mr-4 rounded-full bg-[#019090] text-white font-extrabold p-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </button>
            </form>
            {todos}
           
        </div>
    )
}

export default function Todo(){
    return (
    <div className="m-5">
        <Header />
        <Form />
    </div>
    )
}