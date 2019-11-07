import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
    return(
        <div className="main-container">
        <div className={'sidebar'}>
            <aside className="sidebar">
                <header className="header-sidebar">
                    <h1></h1>
                    <nav className="main-nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="filter block">
                        <p className="filter-title">Filter</p>
                        <form action="#">
                            <ul className="filter-list">
                                <li>
                                    <input type="checkbox" id="all"/>
                                        <label htmlFor="all">All Works</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="web"/>
                                        <label htmlFor="web">web design</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="illustration"/>
                                        <label htmlFor="illustration">illustration</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="photography"/>
                                        <label htmlFor="photography">photography</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="wallpapers"/>
                                        <label htmlFor="wallpapers">wallpapers</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="brochures"/>
                                        <label htmlFor="brochures">brochures</label>
                                </li>
                            </ul>
                        </form>
                    </div>
                </header>
                <footer className="footer-sidebar">
                    <p className="copyright">© 2014 Kappe, All Rights Reserved</p>
                </footer>
            </aside>
        </div>
        </div>
    )
};

export default Sidebar;