import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {lendingDocumentsList} from '@modules/home/components/About/data';

const HomeFinancialServices = () => {
	return (
		<SplitBlocks
			title="Фінансові послуги"
			titleType="heading"
			anchor="fin-services"
		>
			<Accordion title="Кредитування">
				<DocumentsList list={lendingDocumentsList}/>
			</Accordion>
			<br/>
			<br/>
			<p>
				<strong>
					УВАГА! Товариство не надає споживчі кредити у розумінні Закону України
					&quot;Про споживче кредитування&quot;
				</strong>
			</p>
			<p>
				<strong>
					{' '}
					ТОВ «СЕНТ ПРО» не здійснює кредитування фізичних осіб та не здійснює
					врегулювання простроченої заборгованості фізичних осіб.
				</strong>
			</p>
		</SplitBlocks>
	);
};

export default HomeFinancialServices;
