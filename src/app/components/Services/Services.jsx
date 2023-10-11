import React from 'react'

import ServicesCards from './ServicesCards/ServicesCards';
import styles from './Services.module.css'
import ServicesHeading from './ServicesHeading/ServicesHeading';
const Services = () => {
    const cardsData = [
        {
            icon: <i className="fas fa-heart"></i>,
            title: 'Title 1',
            description: 'Description for card 1.',
        },
        {
            icon: <i className="fas fa-star"></i>,
            title: 'Title 2',
            description: 'Description for card 2.',
        },
        {
            icon: <i className="fas fa-cloud"></i>,
            title: 'Title 3',
            description: 'Description for card 3.',
        },
        {
            icon: <i className="fas fa-globe"></i>,
            title: 'Title 4',
            description: 'Description for card 4.',
        },
        {
            icon: <i className="fas fa-tree"></i>,
            title: 'Title 5',
            description: 'Description for card 5.',
        },
        {
            icon: <i className="fas fa-moon"></i>,
            title: 'Title 6',
            description: 'Description for card 6.',
        },
    ];
    return (
        <>
            <div className={styles.services_container}>
                <ServicesHeading />
                <div className={styles.card_container}>
                    {cardsData.map((card, index) => (
                        <ServicesCards key={index} {...card} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services