import s from './Navigation.module.scss';
import {navigationList,} from "@utils/data";
import type {INavigationList} from "@utils/types";
import Link from "next/link";

const Navigation = () => {

	return (
		<ul className={s.container}>
			{navigationList.map((item: INavigationList) => item.isActive && (
				<li key={item.title}>
					<Link
						key={item.title}
						href={item.path}
						className={s.link}
					>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Navigation;
