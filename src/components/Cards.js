import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
	return (
		<div className="cards">
			<h1>Check out these EPIC Portuguese destinations!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
				<ul className="cards__items">
						<CardItem 
							src={process.env.PUBLIC_URL + 'images/img-9.jpg'}
							text="Explore the hidden waterfall deep inside Madeira Island"
							label='Adventure'
							path="/services"
						/>
						<CardItem 
							src={process.env.PUBLIC_URL + 'images/img-2.jpg'}
							text="Travel through the Azores Islands"
							label='Explore'
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem 
							src={process.env.PUBLIC_URL + 'images/img-9.jpg'}
							text="Explore the hidden waterfall deep inside Madeira Island"
							label='Adventure'
							path="/services"
						/>
						<CardItem 
							src={process.env.PUBLIC_URL + 'images/img-2.jpg'}
							text="Travel through the Azores Islands"
							label='Explore'
							path="/services"
						/>
						<CardItem 
							src={process.env.PUBLIC_URL + 'images/img-9.jpg'}
							text=""
							label='Adventure'
							path="/services"
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards
