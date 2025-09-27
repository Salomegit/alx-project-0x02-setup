import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
        <nav>
            <>
                <Link href="/home">Home</Link>
                <Link href="/about" >
                    About
                </Link>
                <Link href="/posts">Contact</Link>
            </>
        </nav>
    </div>
  )
}

export default Header