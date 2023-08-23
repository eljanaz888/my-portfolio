import React from 'react';
import './work.css'

const WorksItems = ({ item }) => {
    return (
        <div className='work__card' key={item.id}>
            <img src={item.image} alt='Work img' className='work__img' />
            <h3 className='work__title'>{item.title}</h3>
            <a href={item.link} className='work__button' target='_blank' rel="noopener noreferrer">
                Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
            </a>
        </div>
    )
}

export default WorksItems