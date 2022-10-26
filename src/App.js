import { useMemo, useState } from "react";
import "./App.css";
import { imgProduct1Thumb } from "./assets/images";
import { HeaderHeight } from "./component/atoms";
import NavBar from "./component/organism/NavBar";
import ProductPage from "./container/ProductPage";

function App() {
	const [itemCount, setItemCount] = useState(0);
	const data = useMemo(() => {
		if (itemCount > 0) {
			return {
				id: 1,
				name: "Fall Autum Limited Edition ",
				price: 125,
				count: itemCount,
				img: imgProduct1Thumb,
			};
		}
	}, [itemCount]);

	return (
		<div>
			<NavBar data={data} setItemCount={setItemCount} />
			<HeaderHeight />
			<ProductPage getItemCount={setItemCount} />
		</div>
	);
}

export default App;

