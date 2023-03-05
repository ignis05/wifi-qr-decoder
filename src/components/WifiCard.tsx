import React from 'react'
import Card from 'react-bootstrap/Card'
import Wifi from '../models/Wifi.model'

function WifiCard(props: { wifi: Wifi }) {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>Wifi password decoded!</Card.Title>
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
