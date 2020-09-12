import React from 'react';
import '../styles/Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id={1}
						title="The Lean Startup"
						price={29.99}
						image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
						rating={5}
					/>
					<Product
						id={2}
						title="The Lean Startup"
						price={29.99}
						image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id={3}
						title="The Lean Startup"
						price={29.99}
						image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
						rating={5}
					/>
					<Product
						id={4}
						title="The Lean Startup"
						price={29.99}
						image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
				<div className="home__row">
					<Product
						id={5}
						title="The Lean Startup"
						price={29.99}
						image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
