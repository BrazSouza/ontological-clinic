const Processo = () => {
	const cardProcess = [
		{
			icon: '/public/process-1.png',
			title: 'Odontologia Estética',
			description: 'Promove sorrisos confiantes através de procedimentos especializados',
			color: '#0C75FB',
		},

		{
			icon: '/public/process-4.png',
			title: 'Odontologia Acessivel',
			description: 'Oferecemos um ambiente odontológico inclusivo e acolhedor para pessoas com deficiência',
			color: '#0C75FB',
		},

		{
			icon: '/public/process-5.png',
			title: 'Dentista Pediátrico',
			description: ' Odontologia pediátrica acessível para cuidar da saúde bucal dos seus pequenos',
			color: '#0C75FB',
		},
	];

	return (
		<div className="process">
			<div className="container">
				<h1 className="title">Processos de Trabalho</h1>
				<div className="row row-cols-1 row-cols-md-3 g-3 align-items-center justify-content-center">
					{cardProcess.map((card, i) => (
						<div key={i} className="col">
							<div className="card-process text-center" style={{ backgroundColor: card.color }}>
								<img src={card.icon} className="img-fluid img-process" alt={card.icon} />
								<h3 className="title-process">{card.title}</h3>
								<p className="text">{card.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Processo;
