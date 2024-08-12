import Link from "next/link"



const Navbar = () => {
  return (
    <div className="max-w-7xl px-5 flex items-center w-full justify-between mx-auto">
      <Link className="font-bold text-2xl" href='/'>LoGo</Link>
      <nav className="flex gap-5 p-4">
        <Link href="/">Home</Link>
        <Link href="/abouttt">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      
    </div>
  )
}

export default Navbar