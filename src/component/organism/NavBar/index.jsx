import React, { useEffect, useState } from "react";
import {
	iconLogo,
	imgAvatar,
	iconClose,
	imgProduct1Thumb,
} from "../../../assets/images";
import CartComponent from "../CartComponent";

import "./styles.scss";

function NavBar({ data, setItemCount }) {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [className, setClassName] = useState("");

	const _toggleMenu = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		if (toggleMenu) {
			setClassName("active");
		} else {
			setClassName("");
		}
	}, [toggleMenu]);

	return (
		<>
			<header>
				<nav className="navigation">
					<div className="nav">
						<div className="navigation-menu">
							<div onClick={_toggleMenu} className="toggle-menu"></div>
							<a href="#">
								<img src={iconLogo} alt="logo" className="logo" />
							</a>
							<ul className={`nav-menu ${className}`}>
								<li>
									<img
										onClick={_toggleMenu}
										src={iconClose}
										alt=""
										className="close-icon"
									/>
								</li>
								<li className="menu-item">
									<a href="#collection" className="active">
										Collection
									</a>
								</li>
								<li className="menu-item">
									<a href="#men">Men</a>
								</li>
								<li className="menu-item">
									<a href="#women">Women</a>
								</li>
								<li className="menu-item">
									<a href="#about">About</a>
								</li>
								<li className="menu-item">
									<a href="#contact">Contact</a>
								</li>
							</ul>
							<div
								onClick={_toggleMenu}
								className={`menu-overlay ${className}`}
							></div>
						</div>
						<div className="account-menu">
							<CartComponent
								data={data}
								setItemCount={setItemCount && setItemCount}
							/>
							<img src={imgAvatar} alt="" className="profile" />
						</div>
					</div>
					<div className="underline"></div>
				</nav>
			</header>
		</>
	);
}

export default NavBar;
