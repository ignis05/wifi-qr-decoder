import React from 'react'
import Card from 'react-bootstrap/Card'
import Wifi from '../models/Wifi.model'
import CloseButton from 'react-bootstrap/CloseButton'

function WifiCard(props: { wifi: Wifi }) {
	return (
		<Card style={{ width: '18rem' }} border="success">
			<Card.Header className="d-flex justify-content-between">
				Success! <CloseButton />
			</Card.Header>
			<Card.Body>
				<Card.Title>Wifi password decoded:</Card.Title>
				<Card.Text>
					SSID: <code>{props.wifi.ssid}</code>
					<br />
					Password: <code>{props.wifi.password}</code>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default WifiCard
