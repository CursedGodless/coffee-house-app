import './CoffeeCards.scss';

export default function CoffeeCards(props) {
	const { data } = props;
	const cards = data.map(item => {
		return <CoffeeCard {...item} key={item.id}/>
	})
	return (
		<div className="coffee-cards__wrapper">
			{cards}
		</div>
	)
}

function CoffeeCard(props) {
	const { src, name, country, price, mod } = props;
	const clazz = !mod ? `coffee-card coffee-card_our-best` : 'coffee-card'
	return (
		<div className={clazz} >
			<img src={src} alt="thumbnail" className='coffee-card__img' />
			<div className="coffee-card__name">{name}</div>
			<div className="coffee-card__country">{country}</div>
			<div className="coffee-card__price">{price}</div>
		</div>
	)
}