import {FC, type ReactNode} from 'react';

import s from './SplitBlocks.module.scss';
import BlockSubTitle from "@modules/common/components/BlockSubTitle";

const SplitBlocks: FC<{
	children: ReactNode;
	title: string;
	titleType: 'text' | 'heading';
}> = ({children, titleType, title}) => {
	return (
		<article className={s.container}>
			<aside className={s.leftSide}>
				{titleType === 'text' && <h4 className={s.title}>{title}</h4>}
				{titleType === 'heading' && <BlockSubTitle title={title}/>}
			</aside>

			<div className={s.rightSide}>
				{children}
			</div>
		</article>
	);
}

export default SplitBlocks;
