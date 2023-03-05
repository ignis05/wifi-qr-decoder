// represents wifi network data, as raw string read from qr code
class Wifi {
	qrData: string

	constructor(qrData: string) {
		this.qrData = qrData
	}

	// gets network ssid (public name)
	get ssid(): string | null {
		let ssidPart = this.qrData.match(/;S:(.*?);/)?.[1]
		return ssidPart || null
	}

	// gets network password
	get password(): string | null {
		let passwdPart = this.qrData.match(/;P:(.*?);/)?.[1]
		return passwdPart || null
	}

	// checks whether both ssid and password can be extracted from the string
	get isValid(): boolean {
		return !!(this.ssid && this.password)
	}
}

export default Wifi
