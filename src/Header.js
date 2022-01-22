import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='tittleHead'><div className='longText'>The</div><span className='headOfText'>Serin</span></div>
            <ul className='navLinkFlex' type='none'>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/home" className="headerNavLink">Home</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/bollywood" className="headerNavLink">Bollywood</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/hollywood" className="headerNavLink">HollyWood</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/fitness" className="headerNavLink">Fitness</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/technology" className="headerNavLink">Technology</NavLink></li>
                <li><NavLink style={({isActive})=>{return{"color":isActive? "red":''}}} to="/food" className="headerNavLink">Food</NavLink></li>



            </ul>
        </div>
    )
}

export default Header
