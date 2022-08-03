import TitleWithDivider from '../TitleWithDivider/TitleWithDivider';
import './AboutOur.scss';

export default function AboutOur(props) {
	const { src, title, alt } = props;
	return (
		<div className="about-our">
			<div className="about-our__wrapper">
				<img src={src} alt={alt} className="about-our__img" />
				<div className="about-our__text">
					<TitleWithDivider color='black' title={title} />
					<p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
					<p>
						Afraid at highly months do things on at. Situation recommend objection do intention
						so questions.
						As greatly removed calling pleased improve an. Last ask him cold feel
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face.
					</p>
				</div>
			</div>
			<div className="divider"></div>
		</div>
	)
}