import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DOCUMENT_ICON from '../../assets/document-icon.svg';
import s from './DocumentsList.module.scss';
import type {IDocumentsList, IDocumentsListGroup} from "@utils/types";

const DocumentItem: FC<IDocumentsList> = ({title, link}) => {
	return (
		<li className={s.item}>
			<Link href={link} target="_blank">
				<Image src={DOCUMENT_ICON} alt="icon"/>
				{title}
			</Link>
		</li>
	);
};

type IDocumentsLoop = IDocumentsList[];

const DocumentsList: FC<{
	list?: IDocumentsList[];
	groupList?: IDocumentsListGroup[];
}> = ({list, groupList}) => {
	const listLoop = (array: IDocumentsLoop) => {
		return (
			<ul className={s.container}>
				{array.map((item: IDocumentsList) => (
					<DocumentItem key={item.title} title={item.title} link={item.link}/>
				))}
			</ul>
		)
	};

	return (
		<>
			{groupList?.map((item: IDocumentsListGroup) => (
				<>
					<h4 className={s.groupTitle}>{item.groupTitle}</h4>
					{listLoop(item.list)}
				</>
			))}
			{list && listLoop(list)}
		</>
	)
};

export default DocumentsList;
