

export default function Header(){
  return <header className="flex justify-between bg-[#21222A] py-5 px-8">
      <img src="./react.svg" alt="react log" width='65px' />
      <nav className="flex justify-center items-center">
        <ul className="nav-list flex gap-8 font-semibold text-[#61DAFB] ">
          <li className="flex justify-center">Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
}