import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
    <div className='cards' >
        <h1>Check out these EPIC Destination! </h1>
        <div className='cards__container'>
            <div className='card__wrapper'>
                <ul className='cards__items' >
                    <CardItem
                    src='images/img-9.jpg'
                    text="Explore the hidden waterfall deep 
                    inside the Amazon Jungle"
                    label="Adventure"
                    path='/services'
                    />
                    <CardItem
                    src='images/img-2.jpg'
                    text="Travel through the Islands of Bali
                    in a Private Cruise"
                    label="Luxury"
                    path='/services'
                    />
                </ul>
                <ul className='cards__items' >
                    <CardItem
                    src='images/img-3.jpg'
                    text="Set Sail in the Atlantic Ocean visiting 
                    Uncharted Waters"
                    label="Mystery"
                    path='/services'
                    />
                    <CardItem
                    src='images/img-4.jpg'
                    text="Experience Football On Top the Himilayan
                    Mountains"
                    label="Adventure"
                    path='/services'
                    />
                    <CardItem
                    src='images/img-5.jpg'
                    text="Get a Luxury Hotels With Good Prices"
                    label="Luxury"
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Cards
