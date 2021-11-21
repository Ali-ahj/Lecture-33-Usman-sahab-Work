import React from 'react';
import './productstyles.css';
const Product = ({ title, price, onAddToCart }) => {
	// var title = props.title;---as we have destructure Props hence no need to use title like this
	var priceClass = price < 500 ? 'orange' : 'green';
	return (
		<div>
			<h1 style={{ backgroundColor: 'red' }}>{title}</h1>
			<div className={priceClass}>
				<b>Price :</b>
				{price}
				<button
					onClick={() => {
						onAddToCart(title);
					}}
				>
					Add To Cart
				</button>
			</div>

			<hr />
		</div>
	);
};

export default Product;
