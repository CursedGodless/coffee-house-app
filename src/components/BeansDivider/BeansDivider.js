import './BeansDivider.scss';

import white from '../../images/beans_white.svg';
import black from  '../../images/beans_black.svg';

export default function BeansDivider(props) {
	const { color } = props;
	const src = color === 'white' ? white : black;
	const clazz = src === white ? 'beans-divider_white': 'beans-divider_black'; 
	return (
		<div className={`beans-divider ${clazz}`}>
			<img src={src} alt="beans" />
		</div>
	)
}