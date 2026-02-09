import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-black h-18 text-white shadow-lg ">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">logo</a>
        </div>
        <div className='hidden md:flex'>
            <a className="btn  btn-ghost border-none font-normal">Home</a>
            <a className="btn bg-transparent btn-ghost border-none font-normal">Services</a>
            <a className="btn bg-transparent btn-ghost border-none font-normal">About</a>
        </div>
        <div className="flex-none md:hidden">
            <ul className="menu menu-horizontal px-1">
            <li>
                <a className="btn bg-transparent btn-ghost border-none font-normal">Link</a></li>
                <li>
                    <details>
                        <summary className="btn bg-transparent btn-ghost border-none font-normal ">Parent</summary>
                        <ul className=" rounded-t-none p-2 bg-zinc-950 text-white">
                            <li><a className="btn bg-transparent btn-ghost border-none font-normal" href='#'>Link 1</a></li>
                            <li><a className="btn bg-transparent btn-ghost border-none font-normal">Link 2</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        </div>
  )
}

export default Navbar