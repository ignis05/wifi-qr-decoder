import React from 'react'
import './App.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { MdCameraAlt, MdImage } from 'react-icons/md'

function App() {
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
					<Button variant="outline-primary" size="lg">
						<MdCameraAlt size={30} /> Decode from camera
					</Button>
				</Col>
				<Col>
					<Button variant="outline-primary" size="lg">
						<MdImage size={30} /> Decode from image
					</Button>
				</Col>
			</Row>
		</Container>
	)
}

export default App
