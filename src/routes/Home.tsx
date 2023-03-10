import styles from './Home.module.scss'
import React from 'react'
import Header from '../components/Header'
import qrcode_img from '../assets/qrcode100.png'
import wificard_img from '../assets/wificard.png'
import { MdArrowForward } from 'react-icons/md'

function Home() {
	return (
		<div className="d-flex flex-column gap-2">
			<Header />
			<div className="px-3">
				<h1>Wifi QR-code decoder</h1>
				<p>
					Android won't let you view saved wifi password.
					<br />
					But it lets you share it with QR-code, that can easily be decoded.
				</p>
				<p>
					<b>Warning:</b> To scan directly from camera, make sure that your browser allows camera access and that you don't have any
					extentions blocking media autoplay.
				</p>
				<div className={styles.imgWrapper}>
					<img src={qrcode_img} alt="example qr-code" />
					<MdArrowForward size={50} />
					<img src={wificard_img} alt="example result" />
				</div>
			</div>
		</div>
	)
}

export default Home
