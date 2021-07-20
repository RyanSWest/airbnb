import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'

function Header() {
    return (
        <div className = "Header">
            <h1>Header</h1>
            <img 
            className= 'header__icon'
            src = "https://tse2.mm.bing.net/th?id=OIP.ilW20z977yedyTPY80QsFgHaCw&pid=Api&P=0&w=425&h=159"
            />

            <div className = 'header__center'>
                <form>
                    <input className = 'search'/>
                    <SearchIcon/>
                </form>
            </div>
        </div>
    )
}

export default Header
