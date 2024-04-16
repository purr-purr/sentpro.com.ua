import s from './HomeIntro.module.scss';
// import Image from 'next/image';
// import INTRO_IMAGE from '@modules/home/assets/hands.png'

const HomeIntro = () => {
	return (
		<section className={s.container}>
			<article>
				<h1 className={s.title}>TITLE</h1>
				<p className={s.description}>text</p>
			</article>

			<div className={s.poster}>
				{/*<Image src={INTRO_IMAGE} alt="Home intro"/>*/}
			</div>
		</section>
	);
};

export default HomeIntro;
