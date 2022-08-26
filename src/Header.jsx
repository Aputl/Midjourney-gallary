import '../index.css'
import { Link } from 'react-router-dom'


const header = () => {
  return (
    <header className="text-white p-4 bg-gradient-to-r from-black to-red-900">
    <nav className="flex justify-between mx-auto container items-center">
        <div className="text-4xl"><h1><a href="/Midjourney-gallary/">Midjourney Gallary</a></h1></div>
        <div className="text-2xl">
          <Link to="/Midjourney-gallary/About">
            <a className="mx-2">About</a>
          </Link>
        </div>
    </nav>
  </header>
  )
}

export default header