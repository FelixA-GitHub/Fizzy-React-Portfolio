import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: 'Data Mammoth',
            category: 'portfolio',
            description: 'A simple search engine for movies, with a favorites list'
        },
        {
            name: 'RegalCare, Inc',
            category: 'portfoliio',
            description: 'A website dedicated to traveling medical professional whereby they can search and apply for short-term assignments in different cities. Employers can post, edit, and delete jobs as well.'
        },
        {
            name: 'Run Buddy',
            category: 'portfolio',
            description: 'A website that offers Fitness Training Services.'
        },
        {
            name: 'Under Construction',
            category: 'portfolio',
            description:
                'New Project Coming Soon!'
        },
        {
            name: 'Under Construction',
            category: 'portfolio',
            description:
                'New Project Coming Soon!'
        },
        {
            name: 'Under Construction',
            category: 'portfolio',
            description:
                'New Project Coming Soon!'
        }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
