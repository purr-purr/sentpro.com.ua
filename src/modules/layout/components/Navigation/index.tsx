import s from './Navigation.module.scss';
import Link from "next/link";
import {navigationList} from "@utils/data";
import type {INavigationList} from "@utils/types";
import cn from "classnames";
import {useRouter} from "next/router";

const Navigation = () => {
	const router = useRouter();
	const isActivePage = (path: string) => router.asPath.includes(path);
	//TODO not done yet
	return (
		<ul className={s.container}>
			{navigationList.map((item: INavigationList) => (
				<li key={item.title}>
					<Link href={`#${item.path}`}
					      className={cn(s.link, isActivePage(item.path) && s.active)}>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default Navigation;
