import './Navigation.scss';
import logoWhite from '../../images/coffee-beans_white.svg';


export default function Navigation(props) {
	const {color} = props;
	const clazz = color === 'white' ? 'navigation_white': 'navigation_black';
	const src = color === 'white' ? logoWhite : null;
	return (
		<nav className={`navigation ${clazz}`}>
			<ul className="navigation__menu">
				<li className="navigation__item"><a href="#"><img src={src} alt="" />Coffee house</a></li>
				<li className="navigation__item"><a href="#">Our coffee</a></li>
				<li className="navigation__item"><a href="#">For your pleasure</a></li>
			</ul>
		</nav>
	)
}