import './App.scss';
import Promo from '../Promo/Promo';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutOur from '../AboutOur/AboutOur';
import { Component } from 'react';

import solimo from '../../images/solimo_coffee.png';
import presto from '../../images/presto_coffee.png';
import aromistico from '../../images/aromistico_coffee.png';
import ourCofeeBg from '../../images/bg/our_coffee_bg.png';
import girl from '../../images/girl.png';
import CoffeeCards from '../CoffeeCards/CoffeeCards';
import CoffeeCardsFilter from '../../CoffeeCardsFilter/CoffeeCardsFilter';

class App extends Component {
	state = {
		data: {
			ourBest: [
				{ src: solimo, name: 'Solimo Coffee Beans 2 kg', country: null, price: '10.73$', id: 1, mod: true },
				{ src: presto, name: 'Presto Coffee Beans 1 kg', country: null, price: '15.99$', id: 2, mod: true },
				{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: null, price: '6.99$', id: 3, mod: true },
			],
			assortment: [
				{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 1 },
				{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', id: 2 },
				{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', id: 3 },
				{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 4 },
				{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 5 },
				{ src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', id: 6 },
			]
		},
		term: '',
		filter: ''
	}

	onValueChange = (term) => {
		this.setState({ term, filter: '' })
	}

	onFilterChange = (filter) => {
		this.setState({ filter, term: '' })
	}

	filterData = (data, filter) => {
		switch (filter) {
			case 'Brazil':
			case 'Kenya':
			case 'Columbia':
				return data.filter(item => item.country === filter);
			default:
				return data;
		}
	}

	searchData = (data, term) => {
		return data.filter(item => item.name.toLowerCase().indexOf(term) > -1)
	}

	render() {
		const { data: { ourBest, assortment }, term, filter } = this.state;
		const vidibleData = term === '' ? this.filterData(assortment, filter) : this.searchData(assortment, term)
		return (
			<div className="App">
				{/* <>
					<Promo />
					<AboutUs />
					<OurBest data={ourBest} />
					<Footer />
				</> */}
				<>
					<Header title='Our Coffee' src={ourCofeeBg} />
					<AboutOur title='About our beans' src={girl} alt='girl' />
					<CoffeeCardsFilter onValueChange={this.onValueChange} onFilterChange={this.onFilterChange} term={term} />
					<CoffeeCards data={vidibleData} />
					<Footer />
				</>
			</div>
		);
	}
}

export default App;
