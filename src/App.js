import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useReducer } from 'react';

import Transaction from './component/Transaction';
import FormComponent from './component/FormComponent';
import DataContext from './Data/DataContext';
import { element } from 'prop-types';
import ReportComponent from './component/ReportComponent';
//import { element } from 'prop-types';

const Title = () => <h1 style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}> โปรแกรมบัญชีรายรับ - รายจ่าย </h1>;

function App() {
	// const initData = [
	// 	{ id: 1, title: 'เงินเดือน', amount: 20000 },
	// 	{ id: 2, title: 'ค่าเช่าบ้าน', amount: -2000 },
	// 	{ id: 3, title: 'ค่าน้ำมัน', amount: -1000 },
	// ];
	const [items, setItems] = useState([]);
	const [reportIncome, setreportIncome] = useState(0);
	const [reportExpense, setreportExpense] = useState(0);

	const onAddnewItem = (newItem) => {
		setItems((prevItem) => {
			return [newItem, ...prevItem];
		});
	};
	useEffect(() => {
		const amounts = items.map((items) => items.amount);
		// console.log(amounts);
		const income = amounts.filter((element) => element > 0).reduce((total, element) => (total += element), 0);
		const expense = amounts.filter((element) => element < 0).reduce((total, element) => (total += element), 0) * -1;
		// console.log('รวมรายได้ :', income);
		// console.log('รวมรายจ่าย :', expense);

		setreportIncome(income);
		setreportExpense(expense);
	}, [items, reportIncome, reportExpense]);

	// Reducer
	const [count, setCount] = useState(0);
	const reducer = (state, action) => {
		switch (action.type) {
			case 'ADD':
				return state + action.payload;
			case 'SUB':
				return state - 1;
			case 'CLEAR':
				return 0;
		}
	};
	const [result, dispatch] = useReducer(reducer, count);
	return (
		// <DataContext.Provider
		// 	value={{
		// 		income: reportIncome,
		// 		expense: reportExpense,
		// 	}}>
		// 	<ReportComponent />
		// 	<div className="container">
		// 		<Title />
		// 		<FormComponent onAdditem={onAddnewItem} />
		// 		<Transaction items={items} />
		// 	</div>
		// </DataContext.Provider>

		<div align="center">
			<h1>{result}</h1>
			<button onClick={() => dispatch({ type: 'ADD', payload: 10 })}>เพิ่ม</button>
			<button onClick={() => dispatch({ type: 'SUB' })}>ลด</button>
			<button onClick={() => dispatch({ type: 'CLEAR' })}>ล้างข้อมูล</button>
		</div>
	);
}

export default App;
