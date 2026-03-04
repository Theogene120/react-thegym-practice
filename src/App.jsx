import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'


function Home() {
  return <h1 className='text-2xl font-bold mt-5'>Home Page</h1>;
}

function About() {
  return <h1 className='text-2xl font-bold mt-5'>About Page</h1>;
}

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

// function App(){
//     return(
//         <BrowserRouter>
//             <nav className='m-3'>
//                 <Link to="/">Home</Link>{"  "}| {"  "}
//                 <Link to="/about">About</Link>{' '}| {"  "}
//                 <Link to="/contact">Contact</Link>{'  '}| {'  '}
//                 <Link to="/products">Products</Link>
//             </nav>  

//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path='/products' element={<Products />}>
//                     <Route path='/products/car' element={<Cars />}/>
//                     <Route path='/products/bike' element={<Bikes />}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default App;