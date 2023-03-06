import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from './routes/Home'
import ImageLoader from './routes/ImageLoader'
import CamLoader from './routes/CamLoader'

const router = createBrowserRouter([
	{
		path: process.env.REACT_APP_HOME_PAGE,
		element: <Home />,
	},
	{
		path: process.env.REACT_APP_HOME_PAGE + '/img',
		element: <ImageLoader />,
	},
	{
		path: process.env.REACT_APP_HOME_PAGE + '/cam',
		element: <CamLoader />,
	},
])

export default router
