import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Transaction from './component/Transaction';
import FormComponent from './component/FormComponent';
import DataContext from './Data/DataContext';
import ReportComponent from './component/ReportComponent';

const Title = () => <h1 style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}> โปรแกรมบัญชีรายรับ - รายจ่าย</h1>;

function App() {
	const initData = [];
	const [items, setItems] = useState(initData);
	const onAddnewItem = (newItem) => {
		setItems((prevItem) => {
			return [newItem, ...prevItem];
		});
		console.log(`เพิ่มข้อมูล ${newItem}`);
	};
	return (
		<DataContext.Provider
			value={{
				income: 50000,
				expense: -8000,
			}}>
			<div className="container">
				<Title />
				<ReportComponent />
				<FormComponent onAdditem={onAddnewItem} />
				<Transaction items={items} />
			</div>
		</DataContext.Provider>
	);
}

export default App;
