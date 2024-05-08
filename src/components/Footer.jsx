import { HiOutlinePhone } from 'react-icons/hi2';
import { AiOutlineMail } from 'react-icons/ai';
import { TfiTime } from 'react-icons/tfi';
import { SlLocationPin } from 'react-icons/sl';

export const Footer = ({ title = 'Odonto', subTitle = 'Vida' }) => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="logo">
					{title}
					<span className="sub-logo">{subTitle}</span>
				</div>
				<div className="row row-cols-1 row-cols-md-4 align-items-center justify-content-center">
					<div className="col">
						<span>
							<HiOutlinePhone className="icon-footer" />
							<h4 className="footer-title">Contato</h4>
							<p className="footer-info">
								+551197679-7512
								<br />
								+551196629-7412
							</p>
						</span>
					</div>
					<div className="col">
						<span>
							<AiOutlineMail className="icon-footer" />
							<h4 className="footer-title">Nosso Endereço</h4>
							<p className="footer-info">Rua x 144, São Paulo - SP </p>
						</span>
					</div>

					<div className="col">
						<span>
							<TfiTime className="icon-footer" />
							<h4 className="footer-title">Horário de Atendimento</h4>
							<p className="footer-info">07:00 - 17:00</p>
						</span>
					</div>

					<div className="col">
						<span>
							<SlLocationPin className="icon-footer" />
							<h4 className="footer-title">Nosso Email</h4>
							<p className="footer-info">odonto.vida@gmail.com.br</p>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};
