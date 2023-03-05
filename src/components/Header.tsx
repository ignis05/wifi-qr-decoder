import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { MdHome, MdCameraAlt, MdImage } from 'react-icons/md'

function Header() {
	const navigate = useNavigate()

	const handleSelect = (eventKey: string | null) => {
		if (eventKey) navigate(eventKey)
	}

	return (
		<Nav onSelect={handleSelect} variant="pills" defaultActiveKey="/">
			<Nav.Item>
				<Nav.Link eventKey="/">
					<MdHome /> Home
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="/img">
					<MdImage /> From Image
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="/cam">
					<MdCameraAlt /> From Camera
				</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Header
