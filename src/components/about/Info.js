import React from 'react'

const Info = () => {
    return (
        <div className='about__info grid'>
            <div className='about__box'>
                <i class="uil uil-award about__icon"></i>
                <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>1+ Years Working</span>
            </div>

            <div className='about__box'>
                <i class="uil uil-briefcase-alt about__icon"></i>
                <h3 className='about__title'>Completed</h3>
                <span className='about__subtitle'>20+ Projects</span>
            </div>

            <div className='about__box'>
                <i class="uil uil-headphones about__icon"></i>
                <h3 className='about__title'>Support</h3>
                <span className='about__subtitle'>Online 24/7</span>
            </div>

        </div>
    )
}

export default Info