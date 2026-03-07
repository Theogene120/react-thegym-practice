import React from "react"

function Header() {
    return <p className="text-[120px] font-bold opacity-15 text-center">todos</p>
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

    function handleDelete(id){
        setTodo(prev => prev.filter(item => item.id != id))
    }

    let todos = todo.length == 0? <p className="text-center text-3xl my-10 opacity-60">No more Task today yet !</p> : todo.map(item => (
        <div key={item.id} className="flex mt-8  justify-between">
            <div className="flex gap-2 ml-2">
                <input id={item.id} type="checkbox" onChange={() => handleCheck(item.id)} name={item.text} value={item.text} className="w-5"/>
                <label htmlFor={item.id}  className={`${item.completed ? "line-through text-gray-700 text-lg" : "text-lg"}`} >{item.text}</label>
            </div>
            <button onClick={() => handleDelete(item.id)} className="text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
            </button>
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