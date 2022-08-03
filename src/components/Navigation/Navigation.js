import './Navigation.scss';
import logoWhite from '../../images/coffee-beans_white.svg';
import logoBlack from '../../images/coffee-beans_black.svg';


export default function Navigation(props) {
	const {color} = props;
	const clazz = color === 'white' ? 'navigation_white': 'navigation_black';
	const src = color === 'white' ? logoWhite : logoBlack;
	return (
		<nav className={`navigation ${clazz}`}>
			<ul className="navigation__menu">
				<li className="navigation__item"><a href="#"><img src={src} alt="logo" className='navigation__logo' />Coffee house</a></li>
				<li className="navigation__item"><a href="#">Our coffee</a></li>
				<li className="navigation__item"><a href="#">For your pleasure</a></li>
			</ul>
		</nav>
	)
}