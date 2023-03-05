import React, { ChangeEvent } from 'react'

function FileInput(props: { onFile: Function }) {
	const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files?.length) props.onFile(event.target.files[0])
	}

	return <input onChange={handleFileInput} type="file"></input>
}

export default FileInput
