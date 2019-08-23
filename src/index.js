import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

renderWithHotReload(App)

function renderWithHotReload(App) {
	ReactDOM.render(
		<AppContainer>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppContainer>,
		document.getElementById('root')
	)
}

if (module.hot) {
	// alert(1)
	module.hot.accept("./App.js", () => {
		const Router = require("./App.js").default;
		renderWithHotReload(Router);
	});
}
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
