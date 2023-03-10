import React, { ChangeEvent } from 'react'
import Form from 'react-bootstrap/Form'

function FileInput(props: { onFile: Function }) {
	const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files?.length) props.onFile(event.target.files[0])
	}

	return <Form.Control type="file" onChange={handleFileInput} />
}

export default FileInput
