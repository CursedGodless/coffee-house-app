import Navigation from '../Navigation/Navigation'
import './Header.scss'

export default function Header(props) {
	const { title, src } = props;

	return (
		<header className="header" style={{ backgroundImage: `url(${src})` }}>
			<Navigation color='white' />
			<h1 className='header__title'>{title}</h1>
		</header>
	)
}