import React from 'react'
import Header from '../components/Header'

function Home() {
	return (
		<div className="d-flex flex-column gap-5">
			<Header />
			<div className="px-3">
				<h1>Wifi QR-code decoder</h1>
				<p>
					Android won't let you view saved wifi password.
					<br />
					But it lets you share it with QR-code, that can easily be decoded.
				</p>
			</div>
		</div>
	)
}

export default Home
