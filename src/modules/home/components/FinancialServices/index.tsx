import Accordion from '@modules/common/components/Accordion';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import { lendingDocumentsList } from '@modules/home/components/About/data';

const HomeFinancialServices = () => {
	return (
		<SplitBlocks
			title="Фінансові послуги"
			titleType="heading"
			anchor="fin-services"
		>
			<Accordion title="Кредитування">
				<DocumentsList list={lendingDocumentsList} />
			</Accordion>
			<br />
			<br />
			<p>
				<strong>
					УВАГА! Товариство не надає споживчі кредити у розумінні Закону України
					«Про споживче кредитування». <br />
					ТОВ &quot;СЕНТ ПРО&quot; не здійснює кредитування фізичних осіб.
				</strong>
			</p>
		</SplitBlocks>
	);
};

export default HomeFinancialServices;
