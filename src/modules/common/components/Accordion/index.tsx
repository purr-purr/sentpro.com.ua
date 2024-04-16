import {FC, type ReactNode} from 'react';

import s from './Accordion.module.scss';

const Accordion: FC<{
	title: string;
	children: ReactNode;
}> = ({title, children}) => {
	return (
		<details className={s.container}>
			<summary className={s.title}>{title}</summary>
			{children}
		</details>
	);
}

export default Accordion;
