import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DOCUMENT_ICON from '../../assets/document-icon.svg';
import s from './DocumentsList.module.scss';

interface IDocumentsListProps {
	title: string;
	link: string;
}

const DocumentItem: FC<{
	title: string;
	link: string;
}> = ({ title, link }) => {
	return (
		<li className={s.item}>
			<Link href={link} target="_blank">
				<Image src={DOCUMENT_ICON} alt="icon" />
				{title}
			</Link>
		</li>
	);
};

const DocumentsList: FC<{
	list: IDocumentsListProps[];
}> = ({ list }) => {
	return (
		<ul className={s.container}>
			{list.map((item: IDocumentsListProps) => (
				<DocumentItem key={item.title} title={item.title} link={item.link} />
			))}
		</ul>
	);
};

export default DocumentsList;
