import CoffeeCards from '../../CoffeeCards/CoffeeCards';
import Title from '../Title/Title';
import './OurBest.scss';

export default function OurBest(props) {
	return (
		<section className='our-best'>
			<div className="container">
			<Title title='Our best'/>
				<CoffeeCards data={props.data}/>
			</div>

		</section>

	)
}