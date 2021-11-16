import PropTypes from 'prop-types';

const Item = (props) => {
	const { title, amount } = props;
	return (
		<li>
			{title}
			<span>{amount} test2</span>
		</li>
	);
};
Item.propTypes = {
	title: PropTypes.string,
	amount: PropTypes.number,
};

export default Item;
