import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'
import React from 'react';


function Home() {
  return <h1 className='text-2xl font-bold mt-5'>Home Page</h1>;
}

function About() {
  return <h1 className='text-2xl font-bold mt-5'>About Page</h1>;
}gt

function Contact() {
  return <h1 className='text-2xl font-bold mt-5'>Contact Page</h1>;
}

function Products(){
    return(
        <div>
            <p className='text-2xl font-bold my-5'>This is Products component</p>
            <nav>
                <Link to='/products/car'>Car</Link>   |{'   '}
                <Link to='/products/bike'>Bike</Link>
            </nav>
            <Outlet />
        </div>
    )
}

function Cars(){
    return (
        <div>
        <h2 className='text-2xl font-bold mt-5'>Cars</h2>
        <ul className='list-disc ml-10'>
            <li>Audi</li>
            <li>BMW</li>
            <li>Volvo</li>
        </ul>
        </div>
    );
}

function Bikes(){
    return (
    <div>
      <h2 className='text-2xl font-bold mt-5'>Bikes</h2>
      <ul className='list-disc ml-10'>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

// Transtion stuff

function Transtion(){
    const [text, setText] = React.useState('')
    const [result, setResult] = React.useState('')
    const [isPending, startTransaction] = React.useTransition()

    const handlerChanges = (e) => {
        setText(e.target.value)
        startTransaction(() =>{
            setResult(e.target.value)
        })
    }

    return(
        <div className='m-6'>
            <input className='outline-none border-2 border-black rounded-md pl-2' value={text} onChange={handlerChanges} />
            {isPending ? (<p>Loading..........</p>) : (<p>Search result for: {result}</p>)}
        </div>
    )
}

// HOC codes goes here

function withBorder(WrappedComponent){
    return function NewComponent(props){
        return(
            <div className='border-2 border-blue-500 p-2'>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

function Greeting(props){
    return(<p>Hello, {props.name}</p>)
}

const GreetingWithBorder = withBorder(Greeting)


function App(){
    return(
        <>
            <BrowserRouter>
                <nav className='m-3'>
                    <Link to="/">Home</Link>{"  "}| {"  "}
                    <Link to="/about">About</Link>{' '}| {"  "}
                    <Link to="/contact">Contact</Link>{'  '}| {'  '}
                    <Link to="/products">Products</Link>
                </nav>  

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path='/products' element={<Products />}>
                        <Route path='/products/car' element={<Cars />}/>
                        <Route path='/products/bike' element={<Bikes />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Transtion />
            <div className='m-10'>
                <Greeting name='Theogene'/>
                <GreetingWithBorder name='Cynthia'/>
            </div>
        </>
    )
}

export default App;