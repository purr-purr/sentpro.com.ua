import s from './HomeContacts.module.scss';
import {
	COMPANY_ADDRESS,
	COMPANY_EMAIL,
	COMPANY_MAP_LINK,
	COMPANY_PHONE
} from "@utils/const";
import Link from "next/link";
import BlockTitle from "@modules/common/components/BlockTitle";

interface IContactItem {
	icon: string;
	title: string;
	desc: string;
	link?: string;
}

const HomeContacts = () => {
	const contactsList: IContactItem[] = [
		{
			icon: 'phone',
			title: 'Адреса',
			desc: COMPANY_ADDRESS,
		},
		{
			icon: 'phone',
			title: 'електронна пошта',
			desc: COMPANY_EMAIL,
			link: `mailto:${COMPANY_EMAIL}`
		},
		{
			icon: 'phone',
			title: 'Телефон',
			desc: COMPANY_PHONE,
			link: `tel:${COMPANY_PHONE}`
		},
		{
			icon: 'phone',
			title: 'Години роботи',
			desc: 'ПН-ПТ з 9:00 до 19:00 Обідня перерва з 13:00 до 14:00'
		},
	];

	return (
		<section className={s.container} id="contacts">
			<BlockTitle title="Контактна інформація"/>

			<ul className={s.contacts}>
				{contactsList.map((item) => (
					<li key={item.title} className={s.contactsInner}>
						<div className={s.contactsIcon}>icon</div>
						<dl>
							<dt>{item.title}</dt>
							<dd>{item.link ? (
								<Link href={item.link} target="_blank">{item.desc}</Link>
							) : item.desc}</dd>
						</dl>
					</li>
				))}
			</ul>

			<div className={s.map}>
				<iframe
					className={s.mapFrame}
					src={COMPANY_MAP_LINK}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			</div>
		</section>
	);
}

export default HomeContacts;
