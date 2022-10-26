import React, { useEffect, useRef } from "react";

function OutsideClick(props) {
	const wrapperRef = useRef(null);
	useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				props.onClick();
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [wrapperRef, props]);

	return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideClick;
