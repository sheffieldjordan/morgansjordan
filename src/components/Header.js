import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary menu">
            <Link href="/" className='item'>
                About Me
            </Link>

            <Link href="/list" className='item'>
                Search
            </Link>

            <Link href="/dropdown" className='item'>
                Dropdown
            </Link>

            <Link href="/translate" className='item'>
                Translate
            </Link>

            <Link href="/pics" className='item'>
                Photo 
            </Link>

        </div>
    )
};

export default Header;
