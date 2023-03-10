import React, { useState } from 'react'
import FileInput from '../components/FileInput'
import Header from '../components/Header'
import QrScanner from 'qr-scanner'
import WifiCard from '../components/WifiCard'

import Wifi from '../models/Wifi.model'

function ImageLoader() {
	const [wifi, setWifi] = useState(new Wifi(''))

	const handleFile = async (file: File) => {
		let result = await QrScanner.scanImage(file, { returnDetailedScanResult: true }).catch((error) =>
			console.log(error || 'No QR code found.')
		)
		if (!result) return
		let newWifi = new Wifi(result.data)
		if (newWifi.isValid) setWifi(newWifi)
	}

	const handleWifiCardClose = () => {
		setWifi(new Wifi(''))
	}

	return (
		<div className="d-flex flex-column gap-2">
			<Header />
			<div className="px-3">
				<FileInput onFile={handleFile} />
				<div className="mt-5"></div>
				{wifi.isValid && <WifiCard wifi={wifi} onClose={handleWifiCardClose} />}
			</div>
		</div>
	)
}

export default ImageLoader
