import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CamLoader from './routes/CamLoader'

import Home from './routes/Home'
import ImageLoader from './routes/ImageLoader'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'img',
		element: <ImageLoader />,
	},
	{
		path: 'cam',
		element: <CamLoader />,
	},
])

export default router
