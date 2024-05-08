import { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [date, setDate] = useState('');

	const [alert, setAlert] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (name.length === 0 || email.length === 0 || number.length === 0 || date.length === 0) {
			alert('Por favor, preencha todos os campos.');
			return;
		}

		const formData = {
			name: name,
			email: email,
			number: number,
			date: date,
		};

		try {
			await axios.post('http://localhost/ontological-clinic/index.php', formData, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			});
			setAlert({ type: 'success', message: 'Dados enviados com sucesso!' });
			// Limpar o formulário após o envio bem-sucedido, se desejado
			setName('');
			setEmail('');
			setNumber('');
			setDate('');
		} catch (error) {
			console.log(error);
			setAlert({ type: 'error', message: 'Ocorreu um erro ao enviar os dados ' + error });
		}
	};

	return (
		<>
			<footer className="form text-white">
				<div className="container">
					<h1 className="title text-transform">Marcar Consulta</h1>
					<div className="row row-cols align-items-center justify-content-center">
						<div className="col">
							{alert && <Alert message={alert.message} type={alert.type} />}
							<form className="form-contact" onSubmit={handleSubmit}>
								<span className="title-agenda">Agende seu horário</span>
								<div className="mb-3">
									<label htmlFor="name" className="form-label">
										Seu Nome
									</label>
									<input type="text" className="form-control" id="name" name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
								</div>

								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Seu Email
									</label>
									<input type="email" className="form-control" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
								</div>

								<div className="mb-3">
									<label className="form-label" htmlFor="number">
										Seu Telefone
									</label>
									<input type="number" className="form-control tel" id="number" name="number" placeholder="Telefone" value={number} onChange={(e) => setNumber(e.target.value)} required />
								</div>

								<div className="mb-3">
									<label htmlFor="date" className="form-label">
										Agende seu Horário
									</label>
									<input type="datetime-local" className="form-control data" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
								</div>

								<button type="submit" className="btn btn-primary btn-form">
									Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Form;
