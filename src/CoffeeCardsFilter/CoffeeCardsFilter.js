import { Component } from 'react';
import './CoffeeCardsFilter.scss';

class CoffeeCardsFilter extends Component {
	constructor(props) {
		super(props);
	}


	onValueChange = (e) => {
		const term = e.target.value.toLowerCase();
		this.props.onValueChange(term)
	}

	render() {
		const { onFilterChange, term } = this.props;
		const btnsData = [
			{ country: 'Brazil' },
			{ country: 'Kenya' },
			{ country: 'Columbia' },
		]
		return (
			<div className="coffee-cards-filter">
				<div className="coffee-cards-filter__input">
					<span className="filter-label">Looking for</span>
					<input type="text" className='filter-input' placeholder='start typing here...' value={term} onChange={this.onValueChange} />
				</div>
				<div className="coffee-cards-filter__btns">
					<span className="filter-label">Or filter</span>
					{btnsData.map(({ country }) => {
						return (
							<button className='filter-btn' key={country} onClick={() => onFilterChange(country)}>{country}</button>
						)
					})}
				</div>
			</div>
		)
	}
}

export default CoffeeCardsFilter;