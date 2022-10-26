import React, { useEffect, useState } from "react";
import "./styles.scss";
import { Button } from "../../component/atoms";
import {
	CartCounter,
	DesktopCarousel,
	ImageCarousel,
} from "../../component/molecules";
import { iconCartWhite } from "../../assets/images";

function ProductPage({ getItemCount }) {
	const [count, setCount] = useState(0);
	let btnLeftIcon = (
		<img src={iconCartWhite} height={15} style={{ marginRight: 10 }} />
	);
	useEffect(() => {}, [count]);
	const _onSubmit = () => {
		getItemCount && getItemCount(count);
	};

	const [dimensions, setDimensions] = React.useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});
	React.useEffect(() => {
		function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}

		window.addEventListener("resize", handleResize);

		return (_) => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const isMobile = dimensions.width <= 768;
	const imageCarousel = isMobile ? <ImageCarousel /> : <DesktopCarousel />;
	return (
		<div className="product-page-container">
			{imageCarousel}
			<div className="content">
				<span className="company">Sneaker Company</span>
				<h1 className="title">Fall Limited Edition Sneakers</h1>
				<p className="description">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they'll withstand everything
					the weather can offer.
				</p>
				<div className="price-tag">
					<div className="discount-price">
						<h2 className="price">$125.00</h2>
						<span>50%</span>
					</div>
					<h3 className="real-price">$250.00</h3>
				</div>
				<div className="flex cart-action">
					<CartCounter onChange={setCount} />
					<Button onClick={_onSubmit} lefticon={btnLeftIcon}>
						Add to cart
					</Button>
				</div>
			</div>
		</div>
	);
}
function getWindowSize() {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
}
export default ProductPage;
