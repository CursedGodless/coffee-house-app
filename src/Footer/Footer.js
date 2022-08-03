import BeansDivider from '../components/BeansDivider/BeansDivider';
import Navigation from '../components/Navigation/Navigation';
import './Footer.scss';

export default function Footer() {
	return (
		<footer className='footer'>
			<Navigation color='black'/>
			<BeansDivider color='black'/>
		</footer>
	)
}