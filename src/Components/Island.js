import React, { useState } from "react";

export default function Island({ island, setIsland, counter }) {
	const changeIsland = () => setIsland(island);

	return (
		<div className='Island' key={island.id} onClick={changeIsland}>
			<h3>{island.name}</h3>
			{/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
			<p>Visitors {counter}</p>
			<img src={island.img} alt={island.name} />
		</div>
	);
}
