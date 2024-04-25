import HomeAbout from '@modules/home/components/HomeAbout';
import HomeContacts from '@modules/home/components/HomeContacts';
import HomeIntro from '@modules/home/components/HomeIntro';
import HomeReportViolation from '@modules/home/components/HomeReportViolation';
import HomeRightsProtection from '@modules/home/components/HomeRightsProtection';

const Home = () => {
	return (
		<>
			<HomeIntro />
			<HomeAbout />
			<HomeRightsProtection />
			<HomeReportViolation />
			<HomeContacts />
		</>
	);
};

export default Home;
