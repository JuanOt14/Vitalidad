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

    const menuClassName = menuState ? 'menu-active' : ''

    return (
        <header className="header-root">
            <div className="header-mobile">
                <button className='header-btn' onClick={changeMenuState}>
                    <ThreeLineHorizontal strokeWidth={2} size={36} />
                </button>
                <img src={logo} alt="" />
                <div className={`header-side ${menuClassName}`}>
                    <button className='closebtn' onClick={changeMenuState}>&times;</button>
                    <h1>Vitalidad</h1>
                    <ul>
                        <li><a href='#inicio'>Inicio</a></li>
                        <li><a href='#nosotros'>Nosotros</a></li>
                        <li><a href='#beneficios'>Beneficios</a></li>
                        <li><a href='#productos'>Productos</a></li>
                        <li><a href='#unete'>Unete</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}