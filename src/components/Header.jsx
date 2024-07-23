import './Header.css'

//import dependencies
import { useState } from 'react'

//import assets
import logo from '../assets/logo.png'
import { ThreeLineHorizontal } from 'akar-icons'

export default function Header () {

    const [menuState, setMenu] = useState(false)
    const changeMenuState = () => {
        setMenu(!menuState)
    }

    return (
        <header className="header-root">
            <div className="header-mobile">
                <button className='header-btn' onClick={changeMenuState}>
                    <ThreeLineHorizontal strokeWidth={2} size={36} />
                </button>
                <img src={logo} alt="" />
                <div className='header-side'>
                    <h1>Vitalidad</h1>
                </div>
            </div>
        </header>
    )
}