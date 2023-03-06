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

	return (
		<div className="d-flex flex-column gap-5">
			<Header />
			<FileInput onFile={handleFile} />
			{wifi.isValid && <WifiCard wifi={wifi} />}
		</div>
	)
}

export default ImageLoader
