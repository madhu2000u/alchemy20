import Common from '../components/Common/Common';
import Subpage from '../components/Subpage Template/Subpage';
import styles from '../styles/About.module.css';

export default function About() {
	return (
		<main className={styles.main}>
			<Subpage showNot={false} />
			<img src="https://i.imgur.com/3r8ulSU.png" alt="Design element at top left" className={styles.tri_tl} />
			<img src="https://i.imgur.com/Q9VFf4g.png" alt="Design element at bottom right" className={styles.tri_br} />
			<div className={styles.about_container}>
				<div className={styles.about_subcontainer}>
					<h1>ABOUT</h1>
					<hr className={styles.divider}></hr>
					<p>
						The Chemical Engineering Association was setup under the Department of Chemical Engineering at
						the National Institute of Technology, Tiruchirapalli with the aim of enhancing and enriching the
						knowledge in chemical engineering . It unites student from different academic institutions to
						share their ideas, knowledge and their technical expertise with the students and engineers in
						the domain of Chemical Engineering to keep abreast with the latest developments. The association
						organizes guest lectures by delegates from premier institutions across the globe, technical
						symposiums and various other events that help students from the host institute as well as from
						other institutes in India. It helps them to understand the subject and its practical
						applications better.<br></br>
						<br></br> Alchemy is an ancient branch of philosophy and photoscience which aims to transmute
						base metals into noble metals. Just like the ancient art, we at Alchemy aim to bring about a
						positive change in the field of engineering and society with our initiatives, events and
						workshops from scratch.
					</p>
				</div>
				<img
					src="https://i.imgur.com/dcCB0YU.png"
					alt="Illustration of man saying hello"
					className={styles.illustration}
				/>
			</div>
		</main>
	);
}

About.Layout = Common;
