import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import { MdHome, MdCameraAlt, MdImage } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

function Header() {
	const navigate = useNavigate()
	const location = useLocation()

	const handleSelect = (eventKey: string | null) => {
		if (eventKey) navigate(eventKey)
	}

	return (
		<Nav onSelect={handleSelect} variant="pills" defaultActiveKey={`${location.pathname}`}>
			<Nav.Item>
				<Nav.Link eventKey={`${process.env.REACT_APP_HOME_PAGE}/`}>
					<MdHome />
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey={`${process.env.REACT_APP_HOME_PAGE}/img`}>
					<MdImage /> From Image
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey={`${process.env.REACT_APP_HOME_PAGE}/cam`}>
					<MdCameraAlt /> From Camera
				</Nav.Link>
			</Nav.Item>
		</Nav>
	)
}

export default Header
