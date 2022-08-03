import BeansDivider from '../BeansDivider/BeansDivider';
import Navigation from '../Navigation/Navigation';
import './Promo.scss';

export default function Promo() {
	return (
		<section className='promo'>
			<Navigation color='white'/>
			<div className="container">
			<h1 className='promo__title'>Everything You Love About Coffee</h1>
			<BeansDivider color='white' />
			<div className="promo__text">
				We makes every day full of energy and taste <br /> <span>Want to try our beans?</span> 
			</div>
			<a href="#" className="promo__more">More</a>
			</div>
		
		</section>
	)
}