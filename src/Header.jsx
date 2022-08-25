import '../index.css'


const header = () => {
  return (
    <header className="text-white p-4 bg-gradient-to-r from-black to-red-900">
    <nav className="flex justify-between mx-auto container items-center">
        <div className="text-4xl"><h1><a href="/">Midjourney Gallary</a></h1></div>
        <div className="text-2xl">
            <a className="mx-2" href="./About">About</a>
        </div>
    </nav>
  </header>
  )
}

export default header