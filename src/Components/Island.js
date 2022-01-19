export default function Island({ island, setIsland }) {
	return (
		<div className='Island' key={island.id} onClick={() => setIsland(island)}>
			<h3>{island.name}</h3>
			{/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
			<p>Visitors {island.visitors}</p>
			<img src={island.img} alt={island.name} />
		</div>
	);
}
