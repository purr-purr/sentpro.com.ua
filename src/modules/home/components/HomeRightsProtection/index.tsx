import Accordion from '@modules/common/components/Accordion';
import BlockTitle from '@modules/common/components/BlockTitle';
import DocumentsList from '@modules/common/components/DocumentsList';
import SplitBlocks from '@modules/common/components/SplitBlocks';
import {
	rightsProtectionDocs
} from '@modules/home/components/HomeRightsProtection/data';

const HomeRightsProtection = () => {
	return (
		<section id="protection">
			<BlockTitle title="Захист прав споживачів"/>

			<SplitBlocks
				title="Реквізити органу, який здійснює державне регулювання ринків фінансових послуг (адреса, номер телефону тощо), а також реквізити органів з питань захисту прав споживачів"
				titleType="text"
			>
				<ul>
					<li>Національний банк України: 01601, м. Київ, вулиця Інститутська,
						9
					</li>
					<li>
						Тел.: 0 800 505 240, email:{' '}
						<a href="mailto:nbu@bank.gov.ua" target="_blank" rel="noreferrer">
							nbu@bank.gov.ua
						</a>
					</li>
					<li>
						Головне управління Держпродспоживслужби в м. Києві: м. Київ, вул.
						Некрасовська, 10/8.;
					</li>
					<li>Тел.: +38 (044) 486-54-86, +38 (063) 639-09-09 («Гаряча лінія»);
					</li>
					<li>
						Веб-сайт:
						<a href="http://kyiv-dpss.gov.ua/" target="_blank" rel="noreferrer">
							kyiv-dpss.gov.ua
						</a>
						, Email:{' '}
						<a href="mailto:info@kyiv-dpss.gov.ua" target="_blank"
						   rel="noreferrer">
							info@kyiv-dpss.gov.ua
						</a>
					</li>
				</ul>

				<p>
					Споживач може подати скаргу до Національного банку України, перейшовши
					за
					посиланням в розділ «Захист прав споживачів» на сторінці офіційного
					Інтернет-представництва Національного банку України, а саме:{' '}
					<a
						href="https://bank.gov.ua/ua/consumer-protection"
						target="_blank"
						rel="noreferrer"
					>
						https://bank.gov.ua/ua/consumer-protection
					</a>
					.
				</p>

				<p>
					Також, Споживач може звернутись до Національного банку України,
					перейшовши
					за посиланням в розділ «Звернення громадян» на сторінці офіційного
					Інтернет-представництва Національного банку України, а саме:{' '}
					<a
						href="https://bank.gov.ua/ua/consumer-protection/citizens-appeals"
						target="_blank"
						rel="noreferrer"
					>
						https://bank.gov.ua/ua/consumer-protection/citizens-appeals
					</a>
					.
				</p>

				<DocumentsList list={rightsProtectionDocs}/>
			</SplitBlocks>

			<SplitBlocks title="звітність" titleType="heading" anchor="reports">
				<Accordion title="Внутрішні правила">
					1
				</Accordion>

				<Accordion title="Інформація про фінансову установу">
					1
				</Accordion>

				<Accordion title="Інформація про структуру власності">
					1
				</Accordion>

				<Accordion title="Аудиторські висновки">
					1
				</Accordion>

				<Accordion title="Фінансова звітність">
					1
				</Accordion>

				<Accordion title="Архівна інформація">
					1
				</Accordion>

				<Accordion title="Новини">
					1
				</Accordion>
			</SplitBlocks>
		</section>
	);
};

export default HomeRightsProtection;
