import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.scss';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages';
import Sobre from './pages/sobre';
import Servicos from './pages/servicos';
import Processo from './pages/processo';
import Depoimentos from './pages/depoimentos';
import Form from './components/Form';
import { Footer } from './components/Footer';

function App() {
	return (
		<>
			<div>
				<BrowserRouter>
					<Header />
					<Home />
					<Sobre />
					<Servicos />
					<Processo />
					<Depoimentos />
					<Form />
					<Footer />
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
