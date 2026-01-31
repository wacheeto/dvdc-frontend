import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-purple-700 shadow-sm h-24 text-white z-50">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">logo</a>
        </div>
        <div className='hidden md:flex'>
            <a className="btn btn-ghost font-normal">Home</a>
            <a className="btn btn-ghost font-normal">Services</a>
            <a className="btn btn-ghost font-normal">About</a>
        </div>
        <div className="flex-none md:hidden">
            <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
                <li>
                    <details>
                        <summary>Parent</summary>
                        <ul className="bg-purple-700 rounded-t-none p-2">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        </div>
  )
}

export default Navbar