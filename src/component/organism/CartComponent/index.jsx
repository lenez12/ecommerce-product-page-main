import React, { useEffect, useRef, useState } from "react";
import { iconCart } from "../../../assets/images";
import { Button, OutsideClick } from "../../atoms";
import CartItem from "../../molecules/CartItem";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

function CartComponent({ data, setItemCount }) {
	const [toggle, setToggle] = useState(false);
	const [className, setClassName] = useState("");
	const _toggleCart = () => {
		setToggle(!toggle);
	};

	useEffect(() => {
		if (toggle) {
			setClassName("active");
		} else {
			setClassName("");
		}
	}, [toggle]);

	const isEmptyClass = !data ? "empty" : "";

	return (
		<OutsideClick onClick={() => setToggle(false)}>
			<div onClick={_toggleCart} className="cart-image">
				<img src={iconCart} alt="cart-image" />
				{data && (
					<span className="count-badge bounce-in-top">{data.count}</span>
				)}
			</div>
			<div className={`cart  ${className}`}>
				<div className="cart-title">
					<h3>Cart</h3>
				</div>
				<div className={`cart-content ${isEmptyClass}`}>
					{!data ? (
						<p className="empty">Your cart is empty</p>
					) : (
						<CartItem data={data} setItemCount={setItemCount} />
					)}
				</div>
				{data && (
					<div className="cart-action">
						<Button>Checkout</Button>
					</div>
				)}
			</div>
		</OutsideClick>
	);
}

export default CartComponent;
