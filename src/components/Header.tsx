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

	const ensureNoClosingSlash = (uri: string) => {
		if (uri.endsWith('/')) return uri.slice(0, -1)
		return uri
	}

	return (
		<div className="d-flex flex-row" style={{ backgroundColor: 'var(--bs-green)' }}>
			<Nav onSelect={handleSelect} variant="pills" defaultActiveKey={`${ensureNoClosingSlash(location.pathname)}`}>
				<Nav.Item>
					<Nav.Link className='text-white' eventKey={`${process.env.REACT_APP_HOME_PAGE}`}>
						<MdHome size={24} />
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className='text-white' eventKey={`${process.env.REACT_APP_HOME_PAGE}/img`}>
						<MdImage /> From Image
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link className='text-white' eventKey={`${process.env.REACT_APP_HOME_PAGE}/cam`}>
						<MdCameraAlt /> From Camera
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	)
}

export default Header
