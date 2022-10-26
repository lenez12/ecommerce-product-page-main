import React from "react";
import "./styles.scss";

function Button(props) {
	return (
		<button onClick={props.onClick} {...props} style={props.style}>
			{props.lefticon}
			{props.children}
		</button>
	);
}

export default Button;
