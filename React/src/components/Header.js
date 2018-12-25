import React from 'react';
import FirstMenu from './FirstMenu';
import SecondMenu from './SecondMenu';
import Layer2 from '../images/Layer2.png'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className='menu'>
                    <div className='part1'>
                        <div className='search'>
                            <h3>Blog template</h3>
                            <img src={Layer2} alt='img'/>
                        </div>
                        <FirstMenu/>
                    </div>
                    <SecondMenu/>
                </div>
            </nav>
        </header>
    );
};

export default Header;