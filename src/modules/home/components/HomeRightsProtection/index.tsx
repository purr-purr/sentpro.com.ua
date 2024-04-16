import s from './HomeRightsProtection.module.scss';
import BlockTitle from "@modules/common/components/BlockTitle";
import SplitBlocks from "@modules/common/components/SplitBlocks";

const HomeRightsProtection = () => {
	return (
		<section className={s.container}>
			<BlockTitle title="Захист прав споживачів"/>

			<SplitBlocks
				title="Реквізити органу, який здійснює державне регулювання ринків фінансових послуг (адреса, номер телефону тощо), а також реквізити органів з питань захисту прав споживачів"
				titleType="text">
				<ul>
					<li>Національний банк України: 01601, м. Київ, вулиця Інститутська,
						9
					</li>
					<li>Тел.: 0 800 505 240, email: nbu@bank.gov.ua</li>
					<li>Головне управління Держпродспоживслужби в м. Києві: м. Київ, вул.
						Некрасовська, 10/8.;
					</li>
					<li>Тел.: +38 (044) 486-54-86, +38 (063) 639-09-09 («Гаряча лінія»);
					</li>
					<li>Веб-сайт: kyiv-dpss.gov.ua, info@kyiv-dpss.gov.ua
					</li>
				</ul>

				<p>Споживач може подати скаргу до Національного банку України,
					перейшовши за посиланням в розділ «Захист прав споживачів» на сторінці
					офіційного Інтернет-представництва Національного банку України, а
					саме: https://bank.gov.ua/ua/consumer-protection.</p>

				<p>Також, Споживач може звернутись до Національного банку України,
					перейшовши за посиланням в розділ «Звернення громадян» на сторінці
					офіційного Інтернет-представництва Національного банку України, а
					саме: https://bank.gov.ua/ua/consumer-protection/citizens-appeals.</p>
			</SplitBlocks>

			<SplitBlocks
				title="звітність"
				titleType="heading">2text</SplitBlocks>
		</section>
	);
}

export default HomeRightsProtection;
