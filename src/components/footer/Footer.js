import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Elo</h1>

                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href='#portfolio' className='footer__link'>Projects</a>
                    </li>

                    <li>
                        <a href='#contact' className='footer__link'>Contact</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a rel='noreferrer' href='https://www.instagram.com/eljana.zeqiraj/' className='footer__social-link' target="_blank"><i class="bx bxl-instagram"></i></a>
                    <a rel='noreferrer' href='https://www.linkedin.com/in/eljanazeqiraj/' className='footer__social-link' target="_blank"><i class="bx bxl-linkedin"></i></a>
                    <a rel='noreferrer' href='https://github.com/eljanaz888' className='footer__social-link' target="_blank"><i class="bx bxl-github"></i></a>
                </div>

                <span className='footer__copy'>&#169; Eljana Zeqiraj. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer