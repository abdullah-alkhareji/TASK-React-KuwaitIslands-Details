import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islands from "./data/islands";

function App() {
	const [island, setIsland] = useState(islands[0]);

	const visitors = islands;

	const [counter, setCounter] = useState(island.visitors);
	const incCounter = () => {
		setCounter(counter + 1);
	};

	console.log(island);
	return (
		<div>
			<Header />

			<div className='homePage'>
				<IslandList setIsland={setIsland} counter={counter} />
				<IslandForm island={island} incCounter={incCounter} />
			</div>
		</div>
	);
}

export default App;
