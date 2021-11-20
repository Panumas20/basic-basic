import { useContext } from 'react/cjs/react.development';
import DataContext from '../Data/DataContext';
import Item from './item';
import './Transaction.css';

const Transaction = (props) => {
	const { income, expense } = useContext(DataContext);
	const { items } = props;

	return (
		<div>
			<ul className="item-list">
				{items.map((element) => {
					return <Item {...element} key={element.id} />; //ใช้ ... กรณีชื่อ properties ใน array data เหมือนใน properties ใน component Item  เช่น
					//<Item {title={element.title} amount={element.amount} }/>
				})}
			</ul>
			<p>รายรับ : {income}</p>
			<p> รายจ่าย : {expense}</p>
		</div>
	);
};
export default Transaction;
