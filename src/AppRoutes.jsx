import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './index';
import Sobre from './pages/sobre';
import Servicos from './pages/servicos';
import Processo from './pages/processo';
import Depoimentos from './pages/depoimentos';
import Form from './components/Form';
import Header from './components/Header';
import { Footer } from './components/Footer';

const AppRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sobre" element={<Sobre />} />
					<Route path="/servicos" element={<Servicos />} />
					<Route path="/processo" element={<Processo />} />
					<Route path="/depoimentos" element={<Depoimentos />} />
					<Route path="/contato" element={<Form />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default AppRoutes;
