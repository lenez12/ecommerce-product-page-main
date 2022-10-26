import React from "react";
import { iconDelete } from "../../../assets/images";
import "./styles.scss";

const CartItem = ({ data, setItemCount }) => {
	return (
		<div className="container">
			<img src={data.img} alt="thumbnail" className="thumbnail" />
			<div className="item-detail">
				<p className="title">{data.name}</p>
				<p className="price">
					${data.price}.00 x {data.count}{" "}
					<span>${data.price * data.count}.00</span>
				</p>
			</div>
			<img
				src={iconDelete}
				alt="icon-delete"
				onClick={() => setItemCount(0)}
				className="icon-delete"
			/>
		</div>
	);
};

export default CartItem;
