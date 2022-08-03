import BeansDivider from '../BeansDivider/BeansDivider';
import Title from '../Title/Title';

export default function TitleWithDivider(props) {
	const { title } = props;

	return (
		<>
			<Title title={title} mod='title_with-divider'/>
			<BeansDivider color='black' />
		</>
	)
}