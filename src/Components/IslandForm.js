import { useState } from "react";

export default function IslandForm({ island, incVisitors }) {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const confirmBooking = () => {
		const confirmed = window.confirm(
			`Are you sure you want to book to ${island.name} with the name: ${name}, and phone: ${phone}`
		);
		if (confirmed) {
			incVisitors(island);
		}
	};

	const changeName = e => setName(e.target.value);
	const changePhone = e => setPhone(e.target.value);
	return (
		<div className='form'>
			<h2>{island.name}</h2>
			<img src={island.img} alt={island.name} />
			<h3>Book a trip to {island.name} island</h3>
			<input placeholder='Type Full Name' onChange={changeName} />
			<input
				placeholder='Type Phone Number'
				type='number'
				onChange={changePhone}
			/>
			<button className='book' onClick={confirmBooking}>
				Book for today!
			</button>
		</div>
	);
}
