const servicos = () => {
	const cardServicos = [
		{
			icon: '/public/services-dentist.png',
			title: 'Alinhamento com Especialista',
			text: 'Nosso serviço oferece uma abordagem personalizada para cada paciente',
		},
		{
			icon: '/public/services-breakets.png',
			title: 'Odontologia Estética',
			text: 'Promove sorrisos confiantes através de procedimentos especializados',
		},
		{
			icon: '/public/services-oral.png',
			title: 'Especialistas em Higiene Bucal',
			text: 'Especialistas em higiene bucal oferecem cuidados personalizados',
		},
		{
			icon: '/public/services-root-canal.png',
			title: 'Especialista em Canal Radicular',
			text: 'Especialistas em canal radicular realizam tratamentos precisos',
		},
		{
			icon: '/public/services-live.png',
			title: 'Assessoria Odontológica ao Vivo',
			text: 'Assessoria odontológica ao vivo oferece suporte instantâneo e personalizado',
		},
		{
			icon: '/public/services-cavities.png',
			title: 'Inspeção de Cavidade',
			text: 'Inspeção de cavidade oferece uma análise detalhada da saúde bucal',
		},
	];

	return (
		<section className="servicos">
			<div className="container">
				<h1 className="title">Serviços</h1>
				<div className="row row-cols-1 row-cols-md-3 g-2 g-md-3 align-items-center justify-content-center">
					{cardServicos.map((card, i) => (
						<div className="col" key={i}>
							<div className="card text-center">
								<img className="img-fluid service-icon" src={card.icon} alt={card.icon} />
								<h5 className="service-title">{card.title}</h5>
								<p className="service-text">{card.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default servicos;
