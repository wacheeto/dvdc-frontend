import { Facebook, Instagram, X } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral p-10 text-white">
        <aside>
            <p className='font-bold text-5xl mb-5 '>logo</p>
            <p>
                Clinic
            <br />
                Providing reliable service since 2000
            </p>
        </aside>
        <nav>
            <h6 className="text-xl text-whites">Socials</h6>
            <div className="grid grid-flow-col gap-4">
                <a href='https://www.facebook.com/' target='blank'>
                    <Facebook sx={{fontSize:'32px'}}/>
                </a>
                <a href='https://www.instagram.com/' target='blank'>
                    <Instagram sx={{fontSize:'32px'}}/>
                </a>
                <a href='https://www.x.com/' target='blank'>
                    <X sx={{fontSize:'32px'}}/>
                </a>
            </div>
        </nav>
        </footer>
  )
}

export default Footer