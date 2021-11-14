import Item from './item';
import './Transaction.css';
import { v4 as uuidv4 } from 'uuid';
const Transaction = () => {
	const data = [
		{ title: 'ค่ายา', amount: 20000 },
		{ title: 'เงินเดือน', amount: 2000 },
		{ title: 'ค่างวดรถ', amount: 8000 },
		{ title: 'ค่าน้ำมัน', amount: 1000 },
	];
	return (
		<ul className="item-list">
			{data.map((element) => {
				return <Item {...element} key={uuidv4()} />; //ใช้ ... กรณีชื่อ properties ใน array data เหมือนใน properties ใน component Item  เช่น
				//<Item {title={element.title} amount={element.amount} }/>
			})}
		</ul>
	);
};
export default Transaction;
