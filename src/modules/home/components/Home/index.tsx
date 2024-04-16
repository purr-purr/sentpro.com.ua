import HomeIntro from '@modules/home/components/HomeIntro';
import HomeAbout from "@modules/home/components/HomeAbout";
import HomeContacts from "@modules/home/components/HomeContacts";
import HomeRightsProtection
	from "@modules/home/components/HomeRightsProtection";
import HomeReportViolation from "@modules/home/components/HomeReportViolation";

const Home = () => {
	return (
		<>
			<HomeIntro/>
			<HomeAbout/>
			<HomeRightsProtection/>
			<HomeReportViolation/>
			<HomeContacts/>
		</>
	);
};

export default Home;
