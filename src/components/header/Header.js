import React, { useState, useEffect } from 'react'
import "./header.css";


const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['#home', '#about', '#skills', '#services', '#portfolio', '#contact'];

            const scrollPosition = window.scrollY + 200; // Adjust as needed
            const activeSection = sections.find(section => {
                const sectionElement = document.querySelector(section);
                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop;
                    const sectionBottom = sectionTop + sectionElement.offsetHeight;
                    return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
                }
                return false;
            });

            if (activeSection) {
                setActiveNav(activeSection);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavLinkClick = (navId, event) => {
        event.preventDefault();
        setActiveNav(navId);

        const sectionElement = document.querySelector(navId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>Elo</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <a
                                href='#home'
                                onClick={(event) => handleNavLinkClick('#home', event)}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className='uil uil-estate nav__icon'></i>Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#about'
                                onClick={(event) => handleNavLinkClick('#about', event)}
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className='uil uil-user nav__icon'></i>About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#skills'
                                onClick={(event) => handleNavLinkClick('#skills', event)}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className='uil uil-file-alt nav__icon'></i>Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#services'
                                onClick={(event) => handleNavLinkClick('#services', event)}
                                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className='uil uil-briefcase-alt nav__icon'></i>Services
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#portfolio'
                                onClick={(event) => handleNavLinkClick('#portfolio', event)}
                                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className='uil uil-scenery nav__icon'></i>Portfolio
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a
                                href='#contact'
                                onClick={(event) => handleNavLinkClick('#contact', event)}
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className='uil uil-message nav__icon'></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header