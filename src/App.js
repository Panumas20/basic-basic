import logo from './logo.svg';
import './App.css';
import Transaction from './component/Transaction';

const Title = () => <h1 style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}> โปรแกรมบัญชีรายรับ - รายจ่าย</h1>;

function App() {
	return (
		<div className="container">
			<Title />
			<Transaction />
		</div>
	);
}

export default App;
