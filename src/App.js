import React from 'react';
import Counter from './components/Counter';
import Product from './components/Product';
const handleAddtoCartClick = (title) => {
	alert('Add to Cart Clicked for ' + title);
};

function App() {
	const [count, setCount] = React.useState(5);
	const handleIncrement = () => {
		console.log('Increment Called');
		setCount(count + 1);
	};
	const handleDecrement = () => {
		setCount(count - 1);
	};
	return (
		<div>
			<h1 style={{ backgroundColor: 'aqua' }}>Components Example</h1>
			<Counter
				count={count}
				handleIncrement={handleIncrement}
				handleDecrement={handleDecrement}
			/>
			<Product title="Audi" price="400" onAddToCart={handleAddtoCartClick} />
			<Product title="Civic" price="600" onAddToCart={handleAddtoCartClick} />
			<Product price="500" title="Suzuki" onAddToCart={handleAddtoCartClick} />
		</div>
	);
}

export default App;
