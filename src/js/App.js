
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ThemeBtn from './components/button/index';
import Footer from './components/footer/index';
import Header from './components/header/index';
import Navbar from './components/navbar/index';
import NavbarRight from './components/navbar/navbar-right';

export default () => {
    return (
        <BrowserRouter>
            <NavbarRight />
            {/* <Header />
            <ThemeBtn href="/" className="theme-btn-primary">
                sign in
            </ThemeBtn>
            <br />
            <br />
            <ThemeBtn className="theme-btn-secondery">
                Sign Up
            </ThemeBtn>
            <br />
            <br />
            <ThemeBtn className="theme-btn-outline-pink">
                Sign Up
            </ThemeBtn>
            <br />
            <br />
            <ThemeBtn className="theme-btn-submit">
                Sign Up
            </ThemeBtn>
            <Footer /> */}
        </BrowserRouter>
    );
}