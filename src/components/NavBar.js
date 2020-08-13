import React from 'react'
import '../navbar.css'
import { useEffect } from 'react'
import { useState } from 'react'




function NavBar() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="../Netflix-Logo.wine.png"
                alt="Netflix Logo"

            />
            <img
                className="nav__avatar"
                src="../userIconcolor.png"
                alt="User avatar"

            />
        </div >
    )
}
export default NavBar