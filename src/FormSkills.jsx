
export default function FormSkills() {
  
  function signUp(formData) {
    let email = formData.get('email')
    let password = formData.get('password')
    console.log(email)
    console.log(password)
  }
  
  return (
    <section>
      <h1 className="text-2xl font-bold text-center">Signup form</h1>
      <form action={signUp} method="post" className="flex flex-col justify-center items-center gap-6 py-10">
        <label htmlFor="email" className="-ml-40">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" className="outline-none border border-black rounded-lg px-2 h-8 w-60"/>
        
        <label htmlFor="password" className="-ml-32">Password:</label>
        <input id="password" type="password" name="password" className="outline-none w-60 border border-black rounded-lg px-2 h-8"/>
        <br />
        
        <button className="bg-sky-500 hover:bg-sky-700 duration-100 text-white p-2 px-6 rounded-lg">Submit</button>
        
      </form>
    </section>
  )
}
