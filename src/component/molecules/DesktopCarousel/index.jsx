import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
	iconNext,
	iconPrevious,
	imgProduct1,
	imgProduct1Thumb,
	imgProduct2,
	imgProduct2Thumb,
	imgProduct3,
	imgProduct3Thumb,
	imgProduct4,
	imgProduct4Thumb,
} from "../../../assets/images";
import "./styles.scss";

function DesktopCarousel() {
	const [imageIndex, setImageIndex] = useState(0);
	const [activeLightbox, setActiveLightbox] = useState({
		className: "",
		status: false,
	});
	const productImages = [
		{
			id: 1,
			image: imgProduct1,
			thumbnail: imgProduct1Thumb,
			name: "product-1",
		},
		{
			id: 2,
			image: imgProduct2,
			thumbnail: imgProduct2Thumb,
			name: "product-2",
		},
		{
			id: 3,
			image: imgProduct3,
			thumbnail: imgProduct3Thumb,
			name: "product-3",
		},
		{
			id: 4,
			image: imgProduct4,
			thumbnail: imgProduct4Thumb,
			name: "product-4",
		},
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

	const _toggleLightBox = () => {
		setActiveLightbox({ ...activeLightbox, status: !activeLightbox.status });
	};

	useEffect(() => {
		if (activeLightbox.status) {
			setActiveLightbox({ ...activeLightbox, className: "active" });
		} else setActiveLightbox({ ...activeLightbox, className: "" });
	}, [activeLightbox.status]);

	return (
		<div className="desktop-carousel">
			<div
				className="inner"
				style={{ transform: `translateX(-${imageIndex}00%)` }}
			>
				{productImages.map((item) => {
					return (
						<img
							onClick={_toggleLightBox}
							key={item.id.toString()}
							src={item.image}
							alt={item.name}
							className={`product-images`}
						/>
					);
				})}
			</div>
			<div className="image-page-container">
				{productImages.map((item, index) => {
					let isActive = index == imageIndex ? "active" : "";
					return (
						<img
							key={item.id.toString()}
							src={item.thumbnail}
							onClick={() => __onClickPage(index)}
							className={`image-page ${isActive}`}
						></img>
					);
				})}
			</div>
			<div className={`light-box ${activeLightbox.className}`}>
				<div className="light-box-content">
					<img
						onClick={__prevImage}
						src={iconPrevious}
						alt=""
						className={`icon left`}
					/>
					<div className="desktop-lightbox">
						<FontAwesomeIcon
							icon={faClose}
							onClick={_toggleLightBox}
							size={"2x"}
							className="icon-close"
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
										className={`lightbox-product-images`}
									/>
								);
							})}
						</div>
					</div>
					<img
						onClick={__nextImage}
						src={iconNext}
						alt=""
						className={`icon right `}
					/>
					<div className="image-page-container">
						{productImages.map((item, index) => {
							let isActive = index == imageIndex ? "active" : "";
							return (
								<img
									key={item.id.toString()}
									src={item.thumbnail}
									onClick={() => __onClickPage(index)}
									className={`image-page ${isActive}`}
								></img>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DesktopCarousel;
