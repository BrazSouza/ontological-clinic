import Button from '../components/Button';

const Home = () => {
	const cards = [
		{
			icon: '/public/icon-doctor.png',
			title: 'Médicos Qualificados',
			color: '#2F89FC',
		},
		{
			icon: '/public/icon-ambulance.png',
			title: 'Cuidado de Emergência',
			color: '#0C75FB',
		},
		{
			icon: '/public/icon-cadeira.png',
			title: 'Melhores Equipamentos',
			color: '#2F89FC',
		},
		{
			icon: '/public/icon-24hours.png',
			title: 'Atendimento 24 horas',
			color: '#0C75FB',
		},
	];

	return (
		<div>
			<section id="home" className="section-home">
				<div className="container">
					<div className="row align-items-center">
						<div className="col">
							<div className="content">
								<h1 className="title-home text-uppercase">
									Vamos clarear <br />
									<span>seu sorriso</span>
								</h1>
								<p className="text-home">Desvende a beleza oculta do seu sorriso. Vamos clarear seus dentes e renovar sua confiança. Descubra o brilho que sempre esteve esperando por você</p>
								<Button />
							</div>
						</div>
					</div>

					<div className="row row-cols row-cols-md-2 row-cols-lg-4 g-0">
						{cards.map((card, index) => (
							<div key={index} className="col">
								<div className="card" style={{ backgroundColor: card.color }}>
									<div className="card-body">
										<img src={card.icon} className="img-fluid img-icon" alt="Card Icon" />
										<h5 className="card-title">{card.title}</h5>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
