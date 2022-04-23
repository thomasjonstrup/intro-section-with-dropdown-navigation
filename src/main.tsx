import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './scss/main.scss';
import App from './App';

const container = document.getElementById('root');

if (container) {
	const root = createRoot(container);

	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}
