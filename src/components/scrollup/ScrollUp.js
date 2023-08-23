import React, { useState, useEffect, useCallback } from 'react';
import './scrollup.css';

const ScrollUp = () => {
    const [showScroll, setShowScroll] = useState(false);

    // eslint-disable-next-line no-unused-vars
    const handleScroll = useCallback(() => {
        if (window.scrollY >= 560) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`scrollup ${showScroll ? 'show-scroll' : ''}`} onClick={scrollToTop}>
            <i className='uil uil-arrow-up scrollup__icon'></i>
        </div>
    );
};

export default ScrollUp;
