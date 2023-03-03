import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../components/Header'

function Home() {
	return (
		<Container>
			<Row>
				<Col>
					<h1>Wifi QR-code decoder</h1>
					<p>
						Android won't let you view saved wifi password.
						<br />
						But it lets you share it with QR-code, that can easily be decoded.
					</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<Header />
				</Col>
			</Row>
		</Container>
	)
}

export default Home
