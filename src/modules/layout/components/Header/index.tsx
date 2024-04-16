import Logo from '@modules/common/components/Logo';

import s from './Header.module.scss';
import Navigation from "@modules/layout/components/Navigation";

const Header = () => {
	return (
		<header className={s.container}>
			<Logo/>
			<Navigation />
		</header>
	);
};

export default Header;
