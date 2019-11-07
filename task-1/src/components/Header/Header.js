import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
                <div className={'container'}>
                <div className={'mainHeader'}>
                    <div className={'logo'}>
                        <h1 className={'logoName-Lo'}>Lo<span className={'logoName-Go'}>Go</span></h1>
                    </div>
                    <div className={'headerList'}>
                        <ul className={'listName'}>
                            <li className={'list'}>Home</li>
                            <li className={'list'}>Contact</li>
                            <li className={'list'}>Form</li>
                            <li className={'list'}>Img</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export  default Header;