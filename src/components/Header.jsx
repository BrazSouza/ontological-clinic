import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Button from './Button';

const Header = ({
	title = 'Odonto',
	subTitle = 'Vida',
	links = [
		{ name: 'Home', path: '/' },
		{ name: 'Sobre', path: '/sobre' },
		{ name: 'Serviços', path: '/servicos' },
		{ name: 'Avaliações', path: '/reviews' },
		{ name: 'Contato', path: '/contato' },
	],
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="row row-cols-auto align-items-center justify-content-between">
					<div className="col">
						<Link to="/" className="logo">
							{title} <span className="sub-logo">{subTitle}</span>
						</Link>
					</div>

					<div className="col">
						<nav className={`nav ${isMenuOpen ? 'nav-active' : ''}`}>
							{links.map(({ name, path }) => (
								<Link key={name} to={path} className="nav-link">
									{name}
								</Link>
							))}
						</nav>
					</div>

					<div className="col">
						<Button />
					</div>

					<div id="menu-btn" className="menu-mobile" onClick={toggleMenu}>
						<span>
							<HiBars3BottomRight className="icon-mobile" />
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
