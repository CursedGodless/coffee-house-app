import './App.scss';
import Promo from '../Promo/Promo';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';

import solimo from '../../images/solimo_coffee.png';
import presto from '../../images/presto_coffee.png';
import aromistico from '../../images/aromistico_coffee.png';
import Footer from '../../Footer/Footer';

function App() {
	const data = {
		ourBest: [
			{ src: solimo, name: 'Solimo Coffee Beans 2 kg', country: null, price: '10.73$', id: 1 },
			{ src: presto, name: 'Presto Coffee Beans 1 kg', country: null, price: '15.99$', id: 2 },
			{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: null, price: '6.99$', id: 3 },
		],
		assortment: [
			{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1 },
			{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 2 },
			{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', id: 3 },
			{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 4 },
			{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 5 },
		]
	}
	return (
		<div className="App">
			<Promo />
			<AboutUs />
			<OurBest data={data.ourBest} />
			<Footer/>
		</div>
	);
}

export default App;
