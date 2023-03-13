import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WifiCard from './WifiCard'
import Wifi from '../models/Wifi.model'

test('displays error when invalid data is passed', () => {
	render(<WifiCard wifi={new Wifi('')} />)
	const title = screen.getByText(/no wifi data/i)
	expect(title).toBeInTheDocument()
})

test('displays ssid from qrCode', () => {
	render(<WifiCard wifi={new Wifi('WIFI:T:WPA;S:this_is_ssid;P:this_is_password;H:false;w')} />)
	const ssid = screen.getByText(/this_is_ssid/i)
	expect(ssid).toBeInTheDocument()
})

test('displays passwd from qrCode', () => {
	render(<WifiCard wifi={new Wifi('WIFI:T:WPA;S:this_is_ssid;P:this_is_password;H:false;w')} />)
	const passwd = screen.getByText(/this_is_password/i)
	expect(passwd).toBeInTheDocument()
})

test('doesnt render close button if no onClose is passed', () => {
	const { queryByRole } = render(<WifiCard wifi={new Wifi('WIFI:T:WPA;S:this_is_ssid;P:this_is_password;H:false;w')} />)
	const closeButton = queryByRole('button')
	expect(closeButton).toBeNull()
})

test('activates onClose when closed', () => {
	const closeFn = jest.fn()
	const { getByRole } = render(<WifiCard wifi={new Wifi('WIFI:T:WPA;S:this_is_ssid;P:this_is_password;H:false;w')} onClose={closeFn} />)

	userEvent.click(getByRole('button'))

	expect(closeFn).toHaveBeenCalledTimes(1)
})
