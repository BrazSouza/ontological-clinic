import Button from '../components/Button';

const Sobre = () => {
	return (
		<div>
			<div className="section-sobre">
				<div className="container">
					<h1 className="title">sobre</h1>

					<div className="row row-cols-1 row-cols-md-2 align-items-center justify-content-center g-0">
						<div className="col-md-5">
							<img src="/public/medica-home.jpg" className="img-fluid img-sobre" alt="médico" />
						</div>

						<div className="col">
							<div className="box-sobre">
								<div className="content-sobre">
									<h5 className="subTitle-sobre text-uppercase">Sobre</h5>
									<h3>Cuidados de saúde verdadeiros para sua familia</h3>
									<p className="text-sobre">
										Priorize a saúde da sua família com cuidados verdadeiros. Mantenha hábitos saudáveis, promova uma alimentação balanceada, exercícios regulares e consultas médicas periódicas. Invista no bem-estar de quem mais ama, arantindo uma
										vida mais feliz e longeva para todos
									</p>
									<Button />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sobre;
