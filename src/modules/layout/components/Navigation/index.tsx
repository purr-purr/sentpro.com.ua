import s from './Navigation.module.scss';
import Link from "next/link";
import {navigation} from "@utils/data";

const Navigation = () => {
	return (
		<ul className={s.container}>
			{navigation.map((item) => (
				<li key={item.title}>
					<Link href={item.path} className={s.link}>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Navigation;
