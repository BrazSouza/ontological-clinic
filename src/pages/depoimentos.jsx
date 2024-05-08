const Depoimentos = () => {
	const depoiments = [
		{
			image: '/public/review-1.jpg',
			mensage: 'Desde que comecei a frequentar a Clínica Odonto Vida, superei meu medo de dentista. A equipe é extremamente atenciosa e profissional, me deixando à vontade em todas as consultas',
			icon: '/public/avaliacao.png',
			name: 'Ana Silva',
			text: 'Cliente Satisfeito',
		},
		{
			image: '/public/review-3.jpg',
			mensage: 'Sou paciente da Odonto Vida há anos e nunca tive motivos para reclamar. Os dentistas são altamente qualificados e utilizam as melhores técnicas e tecnologias disponíveis',
			icon: '/public/avaliacao.png',
			name: 'Carlos Oliveira',
			text: 'Cliente Satisfeito',
		},
		{
			image: '/public/review-2.jpg',
			mensage: 'A Gentile Odontologia se destaca pela excelência no atendimento e no tratamento odontológico. Os profissionais são extremamente dedicados e atenciosos',
			icon: '/public/avaliacao.png',
			name: 'Maria Gomes',
			text: 'Cliente Satisfeito',
		},
	];

	return (
		<section className="depoimentos">
			<div className="container">
				<h1 className="title">Depoimentos</h1>
				<div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-3 align-items-center justify-content-center">
					{depoiments.map((depoiment, i) => (
						<div key={i} className="col">
							<div className="card text-center">
								<img src={depoiment.image} className="img-fluid img-depoiment" alt={depoiment.image} />

								<p className="desc">{depoiment.mensage}</p>
								<div className="reviews">
									<img src={depoiment.icon} className="img-fluid classification" alt={depoiment.icon} />
								</div>

								<h3 className="name">{depoiment.name}</h3>
								<p className="text">{depoiment.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Depoimentos;
