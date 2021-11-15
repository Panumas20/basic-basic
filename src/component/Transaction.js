import Item from './item';
import './Transaction.css'; 
const Transaction = (props) => {
	console.log(props);
	const {items} = props 
	
	return (
		<ul className="item-list">
			{items.map((element) => {
				return <Item {...element} key={element.id} />; //ใช้ ... กรณีชื่อ properties ใน array data เหมือนใน properties ใน component Item  เช่น
				//<Item {title={element.title} amount={element.amount} }/>
			})}
		</ul>
	);
};
export default Transaction;
