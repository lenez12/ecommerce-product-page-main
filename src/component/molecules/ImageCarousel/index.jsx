import React, { useState } from "react";
import {
	iconNext,
	iconPrevious,
	imgProduct1,
	imgProduct2,
	imgProduct3,
	imgProduct4,
} from "../../../assets/images";
import "./styles.scss";

function ImageCarousel() {
	const [imageIndex, setImageIndex] = useState(0);
	const productImages = [
		{
			id: 1,
			image: imgProduct1,
			name: "product-1",
		},
		{ id: 2, image: imgProduct2, name: "product-2" },
		{ id: 3, image: imgProduct3, name: "product-3" },
		{ id: 4, image: imgProduct4, name: "product-4" },
	];
	const __nextImage = () => {
		if (imageIndex < productImages.length - 1) {
			setImageIndex((imageIndex) => imageIndex + 1);
		} else return;
	};

	const __prevImage = () => {
		if (productImages.length - 1 > 0 && imageIndex > 0) {
			setImageIndex((imageIndex) => imageIndex - 1);
		} else return;
	};

	const __onClickPage = (item) => {
		setImageIndex(item);
	};

	return (
		<div className="carousel">
			<img
				onClick={__prevImage}
				src={iconPrevious}
				alt=""
				className={`icon left`}
			/>
			<div
				className="inner"
				style={{ transform: `translateX(-${imageIndex}00%)` }}
			>
				{productImages.map((item) => {
					return (
						<img
							key={item.id.toString()}
							src={item.image}
							alt={item.name}
							className={`product-images`}
						/>
					);
				})}
			</div>
			<img
				onClick={__nextImage}
				src={iconNext}
				alt=""
				className={`icon right `}
			/>
			<div className="image-page-container">
				{productImages.map((_, index) => {
					let isActive = index == imageIndex ? "active" : "";
					return (
						<div
							key={_.id.toString()}
							onClick={() => __onClickPage(index)}
							className={`image-page ${isActive}`}
						></div>
					);
				})}
			</div>
		</div>
	);
}

export default ImageCarousel;
