//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; //useReducer

import Transaction from './component/Transaction';
import FormComponent from './component/FormComponent';
import DataContext from './Data/DataContext';
//import { element } from 'prop-types';
import ReportComponent from './component/ReportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//import { element } from 'prop-types';

const Title = () => <h1 style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}> โปรแกรมบัญชีรายรับ - รายจ่าย </h1>;

function App() {
	const initData = [
		{ id: 1, title: 'เงินเดือน', amount: 20000 },
		{ id: 2, title: 'ค่าเช่าบ้าน', amount: -2000 },
		{ id: 3, title: 'ค่าน้ำมัน', amount: -1000 },
	];
	const [items, setItems] = useState(initData);
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

		setreportIncome(income.toFixed(2));
		setreportExpense(expense.toFixed(2));
	}, [items, reportIncome, reportExpense]);

	// Reducer
	// const [showreport, setshowreport] = useState(false);
	// const reducer = (state, action) => {
	// 	switch (action.type) {
	// 		case 'SHOW':
	// 			return setshowreport(true);
	// 		case 'HIDE':
	// 			return setshowreport(false);
	// 		case 'CLEAR':
	// 			return 0;
	// 	}
	// };
	//const [result, dispatch] = useReducer(reducer, showreport);
	return (
		<DataContext.Provider
			value={{
				income: reportIncome,
				expense: reportExpense,
			}}>
			{/* {showreport && <ReportComponent />} */}

			<div className="container">
				<Title />
				<Router>
					<div>
						<ul className="horizontal-menu">
							<li>
								<Link to="/">ข้อมูลบัญชี</Link>
							</li>
							<li>
								<Link to="/insert">บันทีกข้อมูล</Link>
							</li>
						</ul>
						<Routes>
							<Route path="/" element={<ReportComponent />} />
							<Route
								path="/insert"
								element={
									<div>
										<FormComponent onAdditem={onAddnewItem} />
										<Transaction items={items} />
									</div>
								}
							/>
						</Routes>
					</div>
				</Router>
			</div>
			{/* <h1>{result}</h1>
			<button onClick={() => dispatch({ type: 'SHOW' })}>แสดง</button>
			<button onClick={() => dispatch({ type: 'HIDE' })}>ซ่อน</button>
			<button onClick={() => dispatch({ type: 'CLEAR' })}>ล้างข้อมูล</button> */}
		</DataContext.Provider>
	);
}

export default App;
