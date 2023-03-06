import QrScanner from 'qr-scanner'
import React, { createRef, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { MdCameraswitch } from 'react-icons/md'
import Header from '../components/Header'
import WifiCard from '../components/WifiCard'
import Wifi from '../models/Wifi.model'

function CamLoader() {
	const videoRef = createRef<HTMLVideoElement>()
	// var qrScanner: QrScanner | null = null
	const [qrScanner, setqrScanner] = useState<QrScanner | null>(null)
	// var cameras: QrScanner.Camera[] = []
	const [cameras, setcameras] = useState<QrScanner.Camera[]>([])
	const [activeCamera, setactiveCamera] = useState<QrScanner.Camera | null>(null)
	const [wifi, setWifi] = useState(new Wifi(''))
	const [isScannerActive, setisScannerActive] = useState(false)

	// handles qr scan result
	const onQrDecoded = (result: QrScanner.ScanResult) => {
		let newWifi = new Wifi(result.data)
		if (newWifi.isValid) {
			setWifi(newWifi)
			setisScannerActive(false)
		}
	}

	// creates scanner, or destroys it if already running
	const openCamera = async () => {
		if (isScannerActive) return setisScannerActive(false)
		if (!videoRef.current) return console.error('no video element')

		// start scanner
		setqrScanner(new QrScanner(videoRef.current, onQrDecoded, {}))
		setisScannerActive(true)
	}

	// start scan and fetch cameras after creating scanner
	useEffect(() => {
		if (!isScannerActive) {
			if (!qrScanner) return console.log('scanner null')
			qrScanner.stop()
			qrScanner.destroy()
			setcameras([])
			setactiveCamera(null)
		}

		if (qrScanner && isScannerActive)
			qrScanner.start().then(async () => {
				setcameras(await QrScanner.listCameras(true))
			})
	}, [qrScanner, isScannerActive])

	// set camera after updating cam list
	useEffect(() => {
		setactiveCamera(cameras[0])
	}, [cameras])

	// cycle through available cameras
	const cycleCamera = async () => {
		if (!qrScanner || !activeCamera) return

		let i = cameras.indexOf(activeCamera)
		i = (i + 1) % cameras.length
		setactiveCamera(cameras[i])
		qrScanner.setCamera(cameras[i].id)
	}

	return (
		<>
			<Header />
			<div className="d-flex flex-row">
				<Button onClick={openCamera}>{!isScannerActive ? 'Open Camera' : 'Stop'}</Button>
				{activeCamera && (
					<Button onClick={cycleCamera}>
						<MdCameraswitch /> {`Using cam: ${activeCamera.label}`}
					</Button>
				)}
			</div>
			{wifi.isValid && <WifiCard wifi={wifi} />}
			<video style={{ width: '100%', height: '100%' }} ref={videoRef}></video>
		</>
	)
}

export default CamLoader
