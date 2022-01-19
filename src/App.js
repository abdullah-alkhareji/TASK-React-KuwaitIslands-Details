import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import islandsData from "./data/islands";

function App() {
	const [islands, setIslands] = useState(islandsData);

	const [island, setIsland] = useState(islands[0]);

	// const changeIsland = island => setIsland(island);

	const incVisitors = island => {
		island.visitors++;
		setIslands([...islands]);
	};

	return (
		<div>
			<Header />

			<div className='homePage'>
				<IslandList setIsland={setIsland} />
				<IslandForm island={island} incVisitors={incVisitors} />
			</div>
		</div>
	);
}

export default App;
