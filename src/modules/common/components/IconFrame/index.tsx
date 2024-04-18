import {FC} from 'react';

import s from './IconFrame.module.scss';
import Image from 'next/image';

const IconFrame: FC<{
	icon: string;
}> = ({icon}) => {
	return (
		<div className={s.container}>
			<Image className={s.icon} src={icon} alt="icon"/>
		</div>
	);
}

export default IconFrame;
