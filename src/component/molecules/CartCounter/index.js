import React, { useCallback, useEffect, useState } from "react";
import { iconMinus, iconPlus } from "../../../assets/images";
import "./styles.scss";
function CartCounter({ onChange }) {
	const [counter, setCounter] = useState(0);
	const _increase = () => {
		setCounter((counter) => counter + 1);
	};
	const _decrease = () => {
		setCounter((counter) => (counter > 0 ? counter - 1 : 0));
	};
	const test = useCallback(() => {
		onChange && onChange(counter);
	}, [onChange, counter]);

	useEffect(test, [counter, test]);

	return (
		<div className="cart-counter-container">
			<img
				onClick={_decrease}
				className="btn btn-minus"
				src={iconMinus}
				alt="Minus-icon"
			></img>
			<p className="counter-text">{counter}</p>
			<img
				onClick={_increase}
				className="btn btn-minus"
				src={iconPlus}
				alt="Minus-plus"
			></img>
		</div>
	);
}

export default CartCounter;
